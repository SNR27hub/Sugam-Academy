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
const shareButton = document.getElementById('shareButton');

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
const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';

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

// Update the video playing logic here
function openVideo(contentUrl) {
    window.open(contentUrl, '_blank');
}

// Existing event listener for content display
document.addEventListener('click', (e) => {
    const contentCard = e.target.closest('.content-card');
    if (contentCard) {
        const contentType = contentCard.dataset.contentType;
        const contentUrl = contentCard.dataset.contentUrl;
        const contentTitle = contentCard.dataset.contentTitle;

        if (contentType === 'video' && contentUrl) {
            openVideo(contentUrl);
        }
        // ... (other content types logic can be here)
    }
});
// Your provided share button code
shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Sugam Academy',
            text: 'Check out Sugam Academy - The best learning platform!',
            url: window.location.href
        }).catch(() => {
            copyToClipboard(window.location.href);
        });
    } else {
        copyToClipboard(window.location.href);
    }
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Link copied to clipboard!');
}

//... rest of the code
