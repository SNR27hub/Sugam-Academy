// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyAihXZD_jNeEgLAAIAoVNkiRekbVJpKkDI",
    authDomain: "sugam-acadamy.firebaseapp.com",
    databaseURL: "https://sugam-acadamy-default-rtdb.firebaseio.com",
    projectId: "sugam-acadamy",
    storageBucket: "sugam-acadamy.firebasestorage.app",
    messagingSenderId: "543228439687",
    appId: "1:543228439687:web:4e4140d19a503e6d081c22",
    measurementId: "G-HD1SGYMM89"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// --- Maintenance Mode Check ---
async function checkMaintenanceMode() {
    try {
        const maintenanceSnap = await db.ref('settings/maintenanceModeEnabled').once('value');
        if (maintenanceSnap.val() === true) {
            const user = auth.currentUser;
            // Allow admin to see the site even in maintenance mode
            if (user && user.email === 'sugamacadamy@gmail.com') {
                return false;
            }
            document.getElementById('maintenanceOverlay').style.display = 'flex';
            return true; 
        }
    } catch (error) {
        console.error("Could not check maintenance mode, proceeding normally.", error);
    }
    return false;
}

// UPI Configuration
const UPI_VPA = 'mrperfect11457@oksbi';
const UPI_NAME = 'Sugam Academy';
const UPI_CURRENCY = 'INR';

// --- DOM Elements ---
const loginRegisterBtn = document.getElementById('loginRegisterBtn');
const userAuthenticatedControls = document.querySelector('.user-authenticated-controls');
const notificationBell = document.getElementById('notificationBell');
const notificationCount = document.getElementById('notificationCount');
const closeModalButtons = document.querySelectorAll('.close-modal');
const adminPanel = document.getElementById('adminPanel');
const shareButton = document.getElementById('shareButton');
const searchInput = document.getElementById('searchInput');
const authModal = document.getElementById('authModal');
const premiumModal = document.getElementById('premiumModal');
const videoBuyModal = document.getElementById('videoBuyModal');
const quizModal = document.getElementById('quizModal');
const contentDisplayModal = document.getElementById('contentDisplayModal');
const myFavoritesModal = document.getElementById('myFavoritesModal');
const myPurchasesModal = document.getElementById('myPurchasesModal');
const instagramPopupModal = document.getElementById('instagramPopupModal');
const showLoginTab = document.getElementById('showLoginTab');
const showRegisterTab = document.getElementById('showRegisterTab');
const loginFormContainer = document.getElementById('loginFormContainer');
const registerFormContainer = document.getElementById('registerFormContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPassword = document.getElementById('forgotPassword');
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
const heroDynamicBg = document.getElementById('heroDynamicBg');
const bannerSliderContainer = document.getElementById('bannerSliderContainer');
const bannerSlider = document.getElementById('bannerSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentBannerButtonWrapper = document.getElementById('currentBannerButtonWrapper');
const toolsSectionTitle = document.getElementById('toolsSectionTitle').querySelector('h2');
const toolsGrid = document.getElementById('toolsGrid');
const topScorerBanner = document.getElementById('topScorerBanner');
const categorySelector = document.getElementById('categorySelector');
const contentTabs = document.querySelector('.content-tabs');
const tabLinks = document.querySelectorAll('.tab-link');
const videoContentGrid = document.getElementById('videoContentGrid');
const notesContentGrid = document.getElementById('notesContentGrid');
const quizContentGrid = document.getElementById('quizContentGrid');
const teachersContainer = document.getElementById('teachersContainer');
const contentDisplayModalTitle = document.getElementById('contentDisplayModalTitle');
const contentIframeWrapper = contentDisplayModal.querySelector('.content-iframe-wrapper');
const favoritesContentGrid = document.getElementById('favoritesContentGrid');
const purchasesTableBody = document.getElementById('purchasesTableBody');
const buyModalTitle = document.getElementById('buyModalTitle');
const itemPriceToBuy = document.getElementById('itemPriceToBuy');
const itemUTRNumber = document.getElementById('itemUTRNumber');
const UTRNumberInput = document.getElementById('UTRNumber');
const displayPremiumAmount = document.getElementById('displayPremiumAmount');
const quizModalTitle = document.getElementById('quizModalTitle');
const quizQuestionText = document.getElementById('quizQuestionText');
const quizOptions = document.getElementById('quizOptions');
const submitQuizAnswerBtn = document.getElementById('submitQuizAnswerBtn');
const quizFeedback = document.getElementById('quizFeedback');
const closeQuizFeedbackBtn = document.getElementById('closeQuizFeedbackBtn');
const userNotificationBar = document.getElementById('userNotificationBar');
const userNotificationCount = document.getElementById('userNotificationCount');
const userNotificationName = document.getElementById('userNotificationName');
const notificationToastContainer = document.getElementById('notificationToastContainer');
const footerAboutUsText = document.getElementById('footerAboutUsText');
const footerSugamEmail = document.getElementById('footerSugamEmail');
const footerDeveloperEmail = document.getElementById('footerDeveloperEmail');
const footerYoutubeLink = document.getElementById('footerYoutubeLink');
const footerInstagramLink = document.getElementById('footerInstagramLink');
const footerFacebookLink = document.getElementById('footerFacebookLink');
const footerTwitterLink = document.getElementById('footerTwitterLink');
const chatFab = document.getElementById('chatFab');
const chatWidget = document.getElementById('chatWidget');
const closeChatWidget = document.getElementById('closeChatWidget');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');
const chatInputForm = document.getElementById('chatInputForm');
const chatMessageInput = document.getElementById('chatMessageInput');
const adminLogout = document.getElementById('adminLogout');
const adminNavLinks = document.querySelectorAll('.admin-nav a');
const adminSections = document.querySelectorAll('.admin-section');
const totalStudents = document.getElementById('totalStudents');
const premiumUsers = document.getElementById('premiumUsers');
const totalTeachers = document.getElementById('totalTeachers');
const pendingPayments = document.getElementById('pendingPayments');
const addBannerBtn = document.getElementById('addBannerBtn');
const bannerFormContainer = document.getElementById('bannerFormContainer');
const bannerForm = document.getElementById('bannerForm');
const cancelBanner = document.getElementById('cancelBanner');
const bannersTableBody = document.getElementById('bannersTableBody');
const addToolBtn = document.getElementById('addToolBtn');
const toolFormContainer = document.getElementById('toolFormContainer');
const toolForm = document.getElementById('toolForm');
const cancelTool = document.getElementById('cancelTool');
const toolsTableBody = document.getElementById('toolsTableBody');
const usersTableBody = document.getElementById('usersTableBody');
const addContentBtn = document.getElementById('addContentBtn');
const contentFormContainer = document.getElementById('contentFormContainer');
const contentForm = document.getElementById('contentForm');
const cancelContent = document.getElementById('cancelContent');
const adminContentGrid = document.getElementById('adminContentGrid');
const contentType = document.getElementById('contentType');
const contentUrlGroup = document.getElementById('contentUrlGroup');
const contentUrlInput = document.getElementById('contentUrl');
const quizFields = document.getElementById('quizFields');
const contentAccess = document.getElementById('contentAccess');
const contentPriceContainer = document.getElementById('contentPriceContainer');
const paymentsTableBody = document.getElementById('paymentsTableBody');
const notificationForm = document.getElementById('notificationForm');
const notificationsTableBody = document.getElementById('notificationsTableBody');
const deleteAllNotificationsBtn = document.getElementById('deleteAllNotificationsBtn');
const adminChatList = document.getElementById('adminChatList');
const adminChatWindow = document.getElementById('adminChatWindow');
const addTeacherBtn = document.getElementById('addTeacherBtn');
const teacherFormContainer = document.getElementById('teacherFormContainer');
const teacherForm = document.getElementById('teacherForm');
const cancelTeacher = document.getElementById('cancelTeacher');
const teachersTableBody = document.getElementById('teachersTableBody');
const addPlanBtn = document.getElementById('addPlanBtn');
const planFormContainer = document.getElementById('planFormContainer');
const planForm = document.getElementById('planForm');
const cancelPlan = document.getElementById('cancelPlan');
const plansTableBody = document.getElementById('plansTableBody');
const generalSettingsForm = document.getElementById('generalSettingsForm');
const maintenanceModeToggle = document.getElementById('maintenanceModeToggle');
const adminVerifyBadgePrice = document.getElementById('adminVerifyBadgePrice');
const toolsSectionTitleInput = document.getElementById('toolsSectionTitleInput');
const displayTotalUsersCountInput = document.getElementById('displayTotalUsersCount');
const displayUserNamesInput = document.getElementById('displayUserNames');
const settingsAboutUsText = document.getElementById('settingsAboutUsText');
const settingsSugamEmail = document.getElementById('settingsSugamEmail');
const settingsDeveloperEmail = document.getElementById('settingsDeveloperEmail');
const settingsYoutubeLink = document.getElementById('settingsYoutubeLink');
const settingsInstagramLink = document.getElementById('settingsInstagramLink');
const settingsFacebookLink = document.getElementById('settingsFacebookLink');
const settingsTwitterLink = document.getElementById('settingsTwitterLink');

// --- State Variables ---
let currentVideoToBuy = {}; 
let currentPaymentType = ''; 
let currentQuizData = null; 
let currentQuizId = null; 
let currentAdminChatUserId = null; 
let currentUserView = '+2';
let currentBannerIndex = 0;
let bannerInterval;
let popupAutoCloseTimer;
let userNotificationBarInterval;
let allContentData = [];
const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';

// --- Initial Execution Flow ---
(async () => {
    const isMaintenance = await checkMaintenanceMode();
    if (isMaintenance) return;

    initializeEventListeners();
    auth.onAuthStateChanged(user => {
        if (user) {
            db.ref('users/' + user.uid).on('value', snap => {
                const userData = snap.val();
                if (user.email === 'sugamacadamy@gmail.com') {
                    showAdminPanel();
                } else {
                    updateUI(userData);
                }
            }, error => {
                 console.error("Error fetching user data on auth state change:", error);
                auth.signOut();
            });
        } else {
            updateUI(null);
        }
    });
})();

// --- Event Listeners Initialization ---
function initializeEventListeners() {
    profileMenuToggleBtn.addEventListener('click', (e) => { e.stopPropagation(); profileDropdownMenu.style.display = profileDropdownMenu.style.display === 'block' ? 'none' : 'block'; });
    document.addEventListener('click', (e) => { if (profileDropdownMenu.style.display === 'block' && !profileDropdownMenu.contains(e.target) && !profileMenuToggleBtn.contains(e.target)) { profileDropdownMenu.style.display = 'none'; } });
    loginRegisterBtn.addEventListener('click', () => openLoginRegisterModal('login'));
    dropdownGoPremiumBtn.addEventListener('click', () => { profileDropdownMenu.style.display = 'none'; openPremiumModal(); });
    dropdownLogoutBtn.addEventListener('click', () => auth.signOut());
    myPurchasesLink.addEventListener('click', (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; openMyPurchasesModal(); });
    myFavoritesLink.addEventListener('click', (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; openMyFavoritesModal(); });
    getVerifiedBadgeLink.addEventListener('click', async (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; const settingsSnap = await db.ref('settings').once('value'); const settings = settingsSnap.val(); const badgePrice = settings?.adminVerifyBadgePrice || 100; openBuyModal('verifyBadge', 'Get Verified Badge', badgePrice); });
    viewNotificationsLink.addEventListener('click', (e) => { e.preventDefault(); alert('Notifications section coming soon!'); profileDropdownMenu.style.display = 'none'; });
    closeModalButtons.forEach(button => { button.addEventListener('click', () => { const modal = button.closest('.modal'); if (modal) modal.style.display = 'none'; }); });
    showLoginTab.addEventListener('click', () => switchAuthTab('login'));
    showRegisterTab.addEventListener('click', () => switchAuthTab('register'));
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    forgotPassword.addEventListener('click', handleForgotPassword);
    categorySelector.addEventListener('click', handleCategoryChange);
    tabLinks.forEach(link => { link.addEventListener('click', () => handleTabChange(link.getAttribute('data-tab'))); });
    adminNavLinks.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); handleAdminNav(link.getAttribute('data-section')); }); });
    contentAccess.addEventListener('change', () => { const isPaid = (contentAccess.value === 'premium' || contentAccess.value === 'buy'); contentPriceContainer.style.display = isPaid ? 'block' : 'none'; document.getElementById('contentPrice').required = isPaid; });
    contentType.addEventListener('change', () => { const isQuiz = contentType.value === 'quiz'; quizFields.style.display = isQuiz ? 'block' : 'none'; contentUrlInput.required = !isQuiz; });
    adminLogout.addEventListener('click', () => auth.signOut());
    submitQuizAnswerBtn.addEventListener('click', handleSubmitQuiz);
    closeQuizFeedbackBtn.addEventListener('click', () => quizModal.style.display = 'none');
    instagramPopupModal.querySelector('.instagram-close').addEventListener('click', closeInstagramPopup);
    instagramPopupModal.querySelector('.close-btn').addEventListener('click', closeInstagramPopup);
    instagramPopupModal.querySelector('.follow-btn').addEventListener('click', () => { window.open('https://www.instagram.com/snr__27?igsh=MXI4YXd5NnIxMDAzcw==', '_blank'); closeInstagramPopup(); });
    document.getElementById('languageSelect').addEventListener('change', (e) => { const lang = e.target.value; document.documentElement.lang = lang; const translateEl = document.querySelector('.goog-te-combo'); if (translateEl) { translateEl.value = lang; translateEl.dispatchEvent(new Event('change')); } });
    chatFab.addEventListener('click', () => { chatWidget.style.display = chatWidget.style.display === 'flex' ? 'none' : 'flex'; });
    closeChatWidget.addEventListener('click', () => { chatWidget.style.display = 'none'; });
    chatInputForm.addEventListener('submit', handleChatSubmit);
    shareButton.addEventListener('click', handleShare);
    searchInput.addEventListener('input', handleSearch);
}

// --- UI Update Functions ---
async function updateUI(userData) {
    document.body.style.display = 'block';
    adminPanel.style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.hero').style.display = 'flex';
    document.querySelector('footer').style.display = 'block';
    document.querySelectorAll('section').forEach(s => {
        if (s.id !== 'adminPanel') s.style.display = 'block';
    });
    document.getElementById('content').style.display = 'none';

    const isLoggedIn = userData && userData.name;

    if (isLoggedIn) {
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
        loadNotifications(true);
        loadContent(true, userData.premium, userData.purchasedVideos || {}, userData.favorites || {}, currentUserView);
        chatFab.style.display = 'flex';
        initializeUserChat();
    } else {
        loginRegisterBtn.style.display = 'flex';
        userAuthenticatedControls.style.display = 'none';
        profileDropdownMenu.style.display = 'none';
        currentUserView = '+2';
        categorySelector.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === currentUserView);
        });
        loadNotifications(false);
        loadContent(false, false, {}, {}, currentUserView);
        chatFab.style.display = 'none';
        chatWidget.style.display = 'none';
    }

    loadTeachers();
    loadBanners();
    loadTools();
    loadTopScorer();
    loadDynamicUserDisplay();
    await renderFooter();
    setTimeout(showInstagramPopup, 3000);
}

function switchAuthTab(tab) {
    if (tab === 'login') {
        showLoginTab.classList.add('active');
        showRegisterTab.classList.remove('active');
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
    } else {
        showRegisterTab.classList.add('active');
        showLoginTab.classList.remove('active');
        registerFormContainer.style.display = 'block';
        loginFormContainer.style.display = 'none';
    }
}

// --- Authentication Handlers ---
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            authModal.style.display = 'none';
            loginForm.reset();
        })
        .catch(error => alert(error.message));
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (password !== document.getElementById('registerConfirmPassword').value) {
        return alert("Passwords don't match!");
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
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
        .catch(error => alert(error.message));
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = prompt('Please enter your email address:');
    if (email) {
        auth.sendPasswordResetEmail(email)
            .then(() => alert('Password reset email sent!'))
            .catch(error => alert(error.message));
    }
}

// --- Content & UI Logic Handlers ---
function handleCategoryChange(e) {
    if (e.target.tagName !== 'BUTTON') return;
    const selectedCategory = e.target.dataset.category;
    if (selectedCategory === currentUserView) return;

    categorySelector.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentUserView = selectedCategory;
    searchInput.value = ''; // Reset search on category change

    const user = auth.currentUser;
    const updateView = (userData = {}) => {
        loadContent(!!user, userData.premium, userData.purchasedVideos, userData.favorites, currentUserView);
        if (user) {
            db.ref('users/' + user.uid).update({ currentView: currentUserView });
        }
    };

    if (user) {
        db.ref('users/' + user.uid).once('value').then(snap => updateView(snap.val()));
    } else {
        updateView();
    }
}

function handleTabChange(tab) {
    contentTabs.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    contentTabs.querySelector(`.tab-link[data-tab="${tab}"]`).classList.add('active');
    document.querySelectorAll('#content .content-section').forEach(s => s.style.display = 'none');
    document.getElementById(tab).style.display = 'block';
    searchInput.value = ''; // Reset search on tab change
    handleSearch(); // Apply empty search to show all items
}

function handleShare() {
    if (navigator.share) {
        navigator.share({
            title: 'Sugam Academy',
            text: 'Check out Sugam Academy - The best learning platform!',
            url: window.location.href
        }).catch(() => console.log('Share cancelled.'));
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied to clipboard!'));
    }
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const allCards = document.querySelectorAll('.content-grid .content-card');
    
    allCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const isVisible = title.includes(searchTerm);
        card.style.display = isVisible ? 'flex' : 'none';
    });
}

// --- Data Loading Functions (User View) ---
function loadContent(isLoggedIn, isPremium, purchasedVideos = {}, favorites = {}, category) {
    document.getElementById('content').style.display = 'block';
    const contentRef = db.ref('content');
    contentRef.orderByChild('category').equalTo(category).on('value', snapshot => {
        videoContentGrid.innerHTML = '';
        notesContentGrid.innerHTML = '';
        quizContentGrid.innerHTML = '';
        allContentData = [];

        const videoFragment = document.createDocumentFragment();
        const notesFragment = document.createDocumentFragment();
        const quizFragment = document.createDocumentFragment();

        if (snapshot.exists()) {
            snapshot.forEach(child => {
                const content = { id: child.key, ...child.val() };
                allContentData.push(content);
                const card = createContentCard(content, content.id, isLoggedIn, isPremium, purchasedVideos, favorites);
                if (content.type === 'video') videoFragment.appendChild(card);
                else if (content.type === 'note') notesFragment.appendChild(card);
                else if (content.type === 'quiz') quizFragment.appendChild(card);
            });
        }
        
        const noContentMsg = `<p class="text-center" style="grid-column: 1 / -1;">No content found for the ${category} section. Check back soon!</p>`;
        videoContentGrid.innerHTML = videoFragment.children.length > 0 ? '' : noContentMsg;
        notesContentGrid.innerHTML = notesFragment.children.length > 0 ? '' : noContentMsg;
        quizContentGrid.innerHTML = quizFragment.children.length > 0 ? '' : noContentMsg;

        videoContentGrid.appendChild(videoFragment);
        notesContentGrid.appendChild(notesFragment);
        quizContentGrid.appendChild(quizFragment);

        handleSearch();
    });
}

function createContentCard(content, contentId, isLoggedIn, isPremium, purchasedVideos, favorites) {
    const card = document.createElement('div');
    card.className = 'content-card';
    let thumbHtml;
    if (content.thumbnailUrl) {
        thumbHtml = `<img src="${content.thumbnailUrl}" alt="${content.title || 'Thumbnail'}">`;
    } else {
        let iconClass = 'fas fa-question';
        if (content.type === 'video') iconClass = 'fas fa-video';
        else if (content.type === 'note') iconClass = 'fas fa-file-pdf';
        thumbHtml = `<i class="${iconClass}"></i>`;
    }
    const isFavorited = isLoggedIn && favorites && favorites[contentId];
    const favoriteButton = isLoggedIn ? `<button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${contentId}')"><i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i></button>` : '';
    let actionButton = '', badge = '';
    if (content.access === 'free') {
        actionButton = createActionButton(content, contentId);
    } else if (content.access === 'premium') {
        badge = `<span class="premium-badge">Premium</span>`;
        if (isLoggedIn && isPremium) actionButton = createActionButton(content, contentId);
        else if (isLoggedIn) actionButton = `<button class="btn btn-primary" onclick="openPremiumModal()">Go Premium</button>`;
        else actionButton = `<button class="btn btn-primary" onclick="openLoginRegisterModal('login')">Login to View</button>`;
    } else if (content.access === 'buy') {
        badge = `<span class="premium-badge">Buy (₹${content.price || 0})</span>`;
        if (isLoggedIn && purchasedVideos && purchasedVideos[contentId]) actionButton = createActionButton(content, contentId);
        else if (isLoggedIn) actionButton = `<button class="btn btn-primary" onclick="openBuyModal('video', '${content.title}', '${content.price || 0}', '${contentId}')">Buy Now</button>`;
        else actionButton = `<button class="btn btn-primary" onclick="openLoginRegisterModal('login')">Login to Buy</button>`;
    }
    card.innerHTML = `
        <div class="content-thumb">${thumbHtml}</div>
        <div class="content-info">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <h3 style="margin: 0 1rem 0 0; flex-grow: 1;">${content.title || 'N/A'} ${badge}</h3>
                ${favoriteButton}
            </div>
            ${actionButton}
        </div>`;
    return card;
}

function createActionButton(content, contentId) {
    if (content.type === 'quiz') {
        if (content.question) return `<button class="btn btn-primary" onclick="openQuizModal('${contentId}')">Start Quiz</button>`;
        if (content.url) return `<button class="btn btn-primary" onclick="openContentInNewTab('${content.url}')">View Quiz</button>`;
        return `<button class="btn btn-outline" disabled>No Quiz Content</button>`;
    } else {
        const actionText = content.type === 'video' ? 'Watch Now' : 'View Note';
        return `<button class="btn btn-primary" onclick="openContentInNewTab('${content.url}')">${actionText}</button>`;
    }
}

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
    const initialImageUrl = banners[0]?.imageUrl;
    document.documentElement.style.setProperty('--initial-bg-image', initialImageUrl ? `url('${initialImageUrl}')` : 'none');
    const updateSliderAndButton = () => {
        bannerSlider.style.transform = `translateX(${-currentBannerIndex * 100}%)`;
        const currentBanner = banners[currentBannerIndex];
        currentBannerButtonWrapper.innerHTML = (currentBanner?.buttonText && currentBanner?.buttonUrl)
            ? `<a href="${currentBanner.buttonUrl}" target="_blank" class="btn btn-primary">${currentBanner.buttonText}</a>`
            : '';
        currentBannerButtonWrapper.style.display = currentBannerButtonWrapper.innerHTML ? 'block' : 'none';
        resetAutoSlide();
    };
    const nextSlide = () => {
        currentBannerIndex = (currentBannerIndex + 1) % slides.length;
        updateSliderAndButton();
    };
    const startAutoSlide = () => {
        if (slides.length > 1) bannerInterval = setInterval(nextSlide, 5000);
    };
    const resetAutoSlide = () => {
        clearInterval(bannerInterval);
        startAutoSlide();
    };
    nextBtn.onclick = nextSlide;
    prevBtn.onclick = () => {
        currentBannerIndex = (currentBannerIndex - 1 + slides.length) % slides.length;
        updateSliderAndButton();
    };
    currentBannerIndex = 0;
    updateSliderAndButton();
}

function loadTools() {
    db.ref('settings/toolsSectionTitle').on('value', snap => {
        toolsSectionTitle.textContent = snap.val() || 'Student Tools';
    });
    db.ref('tools').on('value', snapshot => {
        toolsGrid.innerHTML = '';
        if (!snapshot.exists()) {
            document.getElementById('toolsSection').style.display = 'none';
            return;
        }
        document.getElementById('toolsSection').style.display = 'block';
        const fragment = document.createDocumentFragment();
        snapshot.forEach(child => {
            const tool = child.val();
            const card = document.createElement('a');
            card.href = tool.link;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'tool-card';
            card.innerHTML = `
                ${tool.imageUrl ? `<img src="${tool.imageUrl}" alt="${tool.title}">` : ''}
                <h3>${tool.title}</h3>
            `;
            fragment.appendChild(card);
        });
        toolsGrid.appendChild(fragment);
    });
}

function loadTeachers() {
    db.ref('teachers').on('value', snapshot => {
        teachersContainer.innerHTML = '';
        if (!snapshot.exists()) return;
        const fragment = document.createDocumentFragment();
        snapshot.forEach(child => {
            const teacher = child.val();
            const photos = teacher.photoUrls ? teacher.photoUrls.split(',').map(url => url.trim()).filter(Boolean) : [];
            const teacherCard = document.createElement('div');
            teacherCard.className = 'teacher-card';
            let imageSliderHtml = photos.length > 0
                ? `<div class="teacher-image-slider" data-current="0">${photos.map((url, index) => `<div class="slide ${index === 0 ? 'active' : ''}"><img src="${url}" alt="${teacher.name || 'Teacher'} photo"></div>`).join('')}</div>`
                : `<i class="fas fa-user" style="font-size: 5rem;"></i>`;
            teacherCard.innerHTML = `
                <div class="teacher-img">${imageSliderHtml}</div>
                <div class="teacher-info">
                    <h3>${teacher.name || 'N/A'} ${teacher.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</h3>
                    <p>${teacher.subject || 'N/A'}</p>
                    <p>${teacher.experience || 'N/A'}</p>
                </div>
            `;
            if (photos.length > 1) {
                let intervalId = null;
                teacherCard.addEventListener('mouseenter', () => {
                    if (intervalId) return;
                    intervalId = setInterval(() => {
                        const slider = teacherCard.querySelector('.teacher-image-slider');
                        if (!slider) return;
                        const slides = slider.querySelectorAll('.slide');
                        let current = parseInt(slider.dataset.current, 10);
                        slides[current].classList.remove('active');
                        current = (current + 1) % slides.length;
                        slides[current].classList.add('active');
                        slider.dataset.current = current;
                    }, 3000);
                });
                teacherCard.addEventListener('mouseleave', () => clearInterval(intervalId));
            }
            fragment.appendChild(teacherCard);
        });
        teachersContainer.appendChild(fragment);
    });
}

function loadNotifications(isLoggedIn) {
    const notificationsRef = db.ref('notifications');
    notificationsRef.on('value', snap => {
        const count = snap.numChildren();
        notificationCount.textContent = count;
        dropdownNotificationCount.textContent = count;
        notificationBell.style.display = (count > 0 && isLoggedIn) ? 'flex' : 'none';
    });
    const lastCheckTimestamp = Date.now();
    notificationsRef.orderByChild('date').startAt(lastCheckTimestamp).on('child_added', snap => {
        if (isLoggedIn && (!adminPanel.style.display || adminPanel.style.display === 'none')) {
            const notif = snap.val();
            showNotificationToast(notif);
        }
    });
}

function showNotificationToast(notification) {
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.id = toastId;
    let iconHtml = notification.imageUrl 
        ? `<img src="${notification.imageUrl}" alt="${notification.title}">` 
        : `<div class="toast-icon"><i class="fas fa-info-circle"></i></div>`;
    toast.innerHTML = `${iconHtml}<div class="notification-toast-content"><h4>${notification.title}</h4><p>${notification.message}</p></div><button class="toast-close-btn" onclick="document.getElementById('${toastId}').remove()">&times;</button>`;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 10000);
}

// --- Modal & Popup Functions ---
function openLoginRegisterModal(tab = 'login') { authModal.style.display = 'flex'; switchAuthTab(tab); }
function openBuyModal(type, title, price, contentId = null) { currentPaymentType = type; buyModalTitle.textContent = `${type === 'video' ? 'Buy Video: ' : 'Purchase: '}${title}`; itemPriceToBuy.textContent = price; currentVideoToBuy = { id: contentId, title, price }; videoBuyModal.style.display = 'flex'; }
function openPremiumModal() { premiumModal.style.display = 'flex'; db.ref('plans').once('value').then(snap => { const plans = snap.val(); const defaultPlanKey = plans ? Object.keys(plans)[0] : null; displayPremiumAmount.textContent = (plans && defaultPlanKey) ? plans[defaultPlanKey].price : '100'; }); }
function openContentInNewTab(url) { if (!url) { return alert("Content link is not available."); } window.open(url, '_blank', 'noopener,noreferrer'); }
async function openQuizModal(quizId) { const quizSnap = await db.ref('content/' + quizId).once('value'); currentQuizData = quizSnap.val(); currentQuizId = quizId; if (!currentQuizData || !currentQuizData.question) return alert('Quiz not configured.'); document.getElementById('quizQuestionContainer').style.display = 'block'; quizFeedback.style.display = 'none'; submitQuizAnswerBtn.style.display = 'block'; closeQuizFeedbackBtn.style.display = 'none'; quizModalTitle.textContent = currentQuizData.title || 'Quiz'; quizQuestionText.textContent = currentQuizData.question; quizOptions.innerHTML = currentQuizData.options.map(option => `<label class="quiz-option"><input type="radio" name="quizOption" value="${option}">${option}</label>`).join(''); quizModal.style.display = 'flex'; }
function handleSubmitQuiz() { const selectedOption = document.querySelector('input[name="quizOption"]:checked'); if (!selectedOption) return alert('Please select an answer!'); document.getElementById('quizQuestionContainer').style.display = 'none'; quizFeedback.style.display = 'block'; submitQuizAnswerBtn.style.display = 'none'; closeQuizFeedbackBtn.style.display = 'block'; if (selectedOption.value === currentQuizData.correctAnswer) { quizFeedback.className = 'quiz-feedback correct'; quizFeedback.innerHTML = 'Congratulations! Correct!'; const user = auth.currentUser; if (user) { db.ref(`users/${user.uid}/name`).once('value').then(nameSnap => { db.ref('topScorer').set({ userName: nameSnap.val() || 'Anonymous', quizTitle: currentQuizData.title || 'a quiz' }); }); } } else { quizFeedback.className = 'quiz-feedback incorrect'; quizFeedback.innerHTML = `Incorrect. Correct answer: <strong>${currentQuizData.correctAnswer}</strong>.`; } }
function toggleFavorite(contentId) { const user = auth.currentUser; if (!user) return alert('Please log in to manage favorites.'); const favoriteRef = db.ref(`users/${user.uid}/favorites/${contentId}`); favoriteRef.once('value', snapshot => { if (snapshot.exists()) favoriteRef.remove(); else favoriteRef.set(true); }); }
function submitPaymentDetails(paymentType) { const user = auth.currentUser; if (!user) return alert('Please login to submit your payment details.'); let amount, utrNumber, contentId = null, title; if (paymentType === 'premium') { amount = displayPremiumAmount.textContent; utrNumber = UTRNumberInput.value; title = 'Premium Subscription'; } else if (paymentType === 'video') { amount = itemPriceToBuy.textContent; utrNumber = itemUTRNumber.value; contentId = currentVideoToBuy.id; title = currentVideoToBuy.title; } else if (paymentType === 'verifyBadge') { amount = itemPriceToBuy.textContent; utrNumber = itemUTRNumber.value; title = 'Verified Badge'; } if (!utrNumber || !/^\d{12}$/.test(utrNumber)) { return alert('Please enter a valid 12-digit UTR number.'); } db.ref('payments').push({ utr: utrNumber, amount: parseFloat(amount), status: 'pending', type: paymentType, contentId: contentId, title: title, date: Date.now(), userId: user.uid }).then(() => { alert('Payment details submitted! Your request will be processed after verification.'); premiumModal.style.display = 'none'; videoBuyModal.style.display = 'none'; UTRNumberInput.value = ''; itemUTRNumber.value = ''; }).catch(error => alert('Error submitting payment: ' + error.message)); }
async function renderFooter() { const settings = (await db.ref('settings').once('value')).val() || {}; footerAboutUsText.textContent = settings.aboutUsText || 'Your trusted source for quality education.'; footerSugamEmail.textContent = settings.contact?.sugamEmail || 'N/A'; footerDeveloperEmail.textContent = settings.contact?.developerEmail || 'N/A'; const updateLink = (el, url) => { el.style.display = url ? 'inline-block' : 'none'; if (url) el.href = url; }; updateLink(footerYoutubeLink, settings.socialLinks?.youtube); updateLink(footerInstagramLink, settings.socialLinks?.instagram); updateLink(footerFacebookLink, settings.socialLinks?.facebook); updateLink(footerTwitterLink, settings.socialLinks?.twitter); }
async function openMyPurchasesModal() { const user = auth.currentUser; if (!user) return; myPurchasesModal.style.display = 'flex'; db.ref('payments').orderByChild('userId').equalTo(user.uid).on('value', snapshot => { purchasesTableBody.innerHTML = ''; if (!snapshot.exists()) return; snapshot.forEach(child => { const p = child.val(); const row = purchasesTableBody.insertRow(0); row.innerHTML = `<td>${p.title||p.type}</td><td>₹${p.amount}</td><td>${new Date(p.date).toLocaleDateString()}</td><td><span class="status-badge status-${p.status}">${p.status}</span></td>`; }); }); }
async function openMyFavoritesModal() { const user = auth.currentUser; if (!user) return; myFavoritesModal.style.display = 'flex'; favoritesContentGrid.innerHTML = '<p>Loading...</p>'; const userSnap = await db.ref(`users/${user.uid}`).once('value'); const userData = userSnap.val(); const favorites = userData.favorites || {}; const favoriteIds = Object.keys(favorites); if (favoriteIds.length === 0) { return favoritesContentGrid.innerHTML = '<p>No favorites yet.</p>'; } const favoritePromises = favoriteIds.map(id => db.ref(`content/${id}`).once('value')); const favoriteSnaps = await Promise.all(favoritePromises); favoritesContentGrid.innerHTML = ''; const fragment = document.createDocumentFragment(); favoriteSnaps.forEach(snap => { if (snap.exists()) { fragment.appendChild(createContentCard(snap.val(), snap.key, true, userData.premium, userData.purchasedVideos, userData.favorites)); } }); favoritesContentGrid.appendChild(fragment); }
function loadTopScorer() { db.ref('topScorer').on('value', snapshot => { if (snapshot.exists()) { const data = snapshot.val(); topScorerBanner.innerHTML = `<p>🏆 <strong>New High Score!</strong> <span>${data.userName}</span> just aced the "<strong>${data.quizTitle}</strong>" quiz! 🎉</p>`; topScorerBanner.style.display = 'block'; topScorerBanner.style.opacity = 1; setTimeout(() => { topScorerBanner.style.opacity = 0; setTimeout(() => topScorerBanner.style.display = 'none', 500); }, 15000); } else { topScorerBanner.style.display = 'none'; } }); }
async function fetchInstagramFollowers() { const instagramFollowerCount = document.getElementById('follower-count'); if (!instagramFollowerCount) return; instagramFollowerCount.innerHTML = '<span class="loading"></span>'; await new Promise(resolve => setTimeout(resolve, 1500)); instagramFollowerCount.innerHTML = "1M+"; }
function showInstagramPopup() { if (adminPanel.style.display === 'block') return; instagramPopupModal.style.display = 'flex'; const container = instagramPopupModal.querySelector('.popup-container'); container.style.animation = 'none'; void container.offsetWidth; container.style.animation = 'fadeIn 0.8s ease-out, neonBorder 4s infinite alternate'; fetchInstagramFollowers(); popupAutoCloseTimer = setTimeout(closeInstagramPopup, 10000); }
function closeInstagramPopup() { if (instagramPopupModal.style.display === 'none') return; const container = instagramPopupModal.querySelector('.popup-container'); container.style.animation = 'fadeOut 0.5s forwards'; setTimeout(() => { instagramPopupModal.style.display = 'none'; clearTimeout(popupAutoCloseTimer); }, 500); }

// --- Admin Panel Functions ---
async function showAdminPanel() { adminPanel.style.display = 'block'; document.body.style.paddingTop = '0'; document.querySelector('header').style.display = 'none'; document.querySelector('.hero').style.display = 'none'; document.querySelector('footer').style.display = 'none'; document.querySelectorAll('section').forEach(s => { if (s.id !== 'adminPanel') s.style.display = 'none'; }); closeInstagramPopup(); initializeAdminEventListeners(); handleAdminNav('dashboard'); }
function initializeAdminEventListeners() { if (adminPanel.dataset.listenersInitialized) return; adminPanel.dataset.listenersInitialized = 'true'; addBannerBtn.addEventListener('click', () => { bannerForm.reset(); bannerForm.dataset.editId = ''; bannerFormContainer.style.display = 'block'; bannerFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); cancelBanner.addEventListener('click', () => bannerFormContainer.style.display = 'none'); bannerForm.addEventListener('submit', handleBannerForm); addToolBtn.addEventListener('click', () => { toolForm.reset(); toolForm.dataset.editId = ''; toolFormContainer.style.display = 'block'; toolFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); cancelTool.addEventListener('click', () => toolFormContainer.style.display = 'none'); toolForm.addEventListener('submit', handleToolForm); addContentBtn.addEventListener('click', () => { contentForm.reset(); contentForm.dataset.editId = ''; contentPriceContainer.style.display = 'none'; quizFields.style.display = 'none'; contentUrlInput.required = true; contentFormContainer.style.display = 'block'; contentFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); cancelContent.addEventListener('click', () => contentFormContainer.style.display = 'none'); contentForm.addEventListener('submit', handleContentForm); notificationForm.addEventListener('submit', handleNotificationForm); deleteAllNotificationsBtn.addEventListener('click', () => { if (confirm('Delete ALL notifications?')) db.ref('notifications').remove(); }); addTeacherBtn.addEventListener('click', () => { teacherForm.reset(); teacherForm.dataset.editId = ''; teacherFormContainer.style.display = 'block'; teacherFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); cancelTeacher.addEventListener('click', () => teacherFormContainer.style.display = 'none'); teacherForm.addEventListener('submit', handleTeacherForm); addPlanBtn.addEventListener('click', () => { planForm.reset(); planForm.dataset.editId = ''; planFormContainer.style.display = 'block'; planFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); cancelPlan.addEventListener('click', () => planFormContainer.style.display = 'none'); planForm.addEventListener('submit', handlePlanForm); generalSettingsForm.addEventListener('submit', handleSettingsForm); }
function handleAdminNav(section) { adminNavLinks.forEach(l => l.classList.remove('active')); document.querySelector(`.admin-nav a[data-section="${section}"]`).classList.add('active'); adminSections.forEach(s => s.classList.remove('active')); const sectionId = section === 'tools' ? 'toolsSectionAdmin' : `${section}Section`; document.getElementById(sectionId).classList.add('active'); switch(section) { case 'dashboard': loadDashboardStats(); break; case 'banners': loadAdminBanners(); break; case 'tools': loadAdminTools(); break; case 'users': loadUsers(); break; case 'content': loadAdminContent(); break; case 'payments': loadPayments(); break; case 'notifications': loadAdminNotifications(); break; case 'chats': loadAdminChatList(); break; case 'teachers': loadAdminTeachers(); break; case 'plans': loadAdminPlans(); break; case 'settings': loadAdminSettings(); break; } }
function loadDashboardStats() { db.ref('users').once('value').then(snap => { totalStudents.textContent = snap.numChildren(); premiumUsers.textContent = Object.values(snap.val() || {}).filter(u => u.premium).length; }); db.ref('teachers').once('value').then(snap => totalTeachers.textContent = snap.numChildren()); db.ref('payments').once('value').then(snap => { pendingPayments.textContent = Object.values(snap.val() || {}).filter(p => p.status === 'pending').length; }); }
function loadAdminBanners() { db.ref('banners').on('value', snapshot => { bannersTableBody.innerHTML = ''; if (!snapshot.exists()) return; snapshot.forEach(child => { const b = child.val(); const row = bannersTableBody.insertRow(); row.innerHTML = `<td>${b.title || 'N/A'}</td><td><img src="${b.imageUrl}" style="width: 100px;"></td><td>${b.buttonText || 'N/A'}</td><td>${b.startDate || 'N/A'} to ${b.endDate || 'N/A'}</td><td><button class="btn btn-primary" onclick="editBanner('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteBanner('${child.key}')">Delete</button></td>`; }); }); }
function editBanner(id) { db.ref('banners/' + id).once('value').then(snap => { const b = snap.val(); document.getElementById('bannerTitle').value = b.title || ''; document.getElementById('bannerImageUrl').value = b.imageUrl || ''; document.getElementById('bannerButtonText').value = b.buttonText || ''; document.getElementById('bannerButtonUrl').value = b.buttonUrl || ''; document.getElementById('bannerStartDate').value = b.startDate || ''; document.getElementById('bannerEndDate').value = b.endDate || ''; bannerForm.dataset.editId = id; bannerFormContainer.style.display = 'block'; bannerFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); }
function deleteBanner(id) { if (confirm('Delete banner?')) db.ref('banners/' + id).remove(); }
function loadAdminTools() { db.ref('tools').on('value', snapshot => { toolsTableBody.innerHTML = ''; if (!snapshot.exists()) return; snapshot.forEach(child => { const t = child.val(); const row = toolsTableBody.insertRow(); row.innerHTML = `<td>${t.title || 'N/A'}</td><td><a href="${t.link}" target="_blank">${t.link}</a></td><td>${t.imageUrl ? `<img src="${t.imageUrl}" style="width: 50px;">` : 'None'}</td><td><button class="btn btn-primary" onclick="editTool('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteTool('${child.key}')">Delete</button></td>`; }); }); }
function editTool(id) { db.ref('tools/' + id).once('value').then(snap => { const t = snap.val(); document.getElementById('toolTitle').value = t.title || ''; document.getElementById('toolLink').value = t.link || ''; document.getElementById('toolImageUrl').value = t.imageUrl || ''; toolForm.dataset.editId = id; toolFormContainer.style.display = 'block'; toolFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); }
function deleteTool(id) { if (confirm('Delete tool?')) db.ref('tools/' + id).remove(); }
function loadAdminContent() { db.ref('content').on('value', snapshot => { adminContentGrid.innerHTML = ''; if (!snapshot.exists()) return; snapshot.forEach(child => { const content = child.val(); const card = document.createElement('div'); card.className = 'content-card'; const thumbHtml = content.thumbnailUrl ? `<img src="${content.thumbnailUrl}" alt="Thumb">` : `<i class="fas fa-${content.type === 'video' ? 'video' : content.type === 'note' ? 'file-pdf' : 'brain'}"></i>`; card.innerHTML = `<div class="content-thumb">${thumbHtml}</div><div class="content-info"><h3>${content.title || 'N/A'} ${content.access !== 'free' ? `<span class="premium-badge">${content.access}</span>` : ''}</h3><p><strong>Category: ${content.category || 'N/A'}</strong></p><div class="action-buttons"><button class="btn btn-primary" onclick="editContent('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteContent('${child.key}')">Delete</button></div></div>`; adminContentGrid.appendChild(card); }); }); }
function editContent(id) { db.ref('content/' + id).once('value').then(snap => { const c = snap.val(); document.getElementById('contentTitle').value = c.title || ''; document.getElementById('contentThumbnailUrl').value = c.thumbnailUrl || ''; document.getElementById('contentCategory').value = c.category || '+2'; document.getElementById('contentType').value = c.type || 'video'; document.getElementById('contentUrl').value = c.url || ''; document.getElementById('contentAccess').value = c.access || 'free'; document.getElementById('contentPrice').value = c.price || ''; contentPriceContainer.style.display = (c.access !== 'free') ? 'block' : 'none'; quizFields.style.display = c.type === 'quiz' ? 'block' : 'none'; if (c.type === 'quiz') { document.getElementById('quizQuestion').value = c.question || ''; document.getElementById('quizOption1').value = c.options?.[0] || ''; document.getElementById('quizOption2').value = c.options?.[1] || ''; document.getElementById('quizOption3').value = c.options?.[2] || ''; document.getElementById('quizOption4').value = c.options?.[3] || ''; document.getElementById('quizCorrectAnswer').value = c.correctAnswer || ''; } contentForm.dataset.editId = id; contentFormContainer.style.display = 'block'; contentFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); }
function deleteContent(id) { if (confirm('Delete content?')) db.ref('content/' + id).remove(); }
function blockUser(uid) { if (confirm('Block this user? This is a placeholder.')) alert('User block functionality to be implemented.'); }
function loadPayments() { db.ref('payments').on('value', snapshot => { paymentsTableBody.innerHTML = ''; if (!snapshot.exists()) return; const paymentPromises = []; snapshot.forEach(child => { const payment = { ...child.val(), key: child.key }; paymentPromises.push(db.ref('users/' + payment.userId).once('value').then(userSnap => ({ payment, user: userSnap.val() }))); }); Promise.all(paymentPromises).then(results => { results.forEach(({ payment, user }) => { const row = paymentsTableBody.insertRow(); let actions = `<span class="status-badge status-${payment.status}">${payment.status}</span>`; if (payment.status === 'pending') { actions = `<button class="btn btn-primary" onclick="verifyPayment('${payment.key}', '${payment.userId}', '${payment.type}', '${payment.contentId}')">Verify</button><button class="btn btn-outline" onclick="rejectPayment('${payment.key}')">Reject</button>`; } row.innerHTML = `<td>${user ? user.name : 'N/A'}</td><td>${payment.utr || 'N/A'}</td><td>₹${payment.amount || '0'} (${payment.type || 'N/A'})</td><td>${actions}</td>`; }); }); }); }
function verifyPayment(paymentId, userId, type, contentId) { db.ref('payments/' + paymentId).update({ status: 'verified' }).then(() => { if (type === 'premium') { db.ref('users/' + userId).update({ premium: true }); } else if (type === 'video') { db.ref(`users/${userId}/purchasedVideos/${contentId}`).set(true); } else if (type === 'verifyBadge') { db.ref('users/' + userId).update({ isVerified: true }); } alert('Payment verified!'); }); }
function rejectPayment(paymentId) { if (confirm('Reject this payment?')) db.ref('payments/' + paymentId).update({ status: 'rejected' }); }
function loadAdminTeachers() { db.ref('teachers').on('value', snapshot => { teachersTableBody.innerHTML = ''; if (!snapshot.exists()) return; snapshot.forEach(child => { const t = child.val(); const row = teachersTableBody.insertRow(); row.innerHTML = `<td>${t.name || 'N/A'} ${t.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</td><td>${t.subject || 'N/A'}</td><td><button class="btn btn-primary" onclick="editTeacher('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteTeacher('${child.key}')">Delete</button></td>`; }); }); }
function editTeacher(id) { db.ref('teachers/' + id).once('value').then(snap => { const t = snap.val(); document.getElementById('teacherName').value = t.name || ''; document.getElementById('teacherSubject').value = t.subject || ''; document.getElementById('teacherExperience').value = t.experience || ''; document.getElementById('teacherPhotoUrls').value = t.photoUrls || ''; document.getElementById('teacherVerified').checked = t.verified || false; teacherForm.dataset.editId = id; teacherFormContainer.style.display = 'block'; teacherFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); }); }
function deleteTeacher(id) { if (confirm('Delete teacher?')) db.ref('teachers/' + id).remove(); }
function handleNotificationForm(e){e.preventDefault();const title=document.getElementById("notificationTitle").value.trim(),message=document.getElementById("notificationMessage").value.trim(),imageUrl=document.getElementById("notificationImageUrl").value.trim();if(title&&message)db.ref("notifications").push({title,message,imageUrl:imageUrl||null,date:Date.now()}).then(()=>{notificationForm.reset(),alert("Notification sent")})}
function loadAdminNotifications(){db.ref("notifications").on("value",e=>{notificationsTableBody.innerHTML="",e.exists()&&e.forEach(child=>{const t=child.val(),o=notificationsTableBody.insertRow();o.innerHTML=`<td>${t.title||"N/A"}</td><td>${t.message||"N/A"}</td><td>${t.imageUrl?`<a href="${t.imageUrl}" target="_blank">View</a>`:"None"}</td><td>${new Date(t.date).toLocaleDateString()}</td>`})})}
function editPlan(e){db.ref("plans/"+e).once("value").then(t=>{const o=t.val();document.getElementById("planName").value=o.name||"",document.getElementById("planPrice").value=o.price||"",document.getElementById("planDescription").value=o.description||"",planForm.dataset.editId=e,planFormContainer.style.display="block",planFormContainer.scrollIntoView({behavior:"smooth",block:"center"})})}
function deletePlan(e){confirm("Delete this plan?")&&db.ref("plans/"+e).remove().then(()=>alert("Plan deleted!"))}
function loadAdminPlans(){db.ref("plans").on("value",e=>{plansTableBody.innerHTML="",e.exists()&&e.forEach(child=>{const t=child.val(),o=plansTableBody.insertRow();o.innerHTML=`<td>${t.name||"N/A"}</td><td>₹${t.price||"0"}</td><td>${t.description||"N/A"}</td><td><button class="btn btn-primary" onclick="editPlan('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deletePlan('${child.key}')">Delete</button></td>`})})}
function initializeUserChat(){const e=auth.currentUser;e&&db.ref(`chats/${e.uid}/messages`).orderByChild("timestamp").on("value",e=>{chatMessagesContainer.innerHTML="",e.exists()?e.forEach(child=>renderChatMessage(child.val().sender,child.val().text,child.val().timestamp)):chatMessagesContainer.innerHTML='<p style="text-align:center; color:#94a3b8;">Start a conversation!</p>',chatMessagesContainer.scrollTop=chatMessagesContainer.scrollHeight})}
function handleChatSubmit(e){e.preventDefault();const t=auth.currentUser,o=chatMessageInput.value.trim();if(t&&o){const e=firebase.database.ServerValue.TIMESTAMP;db.ref(`chats/${t.uid}/messages`).push({sender:"user",text:o,timestamp:e}),db.ref(`chats/${t.uid}/meta`).update({lastMessage:o,lastTimestamp:e,userName:t.displayName||t.email,hasUnreadAdminMessage:!0}),chatMessageInput.value=""}}
function renderChatMessage(e,t,o,n=chatMessagesContainer){const a=document.createElement("div");a.className=`chat-message ${e}`,a.innerHTML=`<div>${t}</div><div class="chat-message-time">${new Date(o).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>`,n.appendChild(a)}
function loadAdminChatList(){db.ref("chats").orderByChild("meta/lastTimestamp").on("value",async e=>{adminChatList.innerHTML="",e.exists()&&(chatList=[],e.forEach(e=>chatList.push({userId:e.key,...e.val().meta})),chatList.reverse().forEach(e=>{const t=document.createElement("div");t.className="admin-chat-list-item",t.dataset.userId=e.userId,t.innerHTML=`<strong>${e.userName}</strong><span>${e.lastMessage?e.lastMessage.substring(0,30)+"...":"N/A"}</span>`,t.addEventListener("click",()=>openAdminChat(e.userId,e.userName)),adminChatList.appendChild(t)}))})}
function openAdminChat(e,t){currentAdminChatUserId=e,document.querySelectorAll(".admin-chat-list-item").forEach(t=>t.classList.toggle("active",t.dataset.userId===e)),adminChatWindow.innerHTML=`<div class="chat-widget-header"><span>Chat with ${t}</span></div><div class="chat-messages" id="adminChatMessagesContainer"></div><form class="chat-input-form" id="adminChatInputForm"><input type="text" id="adminChatMessageInput" placeholder="Type reply..." required><button type="submit"><i class="fas fa-paper-plane"></i></button></form>`;const o=document.getElementById("adminChatMessagesContainer");db.ref(`chats/${e}/messages`).orderByChild("timestamp").on("value",e=>{o.innerHTML="",e.forEach(e=>renderChatMessage(e.val().sender,e.val().text,e.val().timestamp,o)),o.scrollTop=o.scrollHeight}),document.getElementById("adminChatInputForm").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("adminChatMessageInput").value.trim();t&&currentAdminChatUserId&&(db.ref(`chats/${currentAdminChatUserId}/messages`).push({sender:"admin",text:t,timestamp:firebase.database.ServerValue.TIMESTAMP}),db.ref(`chats/${currentAdminChatUserId}/meta`).update({hasUnreadAdminMessage:!1}),document.getElementById("adminChatMessageInput").value="")})}
async function loadDynamicUserDisplay(){const e=(await db.ref("settings").once("value")).val()||{};userNotificationCount.textContent=e.displayTotalUsersCount||"0";const t=[];(await db.ref("users").once("value")).forEach(e=>t.push(e.val().name));const o=[...new Set([...t,...e.displayUserNames||[]])];clearInterval(userNameRotationInterval),clearInterval(userNotificationBarInterval),userNotificationBar.classList.remove("show"),o.length>0&&(userNotificationBarInterval=setInterval(()=>{userNotificationBar.style.display="flex",userNotificationBar.classList.add("show"),userNameRotationInterval=setInterval(()=>{userNotificationName.classList.remove("slide-in-out"),void userNotificationName.offsetWidth,userNotificationName.classList.add("slide-in-out"),setTimeout(()=>{currentDynamicUserNameIndex=(currentDynamicUserNameIndex+1)%o.length,userNotificationName.textContent=o[currentDynamicUserNameIndex]},500)},5e3),setTimeout(()=>{userNotificationBar.classList.remove("show"),clearInterval(userNameRotationInterval)},7e3)},2e4))}
let currentDynamicUserNameIndex=0,userNameRotationInterval;
async function loadAdminSettings(){const e=(await db.ref("settings").once("value")).val()||{};maintenanceModeToggle.checked=e.maintenanceModeEnabled||!1,adminVerifyBadgePrice.value=e.adminVerifyBadgePrice||"",toolsSectionTitleInput.value=e.toolsSectionTitle||"",displayTotalUsersCountInput.value=e.displayTotalUsersCount||"",displayUserNamesInput.value=(e.displayUserNames||[]).join(", "),settingsAboutUsText.value=e.aboutUsText||"",settingsSugamEmail.value=e.contact?.sugamEmail||"",settingsDeveloperEmail.value=e.contact?.developerEmail||"",settingsYoutubeLink.value=e.socialLinks?.youtube||"",settingsInstagramLink.value=e.socialLinks?.instagram||"",settingsFacebookLink.value=e.socialLinks?.facebook||"",settingsTwitterLink.value=e.socialLinks?.twitter||""}
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,or,hi,bn,te,ta",autoDisplay:!1},"google_translate_element")}