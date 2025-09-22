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

// DOM Elements
const maintenanceModeContainer = document.getElementById('maintenance-mode');
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
const adminPanel = document.getElementById('adminPanel');
const adminLogout = document.getElementById('adminLogout');
const adminNavLinks = document.querySelectorAll('.admin-nav a');
const adminSections = document.querySelectorAll('.admin-section');
const teachersContainer = document.getElementById('teachersContainer');
const totalStudents = document.getElementById('totalStudents');
const premiumUsers = document.getElementById('premiumUsers');
const totalTeachers = document.getElementById('totalTeachers');
const pendingPayments = document.getElementById('pendingPayments');
const usersTableBody = document.getElementById('usersTableBody');
const paymentsTableBody = document.getElementById('paymentsTableBody');
const notificationsTableBody = document.getElementById('notificationsTableBody');
const deleteAllNotificationsBtn = document.getElementById('deleteAllNotificationsBtn');
const teachersTableBody = document.getElementById('teachersTableBody');
const addTeacherBtn = document.getElementById('addTeacherBtn');
const teacherFormContainer = document.getElementById('teacherFormContainer');
const teacherForm = document.getElementById('teacherForm');
const cancelTeacher = document.getElementById('cancelTeacher');
const addContentBtn = document.getElementById('addContentBtn');
const contentFormContainer = document.getElementById('contentFormContainer');
const contentForm = document.getElementById('contentForm');
const cancelContent = document.getElementById('cancelContent');
const adminContentGrid = document.getElementById('adminContentGrid');
const notificationForm = document.getElementById('notificationForm');
const videoContentGrid = document.getElementById('videoContentGrid');
const notesContentGrid = document.getElementById('notesContentGrid');
const quizContentGrid = document.getElementById('quizContentGrid');
const categorySelector = document.getElementById('categorySelector');
const contentType = document.getElementById('contentType');
const contentUrlGroup = document.getElementById('contentUrlGroup');
const contentUrlInput = document.getElementById('contentUrl');
const quizFields = document.getElementById('quizFields');
const contentAccess = document.getElementById('contentAccess');
const contentPriceContainer = document.getElementById('contentPriceContainer');
const tabLinks = document.querySelectorAll('.tab-link');
const contentTabs = document.querySelector('.content-tabs');
const contentSections = document.querySelectorAll('.content-section');
const premiumPaymentSection = document.getElementById('premiumPaymentSection');
const UTRNumberInput = document.getElementById('UTRNumber');
const displayPremiumAmount = document.getElementById('displayPremiumAmount');
const addPlanBtn = document.getElementById('addPlanBtn');
const planFormContainer = document.getElementById('planFormContainer');
const planForm = document.getElementById('planForm');
const cancelPlan = document.getElementById('cancelPlan');
const plansTableBody = document.getElementById('plansTableBody');
const buyModalTitle = document.getElementById('buyModalTitle');
const itemPriceToBuy = document.getElementById('itemPriceToBuy');
const itemUTRNumber = document.getElementById('itemUTRNumber');
const itemPaymentSection = document.getElementById('itemPaymentSection');
const bannerSlider = document.getElementById('bannerSlider');
const bannerSliderContainer = document.getElementById('bannerSliderContainer'); 
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentBannerButtonWrapper = document.getElementById('currentBannerButtonWrapper');
const heroDynamicBg = document.getElementById('heroDynamicBg');
const addBannerBtn = document.getElementById('addBannerBtn');
const bannerFormContainer = document.getElementById('bannerFormContainer');
const bannerForm = document.getElementById('bannerForm');
const cancelBanner = document.getElementById('cancelBanner');
const bannersTableBody = document.getElementById('bannersTableBody');
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
const generalSettingsForm = document.getElementById('generalSettingsForm');
const maintenanceModeToggle = document.getElementById('maintenanceModeToggle');
const adminVerifyBadgePrice = document.getElementById('adminVerifyBadgePrice');
const displayTotalUsersCountInput = document.getElementById('displayTotalUsersCount');
const displayUserNamesInput = document.getElementById('displayUserNames');
const settingsAboutUsText = document.getElementById('settingsAboutUsText');
const settingsSugamEmail = document.getElementById('settingsSugamEmail');
const settingsDeveloperEmail = document.getElementById('settingsDeveloperEmail');
const settingsYoutubeLink = document.getElementById('settingsYoutubeLink');
const settingsInstagramLink = document.getElementById('settingsInstagramLink');
const settingsFacebookLink = document.getElementById('settingsFacebookLink');
const settingsTwitterLink = document.getElementById('settingsTwitterLink');
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
const instagramCloseIcon = document.getElementById('instagramCloseIcon'); 
const instagramPopupContainer = instagramPopupModal.querySelector('.popup-container'); 
const instagramFollowBtn = instagramPopupModal.querySelector('.follow-btn'); 
const instagramCloseBtnInner = instagramPopupModal.querySelector('.close-btn'); 
const instagramFollowerCount = document.getElementById('follower-count');
const chatFab = document.getElementById('chatFab');
const chatWidget = document.getElementById('chatWidget');
const closeChatWidget = document.getElementById('closeChatWidget');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');
const chatInputForm = document.getElementById('chatInputForm');
const chatMessageInput = document.getElementById('chatMessageInput');
const adminChatList = document.getElementById('adminChatList');
const adminChatWindow = document.getElementById('adminChatWindow');
const notificationToastContainer = document.getElementById('notificationToastContainer');
const shareButton = document.getElementById('shareButton');
const searchInput = document.getElementById('searchInput');
const toolsSection = document.getElementById('toolsSection');
const toolsGrid = document.getElementById('toolsGrid');
const toolsSectionTitle = document.getElementById('toolsSectionTitle');
const toolsSectionAdmin = document.getElementById('toolsSectionAdmin');
const addToolBtn = document.getElementById('addToolBtn');
const toolFormContainer = document.getElementById('toolFormContainer');
const toolForm = document.getElementById('toolForm');
const cancelTool = document.getElementById('cancelTool');
const toolsTableBody = document.getElementById('toolsTableBody');
const toolsSectionTitleForm = document.getElementById('toolsSectionTitleForm');
const toolsSectionTitleInput = document.getElementById('toolsSectionTitleInput');

let currentVideoToBuy = {}; 
let currentPaymentType = ''; 
let currentQuizData = null; 
let currentQuizId = null; 
let currentAdminChatUserId = null; 
let currentUserView = '+2';
let currentBannerIndex = 0;
let bannerInterval;
let popupAutoCloseTimer;
let followerUpdateInterval;
let displayedUserNames = [];
let userNameRotationInterval;
let userNotificationBarInterval;
let lastNotificationTimestamp = 0;
const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';

// --- INITIALIZATION ---

// Check for maintenance mode first
async function checkMaintenanceMode() {
    try {
        const settingsSnap = await db.ref('settings/maintenanceMode').once('value');
        if (settingsSnap.val() === true) {
            maintenanceModeContainer.style.display = 'flex';
            // Stop further execution
            return true;
        }
    } catch (error) {
        console.error("Could not check maintenance mode, proceeding with caution.", error);
    }
    return false;
}

// Main App Initialization
async function initializeApp() {
    const isMaintenance = await checkMaintenanceMode();
    if (isMaintenance) return; // Halt if in maintenance mode

    auth.onAuthStateChanged(user => {
        if (user) {
            db.ref('users/' + user.uid).on('value', snap => {
                const userData = snap.val();
                if (userData && user.email === 'sugamacadamy@gmail.com') { // Use a more secure admin check in production
                    showAdminPanel();
                } else if (userData) {
                    updateUI(userData);
                } else {
                     // Handle case where user exists in auth but not in db
                    auth.signOut();
                }
            }, error => {
                console.error("Error fetching user data:", error);
                auth.signOut();
            });
        } else {
            updateUI(null);
        }
    });
}

// --- UI & EVENT LISTENERS ---

profileMenuToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdownMenu.style.display = profileDropdownMenu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', (e) => {
    if (profileDropdownMenu.style.display === 'block' && !profileDropdownMenu.contains(e.target) && !profileMenuToggleBtn.contains(e.target)) {
        profileDropdownMenu.style.display = 'none';
    }
});
loginRegisterBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    showLoginTab.click();
});
dropdownGoPremiumBtn.addEventListener('click', () => {
    profileDropdownMenu.style.display = 'none';
    openPremiumModal();
});
dropdownLogoutBtn.addEventListener('click', () => auth.signOut());
myPurchasesLink.addEventListener('click', (e) => {
    e.preventDefault();
    profileDropdownMenu.style.display = 'none';
    openMyPurchasesModal();
});
myFavoritesLink.addEventListener('click', (e) => {
    e.preventDefault();
    profileDropdownMenu.style.display = 'none';
    openMyFavoritesModal();
});
getVerifiedBadgeLink.addEventListener('click', async (e) => {
    e.preventDefault();
    profileDropdownMenu.style.display = 'none';
    const settingsSnap = await db.ref('settings').once('value');
    const settings = settingsSnap.val();
    const badgePrice = settings?.adminVerifyBadgePrice || 100;
    openBuyModal('verifyBadge', 'Get Verified Badge', badgePrice);
});
viewNotificationsLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Notifications section coming soon!');
    profileDropdownMenu.style.display = 'none';
});
closeModalButtons.forEach(button => {
    if (button.id !== 'instagramCloseIcon') {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
});
showLoginTab.addEventListener('click', () => {
    showLoginTab.classList.add('active');
    showRegisterTab.classList.remove('active');
    loginFormContainer.style.display = 'block';
    registerFormContainer.style.display = 'none';
});
showRegisterTab.addEventListener('click', () => {
    showRegisterTab.classList.add('active');
    showLoginTab.classList.remove('active');
    registerFormContainer.style.display = 'block';
    loginFormContainer.style.display = 'none';
});
categorySelector.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const selectedCategory = e.target.dataset.category;
        if (selectedCategory === currentUserView) return;
        categorySelector.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentUserView = selectedCategory;
        const user = auth.currentUser;
        if(user) {
            db.ref('users/' + user.uid).once('value').then(snap => {
                const userData = snap.val() || {};
                loadContent(true, userData.premium, userData.purchasedVideos, userData.favorites, currentUserView);
                db.ref('users/' + user.uid).update({ currentView: currentUserView });
            });
        } else {
            loadContent(false, false, {}, {}, currentUserView);
        }
    }
});
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        contentTabs.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        contentTabs.querySelector(`.tab-link[data-tab="${tab}"]`).classList.add('active');
        document.querySelectorAll('#content .content-section').forEach(s => s.style.display = 'none');
        document.getElementById(tab).style.display = 'block';
        document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
    });
});
adminNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        adminNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        adminSections.forEach(s => s.classList.remove('active'));
        let targetSectionId;
        if (section === 'tools') {
            targetSectionId = 'toolsSectionAdmin'; // Special case for admin tool section
        } else {
            targetSectionId = `${section}Section`;
        }
        document.getElementById(targetSectionId).classList.add('active');
        
        // Load data for the selected section
        if (section === 'settings') loadAdminSettings();
        else if (section === 'chats') loadAdminChatList();
        else if (section === 'tools') loadAdminTools();
    });
});
contentAccess.addEventListener('change', () => {
    const isPaid = (contentAccess.value === 'premium' || contentAccess.value === 'buy');
    contentPriceContainer.style.display = isPaid ? 'block' : 'none';
    document.getElementById('contentPrice').required = isPaid;
});
contentType.addEventListener('change', () => {
    const isQuiz = contentType.value === 'quiz';
    quizFields.style.display = isQuiz ? 'block' : 'none';
    contentUrlInput.required = !isQuiz; 
    document.getElementById('quizQuestion').required = isQuiz && !contentUrlInput.value;
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const contentCards = document.querySelectorAll('#content .content-card');

    contentCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// --- UI UPDATE FUNCTIONS ---

async function updateUI(userData) {
    document.body.style.display = 'block';
    adminPanel.style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.hero').style.display = 'flex'; 
    document.querySelector('footer').style.display = 'block';
    document.querySelectorAll('section:not(.hero)').forEach(s => {
        if(s.id !== 'adminPanel') s.style.display = 'block'; 
    });
    document.getElementById('content').style.display = 'none';
    
    if (userData && userData.name) {
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
        initializeNotifications();
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
        loadContent(false, false, {}, {}, currentUserView);
        chatFab.style.display = 'none';
        chatWidget.style.display = 'none';
    }
    
    // Load content for all users
    loadTeachers();
    loadBanners();
    loadToolsSection();
    loadTopScorer();
    loadDynamicUserDisplay();
    await renderFooter();
}

async function showAdminPanel() {
    adminPanel.style.display = 'block';
    document.body.style.paddingTop = '0'; // Remove padding for admin view
    document.querySelectorAll('body > *:not(.admin-panel)').forEach(el => {
        el.style.display = 'none';
    });
    closeInstagramPopup();
    
    // Load all admin data
    loadDashboardStats();
    loadUsers();
    loadPayments();
    loadAdminNotifications();
    loadAdminTeachers();
    loadAdminContent();
    loadAdminPlans();
    loadAdminBanners();
    loadAdminChatList();
    loadAdminTools();
    await loadAdminSettings();
}


// --- AUTHENTICATION ---

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            authModal.style.display = 'none';
            loginForm.reset();
        })
        .catch((error) => {
            alert(error.message);
        });
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
        .catch((error) => {
            alert(error.message);
        });
});

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Please enter your email address:');
    if (email) {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                alert(error.message);
            });
    }
});

adminLogout.addEventListener('click', () => auth.signOut());


// --- DATA LOADING & RENDERING (USER FACING) ---

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
    if (slides.length === 0) {
        currentBannerButtonWrapper.style.display = 'none';
        heroDynamicBg.style.backgroundImage = 'none';
        return;
    }

    const updateSliderAndButton = () => {
        const offset = -currentBannerIndex * 100;
        bannerSlider.style.transition = 'transform 0.5s ease-out';
        bannerSlider.style.transform = `translateX(${offset}%)`;

        const currentBanner = banners[currentBannerIndex];
        currentBannerButtonWrapper.innerHTML = '';
        if (currentBanner?.buttonText && currentBanner?.buttonUrl) {
            const buttonHtml = `<a href="${currentBanner.buttonUrl}" target="_blank" class="btn btn-primary">${currentBanner.buttonText}</a>`;
            currentBannerButtonWrapper.innerHTML = buttonHtml;
            currentBannerButtonWrapper.style.display = 'block';
        } else {
            currentBannerButtonWrapper.style.display = 'none';
        }
        
        // Update dynamic background
        const currentImageUrl = banners[currentBannerIndex]?.imageUrl;
        heroDynamicBg.style.backgroundImage = currentImageUrl ? `url('${currentImageUrl}')` : 'none';

        resetAutoSlide();
    };

    const nextSlide = () => {
        currentBannerIndex = (currentBannerIndex + 1) % slides.length;
        updateSliderAndButton();
    };
    
    const startAutoSlide = () => {
        if (slides.length > 1) {
            bannerInterval = setInterval(nextSlide, 5000);
        }
    };
    
    const resetAutoSlide = () => {
        clearInterval(bannerInterval);
        startAutoSlide();
    };

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', () => {
        currentBannerIndex = (currentBannerIndex - 1 + slides.length) % slides.length;
        updateSliderAndButton();
    });

    currentBannerIndex = 0;
    updateSliderAndButton();
}

function loadContent(isLoggedIn, isPremium, purchasedVideos = {}, favorites = {}, category) {
    document.getElementById('content').style.display = 'block';
    const contentRef = db.ref('content');
    contentRef.orderByChild('category').equalTo(category).on('value', snapshot => {
        videoContentGrid.innerHTML = '';
        notesContentGrid.innerHTML = '';
        quizContentGrid.innerHTML = '';
        const videoFragment = document.createDocumentFragment();
        const notesFragment = document.createDocumentFragment();
        const quizFragment = document.createDocumentFragment();
        let hasContent = false;
        
        if (snapshot.exists()) {
            snapshot.forEach(child => {
                hasContent = true;
                const content = child.val();
                const contentId = child.key;
                const card = createContentCard(content, contentId, isLoggedIn, isPremium, purchasedVideos, favorites);
                if (content.type === 'video') videoFragment.appendChild(card);
                else if (content.type === 'note') notesFragment.appendChild(card);
                else if (content.type === 'quiz') quizFragment.appendChild(card);
            });
        }

        if(!hasContent) {
            const noContentMsg = `<p class="text-center" style="grid-column: 1 / -1;">No content found for the ${category} section. Check back soon!</p>`;
            videoContentGrid.innerHTML = noContentMsg;
            notesContentGrid.innerHTML = noContentMsg;
            quizContentGrid.innerHTML = noContentMsg;
        } else {
            videoContentGrid.appendChild(videoFragment);
            notesContentGrid.appendChild(notesFragment);
            quizContentGrid.appendChild(quizFragment);
        }
    });
}

function createContentCard(content, contentId, isLoggedIn, isPremium, purchasedVideos, favorites) {
    const card = document.createElement('div');
    card.className = 'content-card';
    let actionButton = '', badge = '', favoriteButton = '';
    
    if (isLoggedIn) {
        const isFavorited = favorites && favorites[contentId];
        favoriteButton = `<button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${contentId}')"><i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i></button>`;
    }

    let thumbHtml = '';
    if (content.thumbnailUrl) {
        thumbHtml = `<img src="${content.thumbnailUrl}" alt="${content.title}" loading="lazy">`;
    } else {
        let iconClass = 'fas fa-question';
        if (content.type === 'video') iconClass = 'fas fa-video';
        else if (content.type === 'note') iconClass = 'fas fa-file-pdf';
        thumbHtml = `<i class="${iconClass}"></i>`;
    }

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
        <div class="content-thumb">${thumbHtml}</div>
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
        const fragment = document.createDocumentFragment();
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
                ? `<div class="teacher-image-slider" data-current="0">${photos.map((url, index) => `<div class="slide ${index === 0 ? 'active' : ''}"><img src="${url}" alt="${teacher.name || 'Teacher'}" loading="lazy"></div>`).join('')}</div>`
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
                        if (slides.length <= 1) { clearInterval(intervalId); return; }
                        let current = parseInt(slider.dataset.current, 10);
                        slides[current].classList.remove('active');
                        current = (current + 1) % slides.length;
                        slides[current].classList.add('active');
                        slider.dataset.current = current;
                    }, 3000);
                });
                teacherCard.addEventListener('mouseleave', () => {
                    clearInterval(intervalId);
                    intervalId = null;
                });
            }
            fragment.appendChild(teacherCard);
        });
        teachersContainer.appendChild(fragment);
    });
}

function loadToolsSection() {
    const toolsRef = db.ref('tools');
    toolsRef.on('value', snapshot => {
        const toolsData = snapshot.val();
        if (toolsData && toolsData.items && Object.keys(toolsData.items).length > 0) {
            toolsSectionTitle.textContent = toolsData.title || 'All-in-One Student Tools';
            toolsGrid.innerHTML = '';
            const fragment = document.createDocumentFragment();
            for (const key in toolsData.items) {
                const tool = toolsData.items[key];
                const toolCard = document.createElement('a');
                toolCard.href = tool.link;
                toolCard.target = '_blank';
                toolCard.rel = 'noopener noreferrer';
                toolCard.className = 'tool-card';
                
                const imageHtml = tool.imageUrl 
                    ? `<img src="${tool.imageUrl}" alt="${tool.name}" loading="lazy">`
                    : `<div class="tool-icon"><i class="fas fa-link"></i></div>`;
                
                toolCard.innerHTML = `
                    ${imageHtml}
                    <h4>${tool.name}</h4>
                `;
                fragment.appendChild(toolCard);
            }
            toolsGrid.appendChild(fragment);
            toolsSection.style.display = 'block';
        } else {
            toolsSection.style.display = 'none';
        }
    });
}


// --- ADMIN PANEL FUNCTIONS ---

function loadDashboardStats() {
    db.ref('users').once('value').then(snap => {
        totalStudents.textContent = snap.numChildren();
        let premiumCount = 0;
        snap.forEach(child => {
            if (child.val().premium) premiumCount++;
        });
        premiumUsers.textContent = premiumCount;
    });
    db.ref('teachers').once('value').then(snap => totalTeachers.textContent = snap.numChildren());
    db.ref('payments').orderByChild('status').equalTo('pending').once('value').then(snap => {
        pendingPayments.textContent = snap.numChildren();
    });
}

function loadUsers() {
    db.ref('users').on('value', snapshot => {
        usersTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const user = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name || 'N/A'} ${user.isVerified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</td>
                <td>${user.email || 'N/A'}</td>
                <td>${user.premium ? '<span class="premium-badge">Premium</span>' : 'Free'}</td>
                <td>
                    <button class="btn btn-primary" onclick="editUser('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="blockUser('${child.key}')">Block</button>
                </td>
            `;
            usersTableBody.appendChild(row);
        });
    });
}

function loadPayments() {
    db.ref('payments').on('value', snapshot => {
        paymentsTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        const paymentPromises = [];
        snapshot.forEach(child => {
            const payment = { ...child.val(), key: child.key };
            paymentPromises.push(
                db.ref('users/' + payment.userId).once('value').then(userSnap => ({ payment, user: userSnap.val() }))
            );
        });
        Promise.all(paymentPromises).then(results => {
            results.reverse().forEach(({ payment, user }) => { // Show newest first
                const row = document.createElement('tr');
                let actionButtons = '';
                if (payment.status === 'pending') {
                     if (payment.type === 'premium') actionButtons = `<button class="btn btn-primary" onclick="verifyPremiumPayment('${payment.key}', '${payment.userId}')">Verify</button>`;
                     else if (payment.type === 'video') actionButtons = `<button class="btn btn-primary" onclick="verifyVideoPayment('${payment.key}', '${payment.userId}', '${payment.contentId}')">Verify</button>`;
                     else if (payment.type === 'verifyBadge') actionButtons = `<button class="btn btn-primary" onclick="verifyBadgePayment('${payment.key}', '${payment.userId}')">Verify</button>`;
                    actionButtons += `<button class="btn btn-outline" onclick="rejectPayment('${payment.key}')">Reject</button>`;
                } else if (payment.status === 'verified') actionButtons = `<span style="color: var(--success); font-weight: 600;">Successful</span>`;
                else if (payment.status === 'rejected') actionButtons = `<span style="color: var(--danger); font-weight: 600;">Rejected</span>`;
                row.innerHTML = `
                    <td>${user ? (user.name || 'N/A') : 'N/A'}</td>
                    <td>${payment.utr || 'N/A'}</td>
                    <td>₹${payment.amount || '0'} (${payment.title || payment.type})</td>
                    <td><span class="status-badge status-${payment.status || 'pending'}">${(payment.status || 'pending').charAt(0).toUpperCase() + (payment.status || 'pending').slice(1)}</span></td>
                    <td>${payment.screenshotUrl ? `<a href="${payment.screenshotUrl}" target="_blank">View</a>` : 'None'}</td>
                    <td>${actionButtons}</td>
                `;
                paymentsTableBody.appendChild(row);
            });
        });
    });
}

// All other admin functions (loadAdminNotifications, loadAdminTeachers, etc.) remain largely the same, but with the new features added below.

// --- NEW ADMIN "TOOLS" SECTION MANAGEMENT ---

function loadAdminTools() {
    db.ref('tools').on('value', snapshot => {
        const toolsData = snapshot.val() || { title: '', items: {} };
        toolsSectionTitleInput.value = toolsData.title || '';
        toolsTableBody.innerHTML = '';
        if (toolsData.items) {
            Object.entries(toolsData.items).forEach(([key, tool]) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${tool.name}</td>
                    <td><img src="${tool.imageUrl || 'https://via.placeholder.com/50'}" style="width: 50px; height: 50px; object-fit: cover;"></td>
                    <td><a href="${tool.link}" target="_blank">${tool.link}</a></td>
                    <td>
                        <button class="btn btn-primary" onclick="editTool('${key}')">Edit</button>
                        <button class="btn btn-outline" onclick="deleteTool('${key}')">Delete</button>
                    </td>
                `;
                toolsTableBody.appendChild(row);
            });
        }
    });
}

toolsSectionTitleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTitle = toolsSectionTitleInput.value.trim();
    if (newTitle) {
        db.ref('tools/title').set(newTitle)
            .then(() => alert('Tools section title updated successfully!'))
            .catch(error => alert('Error: ' + error.message));
    }
});

addToolBtn.addEventListener('click', () => {
    toolForm.reset();
    toolForm.dataset.editId = '';
    toolFormContainer.style.display = 'block';
});

cancelTool.addEventListener('click', () => {
    toolFormContainer.style.display = 'none';
});

toolForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('toolName').value.trim();
    const link = document.getElementById('toolLink').value.trim();
    const imageUrl = document.getElementById('toolImageUrl').value.trim();
    if (!name || !link) {
        alert('Tool Name and URL are required.');
        return;
    }
    const toolData = { name, link, imageUrl: imageUrl || null };
    const editId = toolForm.dataset.editId;
    const toolRef = editId ? db.ref('tools/items/' + editId) : db.ref('tools/items').push();
    
    toolRef.set(toolData)
        .then(() => {
            alert(`Tool ${editId ? 'updated' : 'added'} successfully!`);
            toolFormContainer.style.display = 'none';
        })
        .catch(error => alert('Error: ' + error.message));
});

function editTool(id) {
    db.ref('tools/items/' + id).once('value').then(snap => {
        const tool = snap.val();
        document.getElementById('toolName').value = tool.name || '';
        document.getElementById('toolLink').value = tool.link || '';
        document.getElementById('toolImageUrl').value = tool.imageUrl || '';
        toolForm.dataset.editId = id;
        toolFormContainer.style.display = 'block';
    });
}

function deleteTool(id) {
    if (confirm('Are you sure you want to delete this tool?')) {
        db.ref('tools/items/' + id).remove().then(() => alert('Tool deleted successfully!'));
    }
}


// --- MODIFIED ADMIN CONTENT MANAGEMENT ---

addContentBtn.addEventListener('click', () => {
    contentForm.reset();
    contentForm.dataset.editId = '';
    contentPriceContainer.style.display = 'none';
    quizFields.style.display = 'none'; 
    document.getElementById('contentType').value = 'video';
    contentUrlInput.required = true; 
    contentFormContainer.style.display = 'block';
});

cancelContent.addEventListener('click', () => contentFormContainer.style.display = 'none');

contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('contentTitle').value.trim();
    const category = document.getElementById('contentCategory').value;
    const type = document.getElementById('contentType').value;
    const url = contentUrlInput.value.trim();
    const thumbnailUrl = document.getElementById('contentThumbnailUrl').value.trim();
    const access = document.getElementById('contentAccess').value;
    const price = parseFloat(document.getElementById('contentPrice').value) || null;
    
    if (!title || !category) { alert('Title and Category are required.'); return; }
    if (type !== 'quiz' && !url) { alert('URL is required for Videos and Notes.'); return; }
    if ((access === 'premium' || access === 'buy') && (!price || price <= 0)) { alert('Price is required for Premium/Buy content.'); return; }
    
    const data = { title, category, type, access, price, thumbnailUrl: thumbnailUrl || null };

    if (type === 'quiz') {
        const question = document.getElementById('quizQuestion').value.trim();
        const options = [
            document.getElementById('quizOption1').value.trim(),
            document.getElementById('quizOption2').value.trim(),
            document.getElementById('quizOption3').value.trim(),
            document.getElementById('quizOption4').value.trim()
        ].filter(opt => opt);
        const correctAnswer = document.getElementById('quizCorrectAnswer').value.trim();
        
        if (!url && (!question || options.length < 2 || !correctAnswer)) {
            alert('For a Quiz, provide either a URL or a full Question, Options, and Correct Answer.'); return;
        }
        if (question) {
            data.question = question; data.options = options; data.correctAnswer = correctAnswer;
        }
        data.url = url || null;
    } else { 
        data.url = url; 
    }
    
    const editId = contentForm.dataset.editId;
    const contentRef = editId ? db.ref('content/' + editId) : db.ref('content').push();
    contentRef.set(data)
        .then(() => {
            alert(`Content ${editId ? 'updated' : 'added'} successfully!`);
            contentFormContainer.style.display = 'none';
        })
        .catch(error => alert('Error: ' + error.message));
});

function editContent(id) {
    db.ref('content/' + id).once('value').then(snap => {
        const content = snap.val();
        document.getElementById('contentTitle').value = content.title || '';
        document.getElementById('contentCategory').value = content.category || '+2';
        document.getElementById('contentType').value = content.type || 'video';
        contentUrlInput.value = content.url || '';
        document.getElementById('contentThumbnailUrl').value = content.thumbnailUrl || '';
        document.getElementById('contentAccess').value = content.access || 'free';
        document.getElementById('contentPrice').value = content.price || '';
        
        contentPriceContainer.style.display = (content.access !== 'free') ? 'block' : 'none';
        quizFields.style.display = content.type === 'quiz' ? 'block' : 'none';
        
        if (content.type === 'quiz') {
            document.getElementById('quizQuestion').value = content.question || '';
            document.getElementById('quizOption1').value = content.options?.[0] || '';
            document.getElementById('quizOption2').value = content.options?.[1] || '';
            document.getElementById('quizOption3').value = content.options?.[2] || '';
            document.getElementById('quizOption4').value = content.options?.[3] || '';
            document.getElementById('quizCorrectAnswer').value = content.correctAnswer || '';
        }
        
        contentForm.dataset.editId = id;
        contentFormContainer.style.display = 'block';
        // Scroll the form into view for better user experience
        contentFormContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}


// --- NOTIFICATION SYSTEM ---

function initializeNotifications() {
    const notificationsRef = db.ref('notifications');

    // Get the initial count of notifications
    notificationsRef.once('value', snap => {
        const count = snap.numChildren();
        notificationCount.textContent = count;
        dropdownNotificationCount.textContent = count;
        notificationBell.style.display = (count > 0 && auth.currentUser) ? 'flex' : 'none';
    });

    // Listen for new notifications added
    // We get the timestamp of the last known notification to avoid showing old ones
    notificationsRef.orderByChild('date').limitToLast(1).once('value', snap => {
        snap.forEach(child => {
            lastNotificationTimestamp = child.val().date;
        });
    });

    notificationsRef.orderByChild('date').startAt(Date.now()).on('child_added', snap => {
        const notification = snap.val();
        if (notification.date > lastNotificationTimestamp) {
            showToastNotification(notification);
            lastNotificationTimestamp = notification.date;
            
            // Update notification bell count in real-time
            const currentCount = parseInt(notificationCount.textContent, 10) + 1;
            notificationCount.textContent = currentCount;
            dropdownNotificationCount.textContent = currentCount;
            notificationBell.style.display = 'flex';
        }
    });
}

function showToastNotification(notification) {
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.id = toastId;

    let iconHtml = notification.imageUrl 
        ? `<img src="${notification.imageUrl}" alt="${notification.title}">`
        : `<div class="toast-icon"><i class="fas fa-info-circle"></i></div>`;
    
    toast.innerHTML = `
        ${iconHtml}
        <div class="notification-toast-content">
            <h4>${notification.title}</h4>
            <p>${notification.message}</p>
        </div>
        <button class="toast-close-btn" onclick="document.getElementById('${toastId}').remove()">&times;</button>
    `;
    
    notificationToastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { 
        toast.classList.remove('show'); 
        setTimeout(() => toast.remove(), 500); 
    }, 10000);
}

// --- ADMIN SETTINGS ---
async function loadAdminSettings() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    maintenanceModeToggle.checked = settings.maintenanceMode || false;
    adminVerifyBadgePrice.value = settings.adminVerifyBadgePrice || '';
    displayTotalUsersCountInput.value = settings.displayTotalUsersCount || '';
    displayUserNamesInput.value = (settings.displayUserNames || []).join(', ');
    settingsAboutUsText.value = settings.aboutUsText || '';
    settingsSugamEmail.value = settings.contact?.sugamEmail || '';
    settingsDeveloperEmail.value = settings.contact?.developerEmail || '';
    settingsYoutubeLink.value = settings.socialLinks?.youtube || '';
    settingsInstagramLink.value = settings.socialLinks?.instagram || '';
    settingsFacebookLink.value = settings.socialLinks?.facebook || '';
    settingsTwitterLink.value = settings.socialLinks?.twitter || '';
}

generalSettingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const settingsData = {
        maintenanceMode: maintenanceModeToggle.checked,
        adminVerifyBadgePrice: parseFloat(adminVerifyBadgePrice.value) || null,
        displayTotalUsersCount: displayTotalUsersCountInput.value.trim() || null,
        displayUserNames: displayUserNamesInput.value.split(',').map(n => n.trim()).filter(Boolean),
        aboutUsText: settingsAboutUsText.value.trim() || null,
        contact: { 
            sugamEmail: settingsSugamEmail.value.trim() || null, 
            developerEmail: settingsDeveloperEmail.value.trim() || null 
        },
        socialLinks: { 
            youtube: settingsYoutubeLink.value.trim() || null, 
            instagram: settingsInstagramLink.value.trim() || null, 
            facebook: settingsFacebookLink.value.trim() || null, 
            twitter: settingsTwitterLink.value.trim() || null 
        }
    };
    await db.ref('settings').update(settingsData);
    alert('Settings saved!');
    loadDynamicUserDisplay();
    renderFooter();
});

// --- MISC & UTILITY FUNCTIONS ---
// Other functions like payment handling, modals, popups, footer rendering, etc. remain the same.
// Only functions that were directly modified or added are highlighted above.
// For brevity, the rest of the original, unmodified JS functions are assumed to be here.
// ... (All other unmodified functions from the original script.js file) ...


// --- Final Call to Initialize ---
initializeApp();