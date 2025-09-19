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
// ... (Baaqi saara JavaScript code yahaan aa jayega, bina kisi change ke) ...
// ... (The rest of your very long JavaScript code goes here exactly as it was) ...

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
        if (tab === 'gallery') {
            document.getElementById('content').style.display = 'none';
            document.getElementById('gallery').style.display = 'block';
            document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        } else {
            document.getElementById('content').style.display = 'block';
            document.getElementById('gallery').style.display = 'none';
            contentTabs.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
            contentTabs.querySelector(`.tab-link[data-tab="${tab}"]`).classList.add('active');
            document.querySelectorAll('#content .content-section').forEach(s => s.style.display = 'none');
            document.getElementById(tab).style.display = 'block';
        }
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
        else if (section === 'gallery') loadAdminGallery();
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
    document.getElementById('quizQuestion').required = false;
    document.getElementById('quizOption1').required = false;
    document.getElementById('quizOption2').required = false;
    document.getElementById('quizOption3').required = false;
    document.getElementById('quizOption4').required = false;
    document.getElementById('quizCorrectAnswer').required = false;
});
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
        loadGallery();
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
        loadGallery();
        chatFab.style.display = 'none';
        chatWidget.style.display = 'none';
    }
    loadTeachers();
    loadBanners();
    loadTopScorer();
    loadDynamicUserDisplay();
    await renderFooter();
}
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
    const paymentRef = db.ref(targetRef).push();
    paymentRef.set({
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
adminLogout.addEventListener('click', () => auth.signOut());
async function showAdminPanel() {
    adminPanel.style.display = 'block';
    document.querySelector('header').style.display = 'none';
    document.querySelector('.hero').style.display = 'none'; 
    document.querySelector('footer').style.display = 'none';
    document.querySelectorAll('section').forEach(s => {
        if(s.id !== 'adminPanel') s.style.display = 'none';
    });
    closeInstagramPopup();
    loadDashboardStats();
    loadUsers();
    loadPayments();
    loadAdminNotifications();
    loadAdminTeachers();
    loadAdminContent();
    loadAdminGallery();
    loadAdminPlans();
    loadAdminBanners();
    loadAdminChatList();
    await loadAdminSettings();
}
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
        const heroSection = document.querySelector('.hero');
        const bannerContainer = heroSection.querySelector('.banner-slider-container');
        if (banners.length > 0) {
            heroSection.style.display = 'flex'; 
            bannerContainer.style.display = 'block';
            banners.forEach(banner => {
                const slide = document.createElement('div');
                slide.className = 'banner-slide';
                slide.innerHTML = `<img src="${banner.imageUrl}" alt="${banner.title || 'Banner Image'}">`;
                bannerSlider.appendChild(slide);
            });
            initBannerSlider(banners);
        } else {
            bannerContainer.style.display = 'none'; 
            currentBannerButtonWrapper.style.display = 'none';
            heroDynamicBg.style.backgroundImage = 'none';
        }
    });
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
                ? `<div class="teacher-image-slider" data-current="0">${photos.map((url, index) => `<div class="slide ${index === 0 ? 'active' : ''}"><img src="${url}" alt="${teacher.name || 'Teacher'} photo"></div>`).join('')}</div>`
                : `<i class="fas fa-user" style="font-size:// Banner Slider Logic (REVISED WITH SWIPE FUNCTIONALITY)
function initBannerSlider(banners) {
    const slides = document.querySelectorAll('.banner-slide');
    
    // Agar 0 ya 1 hi banner hai, toh slide karne ki zaroorat nahi
    if (slides.length <= 1) {
        if (slides.length === 1) {
            // Sirf ek banner ke liye visuals update karein
            bannerSlider.style.transform = `translateX(0%)`;
            const currentBannerImageUrl = banners[0]?.imageUrl;
            document.documentElement.style.setProperty('--initial-bg-image', currentBannerImageUrl ? `url('${currentBannerImageUrl}')` : 'none');
            
            currentBannerButtonWrapper.innerHTML = '';
            if (banners[0]?.buttonText && banners[0]?.buttonUrl) {
                const buttonHtml = `<a href="${banners[0].buttonUrl}" target="_blank" class="btn btn-primary">${banners[0].buttonText}</a>`;
                currentBannerButtonWrapper.innerHTML = buttonHtml;
                currentBannerButtonWrapper.style.display = 'block';
            } else {
                currentBannerButtonWrapper.style.display = 'none';
            }
        }
        return; // Function se bahar aa jayein
    }

    // Slider ko update karne wala function
    const updateSliderAndButton = (transition = true) => {
        // Agar transition false hai, to achanak move hoga (sliding ke dauran)
        if (!transition) {
            bannerSlider.style.transition = 'none';
        }

        const offset = -currentBannerIndex * 100;
        bannerSlider.style.transform = `translateX(${offset}%)`;

        // Thodi der baad transition wapas on kar dein
        if (!transition) {
            setTimeout(() => {
                bannerSlider.style.transition = 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
            }, 50);
        }

        const currentBannerImageUrl = banners[currentBannerIndex]?.imageUrl;
        if(currentBannerImageUrl) {
            document.documentElement.style.setProperty('--initial-bg-image', `url('${currentBannerImageUrl}')`);
        } else {
             document.documentElement.style.setProperty('--initial-bg-image', 'none');
        }

        currentBannerButtonWrapper.innerHTML = ''; 
        if (banners[currentBannerIndex]?.buttonText && banners[currentBannerIndex]?.buttonUrl) {
            const buttonHtml = `<a href="${banners[currentBannerIndex].buttonUrl}" target="_blank" class="btn btn-primary">${banners[currentBannerIndex].buttonText}</a>`;
            currentBannerButtonWrapper.innerHTML = buttonHtml;
            currentBannerButtonWrapper.style.display = 'block';
        } else {
            currentBannerButtonWrapper.style.display = 'none';
        }
    };

    // Auto-slide ke timer ko shuru ya reset karne wala function
    const startAutoSlide = () => {
        clearInterval(bannerInterval); // Purana timer band karein
        bannerInterval = setInterval(() => {
            currentBannerIndex = (currentBannerIndex + 1) % slides.length;
            updateSliderAndButton();
        }, 5000); // Har 5 second mein slide hoga
    };
    
    // --- SWIPE FUNCTIONALITY START ---
    let startX = 0;
    let currentX = 0;
    let diffX = 0;
    let isDragging = false;
    const swipeThreshold = 50; // Kam se kam 50px slide karne par hi slide change hoga

    bannerSlider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        clearInterval(bannerInterval); // Jab user touch kare, auto-slide rok do
        bannerSlider.style.transition = 'none'; // Smooth drag ke liye transition hata do
    });

    bannerSlider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        diffX = currentX - startX;
        // Slider ko ungli ke saath move karo
        const baseOffset = -currentBannerIndex * bannerSlider.offsetWidth;
        bannerSlider.style.transform = `translateX(${baseOffset + diffX}px)`;
    });

    bannerSlider.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        bannerSlider.style.transition = 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'; // Transition wapas laga do

        // Check karo ki swipe hua ya nahi
        if (diffX < -swipeThreshold) {
            // Swipe Left (Next slide)
            currentBannerIndex = (currentBannerIndex + 1) % slides.length;
        } else if (diffX > swipeThreshold) {
            // Swipe Right (Previous slide)
            currentBannerIndex = (currentBannerIndex - 1 + slides.length) % slides.length;
        }
        
        // Final position par slide ko set karo
        updateSliderAndButton();
        startAutoSlide(); // Swipe ke baad auto-slide phir se shuru karo
    });
    // --- SWIPE FUNCTIONALITY END ---

    // Shuruaat ke liye setup
    currentBannerIndex = 0;
    updateSliderAndButton();
    startAutoSlide(); // Auto-sliding shuru karein
                }
5rem;"></i>`;
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
    db.ref('payments').once('value').then(snap => {
        let pendingCount = 0;
        snap.forEach(child => {
            if (child.val().status === 'pending') pendingCount++;
        });
        pendingPayments.textContent = pendingCount;
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
function editUser(uid) { alert('Edit user: ' + uid); }
function blockUser(uid) { if (confirm('Block this user?')) db.ref('users/' + uid).update({blocked: true}).then(() => alert('User blocked')); }
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
                    <td>${payment.screenshotUrl ? `<a href="${payment.screenshotUrl}" target="_blank">View</a>` : 'None'}</td>
                    <td>${actionButtons}</td>
                `;
                paymentsTableBody.appendChild(row);
            });
        });
    });
}
function verifyPremiumPayment(paymentId, userId) {
    db.ref('payments/' + paymentId).update({status: 'verified'}).then(() => {
        db.ref('users/' + userId).update({premium: true}).then(() => alert('Premium payment verified!'));
    });
}
function verifyVideoPayment(paymentId, userId, contentId) {
    db.ref('payments/' + paymentId).update({status: 'verified'}).then(() => {
        db.ref(`users/${userId}/purchasedVideos/${contentId}`).set(true).then(() => alert('Video payment verified!'));
    });
}
function verifyBadgePayment(paymentId, userId) {
    db.ref('payments/' + paymentId).update({status: 'verified'}).then(() => {
        db.ref('users/' + userId).update({isVerified: true}).then(() => alert('Verified badge payment verified!'));
    });
}
function rejectPayment(paymentId) { if (confirm('Reject this payment?')) db.ref('payments/' + paymentId).update({status: 'rejected'}).then(() => alert('Payment rejected.')); }
function loadAdminNotifications() {
    db.ref('notifications').on('value', snapshot => {
        notificationsTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const notif = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${notif.title || 'N/A'}</td>
                <td>${notif.message || 'N/A'}</td>
                <td>${notif.imageUrl ? `<a href="${notif.imageUrl}" target="_blank">View Image</a>` : 'None'}</td>
                <td>${new Date(notif.date).toLocaleDateString()}</td>
            `;
            notificationsTableBody.appendChild(row);
        });
    });
}
deleteAllNotificationsBtn.addEventListener('click', () => { if (confirm('Delete ALL notifications?')) db.ref('notifications').remove().then(() => alert('All notifications deleted!')); });
notificationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('notificationTitle').value.trim();
    const message = document.getElementById('notificationMessage').value.trim();
    const imageUrl = document.getElementById('notificationImageUrl').value.trim();
    if (!title || !message) { alert('Title and message are required.'); return; }
    db.ref('notifications').push({ title, message, imageUrl: imageUrl || null, date: Date.now() })
        .then(() => { notificationForm.reset(); alert('Notification sent'); });
});
function loadAdminTeachers() {
    db.ref('teachers').on('value', snapshot => {
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
    if (editId) db.ref('teachers/' + editId).update(data).then(() => alert('Teacher updated!'));
    else db.ref('teachers').push(data).then(() => alert('Teacher added!'));
    teacherFormContainer.style.display = 'none';
});
function editTeacher(id) {
    db.ref('teachers/' + id).once('value').then(snap => {
        const t = snap.val();
        document.getElementById('teacherName').value = t.name || '';
        document.getElementById('teacherSubject').value = t.subject || '';
        document.getElementById('teacherExperience').value = t.experience || '';
        document.getElementById('teacherPhotoUrls').value = t.photoUrls || '';
        document.getElementById('teacherVerified').checked = t.verified || false;
        teacherForm.dataset.editId = id;
        teacherFormContainer.style.display = 'block';
    });
}
function deleteTeacher(id) { if (confirm('Delete teacher?')) db.ref('teachers/' + id).remove().then(() => alert('Teacher deleted!')); }
function loadAdminContent() {
    db.ref('content').on('value', snapshot => {
        adminContentGrid.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const content = child.val();
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `
                <div class="content-thumb"><i class="fas fa-${content.type === 'video' ? 'video' : content.type === 'note' ? 'file-pdf' : 'brain'}"></i></div>
                <div class="content-info">
                    <h3>${content.title || 'N/A'} ${content.access !== 'free' ? `<span class="premium-badge">${content.access === 'premium' ? 'Premium' : 'Buy'}</span>` : ''}</h3>
                    <p><strong>Category: ${content.category || 'N/A'}</strong></p>
                    <p>${content.description || 'No description'}</p>
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
    contentFormContainer.style.display = 'block';
});
cancelContent.addEventListener('click', () => contentFormContainer.style.display = 'none');
contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('contentTitle').value.trim();
    const category = document.getElementById('contentCategory').value;
    const type = document.getElementById('contentType').value;
    const url = contentUrlInput.value.trim();
    const description = document.getElementById('contentDescription').value.trim();
    const access = document.getElementById('contentAccess').value;
    const price = parseFloat(document.getElementById('contentPrice').value) || null;
    if (!title || !category) { alert('Title and Category are required.'); return; }
    if (type !== 'quiz' && !url) { alert('URL is required for Videos and Notes.'); return; }
    if ((access === 'premium' || access === 'buy') && (!price || price <= 0)) { alert('Price is required for Premium/Buy content.'); return; }
    const data = { title, category, type, description: description || null, access, price };
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
    } else { data.url = url; }
    const editId = contentForm.dataset.editId;
    const contentRef = editId ? db.ref('content/' + editId) : db.ref('content').push();
    contentRef.set(data)
        .then(() => alert(`Content ${editId ? 'updated' : 'added'} successfully!`))
        .catch(error => alert('Error: ' + error.message));
    contentFormContainer.style.display = 'none';
});
function editContent(id) {
    db.ref('content/' + id).once('value').then(snap => {
        const content = snap.val();
        document.getElementById('contentTitle').value = content.title || '';
        document.getElementById('contentCategory').value = content.category || '+2';
        document.getElementById('contentType').value = content.type || 'video';
        contentUrlInput.value = content.url || '';
        document.getElementById('contentDescription').value = content.description || '';
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
    });
}
function deleteContent(id) { if (confirm('Delete content?')) db.ref('content/' + id).remove().then(() => alert('Content deleted!')); }
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
    let iconClass = 'fas fa-question';
    if (content.type === 'video') iconClass = 'fas fa-video';
    else if (content.type === 'note') iconClass = 'fas fa-file-pdf';
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
        <div class="content-thumb"><i class="${iconClass}"></i></div>
        <div class="content-info">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h3 style="margin-right: 1rem;">${content.title || 'N/A'} ${badge}</h3>
                ${favoriteButton}
            </div>
            <p>${content.description || 'No description provided.'}</p>
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
    const favoriteRef = db.ref(`users/${user.uid}/favorites/${contentId}`);
    favoriteRef.once('value', snapshot => {
        if (snapshot.exists()) favoriteRef.remove();
        else favoriteRef.set(true);
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
    db.ref('plans').once('value').then(snap => {
        const plans = snap.val();
        const defaultPlanKey = plans ? Object.keys(plans)[0] : null;
        displayPremiumAmount.textContent = (plans && defaultPlanKey) ? plans[defaultPlanKey].price : '100';
    });
}
function getEmbeddableUrl(originalUrl) {
    try {
        if (originalUrl.includes("youtube.com/watch")) {
            const videoId = new URL(originalUrl).searchParams.get("v");
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        if (originalUrl.includes("youtu.be/")) {
            const videoId = new URL(originalUrl).pathname.slice(1);
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        if (originalUrl.includes("youtube.com/shorts/")) {
            const videoId = originalUrl.split('/shorts/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        if (originalUrl.includes("drive.google.com/file/d/")) {
            const fileId = originalUrl.split('/d/')[1].split('/')[0];
            return `https://drive.google.com/file/d/${fileId}/preview`;
        }
        if (originalUrl.includes("vimeo.com/")) {
            const videoId = new URL(originalUrl).pathname.slice(1);
            return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
        }
    } catch (e) {
        console.error("Error parsing URL, returning original:", originalUrl, e);
        return originalUrl;
    }
    return originalUrl;
}
function openContentDisplayModal(url, type, title) {
    contentDisplayModalTitle.textContent = title;
    contentIframeWrapper.innerHTML = '';
    if (!url) {
        contentIframeWrapper.innerHTML = `<div class="fallback-content"><h4>Content Not Available</h4><p>The link for this content is missing.</p></div>`;
        contentDisplayModal.style.display = 'flex';
        return;
    }
    const showFallback = (originalUrl) => {
        contentIframeWrapper.innerHTML = `
            <div class="fallback-content">
                <h4>Content Opened in a New Tab</h4>
                <p>This content couldn't be displayed here directly, so we've opened it for you in a new browser tab.</p>
                <p style="margin-top: 1rem;">If the new tab didn't open, please click the button below.</p>
                <button class="btn btn-primary" style="margin-top: 1rem;" onclick="window.open('${originalUrl}', '_blank', 'noopener,noreferrer')">Open Content</button>
            </div>
        `;
    };
    if (/\.(pdf)$/i.test(url) || url.includes("docs.google.com")) {
        window.open(url, '_blank', 'noopener,noreferrer');
        showFallback(url);
        contentDisplayModal.style.display = 'flex';
        return;
    }
    if (/\.(mp4|webm|ogg)$/i.test(url)) {
        contentIframeWrapper.innerHTML = `<video src="${url}" controls autoplay style="background-color: black;"></video>`;
    } else if (/\.(jpe?g|png|gif|webp|svg)$/i.test(url)) {
        contentIframeWrapper.innerHTML = `<img src="${url}" alt="${title}">`;
    } else {
        const embeddableUrl = getEmbeddableUrl(url);
        contentIframeWrapper.innerHTML = `<iframe src="${embeddableUrl}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        const iframe = contentIframeWrapper.querySelector('iframe');
        iframe.onerror = () => {
            window.open(url, '_blank', 'noopener,noreferrer');
            showFallback(url);
        };
    }
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
function loadNotificationsCount() {
    const notificationsRef = db.ref('notifications');
    notificationsRef.on('value', snap => {
        const count = snap.numChildren();
        notificationCount.textContent = count;
        dropdownNotificationCount.textContent = count;
        notificationBell.style.display = (count > 0 && auth.currentUser) ? 'flex' : 'none';
    });
    notificationsRef.orderByChild('date').startAt(Date.now()).on('child_added', snap => {
        const notif = snap.val();
        if (notif.imageUrl) showImageNotification(notif); else showTextNotification(notif);
    });
}
function showNotification(notification, isImage = false) {
     const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.id = toastId;
    let iconHtml = isImage ? `<img src="${notification.imageUrl}" alt="${notification.title}">` : `<div class="toast-icon"><i class="fas fa-info-circle"></i></div>`;
    toast.innerHTML = `${iconHtml}<div class="notification-toast-content"><h4>${notification.title}</h4><p>${notification.message}</p></div><button class="toast-close-btn" onclick="document.getElementById('${toastId}').remove()">&times;</button>`;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 10000);
}
function showImageNotification(notification) { showNotification(notification, true); }
function showTextNotification(notification) { showNotification(notification, false); }
function loadAdminPlans() {
    db.ref('plans').on('value', snapshot => {
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
    e.preventDefault();
    const name = document.getElementById('planName').value.trim(); const price = parseFloat(document.getElementById('planPrice').value); const description = document.getElementById('planDescription').value.trim();
    if (!name || isNaN(price) || price <= 0) return alert('Name and valid price are required.');
    const data = { name, price, description: description || null }; const editId = planForm.dataset.editId;
    if (editId) db.ref('plans/' + editId).update(data).then(() => alert('Plan updated!'));
    else db.ref('plans').push(data).then(() => alert('Plan added!'));
    planFormContainer.style.display = 'none';
});
function editPlan(id) {
    db.ref('plans/' + id).once('value').then(snap => {
        const p = snap.val(); document.getElementById('planName').value = p.name || ''; document.getElementById('planPrice').value = p.price || ''; document.getElementById('planDescription').value = p.description || '';
        planForm.dataset.editId = id; planFormContainer.style.display = 'block';
    });
}
function deletePlan(id) { if (confirm('Delete this plan?')) db.ref('plans/' + id).remove().then(() => alert('Plan deleted!')); }
function loadAdminBanners() {
    db.ref('banners').on('value', snapshot => {
        bannersTableBody.innerHTML = ''; if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const b = child.val(); const row = document.createElement('tr');
            row.innerHTML = `
                <td>${b.title || 'N/A'}</td><td><img src="${b.imageUrl}" style="width: 100px;"></td><td>${b.buttonText || 'N/A'}</td><td>${b.startDate || 'N/A'} to ${b.endDate || 'N/A'}</td>
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
    const data = { title, imageUrl, description: document.getElementById('bannerDescription').value.trim() || null, buttonText: document.getElementById('bannerButtonText').value.trim() || null, buttonUrl: document.getElementById('bannerButtonUrl').value.trim() || null, startDate: document.getElementById('bannerStartDate').value || null, endDate: document.getElementById('bannerEndDate').value || null };
    const editId = bannerForm.dataset.editId;
    if (editId) db.ref('banners/' + editId).update(data).then(() => alert('Banner updated!'));
    else db.ref('banners').push(data).then(() => alert('Banner added!'));
    bannerFormContainer.style.display = 'none';
});
function editBanner(id) {
    db.ref('banners/' + id).once('value').then(snap => {
        const b = snap.val(); document.getElementById('bannerTitle').value = b.title || ''; document.getElementById('bannerDescription').value = b.description || ''; document.getElementById('bannerImageUrl').value = b.imageUrl || '';
        document.getElementById('bannerButtonText').value = b.buttonText || ''; document.getElementById('bannerButtonUrl').value = b.buttonUrl || ''; document.getElementById('bannerStartDate').value = b.startDate || ''; document.getElementById('bannerEndDate').value = b.endDate || '';
        bannerForm.dataset.editId = id; bannerFormContainer.style.display = 'block';
    });
}
function deleteBanner(id) { if (confirm('Delete banner?')) db.ref('banners/' + id).remove().then(() => alert('Banner deleted!')); }
function loadAdminGallery() {
    db.ref('gallery').on('value', snapshot => {
        galleryTableBody.innerHTML = ''; if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val(); const row = document.createElement('tr');
            row.innerHTML = `<td>${item.title}</td><td>${item.type}</td><td><a href="${item.url}" target="_blank">View</a></td><td><button class="btn btn-primary" onclick="editGalleryItem('${child.key}')">Edit</button><button class="btn btn-outline" onclick="deleteGalleryItem('${child.key}')">Delete</button></td>`;
            galleryTableBody.appendChild(row);
        });
    });
}
addGalleryItemBtn.addEventListener('click', () => { galleryForm.reset(); galleryForm.dataset.editId = ''; galleryFormContainer.style.display = 'block'; });
cancelGalleryItem.addEventListener('click', () => galleryFormContainer.style.display = 'none');
galleryForm.addEventListener('submit', (e) => {
    e.preventDefault(); const title = document.getElementById('galleryItemTitle').value.trim(); const type = document.getElementById('galleryItemType').value; const url = document.getElementById('galleryItemUrl').value.trim();
    if (!title || !type || !url) return alert('All fields are required.');
    const data = { title, type, url, description: document.getElementById('galleryItemDescription').value.trim() || null };
    const editId = galleryForm.dataset.editId;
    if (editId) db.ref('gallery/' + editId).update(data).then(() => alert('Gallery item updated!'));
    else db.ref('gallery').push(data).then(() => alert('Gallery item added!'));
    galleryFormContainer.style.display = 'none';
});
function editGalleryItem(id) {
    db.ref('gallery/' + id).once('value').then(snap => {
        const i = snap.val(); document.getElementById('galleryItemTitle').value = i.title || ''; document.getElementById('galleryItemDescription').value = i.description || ''; document.getElementById('galleryItemType').value = i.type || 'photo'; document.getElementById('galleryItemUrl').value = i.url || '';
        galleryForm.dataset.editId = id; galleryFormContainer.style.display = 'block';
    });
}
function deleteGalleryItem(id) { if (confirm('Delete gallery item?')) db.ref('gallery/' + id).remove().then(() => alert('Item deleted!')); }
function loadGallery() {
    db.ref('gallery').on('value', snapshot => {
        galleryContentGrid.innerHTML = ''; if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val(); const card = document.createElement('div'); card.className = 'content-card';
            card.innerHTML = `<div class="content-thumb"><i class="fas fa-${item.type === 'video' ? 'video' : 'image'}"></i></div><div class="content-info"><h3>${item.title}</h3><p>${item.description || ''}</p><button class="btn btn-primary" onclick="openContentDisplayModal('${item.url}', '${item.type}', '${item.title}')">View</button></div>`;
            galleryContentGrid.appendChild(card);
        });
    });
}
async function loadAdminSettings() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    adminVerifyBadgePrice.value = settings.adminVerifyBadgePrice || ''; displayTotalUsersCountInput.value = settings.displayTotalUsersCount || ''; displayUserNamesInput.value = (settings.displayUserNames || []).join(', ');
    settingsAboutUsText.value = settings.aboutUsText || ''; settingsSugamEmail.value = settings.contact?.sugamEmail || ''; settingsDeveloperEmail.value = settings.contact?.developerEmail || '';
    settingsYoutubeLink.value = settings.socialLinks?.youtube || ''; settingsInstagramLink.value = settings.socialLinks?.instagram || ''; settingsFacebookLink.value = settings.socialLinks?.facebook || ''; settingsTwitterLink.value = settings.socialLinks?.twitter || '';
}
generalSettingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const settingsData = {
        adminVerifyBadgePrice: parseFloat(adminVerifyBadgePrice.value) || null,
        displayTotalUsersCount: displayTotalUsersCountInput.value.trim() || null,
        displayUserNames: displayUserNamesInput.value.split(',').map(n => n.trim()).filter(Boolean),
        aboutUsText: settingsAboutUsText.value.trim() || null,
        contact: { sugamEmail: settingsSugamEmail.value.trim() || null, developerEmail: settingsDeveloperEmail.value.trim() || null },
        socialLinks: { youtube: settingsYoutubeLink.value.trim() || null, instagram: settingsInstagramLink.value.trim() || null, facebook: settingsFacebookLink.value.trim() || null, twitter: settingsTwitterLink.value.trim() || null }
    };
    await db.ref('settings').update(settingsData);
    alert('Settings saved!'); loadDynamicUserDisplay(); renderFooter();
});
async function renderFooter() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    footerAboutUsText.textContent = settings.aboutUsText || 'Default about text.';
    footerSugamEmail.textContent = settings.contact?.sugamEmail || 'N/A';
    footerDeveloperEmail.textContent = settings.contact?.developerEmail || 'N/A';
    const updateLink = (el, url) => { el.style.display = url ? 'inline-block' : 'none'; if(url) el.href = url; };
    updateLink(footerYoutubeLink, settings.socialLinks?.youtube); updateLink(footerInstagramLink, settings.socialLinks?.instagram); updateLink(footerFacebookLink, settings.socialLinks?.facebook); updateLink(footerTwitterLink, settings.socialLinks?.twitter);
}
let currentDynamicUserNameIndex = 0; let rotationTimeout; let barDisplayTimeout;
async function loadDynamicUserDisplay() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    userNotificationCount.textContent = settings.displayTotalUsersCount || '0';
    const realUserNames = []; (await db.ref('users').once('value')).forEach(child => realUserNames.push(child.val().name));
    displayedUserNames = [...new Set([...realUserNames, ...(settings.displayUserNames || [])])];
    clearInterval(rotationTimeout); clearTimeout(barDisplayTimeout); clearInterval(userNotificationBarInterval);
    userNotificationBar.classList.remove('show');
    if (displayedUserNames.length > 0) {
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
    }
}
async function fetchInstagramFollowers() {
    if (!instagramFollowerCount) return;
    instagramFollowerCount.innerHTML = '<span class="loading"></span>';
    await new Promise(resolve => setTimeout(resolve, 1500));
    instagramFollowerCount.innerHTML = "1M+";
}
function followUser() { window.open('https://www.instagram.com/snr__27?igsh=MXI4YXd5NnIxMDAzcw==', '_blank'); }
function closeInstagramPopup() { instagramPopupModal.style.display = 'none'; clearTimeout(popupAutoCloseTimer); if (followerUpdateInterval) clearInterval(followerUpdateInterval); }
function createParticles() {
    const pCont = instagramPopupModal.querySelector('#particles'); if (!pCont) return; pCont.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div'); p.classList.add('particle');
        p.style.cssText = `width:${Math.random()*6+2}px;height:${Math.random()*6+2}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${Math.random()*4+5}s;background:${Math.random()>.5?'rgba(255,0,255,.6)':'rgba(0,255,255,.6)'};`;
        pCont.appendChild(p);
    }
}
function showInstagramPopup() {
    if (adminPanel.style.display === 'block') return;
    instagramPopupModal.style.display = 'flex';
    instagramPopupContainer.style.animation = 'none'; void instagramPopupContainer.offsetWidth;
    instagramPopupContainer.style.animation = 'fadeIn 0.8s ease-out, neonBorder 4s infinite alternate';
    createParticles(); fetchInstagramFollowers();
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
    db.ref(`chats/${user.uid}/messages`).orderByChild('timestamp').on('value', snapshot => {
        chatMessagesContainer.innerHTML = '';
        if (snapshot.exists()) snapshot.forEach(child => renderChatMessage(child.val().sender, child.val().text, child.val().timestamp));
        else chatMessagesContainer.innerHTML = '<p>Start a conversation!</p>';
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    });
}
chatInputForm.addEventListener('submit', (e) => {
    e.preventDefault(); const user = auth.currentUser; const text = chatMessageInput.value.trim(); if (!user || !text) return;
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    db.ref(`chats/${user.uid}/messages`).push({ sender: 'user', text, timestamp });
    db.ref(`chats/${user.uid}/meta`).update({ lastMessage: text, lastTimestamp: timestamp, userName: user.displayName || user.email, hasUnreadAdminMessage: true });
    chatMessageInput.value = '';
});
function renderChatMessage(sender, text, timestamp, container = chatMessagesContainer) {
    const msgEl = document.createElement('div'); msgEl.className = `chat-message ${sender}`;
    msgEl.innerHTML = `<div>${text}</div><div class="chat-message-time">${new Date(timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>`;
    container.appendChild(msgEl);
}
function loadAdminChatList() {
    db.ref('chats').orderByChild('meta/lastTimestamp').on('value', async snapshot => {
        adminChatList.innerHTML = ''; if (!snapshot.exists()) return;
        const chatList = []; snapshot.forEach(child => chatList.push({ userId: child.key, ...child.val().meta }));
        chatList.reverse().forEach(chat => {
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
    db.ref(`chats/${userId}/messages`).orderByChild('timestamp').on('value', snapshot => {
        adminMessagesContainer.innerHTML = '';
        snapshot.forEach(child => renderChatMessage(child.val().sender, child.val().text, child.val().timestamp, adminMessagesContainer));
        adminMessagesContainer.scrollTop = adminMessagesContainer.scrollHeight;
    });
    document.getElementById('adminChatInputForm').addEventListener('submit', e => {
        e.preventDefault(); const text = document.getElementById('adminChatMessageInput').value.trim();
        if (!text || !currentAdminChatUserId) return;
        db.ref(`chats/${currentAdminChatUserId}/messages`).push({ sender: 'admin', text, timestamp: firebase.database.ServerValue.TIMESTAMP });
        db.ref(`chats/${currentAdminChatUserId}/meta`).update({ hasUnreadAdminMessage: false });
        document.getElementById('adminChatMessageInput').value = '';
    });
}
updateUI(null);
// --- SHARE BUTTON LOGIC ---
const shareBtn = document.getElementById('shareBtn');
const shareDropdown = document.getElementById('shareDropdown');

// Yeh function share links banata hai
function setupShareLinks() {
    // Yahan humne aapka fix homepage URL daala hai taaki photo wala preview hamesha kaam kare
    const siteUrl = "https://snr27hub.github.io/Sugam-Academy/";
    const shareText = "Check out Sugam Academy for amazing educational resources for +2 and +3! Developed by SNR.";
    
    const encodedUrl = encodeURIComponent(siteUrl);
    const encodedText = encodeURIComponent(shareText);

    document.getElementById('shareWhatsapp').href = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
    document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
}

// Button par click karne se dropdown dikhega/chupega
shareBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Yeh zaroori hai
    shareDropdown.classList.toggle('show');
});

// Kahin aur click karne par dropdown band ho jayega
document.addEventListener('click', (e) => {
    if (!shareDropdown.contains(e.target) && !shareBtn.contains(e.target)) {
        if (shareDropdown.classList.contains('show')) {
            shareDropdown.classList.remove('show');
        }
    }
});

// Page load hote hi share links taiyar ho jayenge
setupShareLinks();
