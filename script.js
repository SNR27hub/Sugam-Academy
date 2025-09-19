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

// UPI Configuration
const UPI_VPA = 'mrperfect11457@oksbi';
const UPI_NAME = 'Sugam Academy';
const UPI_CURRENCY = 'INR';

// DOM Elements
const bannerSlider = document.getElementById('bannerSlider');
const bannerSliderContainer = document.getElementById('bannerSliderContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentBannerButtonWrapper = document.getElementById('currentBannerButtonWrapper');
const heroDynamicBg = document.getElementById('heroDynamicBg');
const shareButton = document.getElementById('shareButton');
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
const galleryContentGrid = document.getElementById('galleryContentGrid');
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
const addGalleryItemBtn = document.getElementById('addGalleryItemBtn');
const galleryFormContainer = document.getElementById('galleryFormContainer');
const galleryForm = document.getElementById('galleryForm');
const cancelGalleryItem = document.getElementById('cancelGalleryItem');
const galleryTableBody = document.getElementById('galleryTableBody');
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

// Global State Variables
let currentVideoToBuy = {}; 
let currentPaymentType = ''; 
let currentQuizData = null; 
let currentQuizId = null; 
let currentAdminChatUserId = null; 
let currentUserView = '+2';
let popupAutoCloseTimer;
let followerUpdateInterval;
let displayedUserNames = [];
let userNameRotationInterval;
let userNotificationBarInterval;
const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';

// *** FINAL, RELIABLE BANNER SLIDER LOGIC ***
let initBannerSlider = (function() {
    let listenersAttached = false;
    let autoSlideInterval;

    return function(banners) {
        const slides = bannerSlider.querySelectorAll('.banner-slide');
        if (slides.length === 0) {
            bannerSliderContainer.style.display = 'none';
            return;
        }
        
        bannerSliderContainer.style.display = 'block';
        let currentIndex = 0;

        const goToSlide = (index) => {
            if (slides.length === 0) return;
            
            slides.forEach(slide => slide.classList.remove('active'));
            
            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }
            
            currentIndex = index;
            slides[currentIndex].classList.add('active');

            const currentBanner = banners[currentIndex];
            if (currentBanner) {
                heroDynamicBg.style.backgroundImage = currentBanner.imageUrl ? `url('${currentBanner.imageUrl}')` : 'none';
                
                currentBannerButtonWrapper.innerHTML = '';
                if (currentBanner.buttonText && currentBanner.buttonUrl) {
                    const buttonHtml = `<a href="${currentBanner.buttonUrl}" target="_blank" class="btn btn-primary">${currentBanner.buttonText}</a>`;
                    currentBannerButtonWrapper.innerHTML = buttonHtml;
                }
            }
        };

        const nextSlide = () => goToSlide(currentIndex + 1);
        const prevSlide = () => goToSlide(currentIndex - 1);

        const startAutoSlide = () => {
            clearInterval(autoSlideInterval);
            if (slides.length > 1) {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
        };

        if (!listenersAttached) {
            prevBtn.addEventListener('click', () => { 
                prevSlide(); 
                startAutoSlide();
            });
            nextBtn.addEventListener('click', () => { 
                nextSlide(); 
                startAutoSlide();
            });
            listenersAttached = true;
        }
        
        goToSlide(0);
        startAutoSlide();
    };
})();

function loadBanners() {
    db.ref('banners').on('value', snapshot => {
        bannerSlider.innerHTML = '';
        const banners = [];
        snapshot.forEach(child => {
            const banner = { key: child.key, ...child.val() };
            const startDate = banner.startDate ? new Date(banner.startDate) : null;
            const endDate = banner.endDate ? new Date(banner.endDate) : null;
            const today = new Date();
            if ((!startDate || today >= startDate) && (!endDate || today <= endDate)) {
                banners.push(banner);
            }
        });
        
        banners.sort((a, b) => (a.order || 999) - (b.order || 999));
        
        if (banners.length > 0) {
            banners.forEach(banner => {
                const slide = document.createElement('div');
                slide.className = 'banner-slide';
                slide.innerHTML = `<img src="${banner.imageUrl}" alt="${banner.title || 'Banner Image'}">`;
                bannerSlider.appendChild(slide);
            });
            initBannerSlider(banners);
        } else {
            bannerSliderContainer.style.display = 'none';
        }
    });
}
// *** END OF BANNER LOGIC ***

// --- ALL OTHER FUNCTIONS AND EVENT LISTENERS ---

auth.onAuthStateChanged(user => {
    // ... same as before
});

// ... all other functions like updateUI, login, register, loadContent, etc. are exactly the same as the very first version you provided.
// To avoid a huge response, I am omitting them, but you should have them in your file.
// The only other functions that changed are the ones for the Admin Panel banners, which are below:

function loadAdminBanners() {
    db.ref('banners').orderByChild('order').on('value', snapshot => {
        bannersTableBody.innerHTML = ''; 
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const b = child.val(); 
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${b.order || 'N/A'}</td>
                <td>${b.title || 'N/A'}</td>
                <td><img src="${b.imageUrl}" style="width: 100px; border-radius: 4px;"></td>
                <td>${b.buttonText || 'N/A'}</td>
                <td>${b.startDate || 'N/A'} to ${b.endDate || 'N/A'}</td>
                <td><button class="btn btn-primary" onclick="editBanner('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteBanner('${child.key}')">Delete</button></td>
            `;
            bannersTableBody.appendChild(row);
        });
    });
}

bannerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const title = document.getElementById('bannerTitle').value.trim(); 
    const imageUrl = document.getElementById('bannerImageUrl').value.trim();
    const order = parseInt(document.getElementById('bannerOrder').value) || 999;
    
    if (!title || !imageUrl) return alert('Title and Image URL are required.');

    const data = { 
        title, 
        imageUrl, 
        order,
        description: document.getElementById('bannerDescription').value.trim() || null, 
        buttonText: document.getElementById('bannerButtonText').value.trim() || null, 
        buttonUrl: document.getElementById('bannerButtonUrl').value.trim() || null, 
        startDate: document.getElementById('bannerStartDate').value || null, 
        endDate: document.getElementById('bannerEndDate').value || null 
    };
    const editId = bannerForm.dataset.editId;
    if (editId) {
        db.ref('banners/' + editId).update(data).then(() => alert('Banner updated!'));
    } else {
        db.ref('banners').push(data).then(() => alert('Banner added!'));
    }
    bannerFormContainer.style.display = 'none';
});

function editBanner(id) {
    db.ref('banners/' + id).once('value').then(snap => {
        const b = snap.val(); 
        document.getElementById('bannerTitle').value = b.title || ''; 
        document.getElementById('bannerOrder').value = b.order || '';
        document.getElementById('bannerDescription').value = b.description || ''; 
        document.getElementById('bannerImageUrl').value = b.imageUrl || '';
        document.getElementById('bannerButtonText').value = b.buttonText || ''; 
        document.getElementById('bannerButtonUrl').value = b.buttonUrl || ''; 
        document.getElementById('bannerStartDate').value = b.startDate || ''; 
        document.getElementById('bannerEndDate').value = b.endDate || '';
        bannerForm.dataset.editId = id; 
        bannerFormContainer.style.display = 'block';
    });
}
// ... all other functions from your original script should follow here
