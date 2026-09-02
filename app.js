/* ==========================================================================
   TATLIŞIK FRONTEND LOGIC & DATA
   ========================================================================== */

// 1. DATASETS

// Dessert Products Data
const dessertsData = [
    {
        id: "asiye",
        title: "Asiye",
        category: "cikolatali",
        image: "assets/images/trendyol0015_asiye.jpg",
        video: "videolar/Asiye.mp4",
        categoryName: "Çikolatalı İmza",
        density: 3,
        chocoType: "Sütlü Belçika",
        ingredients: "Özel tarif sütlü sıcak krema, eritilmiş premium Belçika sütlü çikolatası, çıtır krep kırıkları, taze çilek dilimleri ve muz parçaları."
    },
    {
        id: "bihter",
        title: "Bihter",
        category: "cikolatali",
        image: "assets/images/trendyol0002_bihter.jpg",
        video: null,
        categoryName: "Çikolatalı İmza",
        density: 5,
        chocoType: "Bitter Belçika",
        ingredients: "Fırınlanmış kıtır kakaolu taban, yoğun dikey akışlı bitter Belçika çikolatası, kakao çekirdeği parçacıkları ve taze çilek."
    },
    {
        id: "gonulcelen",
        title: "Gönülçelen",
        category: "cikolatali",
        image: "assets/images/trendyol0003_gonulcelen.jpg",
        video: "videolar/gonulcelen.mp4",
        categoryName: "Çikolatalı İmza",
        density: 4,
        chocoType: "Sütlü & Bitter",
        ingredients: "Akışkan sıcak Belçika çikolatası, çilekli kadifemsi mousse dolgusu, tereyağlı bisküvi tabanı ve kavrulmuş fındık parçaları."
    },
    {
        id: "budapeste",
        title: "Budapeşte",
        category: "hamurlu",
        image: "assets/images/trendyol0007_budapeste.jpg",
        video: null,
        categoryName: "Hamurlu & Çıtır",
        density: 2,
        chocoType: "Beyaz & Sütlü",
        ingredients: "Geleneksel beze (mereng) katmanları arasında özel vanilyalı pastacı kreması, taze çilek dilimleri ve üzerine gezdirilen sütlü Belçika çikolatası."
    },
    {
        id: "karpatka",
        title: "Karpatka",
        category: "hamurlu",
        image: "assets/images/trendyol0005_karpatka.jpg",
        video: "videolar/Tatlı3.mp4",
        categoryName: "Hamurlu & Çıtır",
        density: 3,
        chocoType: "Sütlü Belçika",
        ingredients: "Polonya usulü dalgalı çıtır hamur katmanları arasında hafif kuvertür kreması dolgusu ve üzerinden akan sıcak çikolata sosu."
    },
    {
        id: "feride",
        title: "Feride",
        category: "cikolatali",
        image: "assets/images/trendyol0018_feride.jpg",
        video: "videolar/Feride.mp4",
        categoryName: "Çikolatalı İmza",
        density: 4,
        chocoType: "Sütlü Belçika",
        ingredients: "Akışkan Belçika çikolatalı sıcak sufle kek, üzerinde özel soğuk krema dolgusu ve taze çilek dilimleri."
    },
    {
        id: "nazende",
        title: "Nazende",
        category: "cikolatali",
        image: "assets/images/trendyol0005_nazende.jpg",
        video: "videolar/Nazende.mp4",
        categoryName: "Çikolatalı İmza",
        density: 3,
        chocoType: "Sütlü Belçika",
        ingredients: "Dikey olarak sunulan kat kat tereyağlı çıtır milföy katmanları arasında hafif vanilyalı krema ve bol sıcak çikolata sosu."
    },
    {
        id: "san_sebastian",
        title: "Çikolatalı San Sebastian",
        category: "pasta",
        image: "assets/images/trendyol0014_san_sebastian_cikolatali.jpg",
        video: "videolar/cikolatali-sansebastian.mp4",
        categoryName: "Pasta & Cheesecake",
        density: 4,
        chocoType: "Sütlü Belçika",
        ingredients: "Fırınlanmış İspanyol usulü akışkan merkezli cheesecake, üzerine servis esnasında cömertçe dökülen sıcak Belçika çikolatası."
    },
    {
        id: "cheesecake",
        title: "Nutellalı New York Cheesecake",
        category: "pasta",
        image: "assets/images/trendyol0013_nutellali_new_york_cheesecake.jpg",
        video: null,
        categoryName: "Pasta & Cheesecake",
        density: 4,
        chocoType: "Nutella & Kakao",
        ingredients: "Yulaf bisküvili taban üzerinde fırınlanmış yoğun New York peynir kreması ve kalın bir akışkan Nutella katmanı."
    },
    {
        id: "cavbella",
        title: "Çavbella Tiramisu",
        category: "pasta",
        image: "assets/images/trendyol0010_cavbella-tiramusu.jpg",
        video: null,
        categoryName: "Pasta & Cheesecake",
        density: 2,
        chocoType: "Kahve & Kakao",
        ingredients: "Espresso ile ıslatılmış orijinal kedidili bisküvileri, maskarponlu özel kadifemsi tiramisu kreması ve yoğun elenmiş kakao tozu."
    },
    {
        id: "magnolia",
        title: "Magnolia Çilek",
        category: "pasta",
        image: "assets/images/trendyol0000_magnolia-cilek.jpg",
        video: null,
        categoryName: "Klasik Lezzetler",
        density: 2,
        chocoType: "Sade Pastacı Kreması",
        ingredients: "Taze sütlü ev yapımı magnolia pudingi kreması, ufalanmış bebek bisküvisi kırıntıları ve dizilmiş taze çilek dilimleri."
    },
    {
        id: "afitap",
        title: "Afitap Çikolatalı",
        category: "cikolatali",
        image: "assets/images/trendyol0008_afitap-cikolatali.jpg",
        video: null,
        categoryName: "Çikolatalı İmza",
        density: 5,
        chocoType: "Yoğun Çikolata",
        ingredients: "Double çikolatalı ıslak kek, sıcak fudge çikolata sosu, file badem and Antep fıstığı parçaları."
    }
];

// Instagram-style Stories Data
const storiesData = [
    {
        id: "asiye",
        title: "Asiye",
        thumb: "assets/images/trendyol0015_asiye.jpg",
        storyImg: "assets/images/story/0000_asiye_sutlu_belcika_cikolatali-story.jpg",
        video: "videolar/Asiye.mp4",
        productId: "asiye"
    },
    {
        id: "gonulcelen",
        title: "Gönülçelen",
        thumb: "assets/images/trendyol0003_gonulcelen.jpg",
        storyImg: "assets/images/story/0003_gonulcelen-cikolalatali-story.jpg",
        video: "videolar/gonulcelen.mp4",
        productId: "gonulcelen"
    },
    {
        id: "feride",
        title: "Feride",
        thumb: "assets/images/trendyol0018_feride.jpg",
        storyImg: "assets/images/story/0009_feride-story.jpg",
        video: "videolar/Feride.mp4",
        productId: "feride"
    },
    {
        id: "nazende",
        title: "Nazende",
        thumb: "assets/images/trendyol0005_nazende.jpg",
        storyImg: "assets/images/story/0007_nazende-story.jpg",
        video: "videolar/Nazende.mp4",
        productId: "nazende"
    },
    {
        id: "karpatka",
        title: "Karpatka",
        thumb: "assets/images/trendyol0005_karpatka.jpg",
        storyImg: "assets/images/story/0008_karpatka-story.jpg",
        video: "videolar/Tatlı3.mp4",
        productId: "karpatka"
    },
    {
        id: "san_sebastian",
        title: "San Sebastian",
        thumb: "assets/images/trendyol0014_san_sebastian_cikolatali.jpg",
        storyImg: "assets/images/story/0006_cikolatali-san-sebastian-story.jpg",
        video: "videolar/cikolatali-sansebastian.mp4",
        productId: "san_sebastian"
    }
];

// 12 Branches in Istanbul Data
// 10 Branches in Istanbul Data
const branchesData = [
    {
        id: "soganlik",
        name: "Kartal - Soğanlık Yeni",
        shortName: "Kartal",
        address: "Soğanlık Yeni, Atatürk Cd. No:63, Kartal/İstanbul",
        lat: 40.9161,
        lng: 29.1923,
        phone: "0216 451 10 20",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "tuzla-evliya",
        name: "Tuzla - Evliya Çelebi",
        shortName: "Tuzla",
        address: "Evliya Çelebi Mh. Hatboyu Cd. No:33/B, Tuzla/İstanbul",
        lat: 40.8286,
        lng: 29.3032,
        phone: "0216 493 20 30",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "kadikoy-merdivenkoy",
        name: "Kadıköy - Merdivenköy",
        shortName: "Kadıköy",
        address: "Merdivenköy Mh. Merdivenköy Cd. No:47/A, Kadıköy/İstanbul",
        lat: 40.9855,
        lng: 29.0734,
        phone: "0216 565 30 40",
        hours: "11:00 - 23:30",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "pendik-yeni",
        name: "Pendik - Yeni Mahalle",
        shortName: "Pendik",
        address: "Yeni Mahalle Plevne Cd. Misafir Sk. No:4/A, Pendik/İstanbul",
        lat: 40.8845,
        lng: 29.2435,
        phone: "0216 390 40 50",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "pendik-camlik",
        name: "Pendik - Çamlık (Ahenk)",
        shortName: "Çamlık",
        address: "Çamlık Mah. Yahya Kemal Beyatlı Cad. No:14, Pendik/İstanbul",
        lat: 40.9118,
        lng: 29.2785,
        phone: "0216 646 50 60",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "tuzla-aydinli",
        name: "Tuzla - Aydınlı",
        shortName: "Aydınlı",
        address: "Aydınlı Mh. Çayır Sk. No:4, Tuzla/İstanbul",
        lat: 40.8652,
        lng: 29.2942,
        phone: "0216 393 60 70",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "sultanbeyli",
        name: "Sultanbeyli - Hasanpaşa",
        shortName: "Sultanbeyli",
        address: "Hasanpaşa Fatih Bulvarı No:33/A71, Sultanbeyli/İstanbul",
        lat: 40.9634,
        lng: 29.2554,
        phone: "0216 496 70 80",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "maltepe",
        name: "Maltepe - Bağlarbaşı",
        shortName: "Maltepe",
        address: "Bağlarbaşı Mh. İnönü Cd. No:97 A, Maltepe/İstanbul",
        lat: 40.9312,
        lng: 29.1354,
        phone: "0216 383 80 90",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "sancaktepe",
        name: "Sancaktepe - Abdurrahmangazi",
        shortName: "Sancaktepe",
        address: "Abdurrahmangazi Mah. Seymen Sok. No:8/a, Sancaktepe/İstanbul",
        lat: 40.9904,
        lng: 29.2245,
        phone: "0216 561 90 00",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    },
    {
        id: "umraniye",
        name: "Ümraniye - Tatlısu",
        shortName: "Ümraniye",
        address: "Tatlısu Mh. Arif Ay Sk. Saygın Apt No 17/D, Ümraniye/İstanbul",
        lat: 41.0034,
        lng: 29.1384,
        phone: "0216 415 99 99",
        hours: "11:00 - 23:00",
        orderUrl: "https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k"
    }
];


// 2. FRONTEND ENGINE INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    
    // Elements Selection
    const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const mainHeader = document.querySelector(".main-header");
    
    // Mobile navigation toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const isOpen = navMenu.classList.contains("open");
            mobileMenuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars-staggered"></i>';
        });
        
        // Close menu on nav item click
        navMenu.querySelectorAll(".nav-item").forEach(item => {
            item.addEventListener("click", () => {
                navMenu.classList.remove("open");
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
            });
        });
    }

    // Scroll Header Styling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
        
        // Highlight active nav item
        const sections = document.querySelectorAll("section");
        const navItems = document.querySelectorAll(".nav-item");
        
        let currentSectionId = "";
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.clientHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSectionId = sec.getAttribute("id");
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSectionId}` || 
                (currentSectionId === "" && item.getAttribute("href") === "#")) {
                item.classList.add("active");
            }
        });
    });

    // Populate Dynamic Lists
    renderStoriesTrack();
    renderDessertsGrid(dessertsData);
    renderBranchesGrid(branchesData);
    loadFooterConfig();

    // Initialize Event Handlers
    initMenuFilter();
    initBranchSearch();
    initProductModal();
    initStoriesModal();
    initFranchiseForm();
    initHeroSelector();
    initHeroSlideshow();
});

// 3. MEDIA RENDERERS

// Render Stories Row (circle thumbnails)
function renderStoriesTrack() {
    const track = document.getElementById("stories-track");
    if (!track) return;
    
    track.innerHTML = "";
    
    storiesData.forEach((story, idx) => {
        const item = document.createElement("div");
        item.className = "story-item";
        item.dataset.index = idx;
        
        item.innerHTML = `
            <div class="story-ring">
                <div class="story-avatar-container">
                    <img src="${story.thumb}" alt="${story.title}" class="story-avatar-img">
                    <span class="story-play-icon"><i class="fa-solid fa-play"></i></span>
                </div>
            </div>
            <span class="story-name">${story.title}</span>
        `;
        
        track.appendChild(item);
    });
}

// Render Desserts Grid
function renderDessertsGrid(items) {
    const grid = document.getElementById("menu-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    if (items.length === 0) {
        grid.innerHTML = '<div class="no-results">Bu kategoride tatlı bulunamadı.</div>';
        return;
    }
    
    items.forEach(dessert => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.dataset.id = dessert.id;
        
        card.innerHTML = `
            <div class="menu-card-img-wrapper">
                <img src="${dessert.image}" alt="${dessert.title}" class="menu-card-img" loading="lazy">
                <div class="menu-card-overlay">
                    <div class="menu-play-btn"><i class="fa-solid fa-play"></i></div>
                </div>
            </div>
            <div class="menu-card-content">
                <span class="menu-card-category">${dessert.categoryName}</span>
                <h3 class="menu-card-title">${dessert.title}</h3>
                <p class="menu-card-desc">${dessert.ingredients}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Render Branches List
function renderBranchesGrid(branches) {
    const grid = document.getElementById("branches-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    if (branches.length === 0) {
        grid.innerHTML = '<div class="no-results-search" style="grid-column: 1/-1; padding: 30px; text-align: center; color: var(--color-text-muted); font-size: 0.95rem;">Arama kriterlerine uygun şube bulunamadı.</div>';
        return;
    }
    
    branches.forEach(branch => {
        const card = document.createElement("div");
        card.className = "branch-card";
        
        card.innerHTML = `
            <h3>${branch.name} <i class="fa-solid fa-store"></i></h3>
            <ul class="branch-details">
                <li><i class="fa-solid fa-location-dot"></i> <span>${branch.address}</span></li>
                <li><i class="fa-solid fa-clock"></i> <span>Her gün: ${branch.hours}</span></li>
            </ul>
            <div class="branch-order-platforms">
                <span class="platform-title">Online Sipariş:</span>
                <div class="platform-grid">
                    <a href="https://tgoyemek.com/arama?searchQuery=tatl%C4%B1%C5%9F%C4%B1k" target="_blank" class="platform-btn platform-trendyol">
                        <img src="assets/images/logo-trendyol.png" alt="Trendyol Go" class="platform-logo-img">
                    </a>
                    <a href="https://getir.com/yemek/" target="_blank" class="platform-btn platform-getir">
                        <img src="assets/images/logo-getir.svg" alt="Getir" class="platform-logo-img">
                    </a>
                    <a href="https://www.yemeksepeti.com/restaurants?search=tatl%C4%B1%C5%9F%C4%B1k" target="_blank" class="platform-btn platform-yemeksepeti">
                        <img src="assets/images/logo-yemeksepeti.svg" alt="Yemeksepeti" class="platform-logo-img">
                    </a>
                    <a href="https://www.migros.com.tr/yemek" target="_blank" class="platform-btn platform-migros">
                        <img src="assets/images/logo-migros.svg" alt="Migros Yemek" class="platform-logo-img">
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// 4. LEZZET FILTER SYSTEM
function initMenuFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filter = btn.dataset.filter;
            
            // Filtering logic
            let filteredDesserts = [];
            if (filter === "all") {
                filteredDesserts = dessertsData;
            } else if (filter === "cikolatali") {
                filteredDesserts = dessertsData.filter(d => d.category === "cikolatali");
            } else if (filter === "hamurlu") {
                filteredDesserts = dessertsData.filter(d => d.category === "hamurlu");
            } else if (filter === "pasta") {
                filteredDesserts = dessertsData.filter(d => d.category === "pasta");
            }
            
            // Render filtered desserts with scale-in effect
            const grid = document.getElementById("menu-grid");
            grid.style.opacity = 0;
            grid.style.transform = "translateY(10px)";
            grid.style.transition = "0.25s ease";
            
            setTimeout(() => {
                renderDessertsGrid(filteredDesserts);
                initProductModal(); // Re-attach modal listeners to new elements
                grid.style.opacity = 1;
                grid.style.transform = "translateY(0)";
            }, 250);
        });
    });
}

// 5. BRANCH SEARCH SYSTEM
function initBranchSearch() {
    const searchInput = document.getElementById("branch-search");
    if (!searchInput) return;
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim()
            .replace("ı", "i").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o").replace("ç", "c");
            
        const filteredBranches = branchesData.filter(b => {
            const cleanName = b.name.toLowerCase()
                .replace("ı", "i").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o").replace("ç", "c");
            const cleanAddress = b.address.toLowerCase()
                .replace("ı", "i").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o").replace("ç", "c");
                
            return cleanName.includes(query) || cleanAddress.includes(query);
        });
        
        renderBranchesGrid(filteredBranches);
    });
}

// 6. PRODUCT VIDEO POPUP MODAL HANDLER
function initProductModal() {
    const modal = document.getElementById("product-modal");
    if (!modal) return;
    
    const closeBtn = document.getElementById("pm-close");
    const overlay = document.getElementById("pm-overlay");
    const videoEl = document.getElementById("pm-video");
    
    // Content Elements
    const categoryLabel = document.getElementById("pm-category");
    const titleLabel = document.getElementById("pm-title");
    const descriptionLabel = document.getElementById("pm-description");
    const chocoTypeLabel = document.getElementById("pm-choco-type");
    const ingredientsLabel = document.getElementById("pm-ingredients-list");
    
    // Control Buttons
    const muteBtn = document.getElementById("pm-video-mute");
    const playBtn = document.getElementById("pm-video-play");
    
    const menuGrid = document.getElementById("menu-grid");
    if (!menuGrid) return;
    
    // Event delegation on dessert grid cards
    menuGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".menu-card");
        if (!card) return;
        
        const dessertId = card.dataset.id;
        const dessert = dessertsData.find(d => d.id === dessertId);
        if (dessert) {
            openModal(dessert);
        }
    });
    
    function openModal(dessert) {
        // Populate text content
        if (categoryLabel) categoryLabel.textContent = dessert.categoryName || "Çikolatalı İmza";
        if (titleLabel) titleLabel.textContent = dessert.title;
        if (descriptionLabel) {
            descriptionLabel.textContent = `${dessert.title}, el yapımı tariflerimizle hazırlanan çikolata klasiğimizdir.`;
        }
        if (chocoTypeLabel) chocoTypeLabel.textContent = dessert.chocoType || "Belçika Çikolatası";
        if (ingredientsLabel) ingredientsLabel.textContent = dessert.ingredients;
        
        // Populate density bars (chocolate-bar-indicator)
        const densityContainer = modal.querySelector(".chocolate-bar-indicator");
        if (densityContainer) {
            densityContainer.innerHTML = "";
            const densityVal = dessert.density || 3;
            for (let i = 1; i <= 5; i++) {
                const bar = document.createElement("span");
                bar.className = `indicator-bar${i <= densityVal ? " filled" : ""}`;
                densityContainer.appendChild(bar);
            }
        }
        
        // Load and Autoplay Video or Static Image Fallback
        const imageEl = document.getElementById("pm-image");
        const controlsEl = document.getElementById("pm-video-controls");

        if (dessert.video) {
            if (videoEl) {
                videoEl.style.display = "block";
                videoEl.src = dessert.video;
                videoEl.muted = true; // default muted for browser policy safety
                videoEl.currentTime = 0;
                videoEl.load();
                videoEl.play().then(() => {
                    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                }).catch(err => {
                    console.log("Auto-play blocked or failed", err);
                    if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                });
            }
            if (controlsEl) controlsEl.style.display = "flex";
            if (imageEl) imageEl.style.display = "none";
            
            // Set initial control button states
            if (muteBtn) muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            if (videoEl) {
                videoEl.style.display = "none";
                videoEl.src = "";
            }
            if (controlsEl) controlsEl.style.display = "none";
            if (imageEl) {
                imageEl.src = dessert.image;
                imageEl.alt = dessert.title;
                imageEl.style.display = "block";
            }
        }
        
        // Open Modal and prevent body scrolling
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    
    function closeModal() {
        if (videoEl) {
            videoEl.pause();
            videoEl.src = ""; // remove source to stop buffering
        }
        const imageEl = document.getElementById("pm-image");
        if (imageEl) {
            imageEl.src = "";
        }
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
    
    // Close actions
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
    
    // Play/Pause button action
    if (playBtn && videoEl) {
        playBtn.addEventListener("click", () => {
            if (videoEl.paused) {
                videoEl.play();
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            } else {
                videoEl.pause();
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            }
        });
    }
    
    // Mute/Unmute button action
    if (muteBtn && videoEl) {
        muteBtn.addEventListener("click", () => {
            videoEl.muted = !videoEl.muted;
            muteBtn.innerHTML = videoEl.muted ? 
                '<i class="fa-solid fa-volume-xmark"></i>' : 
                '<i class="fa-solid fa-volume-high"></i>';
        });
    }
}

// 7. INSTAGRAM STORY PLAYER SYSTEM
function initStoriesModal() {
    const modal = document.getElementById("story-modal");
    const closeBtn = document.getElementById("story-close");
    const mediaBox = document.getElementById("story-media-box");
    const titleText = document.getElementById("story-current-title");
    const progressContainer = document.getElementById("story-progress-bars");
    
    // Story Controls
    const muteBtn = document.getElementById("story-mute");
    const playBtn = document.getElementById("story-play-pause");
    const prevBtn = document.getElementById("story-prev");
    const nextBtn = document.getElementById("story-next");
    const footerBtn = document.getElementById("story-footer-btn");
    
    let currentStoryIdx = 0;
    let progressTimer = null;
    let storyDuration = 6000; // default 6s for images
    let currentProgress = 0;
    let isPaused = false;
    let isMuted = true;
    let activeVideo = null;
    let lastTime = 0;
    
    // Open Story
    const storyItems = document.querySelectorAll(".story-item");
    storyItems.forEach(item => {
        item.addEventListener("click", () => {
            currentStoryIdx = parseInt(item.dataset.index);
            openStory(currentStoryIdx);
        });
    });
    
    function openStory(idx) {
        currentStoryIdx = idx;
        const story = storiesData[idx];
        if (!story) return;
        
        // Mark as viewed
        const items = document.querySelectorAll(".story-item");
        if (items[idx]) items[idx].classList.add("viewed");
        
        // Open Modal
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        
        loadStoryMedia(story);
    }
    
    function loadStoryMedia(story) {
        // Reset states
        isPaused = false;
        currentProgress = 0;
        if (progressTimer) clearInterval(progressTimer);
        
        titleText.textContent = story.title;
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
        // Create progress bars indicators at top
        progressContainer.innerHTML = "";
        storiesData.forEach((_, sIdx) => {
            const track = document.createElement("div");
            track.className = "story-progress-track";
            
            const fill = document.createElement("div");
            fill.className = "story-progress-fill";
            if (sIdx < currentStoryIdx) fill.style.width = "100%";
            if (sIdx > currentStoryIdx) fill.style.width = "0%";
            
            track.appendChild(fill);
            progressContainer.appendChild(track);
        });
        
        mediaBox.innerHTML = "";
        
        // Show static placeholder cover immediately while video is buffering
        const placeholderImg = document.createElement("img");
        placeholderImg.src = story.storyImg;
        placeholderImg.className = "story-bg-placeholder";
        mediaBox.appendChild(placeholderImg);
        
        // Stories are video heavy
        if (story.video) {
            const video = document.createElement("video");
            video.src = story.video;
            video.autoplay = true;
            video.muted = isMuted;
            video.playsInline = true;
            video.preload = "auto";
            
            mediaBox.appendChild(video);
            activeVideo = video;
            
            // Start progress indicator immediately with fallback duration
            storyDuration = 15000; // 15 seconds fallback
            startProgress(storyDuration);
            
            // Update actual duration as soon as metadata is parsed
            video.addEventListener("loadedmetadata", () => {
                storyDuration = video.duration * 1000;
                // Re-start progress with accurate duration if still on this story
                if (activeVideo === video) {
                    startProgress(storyDuration);
                }
            });
            
            video.addEventListener("ended", () => {
                goNext();
            });
            
            video.addEventListener("error", (e) => {
                console.log("Video failed, fallback to story image cover.", e);
                loadFallbackImage(story.storyImg);
            });
        } else {
            loadFallbackImage(story.storyImg);
        }
    }
    
    function loadFallbackImage(imgUrl) {
        activeVideo = null;
        const img = document.createElement("img");
        img.src = imgUrl;
        mediaBox.appendChild(img);
        
        storyDuration = 6000; // 6s duration
        startProgress(storyDuration);
    }
    
    function startProgress(duration) {
        const fillElements = document.querySelectorAll(".story-progress-fill");
        const activeFill = fillElements[currentStoryIdx];
        if (!activeFill) return;
        
        const startTime = Date.now() - (currentProgress * duration / 100);
        
        if (progressTimer) clearInterval(progressTimer);
        
        progressTimer = setInterval(() => {
            if (isPaused) return;
            
            let elapsed = Date.now() - startTime;
            currentProgress = (elapsed / duration) * 100;
            
            if (activeVideo) {
                // Sync progress directly with video timing to avoid desync
                currentProgress = (activeVideo.currentTime / activeVideo.duration) * 100;
            }
            
            if (currentProgress >= 100) {
                currentProgress = 100;
                activeFill.style.width = "100%";
                clearInterval(progressTimer);
                goNext();
            } else {
                activeFill.style.width = `${currentProgress}%`;
            }
        }, 30);
    }
    
    function goNext() {
        if (currentStoryIdx < storiesData.length - 1) {
            openStory(currentStoryIdx + 1);
        } else {
            closeStoryModal();
        }
    }
    
    function goPrev() {
        if (currentStoryIdx > 0) {
            openStory(currentStoryIdx - 1);
        } else {
            // Restart current story if on the first one
            openStory(0);
        }
    }
    
    function closeStoryModal() {
        if (progressTimer) clearInterval(progressTimer);
        if (activeVideo) {
            activeVideo.pause();
            activeVideo.innerHTML = "";
        }
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
    
    // Close Click
    if (closeBtn) closeBtn.addEventListener("click", closeStoryModal);
    
    // Prev / Next button actions
    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); goPrev(); });
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); goNext(); });
    
    // Swipe/Tap regions on screen
    mediaBox.addEventListener("click", (e) => {
        const rect = mediaBox.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        
        if (clickX < width * 0.35) {
            goPrev(); // Click left third to go back
        } else {
            goNext(); // Click right two thirds to go forward
        }
    });
    
    // Pause / Play toggle
    if (playBtn) {
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isPaused = !isPaused;
            if (isPaused) {
                if (activeVideo) activeVideo.pause();
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            } else {
                if (activeVideo) activeVideo.play();
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }
        });
    }
    
    // Mute / Unmute toggle
    if (muteBtn) {
        muteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isMuted = !isMuted;
            if (activeVideo) activeVideo.muted = isMuted;
            muteBtn.innerHTML = isMuted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
        });
    }
    
    // Swipe Up Action (scroll to menu dessert card)
    if (footerBtn) {
        footerBtn.addEventListener("click", () => {
            const story = storiesData[currentStoryIdx];
            closeStoryModal();
            
            setTimeout(() => {
                const targetCard = document.querySelector(`.menu-card[data-id="${story.productId}"]`);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
                    
                    // Add subtle glow outline flash animation to highlight
                    targetCard.style.outline = "3px solid var(--color-primary)";
                    targetCard.style.borderRadius = "var(--radius-md)";
                    setTimeout(() => {
                        targetCard.style.transition = "outline 0.8s ease";
                        targetCard.style.outline = "3px solid transparent";
                    }, 1500);
                }
            }, 300);
        });
    }
}

// 8. FRANCHISE APPLICATION VALIDATOR
function initFranchiseForm() {
    const form = document.getElementById("franchise-form");
    const container = document.getElementById("franchise-card-container");
    
    if (!form || !container) return;

    // Real Leaflet Map initialization variables
    let shopMapInstance;
    let shopMapMarker;

    function initShopMap() {
        if (shopMapInstance) return; // Prevent double initialization

        const mapContainer = document.getElementById("shop-map");
        if (!mapContainer) return;

        // Istanbul center coordinates: 41.0082, 28.9784
        shopMapInstance = L.map('shop-map').setView([41.0082, 28.9784], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(shopMapInstance);

        const shopLocationInput = document.getElementById("shopLocation");
        const shopCoordinatesInput = document.getElementById("shopCoordinates");

        shopMapInstance.on('click', (e) => {
            const { lat, lng } = e.latlng;
            const coordsStr = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

            if (shopMapMarker) {
                shopMapMarker.setLatLng(e.latlng);
            } else if (typeof L !== 'undefined') {
                shopMapMarker = L.marker(e.latlng).addTo(shopMapInstance);
            }

            if (shopLocationInput) shopLocationInput.value = coordsStr;
            if (shopCoordinatesInput) shopCoordinatesInput.value = coordsStr;
        });
    }

    // Toggle own shop fields
    const hasShopCheckbox = document.getElementById("hasShop");
    const ownShopDetails = document.getElementById("own-shop-details");
    
    if (hasShopCheckbox && ownShopDetails) {
        hasShopCheckbox.addEventListener("change", () => {
            if (hasShopCheckbox.checked) {
                ownShopDetails.style.display = "block";
                if (typeof L !== 'undefined') {
                    initShopMap();
                }
            } else {
                ownShopDetails.style.display = "none";
            }
        });
    }

    // File Upload Display Previews
    const interiorInput = document.getElementById("shopInteriorImg");
    const interiorPreview = document.getElementById("interior-preview");
    const exteriorInput = document.getElementById("shopExteriorImg");
    const exteriorPreview = document.getElementById("exterior-preview");

    if (interiorInput && interiorPreview) {
        interiorInput.addEventListener("change", (e) => {
            const files = e.target.files;
            if (files && files.length > 5) {
                alert("En fazla 5 adet iç mekan fotoğrafı seçebilirsiniz.");
                interiorInput.value = "";
                interiorPreview.textContent = "Hiçbir dosya seçilmedi";
                return;
            }
            if (files && files.length > 0) {
                const names = Array.from(files).map(f => f.name).join(", ");
                interiorPreview.textContent = files.length === 1 ? names : `${files.length} dosya seçildi`;
                interiorInput.parentElement.parentElement.classList.remove("invalid");
            } else {
                interiorPreview.textContent = "Hiçbir dosya seçilmedi";
            }
        });
    }

    if (exteriorInput && exteriorPreview) {
        exteriorInput.addEventListener("change", (e) => {
            const files = e.target.files;
            if (files && files.length > 5) {
                alert("En fazla 5 adet dış cephe fotoğrafı seçebilirsiniz.");
                exteriorInput.value = "";
                exteriorPreview.textContent = "Hiçbir dosya seçilmedi";
                return;
            }
            if (files && files.length > 0) {
                const names = Array.from(files).map(f => f.name).join(", ");
                exteriorPreview.textContent = files.length === 1 ? names : `${files.length} dosya seçildi`;
                exteriorInput.parentElement.parentElement.classList.remove("invalid");
            } else {
                exteriorPreview.textContent = "Hiçbir dosya seçilmedi";
            }
        });
    }
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Input Fields
        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const district = document.getElementById("district");
        const budget = document.getElementById("budget");
        
        let isValid = true;
        
        // Validation logic
        if (fullName.value.trim().length < 3) { fullName.parentElement.classList.add("invalid"); isValid = false; }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) { email.parentElement.classList.add("invalid"); isValid = false; }
        if (phone.value.replace(/\D/g, "").length < 10) { phone.parentElement.classList.add("invalid"); isValid = false; }
        if (district.value === "") { district.parentElement.classList.add("invalid"); isValid = false; }
        if (budget.value === "") { budget.parentElement.classList.add("invalid"); isValid = false; }
        
        if (isValid) {
            const submitBtn = document.getElementById("btn-submit-franchise");
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Gönderiliyor... <i class="fa-solid fa-spinner fa-spin"></i>';
            
            try {
                // Create FormData object
                const formData = new FormData();
                formData.append("fullName", fullName.value.trim());
                formData.append("email", email.value.trim());
                formData.append("phone", phone.value.trim());
                formData.append("district", district.value);
                formData.append("budget", budget.value);
                
                const hasShop = hasShopCheckbox && hasShopCheckbox.checked;
                formData.append("hasShop", hasShop ? "1" : "0");
                
                if (hasShop) {
                    const shopName = document.getElementById("shopName");
                    if (shopName) formData.append("shopName", shopName.value.trim());
                    
                    const shopCoordinatesInput = document.getElementById("shopCoordinates");
                    const shopLocationVal = document.getElementById("shopLocation");
                    if (shopCoordinatesInput && shopCoordinatesInput.value) {
                        formData.append("shopLocation", shopCoordinatesInput.value);
                    } else if (shopLocationVal) {
                        formData.append("shopLocation", shopLocationVal.value.trim());
                    }
                    
                    const shopAddress = document.getElementById("shopAddress");
                    if (shopAddress) formData.append("shopAddress", shopAddress.value.trim());
                    
                    // Compress and attach interior images
                    const interiorUpload = document.getElementById("shopInteriorImg");
                    if (interiorUpload && interiorUpload.files) {
                        for (let i = 0; i < interiorUpload.files.length; i++) {
                            const compressed = await compressImageFile(interiorUpload.files[i]);
                            formData.append("shopInteriorImg", compressed);
                        }
                    }
                    
                    // Compress and attach exterior images
                    const exteriorUpload = document.getElementById("shopExteriorImg");
                    if (exteriorUpload && exteriorUpload.files) {
                        for (let i = 0; i < exteriorUpload.files.length; i++) {
                            const compressed = await compressImageFile(exteriorUpload.files[i]);
                            formData.append("shopExteriorImg", compressed);
                        }
                    }
                }
                
                const experienceCheckbox = document.getElementById("experience");
                formData.append("experience", experienceCheckbox && experienceCheckbox.checked ? "1" : "0");
                
                const message = document.getElementById("message");
                if (message) formData.append("message", message.value.trim());

                // Endpoint is /api/franchise (also rewritten from /franchise.php)
                const response = await fetch("/api/franchise", {
                    method: "POST",
                    body: formData
                });

                if (!response.ok) {
                    throw new Error("Sunucu hatası.");
                }
                
                const data = await response.json();
                
                // Success content
                container.innerHTML = `
                    <div class="form-success-container">
                        <div class="success-icon"><i class="fa-solid fa-check"></i></div>
                        <h3>Başvurunuz Alındı!</h3>
                        <p>Değerli iş ortağımız <strong>${fullName.value.trim()}</strong>,</p>
                        <p style="margin-top: 10px; color: rgba(44, 21, 12, 0.7); font-size: 0.9rem;">
                            Franchise başvurunuz, dükkan detaylarınız ve fotoğraflarınız başarıyla veritabanımıza kaydedilmiştir. Bilgileriniz yöneticilerimize e-posta olarak iletilmiştir. Portföy yöneticilerimiz en geç 48 saat içinde sizinle iletişime geçecektir.
                        </p>
                        <p style="margin-top: 15px; color: var(--color-primary); font-weight: 600; font-size: 0.85rem;">
                            TATLIŞIK Ailesine gösterdiğiniz ilgi için teşekkür ederiz.
                        </p>
                    </div>
                `;
            } catch (error) {
                console.error("Error submitting form:", error);
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Başvuruyu Gönder <i class="fa-solid fa-paper-plane"></i>';
                alert("Başvurunuz gönderilirken bir hata oluştu. Lütfen mail sunucusu ayarlarınızı kontrol edip tekrar deneyin.");
            }
        }
    });
}

// 9. HERO INTERACTIVE VIDEO SELECTOR
function initHeroSelector() {
    // Disable hero video selector logic since tabs are removed
}

// 10. HERO BACKGROUND SLIDESHOW ROTATION WITH LAZY SINGLE VIDEO LOADING
function initHeroSlideshow() {
    const slides = document.querySelectorAll(".hero-slide");
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const slideInterval = 7000; // change slide every 7 seconds to let videos play nicely
    
    // Function to load and play a video in a slide
    function loadAndPlayVideo(slide) {
        const video = slide.querySelector("video");
        if (!video) return;
        
        if (!video.src && slide.dataset.video) {
            video.src = slide.dataset.video;
            video.preload = "auto";
            video.load();
            
            // Add event listener to fade in the video only when it plays
            video.addEventListener("playing", () => {
                video.classList.add("playing");
            }, { once: true });
        }
        
        video.muted = true;
        video.currentTime = 0;
        video.play().catch(err => {
            console.log("Hero video autoplay blocked or error:", err);
        });
    }
    
    // Function to pause and unload video to free memory
    function stopAndUnloadVideo(slide) {
        const video = slide.querySelector("video");
        if (!video) return;
        
        video.pause();
        video.classList.remove("playing");
        video.removeAttribute("src"); // Stop download streams immediately
        video.load();
    }
    
    // Load and play the first video initially
    loadAndPlayVideo(slides[currentSlide]);
    
    // Start slideshow rotation
    setInterval(() => {
        // Stop current video
        stopAndUnloadVideo(slides[currentSlide]);
        slides[currentSlide].classList.remove("active");
        
        // Go to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Play next video
        slides[currentSlide].classList.add("active");
        loadAndPlayVideo(slides[currentSlide]);
    }, slideInterval);
}

// Fetch public footer address & phone configurations and update UI
function loadFooterConfig() {
    fetch('franchise.php?action=config')
        .then(response => {
            if (!response.ok) throw new Error("HTTP error " + response.status);
            return response.json();
        })
        .then(data => {
            const addressLi = document.getElementById("footer-address-li");
            const addressText = document.getElementById("footer-address-text");
            if (addressLi && addressText) {
                if (data.FOOTER_ADDRESS && data.FOOTER_ADDRESS.trim() !== "") {
                    addressText.textContent = data.FOOTER_ADDRESS;
                    addressLi.style.display = "";
                } else {
                    addressLi.style.display = "none";
                }
            }
            
            const phoneLi = document.getElementById("footer-phone-li");
            const phoneText = document.getElementById("footer-phone-text");
            if (phoneLi && phoneText) {
                if (data.FOOTER_PHONE && data.FOOTER_PHONE.trim() !== "") {
                    phoneText.textContent = data.FOOTER_PHONE;
                    phoneLi.style.display = "";
                } else {
                    phoneLi.style.display = "none";
                }
            }
        })
        .catch(err => {
            console.warn("Could not fetch footer config:", err);
            // Default to hiding them on error or local file open
            const addressLi = document.getElementById("footer-address-li");
            if (addressLi) addressLi.style.display = "none";
            const phoneLi = document.getElementById("footer-phone-li");
            if (phoneLi) phoneLi.style.display = "none";
        });
}
