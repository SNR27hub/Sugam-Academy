// NEW: Firebase v9 Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVUxriXyp3G8yD0jzEe9XKK6SJ_XxlHsE",
    authDomain: "sugam-academy-a7124.firebaseapp.com",
    databaseURL: "https://sugam-academy-a7124-default-rtdb.firebaseio.com",
    projectId: "sugam-academy-a7124",
    storageBucket: "sugam-academy-a7124.firebasestorage.app",
    messagingSenderId: "430035332953",
    appId: "1:430035332953:web:90223938842f92be0c2648",
    measurementId: "G-LPKSHXNMZ3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// DOM Elements
const loginRegisterBtn = document.getElementById('loginRegisterBtn');
const userAuthenticatedControls = document.querySelector('.user-authenticated-controls');
const notificationBell = document.getElementById('notificationBell');
const notificationCount = document.getElementById('notificationCount');
const authModal = document.getElementById('authModal');
const showLoginTab = document.getElementById('showLoginTab');
const showRegisterTab = document.getElementById('showRegisterTab');
const loginFormContainer = document.getElementById('loginFormContainer');
const registerFormContainer = document.getElementById('registerFormContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPassword = document.getElementById('forgotPassword');
const premiumModal = document.getElementById('premiumModal');
const videoBuyModal = document.getElementById('videoBuyModal');
const quizModal = document.getElementById('quizModal');
const contentDisplayModal = document.getElementById('contentDisplayModal');
const contentDisplayModalTitle = document.getElementById('contentDisplayModalTitle');
const contentIframeWrapper = contentDisplayModal.querySelector('.content-iframe-wrapper');
const myFavoritesModal = document.getElementById('myFavoritesModal');
const favoritesContentGrid = document.getElementById('favoritesContentGrid');
const myPurchasesModal = document.getElementById('myPurchasesModal');
const purchasesTableBody = document.getElementById('purchasesTableBody');
const closeModalButtons = document.querySelectorAll('.close-modal');
const teachersContainer = document.getElementById('teachersContainer');
const videoContentGrid = document.getElementById('videoContentGrid');
const notesContentGrid = document.getElementById('notesContentGrid');
const quizContentGrid = document.getElementById('quizContentGrid');
const categorySelector = document.getElementById('categorySelector');
const tabLinks = document.querySelectorAll('.tab-link');
const contentTabs = document.querySelector('.content-tabs');
const UTRNumberInput = document.getElementById('UTRNumber');
const displayPremiumAmount = document.getElementById('displayPremiumAmount');
const buyModalTitle = document.getElementById('buyModalTitle');
const itemPriceToBuy = document.getElementById('itemPriceToBuy');
const itemUTRNumber = document.getElementById('itemUTRNumber');
const bannerSlider = document.getElementById('bannerSlider');
const bannerSliderContainer = document.getElementById('bannerSliderContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentBannerButtonWrapper = document.getElementById('currentBannerButtonWrapper');
const heroDynamicBg = document.getElementById('heroDynamicBg');
const profileMenuToggleBtn = document.getElementById('profileMenuToggleBtn');
const profileDropdownMenu = document.getElementById('profileDropdownMenu');
const dropdownUserName = document.getElementById('dropdownUserName');
const dropdownPremiumStatus = document.getElementById('dropdownPremiumStatus');
const dropdownNotificationCount = document.getElementById('dropdownNotificationCount');
const dropdownGoPremiumBtn = document.getElementById('dropdownGoPremiumBtn');
const dropdownLogoutBtn = document.getElementById('dropdownLogoutBtn');
const myPurchasesLink = document.getElementById('myPurchasesLink');
const myFavoritesLink = document.getElementById('myFavoritesLink');
const getVerifiedBadgeLink = document.getElementById('getVerifiedBadgeLink');
const viewNotificationsLink = document.getElementById('viewNotificationsLink');
const dropdownVerifiedBadge = document.getElementById('dropdownVerifiedBadge');
const userNotificationBar = document.getElementById('userNotificationBar');
const userNotificationCount = document.getElementById('userNotificationCount');
const userNotificationName = document.getElementById('userNotificationName');
const footerAboutUsText = document.getElementById('footerAboutUsText');
const footerSugamEmail = document.getElementById('footerSugamEmail');
const footerDeveloperEmail = document.getElementById('footerDeveloperEmail');
const footerYoutubeLink = document.getElementById('footerYoutubeLink');
const footerInstagramLink = document.getElementById('footerInstagramLink');
const footerFacebookLink = document.getElementById('footerFacebookLink');
const footerTwitterLink = document.getElementById('footerTwitterLink');
const quizModalTitle = document.getElementById('quizModalTitle');
const quizQuestionText = document.getElementById('quizQuestionText');
const quizOptions = document.getElementById('quizOptions');
const submitQuizAnswerBtn = document.getElementById('submitQuizAnswerBtn');
const quizFeedback = document.getElementById('quizFeedback');
const closeQuizFeedbackBtn = document.getElementById('closeQuizFeedbackBtn');
const topScorerBanner = document.getElementById('topScorerBanner');
const instagramPopupModal = document.getElementById('instagramPopupModal');
const chatFab = document.getElementById('chatFab');
const chatWidget = document.getElementById('chatWidget');
const closeChatWidget = document.getElementById('closeChatWidget');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');
const chatInputForm = document.getElementById('chatInputForm');
const chatMessageInput = document.getElementById('chatMessageInput');
const notificationToastContainer = document.getElementById('notificationToastContainer');
const shareButton = document.getElementById('shareButton');
const maintenanceMode = document.getElementById('maintenanceMode');
const toolsGrid = document.getElementById('toolsGrid');
const toolsSectionTitle = document.getElementById('toolsSectionTitle');
const searchInput = document.getElementById('searchInput');

// Global State
let currentVideoToBuy = {};
let currentPaymentType = '';
let currentQuizData = null;
let currentQuizId = null;
let currentUserView = '+2';
let currentBannerIndex = 0;
let bannerInterval;
let popupAutoCloseTimer;
let userNotificationBarInterval;
const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';
let allContentData = []; // Cache for search functionality

// --- Core App Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Check for Maintenance Mode FIRST
    const settingsSnap = await db.ref('settings').once('value');
    const settings = settingsSnap.val() || {};
    if (settings.maintenanceMode) {
        maintenanceMode.style.display = 'flex';
        // Stop further execution
        return;
    }

    // 2. Initialize UI if not in maintenance
    auth.onAuthStateChanged(user => {
        if (user && user.email === 'sugamacadamy@gmail.com') {
            // If admin is logged in on user page, redirect them
            alert("Admin detected. Redirecting to the admin panel.");
            window.location.href = 'admin.html';
        } else if (user) {
            db.ref('users/' + user.uid).on('value', snap => {
                const userData = snap.val();
                updateUI(userData);
            });
        } else {
            updateUI(null);
        }
    });

    // 3. Initial loads for all users
    loadBanners();
    loadTeachers();
    loadTools();
    loadTopScorer();
    loadDynamicUserDisplay();
    renderFooter();
    setTimeout(showInstagramPopup, 2000);
});


// --- UI Update and User State Management ---
function updateUI(userData) {
    if (userData) { // Logged-in user
        loginRegisterBtn.style.display = 'none';
        userAuthenticatedControls.style.display = 'flex';
        profileDropdownMenu.style.display = 'none';

        dropdownUserName.textContent = userData.name;
        dropdownPremiumStatus.textContent = userData.premium ? 'Premium User' : 'Free User';
        dropdownGoPremiumBtn.style.display = userData.premium ? 'none' : 'block';
        dropdownVerifiedBadge.style.display = userData.isVerified ? 'inline-block' : 'none';

        currentUserView = userData.currentView || '+2';
        categorySelector.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === currentUserView);
        });

        requestNotificationPermission();
        loadNotificationsCount();
        loadContent(true, userData.premium, userData.purchasedVideos || {}, userData.favorites || {}, currentUserView);
        chatFab.style.display = 'flex';
        initializeUserChat();
    } else { // Logged-out user
        loginRegisterBtn.style.display = 'flex';
        userAuthenticatedControls.style.display = 'none';
        profileDropdownMenu.style.display = 'none';

        currentUserView = '+2';
        categorySelector.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === currentUserView);
        });

        loadContent(false, false, {}, {}, currentUserView);
        chatFab.style.display = 'none';
        chatWidget.style.display = 'none';
    }
}

// --- Authentication ---
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            authModal.style.display = 'none';
            loginForm.reset();
        })
        .catch((error) => alert(error.message));
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.ref('users/' + user.uid).set({
                name: name,
                email: email,
                premium: false,
                isVerified: false,
                joined: Date.now(),
                purchasedVideos: {},
                favorites: {},
                currentView: '+2'
            });
            authModal.style.display = 'none';
            registerForm.reset();
        })
        .catch((error) => alert(error.message));
});

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Please enter your email address:');
    if (email) {
        auth.sendPasswordResetEmail(email)
            .then(() => alert('Password reset email sent!'))
            .catch((error) => alert(error.message));
    }
});


// --- Dynamic Content Loading (Banners, Tools, Content, Teachers) ---

function loadBanners() {
    db.ref('banners').on('value', snapshot => {
        bannerSlider.innerHTML = '';
        currentBannerButtonWrapper.innerHTML = '';
        const banners = [];
        snapshot.forEach(child => {
            const banner = child.val();
            const startDate = banner.startDate ? new Date(banner.startDate) : null;
            const endDate = banner.endDate ? new Date(banner.endDate) : null;
            const today = new Date();
            if ((!startDate || today >= startDate) && (!endDate || today <= endDate)) {
                banners.push(banner);
            }
        });

        if (banners.length > 0) {
            bannerSliderContainer.style.display = 'block';
            banners.forEach(banner => {
                const slide = document.createElement('div');
                slide.className = 'banner-slide';
                slide.innerHTML = `<img src="${banner.imageUrl}" alt="${banner.title || 'Banner Image'}">`;
                bannerSlider.appendChild(slide);
            });
            initBannerSlider(banners);
        } else {
            bannerSliderContainer.style.display = 'none';
            currentBannerButtonWrapper.style.display = 'none';
            heroDynamicBg.style.backgroundImage = 'none';
        }
    });
}

function initBannerSlider(banners) {
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;

    let isDragging = false, startPos = 0, currentTranslate = 0, prevTranslate = 0, animationID;
    
    const initialImageUrl = banners[0]?.imageUrl;
    document.documentElement.style.setProperty('--initial-bg-image', initialImageUrl ? `url('${initialImageUrl}')` : 'none');

    const updateSliderAndButton = () => {
        const offset = -currentBannerIndex * 100;
        bannerSlider.style.transition = 'transform 0.5s ease-out';
        bannerSlider.style.transform = `translateX(${offset}%)`;
        prevTranslate = offset;
        heroDynamicBg.style.backgroundImage = `url('${banners[currentBannerIndex].imageUrl}')`;

        const currentBanner = banners[currentBannerIndex];
        currentBannerButtonWrapper.innerHTML = '';
        if (currentBanner?.buttonText && currentBanner?.buttonUrl) {
            const buttonHtml = `<a href="${currentBanner.buttonUrl}" target="_blank" class="btn btn-primary">${currentBanner.buttonText}</a>`;
            currentBannerButtonWrapper.innerHTML = buttonHtml;
            currentBannerButtonWrapper.style.display = 'block';
        } else {
            currentBannerButtonWrapper.style.display = 'none';
        }
        resetAutoSlide();
    };

    const nextSlide = () => {
        currentBannerIndex = (currentBannerIndex + 1) % slides.length;
        updateSliderAndButton();
    };
    
    const startAutoSlide = () => { if (slides.length > 1) bannerInterval = setInterval(nextSlide, 5000); };
    const resetAutoSlide = () => { clearInterval(bannerInterval); startAutoSlide(); };

    function dragStart(event) { isDragging = true; startPos = getPositionX(event); bannerSlider.style.transition = 'none'; animationID = requestAnimationFrame(animation); bannerSlider.classList.add('grabbing'); clearInterval(bannerInterval); }
    function dragMove(event) { if (isDragging) { const currentPosition = getPositionX(event); const sliderWidth = bannerSlider.clientWidth; currentTranslate = prevTranslate + ((currentPosition - startPos) / sliderWidth) * 100; } }
    function dragEnd() { if (!isDragging) return; isDragging = false; cancelAnimationFrame(animationID); bannerSlider.classList.remove('grabbing'); const movedBy = currentTranslate - prevTranslate; if (movedBy < -10 && currentBannerIndex < slides.length - 1) currentBannerIndex++; if (movedBy > 10 && currentBannerIndex > 0) currentBannerIndex--; updateSliderAndButton(); }
    function animation() { bannerSlider.style.transform = `translateX(${currentTranslate}%)`; if (isDragging) requestAnimationFrame(animation); }
    function getPositionX(event) { return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX; }

    slides.forEach((slide) => {
        const slideImg = slide.querySelector('img');
        if (slideImg) slideImg.addEventListener('dragstart', (e) => e.preventDefault());
        slide.addEventListener('touchstart', dragStart); slide.addEventListener('touchend', dragEnd); slide.addEventListener('touchmove', dragMove);
        slide.addEventListener('mousedown', dragStart); slide.addEventListener('mouseup', dragEnd); slide.addEventListener('mouseleave', dragEnd); slide.addEventListener('mousemove', dragMove);
    });

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', () => { currentBannerIndex = (currentBannerIndex - 1 + slides.length) % slides.length; updateSliderAndButton(); });

    currentBannerIndex = 0;
    updateSliderAndButton();
}

function loadTools() {
    db.ref('tools').on('value', snapshot => {
        toolsGrid.innerHTML = '';
        const toolsData = snapshot.val();
        if (toolsData && toolsData.items) {
            toolsSectionTitle.textContent = toolsData.title || 'Student Tools';
            Object.values(toolsData.items).forEach(tool => {
                const toolCard = document.createElement('a');
                toolCard.href = tool.link;
                toolCard.target = '_blank';
                toolCard.rel = 'noopener noreferrer';
                toolCard.className = 'tool-card';

                const imageHtml = tool.imageUrl 
                    ? `<img src="${tool.imageUrl}" alt="${tool.name}">` 
                    : `<span class="tool-icon-fallback"><i class="fas fa-link"></i></span>`;
                
                toolCard.innerHTML = `${imageHtml}<h3>${tool.name}</h3>`;
                toolsGrid.appendChild(toolCard);
            });
        } else {
            toolsSectionTitle.textContent = 'Student Tools';
            toolsGrid.innerHTML = '<p class="text-center" style="grid-column: 1 / -1;">No tools have been added yet.</p>';
        }
    });
}

function loadContent(isLoggedIn, isPremium, purchasedVideos = {}, favorites = {}, category) {
    document.getElementById('content').style.display = 'block';
    const contentRef = db.ref('content');
    contentRef.orderByChild('category').equalTo(category).on('value', snapshot => {
        allContentData = []; // Clear cache before reload
        if (snapshot.exists()) {
            snapshot.forEach(child => {
                allContentData.push({ id: child.key, ...child.val() });
            });
        }
        renderContent(allContentData, isLoggedIn, isPremium, purchasedVideos, favorites);
    });
}

function renderContent(contentArray, isLoggedIn, isPremium, purchasedVideos, favorites) {
    videoContentGrid.innerHTML = '';
    notesContentGrid.innerHTML = '';
    quizContentGrid.innerHTML = '';
    
    const videoFragment = document.createDocumentFragment();
    const notesFragment = document.createDocumentFragment();
    const quizFragment = document.createDocumentFragment();
    
    let hasVideos = false, hasNotes = false, hasQuizzes = false;

    contentArray.forEach(content => {
        const card = createContentCard(content, content.id, isLoggedIn, isPremium, purchasedVideos, favorites);
        if (content.type === 'video') {
            videoFragment.appendChild(card);
            hasVideos = true;
        } else if (content.type === 'note') {
            notesFragment.appendChild(card);
            hasNotes = true;
        } else if (content.type === 'quiz') {
            quizFragment.appendChild(card);
            hasQuizzes = true;
        }
    });

    const noContentMsg = `<p class="text-center" style="grid-column: 1 / -1;">No content found. Check back soon!</p>`;
    
    videoContentGrid.appendChild(hasVideos ? videoFragment : document.createRange().createContextualFragment(noContentMsg));
    notesContentGrid.appendChild(hasNotes ? notesFragment : document.createRange().createContextualFragment(noContentMsg));
    quizContentGrid.appendChild(hasQuizzes ? quizFragment : document.createRange().createContextualFragment(noContentMsg));
}

function createContentCard(content, contentId, isLoggedIn, isPremium, purchasedVideos, favorites) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.dataset.title = content.title.toLowerCase();

    let actionButton = '', badge = '', favoriteButton = '';

    if (isLoggedIn) {
        const isFavorited = favorites && favorites[contentId];
        favoriteButton = `<button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${contentId}')"><i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i></button>`;
    }
    
    let iconClass = 'fas fa-question';
    if (content.type === 'video') iconClass = 'fas fa-video';
    else if (content.type === 'note') iconClass = 'fas fa-file-pdf';
    
    // Thumbnail Logic
    const thumbStyle = content.thumbnailUrl ? `style="background-image: url('${content.thumbnailUrl}');"` : '';
    const thumbContent = content.thumbnailUrl ? '' : `<i class="${iconClass}"></i>`;

    if (content.access === 'free') {
        actionButton = createActionButton(content, contentId);
    } else if (content.access === 'premium') {
        badge = `<span class="premium-badge">Premium</span>`;
        if (isLoggedIn && isPremium) actionButton = createActionButton(content, contentId);
        else if (isLoggedIn && !isPremium) actionButton = `<button class="btn btn-primary" onclick="openPremiumModal()">Go Premium</button>`;
        else actionButton = `<button class="btn btn-primary" onclick="openLoginRegisterModal('login')">Login to View</button>`;
    } else if (content.access === 'buy') {
        badge = `<span class="premium-badge">Buy (₹${content.price || 0})</span>`;
        if (isLoggedIn && purchasedVideos && purchasedVideos[contentId]) actionButton = createActionButton(content, contentId);
        else if (isLoggedIn) actionButton = `<button class="btn btn-primary" onclick="openBuyModal('video', '${content.title}', '${content.price || 0}', '${contentId}')">Buy Now</button>`;
        else actionButton = `<button class="btn btn-primary" onclick="openLoginRegisterModal('login')">Login to Buy</button>`;
    }

    card.innerHTML = `
        <div class="content-thumb" ${thumbStyle}>${thumbContent}</div>
        <div class="content-info">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h3 style="margin-right: 1rem;">${content.title || 'N/A'} ${badge}</h3>
                ${favoriteButton}
            </div>
            ${actionButton}
        </div>`;
    return card;
}

function createActionButton(content, contentId) {
    if (content.type === 'quiz') {
        if (content.question) return `<button class="btn btn-primary" onclick="openQuizModal('${contentId}')">Start Quiz</button>`;
        if (content.url) return `<button class="btn btn-primary" onclick="openContentDisplayModal('${content.url}', 'quiz', '${content.title || "Quiz"}')">View Quiz</button>`;
        return `<button class="btn btn-outline" disabled>No Quiz Content</button>`;
    } else {
        return `<button class="btn btn-primary" onclick="openContentDisplayModal('${content.url}', '${content.type}', '${content.title || "Content"}')">${content.type === 'video' ? 'Watch Now' : 'View Note'}</button>`;
    }
}


function loadTeachers() {
    db.ref('teachers').on('value', snapshot => {
        teachersContainer.innerHTML = '';
        if (!snapshot.exists()) {
            teachersContainer.innerHTML = '<p class="text-center">No teachers added yet.</p>';
            return;
        }
        snapshot.forEach(child => {
            const teacher = child.val();
            const photos = teacher.photoUrls ? teacher.photoUrls.split(',').map(url => url.trim()).filter(url => url) : [];
            const teacherCard = document.createElement('div');
            teacherCard.className = 'teacher-card';
            let imageSliderHtml = photos.length > 0
                ? `<div class="teacher-image-slider" data-current="0">${photos.map((url, index) => `<div class="slide ${index === 0 ? 'active' : ''}"><img src="${url}" alt="${teacher.name}"></div>`).join('')}</div>`
                : `<i class="fas fa-user" style="font-size: 5rem;"></i>`;
            teacherCard.innerHTML = `
                <div class="teacher-img">${imageSliderHtml}</div>
                <div class="teacher-info">
                    <h3>${teacher.name} ${teacher.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</h3>
                    <p>${teacher.subject}</p>
                    <p>${teacher.experience}</p>
                </div>
            `;
            // Image slider interval logic remains the same
            let intervalId = null;
            if (photos.length > 1) {
                teacherCard.addEventListener('mouseenter', () => {
                    intervalId = setInterval(() => {
                        const slider = teacherCard.querySelector('.teacher-image-slider');
                        const slides = slider.querySelectorAll('.slide');
                        let current = parseInt(slider.dataset.current, 10);
                        slides[current].classList.remove('active');
                        current = (current + 1) % slides.length;
                        slides[current].classList.add('active');
                        slider.dataset.current = current;
                    }, 3000);
                });
                teacherCard.addEventListener('mouseleave', () => { clearInterval(intervalId); });
            }
            teachersContainer.appendChild(teacherCard);
        });
    });
}


// --- Modal and Interaction Logic ---

// Event listeners for opening/closing modals and UI elements
profileMenuToggleBtn.addEventListener('click', (e) => { e.stopPropagation(); profileDropdownMenu.style.display = profileDropdownMenu.style.display === 'block' ? 'none' : 'block'; });
document.addEventListener('click', (e) => { if (profileDropdownMenu.style.display === 'block' && !profileDropdownMenu.contains(e.target) && !profileMenuToggleBtn.contains(e.target)) { profileDropdownMenu.style.display = 'none'; } });
loginRegisterBtn.addEventListener('click', () => { authModal.style.display = 'flex'; showLoginTab.click(); });
dropdownGoPremiumBtn.addEventListener('click', () => { profileDropdownMenu.style.display = 'none'; openPremiumModal(); });
dropdownLogoutBtn.addEventListener('click', () => auth.signOut());
myPurchasesLink.addEventListener('click', (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; openMyPurchasesModal(); });
myFavoritesLink.addEventListener('click', (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; openMyFavoritesModal(); });
getVerifiedBadgeLink.addEventListener('click', async (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; const settings = (await db.ref('settings').once('value')).val(); const badgePrice = settings?.adminVerifyBadgePrice || 100; openBuyModal('verifyBadge', 'Get Verified Badge', badgePrice); });
viewNotificationsLink.addEventListener('click', (e) => { e.preventDefault(); alert('Notifications section coming soon!'); profileDropdownMenu.style.display = 'none'; });
closeModalButtons.forEach(button => { button.addEventListener('click', () => button.closest('.modal').style.display = 'none'); });
showLoginTab.addEventListener('click', () => { showLoginTab.classList.add('active'); showRegisterTab.classList.remove('active'); loginFormContainer.style.display = 'block'; registerFormContainer.style.display = 'none'; });
showRegisterTab.addEventListener('click', () => { showRegisterTab.classList.add('active'); showLoginTab.classList.remove('active'); registerFormContainer.style.display = 'block'; loginFormContainer.style.display = 'none'; });
categorySelector.addEventListener('click', (e) => { if (e.target.tagName === 'BUTTON') { const selectedCategory = e.target.dataset.category; if (selectedCategory === currentUserView) return; categorySelector.querySelectorAll('button').forEach(btn => btn.classList.remove('active')); e.target.classList.add('active'); currentUserView = selectedCategory; const user = auth.currentUser; if (user) { db.ref('users/' + user.uid).once('value').then(snap => { const userData = snap.val() || {}; loadContent(true, userData.premium, userData.purchasedVideos, userData.favorites, currentUserView); db.ref('users/' + user.uid).update({ currentView: currentUserView }); }); } else { loadContent(false, false, {}, {}, currentUserView); } } });
tabLinks.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const tab = link.getAttribute('data-tab'); document.getElementById('content').style.display = 'block'; contentTabs.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active')); contentTabs.querySelector(`.tab-link[data-tab="${tab}"]`).classList.add('active'); document.querySelectorAll('#content .content-section').forEach(s => s.style.display = 'none'); document.getElementById(tab).style.display = 'block'; document.getElementById('content').scrollIntoView({ behavior: 'smooth' }); }); });


function openBuyModal(type, title, price, contentId = null) {
    currentPaymentType = type;
    buyModalTitle.textContent = `${type === 'video' ? 'Buy Video: ' : 'Purchase: '}${title}`;
    itemPriceToBuy.textContent = price;
    currentVideoToBuy = { id: contentId, title, price };
    videoBuyModal.style.display = 'flex';
}

function openPremiumModal() {
    premiumModal.style.display = 'flex';
    db.ref('plans').once('value').then(snap => {
        const plans = snap.val();
        const defaultPlanKey = plans ? Object.keys(plans)[0] : null;
        displayPremiumAmount.textContent = (plans && defaultPlanKey) ? plans[defaultPlanKey].price : '100';
    });
}

function openContentDisplayModal(url, type, title) {
    if (!url) {
        contentDisplayModalTitle.textContent = title;
        contentIframeWrapper.innerHTML = `<div class="fallback-content"><h4>Content Not Available</h4><p>The link for this content is missing.</p></div>`;
        contentDisplayModal.style.display = 'flex';
        return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Show a helpful message in the modal instead of a blank screen
    contentDisplayModalTitle.textContent = title;
    contentIframeWrapper.innerHTML = `
        <div class="fallback-content" style="padding: 2rem; text-align: center;">
            <h4>Content Opened in a New Tab</h4>
            <p>To ensure the best experience, we've opened this content for you in a new browser tab.</p>
            <p style="margin-top: 1rem;">If the new tab didn't open, please click the button below.</p>
            <button class="btn btn-primary" style="margin-top: 1rem;" onclick="window.open('${url}', '_blank', 'noopener,noreferrer')">Open Content</button>
        </div>
    `;
    contentDisplayModal.style.display = 'flex';
}

async function openQuizModal(quizId) {
    const quizSnap = await db.ref('content/' + quizId).once('value');
    currentQuizData = quizSnap.val(); currentQuizId = quizId;
    if (!currentQuizData || !currentQuizData.question) return alert('Quiz not configured.');
    quizQuestionContainer.style.display = 'block'; quizFeedback.style.display = 'none';
    submitQuizAnswerBtn.style.display = 'block'; closeQuizFeedbackBtn.style.display = 'none';
    quizModalTitle.textContent = currentQuizData.title || 'Quiz';
    quizQuestionText.textContent = currentQuizData.question;
    quizOptions.innerHTML = '';
    currentQuizData.options.forEach(option => {
        quizOptions.innerHTML += `<label class="quiz-option"><input type="radio" name="quizOption" value="${option}">${option}</label>`;
    });
    quizModal.style.display = 'flex';
}

submitQuizAnswerBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (!selectedOption) return alert('Please select an answer!');
    quizQuestionContainer.style.display = 'none'; quizFeedback.style.display = 'block';
    submitQuizAnswerBtn.style.display = 'none'; closeQuizFeedbackBtn.style.display = 'block';
    if (selectedOption.value === currentQuizData.correctAnswer) {
        quizFeedback.className = 'quiz-feedback correct';
        quizFeedback.innerHTML = 'Congratulations! Correct!';
        const user = auth.currentUser;
        if(user) db.ref(`users/${user.uid}/name`).once('value').then(nameSnap => {
            db.ref('topScorer').set({ userName: nameSnap.val() || 'Anonymous', quizTitle: currentQuizData.title || 'a quiz' });
        });
    } else {
        quizFeedback.className = 'quiz-feedback incorrect';
        quizFeedback.innerHTML = `Incorrect. Correct answer: <strong>${currentQuizData.correctAnswer}</strong>.`;
    }
});
closeQuizFeedbackBtn.addEventListener('click', () => quizModal.style.display = 'none');

// --- User-Specific Features (Favorites, Purchases, Payments) ---
function toggleFavorite(contentId) {
    const user = auth.currentUser;
    if (!user) return alert('Please log in to manage favorites.');
    const favoriteRef = db.ref(`users/${user.uid}/favorites/${contentId}`);
    favoriteRef.once('value', snapshot => {
        if (snapshot.exists()) favoriteRef.remove();
        else favoriteRef.set(true);
    });
}

function submitPaymentDetails(paymentType) {
    const user = auth.currentUser;
    if (!user) return alert('Please login to submit your payment details.');
    
    let amount, utrNumber, contentId = null, title;
    
    if (paymentType === 'premium') {
        amount = displayPremiumAmount.textContent;
        utrNumber = UTRNumberInput.value;
        title = 'Premium Subscription';
    } else if (paymentType === 'video') {
        amount = itemPriceToBuy.textContent;
        utrNumber = itemUTRNumber.value;
        contentId = currentVideoToBuy.id;
        title = currentVideoToBuy.title;
    } else if (paymentType === 'verifyBadge') {
        amount = itemPriceToBuy.textContent;
        utrNumber = itemUTRNumber.value;
        title = 'Verified Badge';
    }

    if (!utrNumber || !/^\d{12}$/.test(utrNumber)) {
        alert('Please enter a valid 12-digit UTR number.');
        return;
    }
    
    db.ref('payments').push({
        utr: utrNumber,
        amount: parseFloat(amount),
        status: 'pending',
        type: paymentType,
        contentId: contentId,
        title: title,
        date: firebase.database.ServerValue.TIMESTAMP,
        userId: user.uid
    }).then(() => {
        alert('Payment details submitted! Your request will be processed after verification.');
        premiumModal.style.display = 'none';
        videoBuyModal.style.display = 'none';
        UTRNumberInput.value = '';
        itemUTRNumber.value = '';
    }).catch(error => alert('Error submitting payment: ' + error.message));
}

function openMyPurchasesModal() {
    const user = auth.currentUser; if (!user) return;
    db.ref('payments').orderByChild('userId').equalTo(user.uid).on('value', snapshot => {
        purchasesTableBody.innerHTML = ''; if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const p = child.val(); const row = document.createElement('tr');
            row.innerHTML = `<td>${p.title||p.type}</td><td>₹${p.amount}</td><td>${new Date(p.date).toLocaleDateString()}</td><td><span class="status-badge status-${p.status}">${p.status}</span></td>`;
            purchasesTableBody.prepend(row);
        });
    });
    myPurchasesModal.style.display = 'flex';
}

async function openMyFavoritesModal() {
    const user = auth.currentUser; if (!user) return;
    favoritesContentGrid.innerHTML = '<p>Loading...</p>'; myFavoritesModal.style.display = 'flex';
    const userSnap = await db.ref(`users/${user.uid}`).once('value');
    const userData = userSnap.val(); const favorites = userData.favorites || {};
    const favoriteIds = Object.keys(favorites);
    if (favoriteIds.length === 0) { favoritesContentGrid.innerHTML = '<p>No favorites yet.</p>'; return; }
    const favoriteSnaps = await Promise.all(favoriteIds.map(id => db.ref(`content/${id}`).once('value')));
    favoritesContentGrid.innerHTML = '';
    favoriteSnaps.forEach(snap => {
        if (snap.exists()) favoritesContentGrid.appendChild(createContentCard(snap.val(), snap.key, true, userData.premium, userData.purchasedVideos, userData.favorites));
    });
}

// --- Notifications ---
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
}

function showBrowserNotification(title, message, imageUrl) {
    if (!('Notification' in window) || Notification.permission !== 'granted') {
        return; // Notifications not supported or permission not granted
    }
    const options = {
        body: message,
        icon: imageUrl || 'https://i.postimg.cc/c1YKPWds/1757931606961.jpg' // A default icon
    };
    new Notification(title, options);
}

function loadNotificationsCount() {
    const notificationsRef = db.ref('notifications');
    // For bell icon count
    notificationsRef.on('value', snap => {
        const count = snap.numChildren();
        notificationCount.textContent = count;
        dropdownNotificationCount.textContent = count;
        notificationBell.style.display = (count > 0 && auth.currentUser) ? 'flex' : 'none';
    });

    // For new notification pop-ups
    let isInitialLoad = true;
    notificationsRef.orderByChild('date').startAt(Date.now()).on('child_added', snap => {
        if (isInitialLoad) return; // Don't show popups for old notifications on page load
        const notif = snap.val();
        showBrowserNotification(notif.title, notif.message, notif.imageUrl);
        // Also show the toast for in-app feedback
        showToastNotification(notif);
    });
    // After initial data is loaded, set isInitialLoad to false
    notificationsRef.once('value', () => { isInitialLoad = false; });
}

function showToastNotification(notification) {
     const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.id = toastId;
    let iconHtml = notification.imageUrl ? `<img src="${notification.imageUrl}" alt="${notification.title}">` : `<div class="toast-icon"><i class="fas fa-info-circle"></i></div>`;
    toast.innerHTML = `${iconHtml}<div class="notification-toast-content"><h4>${notification.title}</h4><p>${notification.message}</p></div><button class="toast-close-btn" onclick="document.getElementById('${toastId}').remove()">&times;</button>`;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 10000);
}


// --- Chat Functionality ---
chatFab.addEventListener('click', () => { chatWidget.style.display = chatWidget.style.display === 'flex' ? 'none' : 'flex'; });
closeChatWidget.addEventListener('click', () => { chatWidget.style.display = 'none'; });
function initializeUserChat() {
    const user = auth.currentUser; if (!user) return;
    db.ref(`chats/${user.uid}/messages`).orderByChild('timestamp').on('value', snapshot => {
        chatMessagesContainer.innerHTML = '';
        if (snapshot.exists()) snapshot.forEach(child => renderChatMessage(child.val().sender, child.val().text, child.val().timestamp));
        else chatMessagesContainer.innerHTML = '<p class="text-center" style="padding: 1rem;">Start a conversation!</p>';
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    });
}
chatInputForm.addEventListener('submit', (e) => {
    e.preventDefault(); const user = auth.currentUser; const text = chatMessageInput.value.trim(); if (!user || !text) return;
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    db.ref(`chats/${user.uid}/messages`).push({ sender: 'user', text, timestamp });
    db.ref(`users/${user.uid}/name`).once('value').then(snap => {
        db.ref(`chats/${user.uid}/meta`).update({ lastMessage: text, lastTimestamp: timestamp, userName: snap.val() || user.email, hasUnreadAdminMessage: true });
    });
    chatMessageInput.value = '';
});
function renderChatMessage(sender, text, timestamp) {
    const msgEl = document.createElement('div'); msgEl.className = `chat-message ${sender}`;
    msgEl.innerHTML = `<div>${text}</div><div class="chat-message-time">${new Date(timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>`;
    chatMessagesContainer.appendChild(msgEl);
}

// --- Utility and Miscellaneous Functions ---
async function renderFooter() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    footerAboutUsText.textContent = settings.aboutUsText || 'Your premier destination for online learning. We provide top-quality educational content to help students succeed.';
    footerSugamEmail.textContent = settings.contact?.sugamEmail || 'contact@sugamacademy.com';
    footerDeveloperEmail.textContent = settings.contact?.developerEmail || 'developer@snr.com';
    const updateLink = (el, url) => { el.style.display = url ? 'inline-block' : 'none'; if(url) el.href = url; };
    updateLink(footerYoutubeLink, settings.socialLinks?.youtube); updateLink(footerInstagramLink, settings.socialLinks?.instagram); updateLink(footerFacebookLink, settings.socialLinks?.facebook); updateLink(footerTwitterLink, settings.socialLinks?.twitter);
}

let topScorerTimeout;
function loadTopScorer() {
    db.ref('topScorer').on('value', snapshot => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            topScorerBanner.innerHTML = `<p>🏆 <strong>New High Score!</strong> <span>${data.userName}</span> just aced the "<strong>${data.quizTitle}</strong>" quiz! 🎉</p>`;
            topScorerBanner.style.display = 'block';
            topScorerBanner.style.opacity = 1;
            clearTimeout(topScorerTimeout);
            topScorerTimeout = setTimeout(() => {
                topScorerBanner.style.opacity = 0;
                setTimeout(() => { topScorerBanner.style.display = 'none'; }, 500);
            }, 15000);
        } else {
            topScorerBanner.style.display = 'none';
        }
    });
}

async function loadDynamicUserDisplay() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    userNotificationCount.textContent = settings.displayTotalUsersCount || '0';
    const realUserNames = []; (await db.ref('users').limitToFirst(10).once('value')).forEach(child => realUserNames.push(child.val().name));
    const displayedUserNames = [...new Set([...realUserNames, ...(settings.displayUserNames || [])])];
    
    clearInterval(userNotificationBarInterval);
    if (displayedUserNames.length > 0) {
        userNotificationBarInterval = setInterval(() => {
            userNotificationBar.classList.add('show');
            let currentNameIndex = 0;
            userNotificationName.textContent = displayedUserNames[currentNameIndex];
            
            const rotateName = setInterval(() => {
                currentNameIndex = (currentNameIndex + 1) % displayedUserNames.length;
                userNotificationName.textContent = displayedUserNames[currentNameIndex];
            }, 5000);
            
            setTimeout(() => {
                userNotificationBar.classList.remove('show');
                clearInterval(rotateName);
            }, 7000);
        }, 20000);
    }
}

// --- FIXED: Instagram Popup with new functions ---
function showInstagramPopup() {
    const popupContainer = instagramPopupModal.querySelector('.popup-container');
    if (!popupContainer) return;
    
    instagramPopupModal.style.display = 'flex';
    popupContainer.style.animation = 'fadeIn 0.8s ease-out, neonBorder 4s infinite alternate';
    createParticles();

    popupAutoCloseTimer = setTimeout(() => {
        closeInstagramPopup(true); // pass true to indicate auto-close
    }, 10000);
}

function closeInstagramPopup(isAutoClose = false) {
    const popupContainer = instagramPopupModal.querySelector('.popup-container');
    if (!popupContainer) return;

    popupContainer.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        instagramPopupModal.style.display = 'none';
        // Reset animation for next time
        popupContainer.style.animation = '';
    }, 500);
    
    if (!isAutoClose) {
        clearTimeout(popupAutoCloseTimer);
    }
}

function followUser() {
    window.open('https://www.instagram.com/snr__27?igsh=MXI4YXd5NnIxMDAzcw==', '_blank');
    closeInstagramPopup();
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    particlesContainer.innerHTML = ''; // Clear old particles
    const particlesCount = 25;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 4 + 5}s`;
        particle.style.background = Math.random() > 0.5 ? 'rgba(255, 0, 255, 0.6)' : 'rgba(0, 255, 255, 0.6)';
        particlesContainer.appendChild(particle);
    }
}
// --- End of Instagram Popup section ---


// Google Translate
function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,or,hi,bn,te,ta', autoDisplay: false }, 'google_translate_element'); }
document.getElementById('languageSelect').addEventListener('change', (e) => {
    const lang = e.target.value; document.documentElement.lang = lang;
    const translateEl = document.querySelector('.goog-te-combo'); if (translateEl) { translateEl.value = lang; translateEl.dispatchEvent(new Event('change')); }
});

// Share Button
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
shareButton.addEventListener('click', () => {
    const shareData = {
        title: 'Sugam Academy',
        text: 'Check out Sugam Academy - The best learning platform!',
        url: window.location.href
    };
    if (navigator.share && navigator.canShare(shareData)) {
        navigator.share(shareData);
    } else {
        copyToClipboard(window.location.href);
    }
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const contentCards = document.querySelectorAll('#content .content-card');
    
    contentCards.forEach(card => {
        const title = card.dataset.title || '';
        if (title.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});
