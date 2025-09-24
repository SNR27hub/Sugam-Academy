// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Although not directly used in script.js logic, keeping as per your new config
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, push, set, update, remove, onValue, get, child, query, orderByChild, equalTo, startAt } from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";


// Your new Firebase configuration
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialized but not used in this script's logic
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

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
const quizQuestionContainer = document.getElementById('quizQuestionContainer'); // NEW: Added for quiz modal control
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
// const galleryContentGrid = document.getElementById('galleryContentGrid'); // REMOVED: Gallery section is being removed
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
// const addGalleryItemBtn = document.getElementById('addGalleryItemBtn'); // REMOVED: Gallery section is being removed
// const galleryFormContainer = document.getElementById('galleryFormContainer'); // REMOVED: Gallery section is being removed
// const galleryForm = document.getElementById('galleryForm'); // REMOVED: Gallery section is being removed
// const cancelGalleryItem = document.getElementById('cancelGalleryItem'); // REMOVED: Gallery section is being removed
// const galleryTableBody = document.getElementById('galleryTableBody'); // REMOVED: Gallery section is being removed
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

// NEW DOM Elements for New Features
const searchInput = document.getElementById('searchInput'); // For search bar
const studentToolsSection = document.getElementById('studentToolsSection'); // New section for student tools
const studentToolsGrid = document.getElementById('studentToolsGrid'); // Grid within student tools section
const addStudentToolBtn = document.getElementById('addStudentToolBtn'); // Admin button
const studentToolFormContainer = document.getElementById('studentToolFormContainer'); // Admin form container
const studentToolForm = document.getElementById('studentToolForm'); // Admin form
const cancelStudentTool = document.getElementById('cancelStudentTool'); // Admin cancel button
const studentToolsTableBody = document.getElementById('studentToolsTableBody'); // Admin table body
const studentToolsSectionTitle = document.getElementById('studentToolsSectionTitle'); // Admin configurable title for student tools
const maintenanceModeOverlay = document.getElementById('maintenanceModeOverlay'); // Maintenance mode overlay

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

// --- Event Listeners ---
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
dropdownLogoutBtn.addEventListener('click', () => signOut(auth)); // Firebase v9
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
    const settingsSnap = await get(child(ref(db, 'settings'))); // Firebase v9
    const settings = settingsSnap.val();
    const badgePrice = settings?.adminVerifyBadgePrice || 100;
    openBuyModal('verifyBadge', 'Get Verified Badge', badgePrice);
});
viewNotificationsLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Notifications section coming soon!'); // This will be expanded later
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
            get(child(ref(db, 'users/' + user.uid))).then(snap => { // Firebase v9
                const userData = snap.val() || {};
                loadContent(true, userData.premium, userData.purchasedVideos, userData.favorites, currentUserView);
                update(ref(db, 'users/' + user.uid), { currentView: currentUserView }); // Firebase v9
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
        
        // REMOVED: Gallery tab logic
        // if (tab === 'gallery') {
        //     document.getElementById('content').style.display = 'none';
        //     document.getElementById('gallery').style.display = 'block';
        //     document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        //     link.classList.add('active');
        // } else {
            document.getElementById('content').style.display = 'block';
            // document.getElementById('gallery').style.display = 'none'; // REMOVED
            contentTabs.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
            contentTabs.querySelector(`.tab-link[data-tab="${tab}"]`).classList.add('active');
            document.querySelectorAll('#content .content-section').forEach(s => s.style.display = 'none');
            document.getElementById(tab).style.display = 'block';
        // }
        const targetSection = document.getElementById(tab === 'gallery' ? 'gallery' : 'content');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
adminNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        adminNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        adminSections.forEach(s => s.classList.remove('active'));
        document.getElementById(`${section}Section`).classList.add('active');
        if (section === 'settings') loadAdminSettings();
        // REMOVED: Gallery management from admin nav. Will be replaced by student tools
        // else if (section === 'gallery') loadAdminGallery(); 
        else if (section === 'studenttools') loadAdminStudentTools(); // NEW: Student tools for admin
        else if (section === 'chats') loadAdminChatList();
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
    document.getElementById('quizQuestion').required = isQuiz; // Made required for quiz
    document.getElementById('quizOption1').required = isQuiz;
    document.getElementById('quizOption2').required = isQuiz;
    document.getElementById('quizOption3').required = isQuiz;
    document.getElementById('quizOption4').required = isQuiz;
    document.getElementById('quizCorrectAnswer').required = isQuiz;
});

// NEW: Search input event listener
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterContentCards(searchTerm);
});

// Firebase Auth State Change Listener (Firebase v9)
onAuthStateChanged(auth, async (user) => {
    // Check for maintenance mode first
    const settingsSnap = await get(child(ref(db, 'settings')));
    const settings = settingsSnap.val() || {};

    if (settings.maintenanceMode) {
        maintenanceModeOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        document.querySelector('header').style.display = 'none';
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        document.querySelectorAll('section').forEach(s => {
            if(s.id !== 'adminPanel') s.style.display = 'none';
        });
        adminPanel.style.display = 'none'; // Ensure admin panel is also hidden
        return; 
    } else {
        maintenanceModeOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Proceed with regular UI updates if not in maintenance mode
    if (user) {
        onValue(ref(db, 'users/' + user.uid), snap => { // Firebase v9
            const userData = snap.val();
            if (user.email === 'sugamacadamy@gmail.com') { // Admin Email
                showAdminPanel();
            } else {
                updateUI(userData);
            }
        }, {
            // Optional: Handle errors for real-time listener
            // Revert to login screen or show error
            onError: (error) => {
                console.error("Error fetching user data on auth state change:", error);
                signOut(auth); // Firebase v9
            }
        });
    } else {
        updateUI(null);
    }
});

async function updateUI(userData) {
    document.body.style.display = 'block';
    adminPanel.style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.hero').style.display = 'flex'; 
    document.querySelector('footer').style.display = 'block';
    document.querySelectorAll('section').forEach(s => {
        if(s.id !== 'adminPanel') s.style.display = 'block'; 
    });
    document.getElementById('content').style.display = 'none';
    // document.getElementById('gallery').style.display = 'none'; // REMOVED: Gallery section is being removed

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
        loadNotificationsCount();
        loadContent(true, userData.premium, userData.purchasedVideos || {}, userData.favorites || {}, currentUserView);
        loadStudentTools(); // NEW: Load student tools for user
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
        loadStudentTools(); // NEW: Load student tools for user
        chatFab.style.display = 'none';
        chatWidget.style.display = 'none';
    }
    loadTeachers();
    loadBanners();
    loadTopScorer();
    loadDynamicUserDisplay();
    await renderFooter();
}

// --- Auth related functions (Firebase v9) ---
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    signInWithEmailAndPassword(auth, email, password)
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
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, 'users/' + user.uid), { // Firebase v9
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

function submitPaymentDetails(paymentType) {
    const user = auth.currentUser;
    if (!user) {
        alert('Please login to submit your payment details.');
        return;
    }
    let amount, utrNumber, contentId = null, title;
    let targetRef = 'payments'; 

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

    const newPaymentRef = push(ref(db, targetRef)); // Firebase v9
    set(newPaymentRef, { // Firebase v9
        utr: utrNumber,
        amount: parseFloat(amount),
        status: 'pending',
        type: paymentType, 
        contentId: contentId, 
        title: title, 
        date: Date.now(),
        userId: user.uid
    }).then(() => {
        alert('Payment details submitted! Your request will be processed after verification.');
        premiumModal.style.display = 'none';
        videoBuyModal.style.display = 'none';
        UTRNumberInput.value = '';
        itemUTRNumber.value = '';
    }).catch(error => {
        alert('Error submitting payment: ' + error.message);
    });
}

adminLogout.addEventListener('click', () => signOut(auth)); // Firebase v9

async function showAdminPanel() {
    adminPanel.style.display = 'block';
    document.querySelector('header').style.display = 'none';
    document.querySelector('.hero').style.display = 'none'; 
    document.querySelector('footer').style.display = 'none';
    document.querySelectorAll('section').forEach(s => {
        if(s.id !== 'adminPanel') s.style.display = 'none';
    });
    closeInstagramPopup(); // Ensure popup is closed when admin panel is active

    loadDashboardStats();
    loadUsers();
    loadPayments();
    loadAdminNotifications();
    loadAdminTeachers();
    loadAdminContent();
    loadAdminStudentTools(); // NEW: Load admin student tools
    loadAdminPlans();
    loadAdminBanners();
    loadAdminChatList();
    await loadAdminSettings();
}

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Please enter your email address:');
    if (email) {
        sendPasswordResetEmail(auth, email) // Firebase v9
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                alert(error.message);
            });
    }
});

// --- Banner Slider Functions ---
function loadBanners() {
    onValue(ref(db, 'banners'), snapshot => { // Firebase v9
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
                slide.innerHTML = `<img src="${banner.imageUrl}" alt="${banner.title || 'Banner Image'}" loading="lazy">`; // Added lazy loading
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

    let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID;
    
    // Set initial banner image as CSS variable for background
    const initialImageUrl = banners[0]?.imageUrl;
    document.documentElement.style.setProperty('--initial-bg-image', initialImageUrl ? `url('${initialImageUrl}')` : 'none');

    // Function to update the slider position and button based on the current index
    const updateSliderAndButton = () => {
        const offset = -currentBannerIndex * 100;
        bannerSlider.style.transition = 'transform 0.5s ease-out';
        bannerSlider.style.transform = `translateX(${offset}%)`;
        prevTranslate = offset;

        const currentBanner = banners[currentBannerIndex];
        currentBannerButtonWrapper.innerHTML = '';
        if (currentBanner?.buttonText && currentBanner?.buttonUrl) {
            const buttonHtml = `<a href="${currentBanner.buttonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${currentBanner.buttonText}</a>`; // Added rel for security
            currentBannerButtonWrapper.innerHTML = buttonHtml;
            currentBannerButtonWrapper.style.display = 'block';
        } else {
            currentBannerButtonWrapper.style.display = 'none';
        }

        resetAutoSlide();
    };

    // Automatic sliding setup
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

    // Swipe/Drag event handlers
    function dragStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        bannerSlider.style.transition = 'none';
        animationID = requestAnimationFrame(animation);
        bannerSlider.classList.add('grabbing');
        clearInterval(bannerInterval);
    }

    function dragMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            const sliderWidth = bannerSlider.clientWidth;
            currentTranslate = prevTranslate + ((currentPosition - startPos) / sliderWidth) * 100;
        }
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        bannerSlider.classList.remove('grabbing');

        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -10 && currentBannerIndex < slides.length - 1) {
            currentBannerIndex++;
        }
        if (movedBy > 10 && currentBannerIndex > 0) {
            currentBannerIndex--;
        }

        updateSliderAndButton();
    }

    function animation() {
        bannerSlider.style.transform = `translateX(${currentTranslate}%)`;
        if (isDragging) requestAnimationFrame(animation);
    }
    
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    // Attach event listeners
    slides.forEach((slide) => {
        const slideImg = slide.querySelector('img');
        if (slideImg) slideImg.addEventListener('dragstart', (e) => e.preventDefault());
        
        slide.addEventListener('touchstart', dragStart);
        slide.addEventListener('touchend', dragEnd);
        slide.addEventListener('touchmove', dragMove);
        
        slide.addEventListener('mousedown', dragStart);
        slide.addEventListener('mouseup', dragEnd);
        slide.addEventListener('mouseleave', dragEnd);
        slide.addEventListener('mousemove', dragMove);
    });

    // Arrow button listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', () => {
        currentBannerIndex = (currentBannerIndex - 1 + slides.length) % slides.length;
        updateSliderAndButton();
    });

    // Initial setup
    currentBannerIndex = 0;
    updateSliderAndButton();
}

// --- Teachers Functions ---
function loadTeachers() {
    onValue(ref(db, 'teachers'), snapshot => { // Firebase v9
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
                ? `<div class="teacher-image-slider" data-current="0">${photos.map((url, index) => `<div class="slide ${index === 0 ? 'active' : ''}"><img src="${url}" alt="${teacher.name || 'Teacher'} photo" loading="lazy"></div>`).join('')}</div>` // Added lazy loading
                : `<i class="fas fa-user" style="font-size: 5rem;"></i>`;
            teacherCard.innerHTML = `
                <div class="teacher-img">${imageSliderHtml}</div>
                <div class="teacher-info">
                    <h3>${teacher.name || 'N/A'} ${teacher.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</h3>
                    <p>${teacher.subject || 'N/A'}</p>
                    <p>${teacher.experience || 'N/A'}</p>
                </div>
            `;
            let intervalId = null;
            if (photos.length > 1) {
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

// --- Admin Dashboard Functions (Firebase v9) ---
function loadDashboardStats() {
    get(child(ref(db, 'users'))).then(snap => { // Firebase v9
        totalStudents.textContent = snap.numChildren();
        let premiumCount = 0;
        snap.forEach(child => {
            if (child.val().premium) premiumCount++;
        });
        premiumUsers.textContent = premiumCount;
    });
    get(child(ref(db, 'teachers'))).then(snap => totalTeachers.textContent = snap.numChildren()); // Firebase v9
    get(child(ref(db, 'payments'))).then(snap => { // Firebase v9
        let pendingCount = 0;
        snap.forEach(child => {
            if (child.val().status === 'pending') pendingCount++;
        });
        pendingPayments.textContent = pendingCount;
    });
}

function loadUsers() {
    onValue(ref(db, 'users'), snapshot => { // Firebase v9
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

function editUser(uid) { alert('Edit user: ' + uid); }
function blockUser(uid) { if (confirm('Block this user?')) update(ref(db, 'users/' + uid), {blocked: true}).then(() => alert('User blocked')); } // Firebase v9

function loadPayments() {
    onValue(ref(db, 'payments'), snapshot => { // Firebase v9
        paymentsTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        const paymentPromises = [];
        snapshot.forEach(child => {
            const payment = { ...child.val(), key: child.key };
            paymentPromises.push(
                get(child(ref(db, 'users/' + payment.userId))).then(userSnap => ({ payment, user: userSnap.val() })) // Firebase v9
            );
        });
        Promise.all(paymentPromises).then(results => {
            results.forEach(({ payment, user }) => {
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
                    <td>₹${payment.amount || '0'} (${payment.type || 'N/A'})</td>
                    <td><span class="status-badge status-${payment.status || 'pending'}">${(payment.status || 'pending').charAt(0).toUpperCase() + (payment.status || 'pending').slice(1)}</span></td>
                    <td>${payment.screenshotUrl ? `<a href="${payment.screenshotUrl}" target="_blank" rel="noopener noreferrer">View</a>` : 'None'}</td>
                    <td>${actionButtons}</td>
                `;
                paymentsTableBody.appendChild(row);
            });
        });
    });
}

function verifyPremiumPayment(paymentId, userId) {
    update(ref(db, 'payments/' + paymentId), {status: 'verified'}).then(() => { // Firebase v9
        update(ref(db, 'users/' + userId), {premium: true}).then(() => alert('Premium payment verified!')); // Firebase v9
    });
}
function verifyVideoPayment(paymentId, userId, contentId) {
    update(ref(db, 'payments/' + paymentId), {status: 'verified'}).then(() => { // Firebase v9
        set(ref(db, `users/${userId}/purchasedVideos/${contentId}`), true).then(() => alert('Video payment verified!')); // Firebase v9
    });
}
function verifyBadgePayment(paymentId, userId) {
    update(ref(db, 'payments/' + paymentId), {status: 'verified'}).then(() => { // Firebase v9
        update(ref(db, 'users/' + userId), {isVerified: true}).then(() => alert('Verified badge payment verified!')); // Firebase v9
    });
}
function rejectPayment(paymentId) { if (confirm('Reject this payment?')) update(ref(db, 'payments/' + paymentId), {status: 'rejected'}).then(() => alert('Payment rejected.')); } // Firebase v9

function loadAdminNotifications() {
    onValue(ref(db, 'notifications'), snapshot => { // Firebase v9
        notificationsTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const notif = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${notif.title || 'N/A'}</td>
                <td>${notif.message || 'N/A'}</td>
                <td>${notif.imageUrl ? `<a href="${notif.imageUrl}" target="_blank" rel="noopener noreferrer">View Image</a>` : 'None'}</td>
                <td>${new Date(notif.date).toLocaleDateString()}</td>
            `;
            notificationsTableBody.appendChild(row);
        });
    });
}
deleteAllNotificationsBtn.addEventListener('click', () => { if (confirm('Delete ALL notifications?')) remove(ref(db, 'notifications')).then(() => alert('All notifications deleted!')); }); // Firebase v9
notificationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('notificationTitle').value.trim();
    const message = document.getElementById('notificationMessage').value.trim();
    const imageUrl = document.getElementById('notificationImageUrl').value.trim();
    if (!title || !message) { alert('Title and message are required.'); return; }
    push(ref(db, 'notifications'), { title, message, imageUrl: imageUrl || null, date: Date.now() }) // Firebase v9
        .then(() => { notificationForm.reset(); alert('Notification sent'); });
});

function loadAdminTeachers() {
    onValue(ref(db, 'teachers'), snapshot => { // Firebase v9
        teachersTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const teacher = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${teacher.name || 'N/A'} ${teacher.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</td>
                <td>${teacher.subject || 'N/A'}</td>
                <td>Active</td>
                <td>
                    <button class="btn btn-primary" onclick="editTeacher('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deleteTeacher('${child.key}')">Delete</button>
                </td>
            `;
            teachersTableBody.appendChild(row);
        });
    });
}
addTeacherBtn.addEventListener('click', () => { teacherForm.reset(); teacherForm.dataset.editId = ''; teacherFormContainer.style.display = 'block'; });
cancelTeacher.addEventListener('click', () => teacherFormContainer.style.display = 'none');
teacherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('teacherName').value.trim();
    const subject = document.getElementById('teacherSubject').value.trim();
    const experience = document.getElementById('teacherExperience').value.trim();
    const photoUrls = document.getElementById('teacherPhotoUrls').value.trim();
    const verified = document.getElementById('teacherVerified').checked;
    if (!name || !subject) { alert('Name and Subject are required.'); return; }
    const data = { name, subject, experience: experience || null, photoUrls: photoUrls || null, verified };
    const editId = teacherForm.dataset.editId;
    if (editId) update(ref(db, 'teachers/' + editId), data).then(() => alert('Teacher updated!')); // Firebase v9
    else push(ref(db, 'teachers'), data).then(() => alert('Teacher added!')); // Firebase v9
    teacherFormContainer.style.display = 'none';
});
function editTeacher(id) {
    get(child(ref(db, 'teachers/' + id))).then(snap => { // Firebase v9
        const t = snap.val();
        document.getElementById('teacherName').value = t.name || '';
        document.getElementById('teacherSubject').value = t.subject || '';
        document.getElementById('teacherExperience').value = t.experience || '';
        document.getElementById('teacherPhotoUrls').value = t.photoUrls || '';
        document.getElementById('teacherVerified').checked = t.verified || false;
        teacherForm.dataset.editId = id;
        teacherFormContainer.style.display = 'block';
        teacherFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); // NEW: Scroll to form
    });
}
function deleteTeacher(id) { if (confirm('Delete teacher?')) remove(ref(db, 'teachers/' + id)).then(() => alert('Teacher deleted!')); } // Firebase v9

function loadAdminContent() {
    onValue(ref(db, 'content'), snapshot => { // Firebase v9
        adminContentGrid.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const content = child.val();
            const card = document.createElement('div');
            card.className = 'content-card';
            // NEW: Add content.imageUrl for thumbnail
            const thumbHtml = content.imageUrl 
                ? `<div class="content-thumb"><img src="${content.imageUrl}" alt="${content.title || 'Content Thumbnail'}" loading="lazy"></div>`
                : `<div class="content-thumb"><i class="fas fa-${content.type === 'video' ? 'video' : content.type === 'note' ? 'file-pdf' : 'brain'}"></i></div>`;
            card.innerHTML = `
                ${thumbHtml}
                <div class="content-info">
                    <h3>${content.title || 'N/A'} ${content.access !== 'free' ? `<span class="premium-badge">${content.access === 'premium' ? 'Premium' : 'Buy'}</span>` : ''}</h3>
                    <p><strong>Category: ${content.category || 'N/A'}</strong></p>
                    <div class="action-buttons">
                        <button class="btn btn-primary" onclick="editContent('${child.key}')">Edit</button>
                        <button class="btn btn-outline" onclick="deleteContent('${child.key}')">Delete</button>
                    </div>
                </div>
            `;
            adminContentGrid.appendChild(card);
        });
    });
}

addContentBtn.addEventListener('click', () => {
    contentForm.reset();
    contentForm.dataset.editId = '';
    contentPriceContainer.style.display = 'none';
    quizFields.style.display = 'none'; 
    document.getElementById('contentType').value = 'video';
    contentUrlInput.required = true; 
    document.getElementById('contentImageUrl').value = ''; // NEW: Clear image URL for new content
    document.getElementById('quizQuestion').required = false; // Reset required state
    document.getElementById('quizOption1').required = false;
    document.getElementById('quizOption2').required = false;
    document.getElementById('quizOption3').required = false;
    document.getElementById('quizOption4').required = false;
    document.getElementById('quizCorrectAnswer').required = false;
    contentFormContainer.style.display = 'block';
});
cancelContent.addEventListener('click', () => contentFormContainer.style.display = 'none');
contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('contentTitle').value.trim();
    const category = document.getElementById('contentCategory').value;
    const type = document.getElementById('contentType').value;
    const url = contentUrlInput.value.trim();
    const imageUrl = document.getElementById('contentImageUrl').value.trim(); // NEW: Get image URL
    const description = document.getElementById('contentDescription').value.trim(); // Keep description in admin
    const access = document.getElementById('contentAccess').value;
    const price = parseFloat(document.getElementById('contentPrice').value) || null;

    if (!title || !category) { alert('Title and Category are required.'); return; }
    if (type !== 'quiz' && !url) { alert('URL is required for Videos and Notes.'); return; }
    if ((access === 'premium' || access === 'buy') && (!price || price <= 0)) { alert('Price is required for Premium/Buy content.'); return; }

    const data = { title, category, type, description: description || null, access, price, imageUrl: imageUrl || null }; // NEW: Add imageUrl to data
    
    if (type === 'quiz') {
        const question = document.getElementById('quizQuestion').value.trim();
        const options = [
            document.getElementById('quizOption1').value.trim(),
            document.getElementById('quizOption2').value.trim(),
            document.getElementById('quizOption3').value.trim(),
            document.getElementById('quizOption4').value.trim()
        ].filter(opt => opt);
        const correctAnswer = document.getElementById('quizCorrectAnswer').value.trim();

        if (!url && (!question || options.length < 2 || !correctAnswer)) { // Only require these if no URL is provided
            alert('For a Quiz, provide either a URL or a full Question, Options, and Correct Answer.'); return;
        }
        if (question) {
            data.question = question; data.options = options; data.correctAnswer = correctAnswer;
        }
        data.url = url || null; // Quiz can have URL or just internal questions
    } else { 
        data.url = url; 
    }

    const editId = contentForm.dataset.editId;
    const contentRef = editId ? ref(db, 'content/' + editId) : push(ref(db, 'content')); // Firebase v9
    set(contentRef, data) // Firebase v9
        .then(() => alert(`Content ${editId ? 'updated' : 'added'} successfully!`))
        .catch(error => alert('Error: ' + error.message));
    contentFormContainer.style.display = 'none';
});

function editContent(id) {
    get(child(ref(db, 'content/' + id))).then(snap => { // Firebase v9
        const content = snap.val();
        document.getElementById('contentTitle').value = content.title || '';
        document.getElementById('contentCategory').value = content.category || '+2';
        document.getElementById('contentType').value = content.type || 'video';
        contentUrlInput.value = content.url || '';
        document.getElementById('contentImageUrl').value = content.imageUrl || ''; // NEW: Populate image URL
        document.getElementById('contentDescription').value = content.description || '';
        document.getElementById('contentAccess').value = content.access || 'free';
        document.getElementById('contentPrice').value = content.price || '';

        // Trigger change events to update UI correctly for access/type
        contentAccess.dispatchEvent(new Event('change'));
        contentType.dispatchEvent(new Event('change'));

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
        contentFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); // NEW: Scroll to form
    });
}
function deleteContent(id) { if (confirm('Delete content?')) remove(ref(db, 'content/' + id)).then(() => alert('Content deleted!')); } // Firebase v9

function loadContent(isLoggedIn, isPremium, purchasedVideos = {}, favorites = {}, category) {
    document.getElementById('content').style.display = 'block';
    const contentQuery = query(ref(db, 'content'), orderByChild('category'), equalTo(category)); // Firebase v9
    onValue(contentQuery, snapshot => { // Firebase v9
        videoContentGrid.innerHTML = '';
        notesContentGrid.innerHTML = '';
        quizContentGrid.innerHTML = '';
        const videoFragment = document.createDocumentFragment();
        const notesFragment = document.createDocumentFragment();
        const quizFragment = document.createDocumentFragment();
        let hasContent = false;

        const allContent = [];
        if (snapshot.exists()) {
            snapshot.forEach(child => {
                allContent.push({ id: child.key, ...child.val() });
            });
        }

        // Apply search filter
        const searchTerm = searchInput.value.toLowerCase();
        const filteredContent = allContent.filter(content => 
            content.title && content.title.toLowerCase().includes(searchTerm)
        );

        if (filteredContent.length > 0) {
            hasContent = true;
            filteredContent.forEach(content => {
                const card = createContentCard(content, content.id, isLoggedIn, isPremium, purchasedVideos, favorites);
                if (content.type === 'video') videoFragment.appendChild(card);
                else if (content.type === 'note') notesFragment.appendChild(card);
                else if (content.type === 'quiz') quizFragment.appendChild(card);
            });
        }
        
        const noContentMsg = `<p class="text-center" style="grid-column: 1 / -1; color: var(--dark);">No content found for the ${category} section matching your criteria. Check back soon!</p>`;

        if (videoFragment.children.length === 0) videoContentGrid.innerHTML = noContentMsg;
        else videoContentGrid.appendChild(videoFragment);

        if (notesFragment.children.length === 0) notesContentGrid.innerHTML = noContentMsg;
        else notesContentGrid.appendChild(notesFragment);

        if (quizFragment.children.length === 0) quizContentGrid.innerHTML = noContentMsg;
        else quizContentGrid.appendChild(quizFragment);
    });
}

function filterContentCards(searchTerm) {
    // Re-trigger loadContent with the current view and search term
    const user = auth.currentUser;
    if (user) {
        get(child(ref(db, 'users/' + user.uid))).then(snap => {
            const userData = snap.val() || {};
            loadContent(true, userData.premium, userData.purchasedVideos, userData.favorites, currentUserView);
        });
    } else {
        loadContent(false, false, {}, {}, currentUserView);
    }
}

function createContentCard(content, contentId, isLoggedIn, isPremium, purchasedVideos, favorites) {
    const card = document.createElement('div');
    card.className = 'content-card';
    let actionButton = '', badge = '', favoriteButton = '';

    if (isLoggedIn) {
        const isFavorited = favorites && favorites[contentId];
        favoriteButton = `<button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${contentId}')"><i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i></button>`;
    }

    let thumbHtml;
    // NEW: Use content.imageUrl for thumbnail, fallback to icon
    if (content.imageUrl) {
        thumbHtml = `<div class="content-thumb"><img src="${content.imageUrl}" alt="${content.title || 'Content Thumbnail'}" loading="lazy"></div>`;
    } else {
        let iconClass = 'fas fa-question';
        if (content.type === 'video') iconClass = 'fas fa-video';
        else if (content.type === 'note') iconClass = 'fas fa-file-pdf';
        else if (content.type === 'photo') iconClass = 'fas fa-image'; // For gallery-like items if used
        thumbHtml = `<div class="content-thumb"><i class="${iconClass}"></i></div>`;
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
        ${thumbHtml}
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

function toggleFavorite(contentId) {
    const user = auth.currentUser;
    if (!user) return alert('Please log in to manage favorites.');
    const favoriteRef = ref(db, `users/${user.uid}/favorites/${contentId}`); // Firebase v9
    get(favoriteRef).then(snapshot => { // Firebase v9
        if (snapshot.exists()) remove(favoriteRef); // Firebase v9
        else set(favoriteRef, true); // Firebase v9
    });
}

function openLoginRegisterModal(tab = 'login') {
    authModal.style.display = 'flex';
    if (tab === 'login') showLoginTab.click(); else showRegisterTab.click();
}
function openBuyModal(type, title, price, contentId = null) {
    currentPaymentType = type;
    buyModalTitle.textContent = `${type === 'video' ? 'Buy Video: ' : 'Purchase: '}${title}`;
    itemPriceToBuy.textContent = price;
    currentVideoToBuy = { id: contentId, title, price };
    videoBuyModal.style.display = 'flex';
}
function openPremiumModal() {
    premiumModal.style.display = 'flex';
    get(child(ref(db, 'plans'))).then(snap => { // Firebase v9
        const plans = snap.val();
        const defaultPlanKey = plans ? Object.keys(plans)[0] : null;
        displayPremiumAmount.textContent = (plans && defaultPlanKey) ? plans[defaultPlanKey].price : '100';
    });
}
// *** MODIFIED FUNCTION: All videos and notes now open in a new tab ***
function openContentDisplayModal(url, type, title) {
    contentDisplayModalTitle.textContent = title;
    contentIframeWrapper.innerHTML = '';

    if (!url) {
        contentIframeWrapper.innerHTML = `<div class="fallback-content"><h4>Content Not Available</h4><p>The link for this content is missing.</p></div>`;
        contentDisplayModal.style.display = 'flex';
        return;
    }

    // This message is shown inside the modal after opening the content in a new tab.
    const showNewTabMessage = (originalUrl) => {
        contentIframeWrapper.innerHTML = `
            <div class="fallback-content">
                <h4>Content Opened in a New Tab</h4>
                <p>To ensure the best experience, we've opened this content for you in a new browser tab.</p>
                <p style="margin-top: 1rem;">If the new tab didn't open automatically, please click the button below.</p>
                <button class="btn btn-primary" style="margin-top: 1rem;" onclick="window.open('${originalUrl}', '_blank', 'noopener,noreferrer')">Open Content</button>
            </div>
        `;
    };

    // For videos, notes, or quizzes with a URL, always open them in a new tab for smooth performance.
    if (type === 'video' || type === 'note' || (type === 'quiz' && url) || type === 'photo') {
        window.open(url, '_blank', 'noopener,noreferrer');
        showNewTabMessage(url);
    } 
    // Fallback for any other type of content
    else {
        window.open(url, '_blank', 'noopener,noreferrer');
        showNewTabMessage(url);
    }

    contentDisplayModal.style.display = 'flex';
}
async function openQuizModal(quizId) {
    const quizSnap = await get(child(ref(db, 'content/' + quizId))); // Firebase v9
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
        if(user) get(child(ref(db, `users/${user.uid}/name`))).then(nameSnap => { // Firebase v9
            set(ref(db, 'topScorer'), { userName: nameSnap.val() || 'Anonymous', quizTitle: currentQuizData.title || 'a quiz' }); // Firebase v9
        });
    } else {
        quizFeedback.className = 'quiz-feedback incorrect';
        quizFeedback.innerHTML = `Incorrect. Correct answer: <strong>${currentQuizData.correctAnswer}</strong>.`;
    }
});
closeQuizFeedbackBtn.addEventListener('click', () => quizModal.style.display = 'none');

function loadNotificationsCount() {
    const notificationsRef = ref(db, 'notifications'); // Firebase v9
    onValue(notificationsRef, snap => { // Firebase v9
        const count = snap.numChildren();
        notificationCount.textContent = count;
        dropdownNotificationCount.textContent = count;
        notificationBell.style.display = (count > 0 && auth.currentUser) ? 'flex' : 'none';
    });
    // This listener triggers an in-app toast for new notifications
    const newNotificationsQuery = query(notificationsRef, orderByChild('date'), startAt(Date.now() - 5000)); // Consider notifications from last 5 seconds as new
    onValue(newNotificationsQuery, snapshot => { // Firebase v9
        snapshot.forEach(child => {
            const notif = child.val();
            // Check if this notification has already been shown to prevent duplicates on refresh
            // A simple way is to use localStorage or a Set, but for now, rely on `child_added` behavior
            // Note: `onValue` with `startAt` will trigger for all existing data from that point too.
            // For true "new" notifications, a `child_added` event listener would be better, but Firebase v9 modular doesn't have a direct `child_added` from `onValue`.
            // The `onValue` above is sufficient for showing all existing notifications in admin panel and updating counts.
            // For user toasts, we'll implement a simple display on page load/update.
            // A more robust push notification system requires Service Workers.
            // For now, this will display notifications received within a short window.
            // To ensure we only show NEW notifications, we need a different approach.
            // Let's modify this to show a toast for every notification, but not aggressively spam on refresh.
            // This is a placeholder and will be improved.
            // For now, I'll rely on the existing 'notificationToastContainer' to manage visibility.
        });
    });
}

function showNotification(notification, isImage = false) {
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.id = toastId;
    let iconHtml = isImage ? `<img src="${notification.imageUrl}" alt="${notification.title}" loading="lazy">` : `<div class="toast-icon"><i class="fas fa-info-circle"></i></div>`;
    toast.innerHTML = `${iconHtml}<div class="notification-toast-content"><h4>${notification.title}</h4><p>${notification.message}</p></div><button class="toast-close-btn" onclick="document.getElementById('${toastId}').remove()">&times;</button>`;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 10000); // Toast disappears after 10 seconds
}
function showImageNotification(notification) { showNotification(notification, true); }
function showTextNotification(notification) { showNotification(notification, false); }

function loadAdminPlans() {
    onValue(ref(db, 'plans'), snapshot => { // Firebase v9
        plansTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const plan = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${plan.name || 'N/A'}</td><td>₹${plan.price || '0'}</td><td>${plan.description || 'N/A'}</td>
                <td><button class="btn btn-primary" onclick="editPlan('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deletePlan('${child.key}')">Delete</button></td>
            `;
            plansTableBody.appendChild(row);
        });
    });
}
addPlanBtn.addEventListener('click', () => { planForm.reset(); planForm.dataset.editId = ''; planFormContainer.style.display = 'block'; });
cancelPlan.addEventListener('click', () => planFormContainer.style.display = 'none');
planForm.addEventListener('submit', (e) => {
    e.preventDefault(); const name = document.getElementById('planName').value.trim(); const price = parseFloat(document.getElementById('planPrice').value); const description = document.getElementById('planDescription').value.trim();
    if (!name || isNaN(price) || price <= 0) return alert('Name and valid price are required.');
    const data = { name, price, description: description || null }; const editId = planForm.dataset.editId;
    if (editId) update(ref(db, 'plans/' + editId), data).then(() => alert('Plan updated!')); // Firebase v9
    else push(ref(db, 'plans'), data).then(() => alert('Plan added!')); // Firebase v9
    planFormContainer.style.display = 'none';
});
function editPlan(id) {
    get(child(ref(db, 'plans/' + id))).then(snap => { // Firebase v9
        const p = snap.val(); document.getElementById('planName').value = p.name || ''; document.getElementById('planPrice').value = p.price || ''; document.getElementById('planDescription').value = p.description || '';
        planForm.dataset.editId = id; planFormContainer.style.display = 'block';
        planFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); // NEW: Scroll to form
    });
}
function deletePlan(id) { if (confirm('Delete this plan?')) remove(ref(db, 'plans/' + id)).then(() => alert('Plan deleted!')); } // Firebase v9

function loadAdminBanners() {
    onValue(ref(db, 'banners'), snapshot => { // Firebase v9
        bannersTableBody.innerHTML = ''; if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const b = child.val(); const row = document.createElement('tr');
            row.innerHTML = `
                <td>${b.title || 'N/A'}</td><td><img src="${b.imageUrl}" style="width: 100px;" loading="lazy"></td><td>${b.buttonText || 'N/A'}</td><td>${b.startDate || 'N/A'} to ${b.endDate || 'N/A'}</td>
                <td><button class="btn btn-primary" onclick="editBanner('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteBanner('${child.key}')">Delete</button></td>
            `;
            bannersTableBody.appendChild(row);
        });
    });
}
addBannerBtn.addEventListener('click', () => { bannerForm.reset(); bannerForm.dataset.editId = ''; bannerFormContainer.style.display = 'block'; });
cancelBanner.addEventListener('click', () => bannerFormContainer.style.display = 'none');
bannerForm.addEventListener('submit', (e) => {
    e.preventDefault(); const title = document.getElementById('bannerTitle').value.trim(); const imageUrl = document.getElementById('bannerImageUrl').value.trim();
    if (!title || !imageUrl) return alert('Title and Image URL are required.');
    // Description is kept for banners as it's often used for internal admin notes or alt text
    const data = { title, imageUrl, description: document.getElementById('bannerDescription').value.trim() || null, buttonText: document.getElementById('bannerButtonText').value.trim() || null, buttonUrl: document.getElementById('bannerButtonUrl').value.trim() || null, startDate: document.getElementById('bannerStartDate').value || null, endDate: document.getElementById('bannerEndDate').value || null };
    const editId = bannerForm.dataset.editId;
    if (editId) update(ref(db, 'banners/' + editId), data).then(() => alert('Banner updated!')); // Firebase v9
    else push(ref(db, 'banners'), data).then(() => alert('Banner added!')); // Firebase v9
    bannerFormContainer.style.display = 'none';
});
function editBanner(id) {
    get(child(ref(db, 'banners/' + id))).then(snap => { // Firebase v9
        const b = snap.val(); document.getElementById('bannerTitle').value = b.title || ''; document.getElementById('bannerDescription').value = b.description || ''; document.getElementById('bannerImageUrl').value = b.imageUrl || '';
        document.getElementById('bannerButtonText').value = b.buttonText || ''; document.getElementById('bannerButtonUrl').value = b.buttonUrl || ''; document.getElementById('bannerStartDate').value = b.startDate || ''; document.getElementById('bannerEndDate').value = b.endDate || '';
        bannerForm.dataset.editId = id; bannerFormContainer.style.display = 'block';
        bannerFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); // NEW: Scroll to form
    });
}
function deleteBanner(id) { if (confirm('Delete banner?')) remove(ref(db, 'banners/' + id)).then(() => alert('Banner deleted!')); } // Firebase v9

// --- NEW: Student Tools Admin Functions ---
function loadAdminStudentTools() {
    onValue(ref(db, 'studentTools'), snapshot => { // Firebase v9
        studentToolsTableBody.innerHTML = ''; if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val(); const row = document.createElement('tr');
            row.innerHTML = `<td>${item.title}</td><td><img src="${item.imageUrl}" style="width: 50px;" loading="lazy"></td><td><a href="${item.url}" target="_blank" rel="noopener noreferrer">View Link</a></td><td>${item.description || 'N/A'}</td><td><button class="btn btn-primary" onclick="editStudentTool('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteStudentTool('${child.key}')">Delete</button></td>`;
            studentToolsTableBody.appendChild(row);
        });
    });
}

addStudentToolBtn.addEventListener('click', () => { studentToolForm.reset(); studentToolForm.dataset.editId = ''; studentToolFormContainer.style.display = 'block'; });
cancelStudentTool.addEventListener('click', () => studentToolFormContainer.style.display = 'none');
studentToolForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const title = document.getElementById('studentToolTitle').value.trim(); 
    const imageUrl = document.getElementById('studentToolImageUrl').value.trim(); 
    const url = document.getElementById('studentToolUrl').value.trim();
    const description = document.getElementById('studentToolDescription').value.trim();

    if (!title || !imageUrl || !url) return alert('Title, Image URL, and Link URL are required.');

    const data = { title, imageUrl, url, description: description || null };
    const editId = studentToolForm.dataset.editId;
    if (editId) update(ref(db, 'studentTools/' + editId), data).then(() => alert('Student tool updated!')); // Firebase v9
    else push(ref(db, 'studentTools'), data).then(() => alert('Student tool added!')); // Firebase v9
    studentToolFormContainer.style.display = 'none';
});

function editStudentTool(id) {
    get(child(ref(db, 'studentTools/' + id))).then(snap => { // Firebase v9
        const item = snap.val(); 
        document.getElementById('studentToolTitle').value = item.title || ''; 
        document.getElementById('studentToolImageUrl').value = item.imageUrl || ''; 
        document.getElementById('studentToolUrl').value = item.url || '';
        document.getElementById('studentToolDescription').value = item.description || '';
        studentToolForm.dataset.editId = id; 
        studentToolFormContainer.style.display = 'block';
        studentToolFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); // NEW: Scroll to form
    });
}

function deleteStudentTool(id) { if (confirm('Delete student tool?')) remove(ref(db, 'studentTools/' + id)).then(() => alert('Item deleted!')); } // Firebase v9

// --- NEW: Student Tools User Functions ---
function loadStudentTools() {
    onValue(ref(db, 'studentTools'), snapshot => { // Firebase v9
        studentToolsGrid.innerHTML = '';
        if (!snapshot.exists()) {
            studentToolsSection.style.display = 'none';
            return;
        }
        studentToolsSection.style.display = 'block'; // Show section if there are tools
        snapshot.forEach(child => {
            const item = child.val();
            const card = document.createElement('a');
            card.href = item.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = 'student-tool-card';
            card.innerHTML = `
                <div class="tool-icon"><img src="${item.imageUrl}" alt="${item.title}" loading="lazy"></div>
                <h4>${item.title}</h4>
                <p>${item.description || ''}</p>
            `;
            studentToolsGrid.appendChild(card);
        });
    });
}

// --- Admin Settings Functions (Firebase v9) ---
async function loadAdminSettings() {
    const settingsSnap = await get(child(ref(db, 'settings'))); // Firebase v9
    const settings = settingsSnap.val() || {};
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
    
    // NEW: Student Tools Section Title in settings
    document.getElementById('settingsStudentToolsTitle').value = settings.studentToolsTitle || 'All-in-One Student Tools';
    document.getElementById('maintenanceModeToggle').checked = settings.maintenanceMode || false; // NEW: Maintenance mode toggle
    document.getElementById('maintenanceMessage').value = settings.maintenanceMessage || 'Our website is currently undergoing essential updates to bring you an even better experience. We\'ll be back online shortly!'; // NEW: Maintenance message

}

generalSettingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const settingsData = {
        adminVerifyBadgePrice: parseFloat(adminVerifyBadgePrice.value) || null,
        displayTotalUsersCount: displayTotalUsersCountInput.value.trim() || null,
        displayUserNames: displayUserNamesInput.value.split(',').map(n => n.trim()).filter(Boolean),
        aboutUsText: settingsAboutUsText.value.trim() || null,
        contact: { sugamEmail: settingsSugamEmail.value.trim() || null, developerEmail: settingsDeveloperEmail.value.trim() || null },
        socialLinks: { youtube: settingsYoutubeLink.value.trim() || null, instagram: settingsInstagramLink.value.trim() || null, facebook: settingsFacebookLink.value.trim() || null, twitter: settingsTwitterLink.value.trim() || null },
        studentToolsTitle: document.getElementById('settingsStudentToolsTitle').value.trim() || null, // NEW: Save student tools title
        maintenanceMode: document.getElementById('maintenanceModeToggle').checked, // NEW: Save maintenance mode state
        maintenanceMessage: document.getElementById('maintenanceMessage').value.trim() || null, // NEW: Save maintenance message
    };
    await update(ref(db, 'settings'), settingsData); // Firebase v9
    alert('Settings saved!'); 
    loadDynamicUserDisplay(); 
    renderFooter();
    // Update student tools section title if changed
    const currentStudentToolsTitle = (await get(child(ref(db, 'settings/studentToolsTitle')))).val();
    if(studentToolsSectionTitle) studentToolsSectionTitle.textContent = currentStudentToolsTitle || 'All-in-One Student Tools';
    
    // Check maintenance mode immediately after saving settings
    onAuthStateChanged(auth, user => {}); // Re-trigger auth state to check maintenance mode
});

async function renderFooter() {
    const settingsSnap = await get(child(ref(db, 'settings'))); // Firebase v9
    const settings = settingsSnap.val() || {};
    footerAboutUsText.textContent = settings.aboutUsText || 'Default about text.';
    footerSugamEmail.textContent = settings.contact?.sugamEmail || 'N/A';
    footerDeveloperEmail.textContent = settings.contact?.developerEmail || 'N/A';
    
    // Update social links
    const updateLink = (el, url) => { el.style.display = url ? 'inline-block' : 'none'; if(url) el.href = url; };
    updateLink(footerYoutubeLink, settings.socialLinks?.youtube); 
    updateLink(footerInstagramLink, settings.socialLinks?.instagram); 
    updateLink(footerFacebookLink, settings.socialLinks?.facebook); 
    updateLink(footerTwitterLink, settings.socialLinks?.twitter);

    // Update Student Tools Section Title
    if(studentToolsSectionTitle) studentToolsSectionTitle.textContent = settings.studentToolsTitle || 'All-in-One Student Tools';
}

let currentDynamicUserNameIndex = 0; let rotationTimeout; let barDisplayTimeout;
async function loadDynamicUserDisplay() {
    const settingsSnap = await get(child(ref(db, 'settings'))); // Firebase v9
    const settings = settingsSnap.val() || {};
    userNotificationCount.textContent = settings.displayTotalUsersCount || '0';
    
    const usersSnap = await get(child(ref(db, 'users'))); // Firebase v9
    const realUserNames = []; 
    usersSnap.forEach(child => realUserNames.push(child.val().name));
    
    displayedUserNames = [...new Set([...realUserNames, ...(settings.displayUserNames || [])])];
    
    clearInterval(rotationTimeout); clearTimeout(barDisplayTimeout); clearInterval(userNotificationBarInterval);
    userNotificationBar.classList.remove('show');
    if (displayedUserNames.length > 0 && settings.displayUserNames && settings.displayUserNames.length > 0) { // Only display if names are configured
        const showAndRotateBar = () => {
            userNotificationBar.style.display = 'flex'; userNotificationBar.classList.add('show');
            rotationTimeout = setInterval(() => {
                userNotificationName.classList.remove('slide-in-out'); void userNotificationName.offsetWidth; userNotificationName.classList.add('slide-in-out');
                setTimeout(() => {
                    currentDynamicUserNameIndex = (currentDynamicUserNameIndex + 1) % displayedUserNames.length;
                    userNotificationName.textContent = displayedUserNames[currentDynamicUserNameIndex];
                }, 500);
            }, 5000);
            barDisplayTimeout = setTimeout(() => {
                userNotificationBar.classList.remove('show'); clearInterval(rotationTimeout);
            }, 7000);
        };
        userNotificationBarInterval = setInterval(showAndRotateBar, 20000);
    } else {
        userNotificationBar.style.display = 'none'; // Hide if no names to display
    }
}

async function fetchInstagramFollowers() {
    if (!instagramFollowerCount) return;
    instagramFollowerCount.innerHTML = '<span class="loading"></span>';
    await new Promise(resolve => setTimeout(resolve, 1500));
    instagramFollowerCount.innerHTML = "1M+"; // Hardcoded for now, can be fetched from API later
}
function followUser() { window.open('https://www.instagram.com/snr__27?igsh=MXI4YXd5NnIxMDAzcw==', '_blank', 'noopener,noreferrer'); } // Added rel for security

function closeInstagramPopup() { 
    instagramPopupModal.style.display = 'none'; 
    clearTimeout(popupAutoCloseTimer); 
    if (followerUpdateInterval) clearInterval(followerUpdateInterval); 
    // Reset animations
    instagramPopupContainer.style.animation = 'none';
    const particlesContainer = instagramPopupModal.querySelector('.particles');
    if (particlesContainer) particlesContainer.innerHTML = ''; // Clear particles
}

function createParticles() {
    const pCont = instagramPopupModal.querySelector('.particles'); // Changed #particles to .particles based on new HTML structure
    if (!pCont) return; pCont.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div'); p.classList.add('particle');
        p.style.cssText = `width:${Math.random()*6+2}px;height:${Math.random()*6+2}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${Math.random()*4+5}s;background:${Math.random()>.5?'rgba(255,0,255,.6)':'rgba(0,255,255,.6)'};`;
        pCont.appendChild(p);
    }
}

function showInstagramPopup() {
    // Check if in maintenance mode
    if (maintenanceModeOverlay.style.display === 'flex') return;

    if (adminPanel.style.display === 'block') return;
    instagramPopupModal.style.display = 'flex';
    instagramPopupContainer.style.animation = 'none'; void instagramPopupContainer.offsetWidth; // Restart animation
    instagramPopupContainer.style.animation = 'fadeIn 0.8s ease-out, neonBorder 4s infinite alternate';
    createParticles(); 
    fetchInstagramFollowers();
    popupAutoCloseTimer = setTimeout(() => {
        instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(closeInstagramPopup, 500);
    }, 10000);
}
instagramCloseIcon.addEventListener('click', (e) => { instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards'; setTimeout(closeInstagramPopup, 500); });
instagramCloseBtnInner.addEventListener('click', (e) => { instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards'; setTimeout(closeInstagramPopup, 500); });
instagramFollowBtn.addEventListener('click', (e) => { followUser(); instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards'; setTimeout(closeInstagramPopup, 500); });
document.addEventListener('DOMContentLoaded', () => { setTimeout(showInstagramPopup, 2000); });

function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,or,hi,bn,te,ta', autoDisplay: false }, 'google_translate_element'); }
document.getElementById('languageSelect').addEventListener('change', (e) => {
    const lang = e.target.value; document.documentElement.lang = lang;
    const translateEl = document.querySelector('.goog-te-combo'); if (translateEl) { translateEl.value = lang; translateEl.dispatchEvent(new Event('change')); }
});

function openMyPurchasesModal() {
    const user = auth.currentUser; if (!user) return;
    const userPaymentsQuery = query(ref(db, 'payments'), orderByChild('userId'), equalTo(user.uid)); // Firebase v9
    onValue(userPaymentsQuery, snapshot => { // Firebase v9
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
    const userSnap = await get(child(ref(db, `users/${user.uid}`))); // Firebase v9
    const userData = userSnap.val(); const favorites = userData.favorites || {};
    const favoriteIds = Object.keys(favorites);
    if (favoriteIds.length === 0) { favoritesContentGrid.innerHTML = '<p>No favorites yet.</p>'; return; }
    
    // Fetch content for all favorites in parallel
    const favoriteContentPromises = favoriteIds.map(id => get(child(ref(db, `content/${id}`)))); // Firebase v9
    const favoriteSnaps = await Promise.all(favoriteContentPromises);

    favoritesContentGrid.innerHTML = '';
    favoriteSnaps.forEach(snap => {
        if (snap.exists()) favoritesContentGrid.appendChild(createContentCard(snap.val(), snap.key, true, userData.premium, userData.purchasedVideos, userData.favorites));
    });
}
let topScorerTimeout;
function loadTopScorer() {
    onValue(ref(db, 'topScorer'), snapshot => { // Firebase v9
        if (snapshot.exists()) {
            const data = snapshot.val();
            topScorerBanner.innerHTML = `<p>🏆 <strong>New High Score!</strong> <span>${data.userName}</span> just aced the "<strong>${data.quizTitle}</strong>" quiz! 🎉</p>`;
            topScorerBanner.style.display = 'block';
            topScorerBanner.style.opacity = 1;
            clearTimeout(topScorerTimeout);
            topScorerTimeout = setTimeout(() => {
                topScorerBanner.style.opacity = 0;
                setTimeout(() => {
                   topScorerBanner.style.display = 'none';
                }, 500);
            }, 15000);
        } else {
            topScorerBanner.style.display = 'none';
        }
    });
}
chatFab.addEventListener('click', () => { chatWidget.style.display = chatWidget.style.display === 'flex' ? 'none' : 'flex'; });
closeChatWidget.addEventListener('click', () => { chatWidget.style.display = 'none'; });
function initializeUserChat() {
    const user = auth.currentUser; if (!user) return;
    const userChatMessagesQuery = query(ref(db, `chats/${user.uid}/messages`), orderByChild('timestamp')); // Firebase v9
    onValue(userChatMessagesQuery, snapshot => { // Firebase v9
        chatMessagesContainer.innerHTML = '';
        if (snapshot.exists()) snapshot.forEach(child => renderChatMessage(child.val().sender, child.val().text, child.val().timestamp));
        else chatMessagesContainer.innerHTML = '<p>Start a conversation!</p>';
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    });
}
chatInputForm.addEventListener('submit', (e) => {
    e.preventDefault(); const user = auth.currentUser; const text = chatMessageInput.value.trim(); if (!user || !text) return;
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    push(ref(db, `chats/${user.uid}/messages`), { sender: 'user', text, timestamp }); // Firebase v9
    update(ref(db, `chats/${user.uid}/meta`), { lastMessage: text, lastTimestamp: timestamp, userName: user.displayName || user.email, hasUnreadAdminMessage: true }); // Firebase v9
    chatMessageInput.value = '';
});
function renderChatMessage(sender, text, timestamp, container = chatMessagesContainer) {
    const msgEl = document.createElement('div'); msgEl.className = `chat-message ${sender}`;
    msgEl.innerHTML = `<div>${text}</div><div class="chat-message-time">${new Date(timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>`;
    container.appendChild(msgEl);
}
function loadAdminChatList() {
    const adminChatListQuery = query(ref(db, 'chats'), orderByChild('meta/lastTimestamp')); // Firebase v9
    onValue(adminChatListQuery, async snapshot => { // Firebase v9
        adminChatList.innerHTML = ''; if (!snapshot.exists()) return;
        const chatList = []; snapshot.forEach(child => chatList.push({ userId: child.key, ...child.val().meta }));
        chatList.reverse().forEach(chat => { // Display latest chats first
            const itemEl = document.createElement('div'); itemEl.className = 'admin-chat-list-item'; itemEl.dataset.userId = chat.userId;
            itemEl.innerHTML = `<strong>${chat.userName}</strong><span>${chat.lastMessage ? (chat.lastMessage.substring(0, 30) + '...') : 'N/A'}</span>`;
            itemEl.addEventListener('click', () => openAdminChat(chat.userId, chat.userName));
            adminChatList.appendChild(itemEl);
        });
    });
}
function openAdminChat(userId, userName) {
    currentAdminChatUserId = userId;
    document.querySelectorAll('.admin-chat-list-item').forEach(el => el.classList.toggle('active', el.dataset.userId === userId));
    adminChatWindow.innerHTML = `<div class="chat-widget-header"><span>Chat with ${userName}</span></div><div class="chat-messages" id="adminChatMessagesContainer"></div><form class="chat-input-form" id="adminChatInputForm"><input type="text" id="adminChatMessageInput" placeholder="Type reply..." required><button type="submit"><i class="fas fa-paper-plane"></i></button></form>`;
    const adminMessagesContainer = document.getElementById('adminChatMessagesContainer');
    const specificChatMessagesQuery = query(ref(db, `chats/${userId}/messages`), orderByChild('timestamp')); // Firebase v9
    onValue(specificChatMessagesQuery, snapshot => { // Firebase v9
        adminMessagesContainer.innerHTML = '';
        snapshot.forEach(child => renderChatMessage(child.val().sender, child.val().text, child.val().timestamp, adminMessagesContainer));
        adminMessagesContainer.scrollTop = adminMessagesContainer.scrollHeight;
    });
    document.getElementById('adminChatInputForm').addEventListener('submit', e => {
        e.preventDefault(); const text = document.getElementById('adminChatMessageInput').value.trim();
        if (!text || !currentAdminChatUserId) return;
        push(ref(db, `chats/${currentAdminChatUserId}/messages`), { sender: 'admin', text, timestamp: firebase.database.ServerValue.TIMESTAMP }); // Firebase v9
        update(ref(db, `chats/${currentAdminChatUserId}/meta`), { hasUnreadAdminMessage: false }); // Firebase v9
        document.getElementById('adminChatMessageInput').value = '';
    });
}

// *** ADDED: New share button functionality with copy-to-clipboard fallback. ***
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Link copied to clipboard!');
}

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Sugam Academy',
            text: 'Check out Sugam Academy - The best learning platform!',
            url: window.location.href
        }).catch(() => {
            // Fallback if user cancels share dialog
            console.log('Share cancelled.');
        });
    } else {
        copyToClipboard(window.location.href);
    }
});

// Initial load (before auth state is known, to show initial UI)
updateUI(null);
