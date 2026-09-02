const Busboy = require('busboy');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Helper to load config from Environment Variables with config.json fallback
function getConfig() {
  let config = {
    SMTP_SERVER: process.env.SMTP_SERVER || "smtp.gmail.com",
    SMTP_PORT: parseInt(process.env.SMTP_PORT || "587"),
    SENDER_EMAIL: process.env.SENDER_EMAIL || "",
    SENDER_PASSWORD: process.env.SENDER_PASSWORD || "",
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL || "",
    FOOTER_ADDRESS: process.env.FOOTER_ADDRESS || "",
    FOOTER_PHONE: process.env.FOOTER_PHONE || ""
  };

  try {
    const configPath = path.join(process.cwd(), 'config.json');
    if (fs.existsSync(configPath)) {
      const fileData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      // Only override if env var wasn't explicitly supplied
      for (const [key, value] of Object.entries(fileData)) {
        if (!process.env[key] && value) {
          config[key] = value;
        }
      }
    }
  } catch (err) {
    console.error("Error reading config.json fallback:", err);
  }

  return config;
}

// Disable Next.js / Vercel default body parser to allow Busboy streaming multipart/form-data
module.exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const appConfig = getConfig();

  // GET: Return public footer config
  if (req.method === 'GET') {
    return res.status(200).json({
      FOOTER_ADDRESS: appConfig.FOOTER_ADDRESS || "",
      FOOTER_PHONE: appConfig.FOOTER_PHONE || ""
    });
  }

  // POST: Handle Franchise Form Submission
  if (req.method === 'POST') {
    try {
      const fields = {};
      const attachments = [];

      await new Promise((resolve, reject) => {
        const busboy = Busboy({ 
          headers: req.headers,
          limits: { fileSize: 10 * 1024 * 1024 } // 10MB per file
        });

        busboy.on('field', (fieldname, val) => {
          fields[fieldname] = val;
        });

        busboy.on('file', (fieldname, fileStream, fileInfo) => {
          const { filename, mimeType } = fileInfo;
          if (!filename) {
            fileStream.resume();
            return;
          }

          const chunks = [];
          fileStream.on('data', (chunk) => {
            chunks.push(chunk);
          });

          fileStream.on('end', () => {
            const buffer = Buffer.concat(chunks);
            if (buffer.length > 0) {
              const cleanName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
              attachments.push({
                filename: `basvuru_${fields.phone || 'tel'}_${cleanName}`,
                content: buffer,
                contentType: mimeType
              });
            }
          });
        });

        busboy.on('finish', resolve);
        busboy.on('error', reject);

        req.pipe(busboy);
      });

      // Prepare HTML email content
      const fullName = fields.fullName || 'İsimsiz Aday';
      const email = fields.email || '-';
      const phone = fields.phone || '-';
      const district = fields.district || '-';
      const budget = fields.budget || '-';
      const hasShop = fields.hasShop === 'true' || fields.hasShop === 'on' || fields.hasShop === '1';
      const shopName = fields.shopName || '-';
      const shopLocation = fields.shopLocation || '-';
      const shopAddress = fields.shopAddress || '-';
      const experience = fields.experience === 'true' || fields.experience === 'on' || fields.experience === '1';
      const message = fields.message || '';

      const hasShopTxt = hasShop ? 'Evet (Dükkan Detayları Aşağıdadır)' : 'Hayır';
      const expTxt = experience ? 'Evet' : 'Hayır';

      let gmapsBtn = '';
      if (hasShop && shopLocation && shopLocation !== '-') {
        gmapsBtn = `<p style="margin-top: 15px;"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopLocation)}" target="_blank" style="background-color:#28cac5; color:white; padding:10px 18px; text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">Google Haritalar'da Görün</a></p>`;
      }

      let shopSection = '';
      if (hasShop) {
        shopSection = `
          <h3 style="margin-top: 25px; color: #ff9eb6; border-bottom: 1px solid #e2d6c5; padding-bottom: 5px;">Aday Dükkan Bilgileri</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr><th style="padding: 8px; border-bottom: 1px solid #eee; text-align: left; background:#fdfaf6; width: 35%;">Dükkan / Tabela Adı</th><td style="padding: 8px; border-bottom: 1px solid #eee;">${shopName}</td></tr>
            <tr><th style="padding: 8px; border-bottom: 1px solid #eee; text-align: left; background:#fdfaf6;">Dükkan Konumu</th><td style="padding: 8px; border-bottom: 1px solid #eee;">${shopLocation}</td></tr>
            <tr><th style="padding: 8px; border-bottom: 1px solid #eee; text-align: left; background:#fdfaf6;">Dükkan Adresi</th><td style="padding: 8px; border-bottom: 1px solid #eee;">${shopAddress}</td></tr>
          </table>
          ${gmapsBtn}
        `;
      }

      let msgSection = '';
      if (message) {
        msgSection = `
          <h3 style="margin-top: 25px; color: #2c150c; border-bottom: 1px solid #e2d6c5; padding-bottom: 5px;">Aday Notları / Mesaj</h3>
          <p style="background-color:#fdfaf6; padding:12px; border-left:4px solid #28cac5; font-style:italic; margin-top: 10px;">${message}</p>
        `;
      }

      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; color: #2c150c; background-color: #fcf8f2; margin: 0; padding: 20px; }
            .container { padding: 25px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2d6c5; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            h2 { color: #28cac5; border-bottom: 2px solid #28cac5; padding-bottom: 10px; margin-top: 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { padding: 10px; border-bottom: 1px solid #e2d6c5; text-align: left; }
            th { background-color: #fdfaf6; font-weight: bold; width: 35%; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Yeni Franchise Başvurusu</h2>
            <p><strong>TATLIŞIK</strong> web sitesinden yeni bir franchise başvurusu alındı. Başvuru detayları aşağıdadır:</p>
            <table>
              <tr><th>Ad Soyad</th><td>${fullName}</td></tr>
              <tr><th>E-posta</th><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><th>Telefon</th><td><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><th>Hedef İlçe</th><td>${district}</td></tr>
              <tr><th>Yatırım Bütçesi</th><td>${budget}</td></tr>
              <tr><th>Sektör Tecrübesi</th><td>${expTxt}</td></tr>
              <tr><th>Dükkan Durumu</th><td>${hasShopTxt}</td></tr>
            </table>
            ${shopSection}
            ${msgSection}
            <p style="margin-top: 25px; font-size: 11px; color: #a49187; border-top: 1px solid #e2d6c5; padding-top: 15px; text-align: center;">
              Bu e-posta TATLIŞIK Franchise Başvuru Sistemi tarafından otomatik olarak iletilmiştir. Ekli dosyalar (${attachments.length} adet) e-postaya iliştirilmiştir.
            </p>
          </div>
        </body>
        </html>
      `;

      // Setup Nodemailer Transporter
      const transporter = nodemailer.createTransport({
        host: appConfig.SMTP_SERVER || "smtp.gmail.com",
        port: parseInt(appConfig.SMTP_PORT || "587"),
        secure: parseInt(appConfig.SMTP_PORT) === 465,
        auth: {
          user: appConfig.SENDER_EMAIL,
          pass: appConfig.SENDER_PASSWORD,
        },
      });

      // Send mail
      await transporter.sendMail({
        from: `"TATLIŞIK Franchise" <${appConfig.SENDER_EMAIL}>`,
        to: appConfig.RECEIVER_EMAIL,
        replyTo: email,
        subject: `Yeni Franchise Başvurusu - ${fullName}`,
        html: emailHtml,
        attachments: attachments
      });

      return res.status(200).json({ status: 'success', message: 'Application received successfully.' });
    } catch (error) {
      console.error('Error handling franchise submission:', error);
      return res.status(500).json({ status: 'error', message: error.message || 'Mail sending failed.' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};
