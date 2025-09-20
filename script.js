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
            const buttonHtml = `<a href="${currentBanner.buttonUrl}" target="_blank" class="btn btn-primary">${currentBanner.buttonText}</a>`;
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

deleteAllNotificationsBtn.addEventListener('click', () => {
    if (confirm('Delete all notifications?')) db.ref('notifications').remove().then(() => alert('All notifications deleted.'));
});

function loadAdminTeachers() {
    db.ref('teachers').on('value', snapshot => {
        teachersTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const teacher = child.val();
            const photos = teacher.photoUrls ? teacher.photoUrls.split(',').map(url => url.trim()).filter(url => url) : [];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${teacher.name || 'N/A'} ${teacher.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</td>
                <td>${teacher.subject || 'N/A'}</td>
                <td>${teacher.experience || 'N/A'}</td>
                <td>${photos.length > 0 ? `<a href="${photos[0]}" target="_blank">View Photo</a>` : 'None'}</td>
                <td>
                    <button class="btn btn-primary" onclick="editTeacher('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deleteTeacher('${child.key}')">Delete</button>
                </td>
            `;
            teachersTableBody.appendChild(row);
        });
    });
}

function editTeacher(teacherId) { alert('Edit teacher: ' + teacherId); }

function deleteTeacher(teacherId) { if (confirm('Delete this teacher?')) db.ref('teachers/' + teacherId).remove().then(() => alert('Teacher deleted.')); }

addTeacherBtn.addEventListener('click', () => {
    teacherFormContainer.style.display = 'block';
    teacherForm.reset();
    document.getElementById('teacherId').value = '';
});

cancelTeacher.addEventListener('click', () => teacherFormContainer.style.display = 'none');

teacherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const teacherId = document.getElementById('teacherId').value;
    const name = document.getElementById('teacherName').value;
    const subject = document.getElementById('teacherSubject').value;
    const experience = document.getElementById('teacherExperience').value;
    const photoUrls = document.getElementById('teacherPhotoUrls').value;
    const verified = document.getElementById('teacherVerified').checked;
    const teacherData = { name, subject, experience, photoUrls, verified };
    const ref = teacherId ? db.ref('teachers/' + teacherId) : db.ref('teachers').push();
    ref.update(teacherData).then(() => {
        alert('Teacher saved!');
        teacherFormContainer.style.display = 'none';
    }).catch(error => alert('Error: ' + error.message));
});

addContentBtn.addEventListener('click', () => {
    contentFormContainer.style.display = 'block';
    contentForm.reset();
    document.getElementById('contentId').value = '';
    contentUrlGroup.style.display = 'block';
    quizFields.style.display = 'none';
    contentPriceContainer.style.display = 'none';
    contentAccess.value = 'free';
});

cancelContent.addEventListener('click', () => contentFormContainer.style.display = 'none');

contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contentId = document.getElementById('contentId').value;
    const title = document.getElementById('contentTitle').value;
    const description = document.getElementById('contentDescription').value;
    const type = contentType.value;
    const access = contentAccess.value;
    const price = type !== 'quiz' ? parseFloat(document.getElementById('contentPrice').value) || 0 : 0;
    const category = document.getElementById('contentCategory').value;
    const contentData = { title, description, type, access, price, category };
    if (type === 'quiz') {
        const question = document.getElementById('quizQuestion').value;
        const options = [
            document.getElementById('quizOption1').value,
            document.getElementById('quizOption2').value,
            document.getElementById('quizOption3').value,
            document.getElementById('quizOption4').value,
        ];
        const correctAnswer = parseInt(document.getElementById('quizCorrectAnswer').value, 10);
        contentData.quizData = { question, options, correctAnswer };
    } else {
        contentData.url = document.getElementById('contentUrl').value;
    }
    const ref = contentId ? db.ref('content/' + contentId) : db.ref('content').push();
    ref.update(contentData).then(() => {
        alert('Content saved!');
        contentFormContainer.style.display = 'none';
    }).catch(error => alert('Error: ' + error.message));
});

function loadAdminContent() {
    db.ref('content').on('value', snapshot => {
        adminContentGrid.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const content = child.val();
            const card = document.createElement('div');
            card.className = 'content-card';
            card.innerHTML = `
                <h3>${content.title || 'N/A'}</h3>
                <p>${content.description || 'N/A'}</p>
                <p><strong>Type:</strong> ${content.type || 'N/A'}</p>
                <p><strong>Access:</strong> ${content.access || 'N/A'}</p>
                <p><strong>Category:</strong> ${content.category || 'N/A'}</p>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="editContent('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deleteContent('${child.key}')">Delete</button>
                </div>
            `;
            adminContentGrid.appendChild(card);
        });
    });
}

function editContent(contentId) {
    db.ref('content/' + contentId).once('value').then(snap => {
        const content = snap.val();
        document.getElementById('contentId').value = contentId;
        document.getElementById('contentTitle').value = content.title || '';
        document.getElementById('contentDescription').value = content.description || '';
        contentType.value = content.type || '';
        contentAccess.value = content.access || 'free';
        document.getElementById('contentPrice').value = content.price || 0;
        document.getElementById('contentCategory').value = content.category || '+2';
        if (content.type === 'quiz') {
            quizFields.style.display = 'block';
            document.getElementById('quizQuestion').value = content.quizData?.question || '';
            document.getElementById('quizOption1').value = content.quizData?.options?.[0] || '';
            document.getElementById('quizOption2').value = content.quizData?.options?.[1] || '';
            document.getElementById('quizOption3').value = content.quizData?.options?.[2] || '';
            document.getElementById('quizOption4').value = content.quizData?.options?.[3] || '';
            document.getElementById('quizCorrectAnswer').value = content.quizData?.correctAnswer || 1;
            contentUrlGroup.style.display = 'none';
        } else {
            quizFields.style.display = 'none';
            contentUrlGroup.style.display = 'block';
            document.getElementById('contentUrl').value = content.url || '';
        }
        contentPriceContainer.style.display = (content.access === 'premium' || content.access === 'buy') ? 'block' : 'none';
        contentFormContainer.style.display = 'block';
    });
}

function deleteContent(contentId) { if (confirm('Delete this content?')) db.ref('content/' + contentId).remove().then(() => alert('Content deleted.')); }

notificationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('notificationTitle').value;
    const message = document.getElementById('notificationMessage').value;
    const imageUrl = document.getElementById('notificationImageUrl').value;
    const date = Date.now();
    db.ref('notifications').push({ title, message, imageUrl, date }).then(() => {
        alert('Notification sent!');
        notificationForm.reset();
    }).catch(error => alert('Error: ' + error.message));
});

function loadContent(isLoggedIn, isPremium, purchasedVideos, favorites, category) {
    db.ref('content').on('value', snapshot => {
        videoContentGrid.innerHTML = '';
        notesContentGrid.innerHTML = '';
        quizContentGrid.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const content = child.val();
            if (content.category !== category) return;
            let grid;
            if (content.type === 'video') grid = videoContentGrid;
            else if (content.type === 'notes') grid = notesContentGrid;
            else if (content.type === 'quiz') grid = quizContentGrid;
            else return;
            const card = document.createElement('div');
            card.className = 'content-card';
            let accessIcon = '';
            let actionButton = '';
            if (content.access === 'premium') {
                accessIcon = '<span class="premium-badge">Premium</span>';
                if (!isPremium) actionButton = `<button class="btn btn-primary" onclick="openPremiumModal()">Go Premium</button>`;
                else actionButton = `<button class="btn btn-primary" onclick="openContent('${child.key}', '${content.type}')">View</button>`;
            } else if (content.access === 'buy') {
                accessIcon = '<span class="price-badge">₹' + (content.price || 0) + '</span>';
                if (purchasedVideos[child.key]) actionButton = `<button class="btn btn-primary" onclick="openContent('${child.key}', '${content.type}')">View</button>`;
                else actionButton = `<button class="btn btn-primary" onclick="openBuyModal('${child.key}', '${content.title}', ${content.price || 0})">Buy Now</button>`;
            } else {
                actionButton = `<button class="btn btn-primary" onclick="openContent('${child.key}', '${content.type}')">View</button>`;
            }
            const isFavorited = favorites && favorites[child.key];
            card.innerHTML = `
                <div class="card-header">
                    <h3>${content.title || 'N/A'}</h3>
                    ${accessIcon}
                </div>
                <p>${content.description || 'N/A'}</p>
                <div class="card-actions">
                    ${actionButton}
                    <button class="btn btn-outline favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${child.key}', this)">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

function openContent(contentId, contentType) {
    db.ref('content/' + contentId).once('value').then(snap => {
        const content = snap.val();
        contentDisplayModalTitle.textContent = content.title || 'Content';
        contentIframeWrapper.innerHTML = '';
        if (contentType === 'quiz') {
            currentQuizData = content.quizData;
            currentQuizId = contentId;
            quizModal.style.display = 'flex';
            loadQuizQuestion();
        } else {
            let contentElement;
            if (contentType === 'video') {
                contentElement = document.createElement('video');
                contentElement.controls = true;
                contentElement.autoplay = true;
                contentElement.className = 'content-video';
                contentElement.innerHTML = `<source src="${content.url}" type="video/mp4">Your browser does not support the video tag.`;
            } else if (contentType === 'notes') {
                contentElement = document.createElement('iframe');
                contentElement.className = 'content-iframe';
                contentElement.src = content.url;
                contentElement.setAttribute('frameborder', '0');
            }
            contentIframeWrapper.appendChild(contentElement);
            contentDisplayModal.style.display = 'flex';
        }
    });
}

function loadQuizQuestion() {
    if (!currentQuizData) return;
    quizModalTitle.textContent = 'Quiz';
    quizQuestionText.textContent = currentQuizData.question;
    quizOptions.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectQuizOption(index);
        quizOptions.appendChild(optionBtn);
    });
    submitQuizAnswerBtn.style.display = 'none';
    quizFeedback.style.display = 'none';
}

function selectQuizOption(selectedIndex) {
    quizOptions.querySelectorAll('.quiz-option').forEach((btn, index) => {
        btn.classList.toggle('selected', index === selectedIndex);
    });
    submitQuizAnswerBtn.style.display = 'block';
    submitQuizAnswerBtn.onclick = () => submitQuizAnswer(selectedIndex);
}

function submitQuizAnswer(selectedIndex) {
    const isCorrect = selectedIndex === currentQuizData.correctAnswer;
    quizFeedback.style.display = 'block';
    quizFeedback.innerHTML = `
        <h3>${isCorrect ? 'Correct!' : 'Incorrect!'}</h3>
        <p>${isCorrect ? 'Well done!' : 'The correct answer is: ' + currentQuizData.options[currentQuizData.correctAnswer]}</p>
        <button id="closeQuizFeedbackBtn" class="btn btn-primary">Continue</button>
    `;
    document.getElementById('closeQuizFeedbackBtn').onclick = () => {
        quizModal.style.display = 'none';
        quizFeedback.style.display = 'none';
    };
    if (isCorrect) {
        const user = auth.currentUser;
        if (user) db.ref(`users/${user.uid}/quizScores/${currentQuizId}`).set(true);
    }
}

function toggleFavorite(contentId, button) {
    const user = auth.currentUser;
    if (!user) {
        alert('Please login to add favorites.');
        return;
    }
    const isFavorited = button.classList.contains('favorited');
    db.ref(`users/${user.uid}/favorites/${contentId}`).set(isFavorited ? null : true).then(() => {
        button.classList.toggle('favorited');
    });
}

function openPremiumModal() {
    premiumModal.style.display = 'flex';
    db.ref('plans').once('value').then(snap => {
        const plans = [];
        snap.forEach(child => plans.push(child.val()));
        if (plans.length > 0) {
            displayPremiumAmount.textContent = plans[0].price;
        }
    });
}

function openBuyModal(contentId, title, price) {
    if (contentId === 'verifyBadge') {
        currentPaymentType = 'verifyBadge';
        buyModalTitle.textContent = title;
        itemPriceToBuy.textContent = price;
        itemPaymentSection.style.display = 'block';
        videoBuyModal.style.display = 'flex';
    } else {
        currentVideoToBuy = { id: contentId, title: title, price: price };
        currentPaymentType = 'video';
        buyModalTitle.textContent = title;
        itemPriceToBuy.textContent = price;
        itemPaymentSection.style.display = 'block';
        videoBuyModal.style.display = 'flex';
    }
}

function openMyFavoritesModal() {
    const user = auth.currentUser;
    if (!user) {
        alert('Please login to view favorites.');
        return;
    }
    myFavoritesModal.style.display = 'flex';
    favoritesContentGrid.innerHTML = '';
    db.ref('users/' + user.uid + '/favorites').once('value').then(favSnap => {
        const favorites = favSnap.val() || {};
        db.ref('content').once('value').then(contentSnap => {
            contentSnap.forEach(child => {
                if (favorites[child.key]) {
                    const content = child.val();
                    const card = document.createElement('div');
                    card.className = 'content-card';
                    card.innerHTML = `
                        <h3>${content.title || 'N/A'}</h3>
                        <p>${content.description || 'N/A'}</p>
                        <button class="btn btn-primary" onclick="openContent('${child.key}', '${content.type}')">View</button>
                    `;
                    favoritesContentGrid.appendChild(card);
                }
            });
        });
    });
}

function openMyPurchasesModal() {
    const user = auth.currentUser;
    if (!user) {
        alert('Please login to view purchases.');
        return;
    }
    myPurchasesModal.style.display = 'flex';
    purchasesTableBody.innerHTML = '';
    db.ref('users/' + user.uid + '/purchasedVideos').once('value').then(purchSnap => {
        const purchases = purchSnap.val() || {};
        db.ref('content').once('value').then(contentSnap => {
            contentSnap.forEach(child => {
                if (purchases[child.key]) {
                    const content = child.val();
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${content.title || 'N/A'}</td>
                        <td>${content.type || 'N/A'}</td>
                        <td>₹${content.price || 0}</td>
                        <td><button class="btn btn-primary" onclick="openContent('${child.key}', '${content.type}')">View</button></td>
                    `;
                    purchasesTableBody.appendChild(row);
                }
            });
        });
    });
}

function loadGallery() {
    db.ref('gallery').on('value', snapshot => {
        galleryContentGrid.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val();
            const card = document.createElement('div');
            card.className = 'gallery-item';
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title || 'Gallery Image'}">
                <div class="gallery-overlay">
                    <h3>${item.title || 'N/A'}</h3>
                    <p>${item.description || ''}</p>
                </div>
            `;
            galleryContentGrid.appendChild(card);
        });
    });
}

function loadTopScorer() {
    db.ref('topScorer').once('value').then(snap => {
        const topScorer = snap.val();
        if (topScorer) {
            topScorerBanner.innerHTML = `
                <span>🏆 Top Scorer: ${topScorer.name || 'N/A'} (${topScorer.score || 'N/A'})</span>
            `;
            topScorerBanner.style.display = 'block';
        } else {
            topScorerBanner.style.display = 'none';
        }
    });
}

function loadDynamicUserDisplay() {
    db.ref('users').once('value').then(snap => {
        const users = [];
        snap.forEach(child => {
            const user = child.val();
            if (user.name) users.push(user.name);
        });
        displayedUserNames = users;
        if (displayedUserNames.length > 0) {
            userNotificationName.textContent = displayedUserNames[0];
            userNotificationBar.style.display = 'flex';
            userNotificationCount.textContent = displayedUserNames.length;
            if (userNameRotationInterval) clearInterval(userNameRotationInterval);
            let currentIndex = 0;
            userNameRotationInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % displayedUserNames.length;
                userNotificationName.textContent = displayedUserNames[currentIndex];
            }, 5000);
        } else {
            userNotificationBar.style.display = 'none';
        }
    });
}

function loadNotificationsCount() {
    const user = auth.currentUser;
    if (!user) return;
    db.ref('notifications').once('value').then(snap => {
        const count = snap.numChildren();
        notificationCount.textContent = count;
        dropdownNotificationCount.textContent = count;
        if (count > 0) {
            notificationBell.classList.add('has-notifications');
        } else {
            notificationBell.classList.remove('has-notifications');
        }
    });
}

function showInstagramPopup() {
    if (instagramPopupModal.style.display === 'flex') return;
    instagramPopupModal.style.display = 'flex';
    const randomFollowers = Math.floor(Math.random() * 10000) + 500;
    instagramFollowerCount.textContent = randomFollowers.toLocaleString();
    if (popupAutoCloseTimer) clearTimeout(popupAutoCloseTimer);
    popupAutoCloseTimer = setTimeout(closeInstagramPopup, 10000);
    if (followerUpdateInterval) clearInterval(followerUpdateInterval);
    followerUpdateInterval = setInterval(() => {
        const currentFollowers = parseInt(instagramFollowerCount.textContent.replace(/,/g, ''), 10);
        const newFollowers = currentFollowers + Math.floor(Math.random() * 10);
        instagramFollowerCount.textContent = newFollowers.toLocaleString();
    }, 3000);
}

function closeInstagramPopup() {
    instagramPopupModal.style.display = 'none';
    if (popupAutoCloseTimer) clearTimeout(popupAutoCloseTimer);
    if (followerUpdateInterval) clearInterval(followerUpdateInterval);
}

instagramCloseIcon.addEventListener('click', closeInstagramPopup);
instagramCloseBtnInner.addEventListener('click', closeInstagramPopup);
instagramPopupContainer.addEventListener('click', (e) => e.stopPropagation());
instagramPopupModal.addEventListener('click', closeInstagramPopup);
instagramFollowBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/sugamacadamy/', '_blank');
    closeInstagramPopup();
});

chatFab.addEventListener('click', () => {
    chatWidget.style.display = chatWidget.style.display === 'block' ? 'none' : 'block';
    if (chatWidget.style.display === 'block') {
        loadChatMessages();
    }
});

closeChatWidget.addEventListener('click', () => chatWidget.style.display = 'none');

chatInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || !chatMessageInput.value.trim()) return;
    const message = {
        text: chatMessageInput.value.trim(),
        senderId: user.uid,
        senderName: user.displayName || 'User',
        timestamp: Date.now()
    };
    db.ref('chats/' + user.uid).push(message).then(() => {
        chatMessageInput.value = '';
        loadChatMessages();
    });
});

function initializeUserChat() {
    const user = auth.currentUser;
    if (!user) return;
    db.ref('chats/' + user.uid).on('child_added', () => loadChatMessages());
}

function loadChatMessages() {
    const user = auth.currentUser;
    if (!user) return;
    chatMessagesContainer.innerHTML = '';
    db.ref('chats/' + user.uid).orderByChild('timestamp').limitToLast(50).once('value').then(snap => {
        snap.forEach(child => {
            const msg = child.val();
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${msg.senderId === user.uid ? 'user-message' : 'admin-message'}`;
            messageDiv.innerHTML = `
                <p>${msg.text}</p>
                <span class="message-time">${new Date(msg.timestamp).toLocaleTimeString()}</span>
            `;
            chatMessagesContainer.appendChild(messageDiv);
        });
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    });
}

function loadAdminChatList() {
    db.ref('users').once('value').then(snap => {
        adminChatList.innerHTML = '';
        if (!snapshot.exists()) return;
        snap.forEach(child => {
            const user = child.val();
            const li = document.createElement('li');
            li.textContent = user.name || 'Unknown User';
            li.onclick = () => openAdminChat(child.key, user.name);
            adminChatList.appendChild(li);
        });
    });
}

function openAdminChat(userId, userName) {
    currentAdminChatUserId = userId;
    adminChatWindow.innerHTML = `<h3>Chat with ${userName}</h3>`;
    db.ref('chats/' + userId).orderByChild('timestamp').limitToLast(50).once('value').then(snap => {
        snap.forEach(child => {
            const msg = child.val();
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${msg.senderId === userId ? 'user-message' : 'admin-message'}`;
            messageDiv.innerHTML = `
                <p>${msg.text}</p>
                <span class="message-time">${new Date(msg.timestamp).toLocaleTimeString()}</span>
            `;
            adminChatWindow.appendChild(messageDiv);
        });
    });
}

function sendAdminMessage() {
    if (!currentAdminChatUserId) return;
    const messageInput = document.getElementById('adminMessageInput');
    if (!messageInput.value.trim()) return;
    const message = {
        text: messageInput.value.trim(),
        senderId: 'admin',
        senderName: 'Admin',
        timestamp: Date.now()
    };
    db.ref('chats/' + currentAdminChatUserId).push(message).then(() => {
        messageInput.value = '';
        openAdminChat(currentAdminChatUserId, 'User');
    });
}

addPlanBtn.addEventListener('click', () => {
    planFormContainer.style.display = 'block';
    planForm.reset();
    document.getElementById('planId').value = '';
});

cancelPlan.addEventListener('click', () => planFormContainer.style.display = 'none');

planForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const planId = document.getElementById('planId').value;
    const name = document.getElementById('planName').value;
    const price = parseFloat(document.getElementById('planPrice').value);
    const duration = document.getElementById('planDuration').value;
    const features = document.getElementById('planFeatures').value.split(',').map(f => f.trim()).filter(f => f);
    const planData = { name, price, duration, features };
    const ref = planId ? db.ref('plans/' + planId) : db.ref('plans').push();
    ref.update(planData).then(() => {
        alert('Plan saved!');
        planFormContainer.style.display = 'none';
    }).catch(error => alert('Error: ' + error.message));
});

function loadAdminPlans() {
    db.ref('plans').on('value', snapshot => {
        plansTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const plan = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${plan.name || 'N/A'}</td>
                <td>₹${plan.price || '0'}</td>
                <td>${plan.duration || 'N/A'}</td>
                <td>${plan.features ? plan.features.join(', ') : 'N/A'}</td>
                <td>
                    <button class="btn btn-primary" onclick="editPlan('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deletePlan('${child.key}')">Delete</button>
                </td>
            `;
            plansTableBody.appendChild(row);
        });
    });
}

function editPlan(planId) {
    db.ref('plans/' + planId).once('value').then(snap => {
        const plan = snap.val();
        document.getElementById('planId').value = planId;
        document.getElementById('planName').value = plan.name || '';
        document.getElementById('planPrice').value = plan.price || '';
        document.getElementById('planDuration').value = plan.duration || '';
        document.getElementById('planFeatures').value = plan.features ? plan.features.join(', ') : '';
        planFormContainer.style.display = 'block';
    });
}

function deletePlan(planId) { if (confirm('Delete this plan?')) db.ref('plans/' + planId).remove().then(() => alert('Plan deleted.')); }

addBannerBtn.addEventListener('click', () => {
    bannerFormContainer.style.display = 'block';
    bannerForm.reset();
    document.getElementById('bannerId').value = '';
});

cancelBanner.addEventListener('click', () => bannerFormContainer.style.display = 'none');

bannerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bannerId = document.getElementById('bannerId').value;
    const title = document.getElementById('bannerTitle').value;
    const imageUrl = document.getElementById('bannerImageUrl').value;
    const buttonText = document.getElementById('bannerButtonText').value;
    const buttonUrl = document.getElementById('bannerButtonUrl').value;
    const startDate = document.getElementById('bannerStartDate').value;
    const endDate = document.getElementById('bannerEndDate').value;
    const bannerData = { title, imageUrl, buttonText, buttonUrl, startDate, endDate };
    const ref = bannerId ? db.ref('banners/' + bannerId) : db.ref('banners').push();
    ref.update(bannerData).then(() => {
        alert('Banner saved!');
        bannerFormContainer.style.display = 'none';
    }).catch(error => alert('Error: ' + error.message));
});

function loadAdminBanners() {
    db.ref('banners').on('value', snapshot => {
        bannersTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const banner = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${banner.title || 'N/A'}</td>
                <td><a href="${banner.imageUrl}" target="_blank">View Image</a></td>
                <td>${banner.buttonText || 'N/A'}</td>
                <td>${banner.buttonUrl || 'N/A'}</td>
                <td>${banner.startDate ? new Date(banner.startDate).toLocaleDateString() : 'N/A'}</td>
                <td>${banner.endDate ? new Date(banner.endDate).toLocaleDateString() : 'N/A'}</td>
                <td>
                    <button class="btn btn-primary" onclick="editBanner('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deleteBanner('${child.key}')">Delete</button>
                </td>
            `;
            bannersTableBody.appendChild(row);
        });
    });
}

function editBanner(bannerId) {
    db.ref('banners/' + bannerId).once('value').then(snap => {
        const banner = snap.val();
        document.getElementById('bannerId').value = bannerId;
        document.getElementById('bannerTitle').value = banner.title || '';
        document.getElementById('bannerImageUrl').value = banner.imageUrl || '';
        document.getElementById('bannerButtonText').value = banner.buttonText || '';
        document.getElementById('bannerButtonUrl').value = banner.buttonUrl || '';
        document.getElementById('bannerStartDate').value = banner.startDate || '';
        document.getElementById('bannerEndDate').value = banner.endDate || '';
        bannerFormContainer.style.display = 'block';
    });
}

function deleteBanner(bannerId) { if (confirm('Delete this banner?')) db.ref('banners/' + bannerId).remove().then(() => alert('Banner deleted.')); }

async function loadAdminSettings() {
    const settingsSnap = await db.ref('settings').once('value');
    const settings = settingsSnap.val() || {};
    adminVerifyBadgePrice.value = settings.adminVerifyBadgePrice || 100;
    displayTotalUsersCountInput.checked = settings.displayTotalUsersCount !== false;
    displayUserNamesInput.checked = settings.displayUserNames !== false;
    settingsAboutUsText.value = settings.aboutUsText || 'Sugam Academy is a leading educational platform...';
    settingsSugamEmail.value = settings.sugamEmail || 'sugamacadamy@gmail.com';
    settingsDeveloperEmail.value = settings.developerEmail || 'sugamdeveloper@gmail.com';
    settingsYoutubeLink.value = settings.youtubeLink || 'https://youtube.com/@sugamacadamy';
    settingsInstagramLink.value = settings.instagramLink || 'https://instagram.com/sugamacadamy';
    settingsFacebookLink.value = settings.facebookLink || 'https://facebook.com/sugamacadamy';
    settingsTwitterLink.value = settings.twitterLink || 'https://twitter.com/sugamacadamy';
}

generalSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const settings = {
        adminVerifyBadgePrice: parseFloat(adminVerifyBadgePrice.value) || 100,
        displayTotalUsersCount: displayTotalUsersCountInput.checked,
        displayUserNames: displayUserNamesInput.checked,
        aboutUsText: settingsAboutUsText.value,
        sugamEmail: settingsSugamEmail.value,
        developerEmail: settingsDeveloperEmail.value,
        youtubeLink: settingsYoutubeLink.value,
        instagramLink: settingsInstagramLink.value,
        facebookLink: settingsFacebookLink.value,
        twitterLink: settingsTwitterLink.value
    };
    db.ref('settings').set(settings).then(() => {
        alert('Settings saved!');
        renderFooter();
    }).catch(error => alert('Error: ' + error.message));
});

async function renderFooter() {
    const settingsSnap = await db.ref('settings').once('value');
    const settings = settingsSnap.val() || {};
    footerAboutUsText.textContent = settings.aboutUsText || 'Sugam Academy is a leading educational platform...';
    footerSugamEmail.textContent = settings.sugamEmail || 'sugamacadamy@gmail.com';
    footerDeveloperEmail.textContent = settings.developerEmail || 'sugamdeveloper@gmail.com';
    footerYoutubeLink.href = settings.youtubeLink || 'https://youtube.com/@sugamacadamy';
    footerInstagramLink.href = settings.instagramLink || 'https://instagram.com/sugamacadamy';
    footerFacebookLink.href = settings.facebookLink || 'https://facebook.com/sugamacadamy';
    footerTwitterLink.href = settings.twitterLink || 'https://twitter.com/sugamacadamy';
}

addGalleryItemBtn.addEventListener('click', () => {
    galleryFormContainer.style.display = 'block';
    galleryForm.reset();
    document.getElementById('galleryItemId').value = '';
});

cancelGalleryItem.addEventListener('click', () => galleryFormContainer.style.display = 'none');

galleryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const galleryItemId = document.getElementById('galleryItemId').value;
    const title = document.getElementById('galleryItemTitle').value;
    const description = document.getElementById('galleryItemDescription').value;
    const imageUrl = document.getElementById('galleryItemImageUrl').value;
    const galleryData = { title, description, imageUrl };
    const ref = galleryItemId ? db.ref('gallery/' + galleryItemId) : db.ref('gallery').push();
    ref.update(galleryData).then(() => {
        alert('Gallery item saved!');
        galleryFormContainer.style.display = 'none';
    }).catch(error => alert('Error: ' + error.message));
});

function loadAdminGallery() {
    db.ref('gallery').on('value', snapshot => {
        galleryTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.title || 'N/A'}</td>
                <td>${item.description || 'N/A'}</td>
                <td><a href="${item.imageUrl}" target="_blank">View Image</a></td>
                <td>
                    <button class="btn btn-primary" onclick="editGalleryItem('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deleteGalleryItem('${child.key}')">Delete</button>
                </td>
            `;
            galleryTableBody.appendChild(row);
        });
    });
}

function editGalleryItem(galleryItemId) {
    db.ref('gallery/' + galleryItemId).once('value').then(snap => {
        const item = snap.val();
        document.getElementById('galleryItemId').value = galleryItemId;
        document.getElementById('galleryItemTitle').value = item.title || '';
        document.getElementById('galleryItemDescription').value = item.description || '';
        document.getElementById('galleryItemImageUrl').value = item.imageUrl || '';
        galleryFormContainer.style.display = 'block';
    });
}

function deleteGalleryItem(galleryItemId) { if (confirm('Delete this gallery item?')) db.ref('gallery/' + galleryItemId).remove().then(() => alert('Gallery item deleted.')); }

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

function showNotificationToast(message) {
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.textContent = message;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                notificationToastContainer.removeChild(toast);
            }, 300);
        }, 3000);
    }, 100);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is admin
    auth.onAuthStateChanged(user => {
        if (user && user.email === 'sugamacadamy@gmail.com') {
            showAdminPanel();
        } else {
            updateUI(user ? { name: user.displayName } : null);
        }
    });

    // Show Instagram popup after 5 seconds
    setTimeout(showInstagramPopup, 5000);

    // Initialize user notification bar
    loadDynamicUserDisplay();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (profileDropdownMenu.style.display === 'block' && !profileDropdownMenu.contains(e.target) && !profileMenuToggleBtn.contains(e.target)) {
        profileDropdownMenu.style.display = 'none';
    }
});

// Close chat widget when clicking outside
document.addEventListener('click', (e) => {
    if (chatWidget.style.display === 'block' && !chatWidget.contains(e.target) && !chatFab.contains(e.target)) {
        chatWidget.style.display = 'none';
    }
});

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'flex' || modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
        if (profileDropdownMenu.style.display === 'block') {
            profileDropdownMenu.style.display = 'none';
        }
        if (chatWidget.style.display === 'block') {
            chatWidget.style.display = 'none';
        }
    }
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    showNotificationToast('You are back online!');
});

window.addEventListener('offline', () => {
    showNotificationToast('You are offline. Some features may not work.');
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy');
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(lazyImage => {
        lazyImageObserver.observe(lazyImage);
    });
}
