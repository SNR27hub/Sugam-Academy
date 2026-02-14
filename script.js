// NEW Firebase configuration
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
const storage = firebase.storage();

// ==== DEFAULT AVATAR LISTS (from your URLs) ====
const DEFAULT_BOY_AVATARS = [
    "https://i.postimg.cc/Kj9wdcsT/2f84eaaed2d88735da0c97e6f592dcd9-(1).jpg",
    "https://i.postimg.cc/d3QgHZ6x/38afe3877bb9e8bc6c4ca1e1c9fc09a0.jpg",
    "https://i.postimg.cc/br6WKYVK/6fb774f1a53e465002431308b54135cc.jpg",
    "https://i.postimg.cc/gjMQfcBJ/73679e9f2015df2ad523b23aa3ecf4e0.jpg",
    "https://i.postimg.cc/sxnqtf0z/891f2423c6e69895fdcdf181b49168da.jpg",
    "https://i.postimg.cc/cCD2V15n/8b2aae428370dfdfcab3877e72ee5b10.jpg",
    "https://i.postimg.cc/NGb3ybG4/9e5bbb94afd714ef9683e98d3f4f114e.jpg",
    "https://i.postimg.cc/XqNtHBx4/a2bc735a59170688aa69f74d1d84b100.jpg",
    "https://i.postimg.cc/90xKvXgK/fdd2df00adf3d48dcfc798b00631cf3a.jpg"
];

const DEFAULT_GIRL_AVATARS = [
    "https://i.postimg.cc/xC8dw86n/07b51baaeb8108d5a627f58bdf88d2cb.jpg",
    "https://i.postimg.cc/BvM67HBf/07c77583c0a36ddfd60409a26e471d74.jpg",
    "https://i.postimg.cc/DZ0z90x7/0e64da434f840d76e8528c6f3061149a.jpg",
    "https://i.postimg.cc/3RNwsNtH/0f84a7015c1819dbea29e23bbf1c5088.jpg",
    "https://i.postimg.cc/bJrv7rmG/1fe3755ca2866b66b4e6eb72fbabe34e.jpg",
    "https://i.postimg.cc/pdqTczJH/222fd3d0a54588f042b1f10fb528f458.jpg",
    "https://i.postimg.cc/LsNXQL3M/3c07d4d147861c7233aec7c824e34cb5.jpg",
    "https://i.postimg.cc/Y90S50dL/3c8d33590b1a6b108ba878554234c699.jpg",
    "https://i.postimg.cc/XJqvRqsy/634c3cfa96893a7eeb93c4a8b39c0c57.jpg",
    "https://i.postimg.cc/wvMBCMwz/b88dc75b9d1f3c690ef7cd64ef0446d4.jpg",
    "https://i.postimg.cc/QtCM2Cfk/c13763c745c30e4f77abe53b51ea1ce1.jpg",
    "https://i.postimg.cc/SKDs1Cfm/c3185cf88f83eb79171d4e58c5500344.jpg",
    "https://i.postimg.cc/FRzKMzT7/f4bf003956e1b49a0b754de7d62a8bf2.jpg"
];

// ==== Helper: detect gender from name (simple heuristic) ====
function detectGenderFromName(name) {
    if (!name) return 'male';
    const lower = name.trim().toLowerCase();
    const femaleKeywords = ['priya', 'meher', 'pihu', 'anita', 'sita', 'geeta', 'kumari', 'laxmi', 'lakshmi'];
    if (femaleKeywords.some(k => lower.includes(k))) return 'female';
    const last = lower[lower.length - 1];
    if (['a', 'i', 'y'].includes(last)) return 'female';
    return 'male';
}

function getDefaultAvatar(gender) {
    if (gender === 'female') {
        return DEFAULT_GIRL_AVATARS[0];
    }
    return DEFAULT_BOY_AVATARS[0];
}

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
const notesContentGrid = document.getElementById('notesContentGrid');
const quizContentGrid = document.getElementById('quizContentGrid');
const categorySelector = document.getElementById('categorySelector');
const tabLinks = document.querySelectorAll('.tab-link');
const contentSections = document.querySelectorAll('.content-section');
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
const instagramCloseIcon = document.getElementById('instagramCloseIcon'); 
const instagramPopupContainer = instagramPopupModal.querySelector('.popup-container'); 
const instagramFollowBtn = instagramPopupModal.querySelector('.follow-btn'); 
const instagramCloseBtnInner = instagramPopupModal.querySelector('.close-btn'); 
const chatFab = document.getElementById('chatFab');
const chatWidget = document.getElementById('chatWidget');
const closeChatWidget = document.getElementById('closeChatWidget');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');
const chatInputForm = document.getElementById('chatInputForm');
const chatMessageInput = document.getElementById('chatMessageInput');
const notificationToastContainer = document.getElementById('notificationToastContainer');
const shareButton = document.getElementById('shareButton');
const toolsGrid = document.getElementById('toolsGrid');
const festivalOverlay = document.getElementById('festival-overlay');
const quizQuestionContainer = document.getElementById('quizQuestionContainer');

// NEW: header profile + profile modal DOM
const headerProfilePic = document.getElementById('headerProfilePic');
const headerUserName = document.getElementById('headerUserName');
const changeProfileImageLink = document.getElementById('changeProfileImageLink');
const profileImageModal = document.getElementById('profileImageModal');
const profileImageGrid = document.getElementById('profileImageGrid');
const profileImageUploadInput = document.getElementById('profileImageUpload');
const profileTabButtons = document.querySelectorAll('.profile-tab-btn');

let currentVideoToBuy = {}; 
let currentPaymentType = ''; 
let currentQuizData = null; 
let currentQuizId = null; 
let currentUserView = '+2';
let currentBannerIndex = 0;
let bannerInterval;
let popupAutoCloseTimer;
let displayedUserNames = [];
let currentUserData = null;
let globalSettings = null;
let instagramPopupInitialized = false;
let festivalThemeStyleEl = null;

const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';

async function checkMaintenanceMode() {
    try {
        const maintRef = db.ref('maintenance/isActive');
        const snapshot = await maintRef.once('value');
        if (snapshot.val() === true) {
            window.location.href = 'maintenance.html';
        } else {
            document.body.style.display = 'block';
        }
    } catch (error) {
        console.error("Could not check maintenance mode, showing site anyway:", error);
        document.body.style.display = 'block';
    }
}

checkMaintenanceMode();

// === Header profile menu ===
profileMenuToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdownMenu.style.display = profileDropdownMenu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', (e) => {
    if (profileDropdownMenu.style.display === 'block' &&
        !profileDropdownMenu.contains(e.target) &&
        !profileMenuToggleBtn.contains(e.target)) {
        profileDropdownMenu.style.display = 'none';
    }
});

loginRegisterBtn.addEventListener('click', () => { authModal.style.display = 'flex'; showLoginTab.click(); });
dropdownGoPremiumBtn.addEventListener('click', () => { profileDropdownMenu.style.display = 'none'; openPremiumModal(); });

dropdownLogoutBtn.addEventListener('click', () => auth.signOut());
myPurchasesLink.addEventListener('click', (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; openMyPurchasesModal(); });
myFavoritesLink.addEventListener('click', (e) => { e.preventDefault(); profileDropdownMenu.style.display = 'none'; openMyFavoritesModal(); });
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

if (changeProfileImageLink) {
    changeProfileImageLink.addEventListener('click', (e) => {
        e.preventDefault();
        profileDropdownMenu.style.display = 'none';
        openProfileImageModal();
    });
}

closeModalButtons.forEach(button => {
    if (button.id !== 'instagramCloseIcon') {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    }
});

showLoginTab.addEventListener('click', () => {
    showLoginTab.classList.add('active'); showRegisterTab.classList.remove('active');
    loginFormContainer.style.display = 'block'; registerFormContainer.style.display = 'none';
});
showRegisterTab.addEventListener('click', () => {
    showRegisterTab.classList.add('active'); showLoginTab.classList.remove('active');
    registerFormContainer.style.display = 'block'; loginFormContainer.style.display = 'none';
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
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        contentSections.forEach(s => s.style.display = 'none');
        document.getElementById(tab).style.display = 'block';
    });
});

auth.onAuthStateChanged(user => {
    db.ref('users/' + user?.uid).on('value', snap => {
        const userData = user ? snap.val() : null;
        if (user && user.email === 'sugamacadamy@gmail.com') {
            window.location.href = 'admin.html';
        } else {
            updateUI(userData);
        }
    }, error => {
        console.error("Error fetching user data on auth state change:", error);
        auth.signOut();
    });
    if (!user) {
        updateUI(null);
    }
});

// === Main UI update ===
async function updateUI(userData) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'block');
    document.getElementById('content').style.display = 'block';

    currentUserData = userData || null;

    if (userData && userData.name) {
        loginRegisterBtn.style.display = 'none';
        userAuthenticatedControls.style.display = 'flex';
        profileDropdownMenu.style.display = 'none';

        // gender / avatar detect
        const gender = userData.gender || detectGenderFromName(userData.name);
        const avatarUrl = userData.profileImageUrl || getDefaultAvatar(gender);

        dropdownUserName.textContent = userData.name;
        dropdownPremiumStatus.textContent = userData.premium ? 'Premium User' : 'Free User';
        dropdownGoPremiumBtn.style.display = userData.premium ? 'none' : 'block';
        dropdownVerifiedBadge.style.display = userData.isVerified ? 'inline-block' : 'none';

        if (headerProfilePic) headerProfilePic.src = avatarUrl;
        if (headerUserName) headerUserName.textContent = userData.name;

        currentUserView = userData.currentView || '+2';
        categorySelector.querySelectorAll('button').forEach(btn => btn.classList.toggle('active', btn.dataset.category === currentUserView));

        // sync back gender/avatar if missing
        const updates = {};
        if (!userData.gender) updates.gender = gender;
        if (!userData.profileImageUrl) updates.profileImageUrl = avatarUrl;
        if (Object.keys(updates).length > 0 && auth.currentUser) {
            db.ref('users/' + auth.currentUser.uid).update(updates);
        }

        currentUserData = { ...userData, gender, profileImageUrl: avatarUrl };

        loadNotificationsCount();
        loadContent(true, userData.premium, userData.purchasedVideos || {}, userData.favorites || {}, currentUserView);
        chatFab.style.display = 'flex';
        initializeUserChat();
    } else {
        loginRegisterBtn.style.display = 'flex';
        userAuthenticatedControls.style.display = 'none';
        profileDropdownMenu.style.display = 'none';
        currentUserView = '+2';
        categorySelector.querySelectorAll('button').forEach(btn => btn.classList.toggle('active', btn.dataset.category === currentUserView));
        loadContent(false, false, {}, {}, currentUserView);
        chatFab.style.display = 'none';
        chatWidget.style.display = 'none';
        if (headerUserName) headerUserName.textContent = '';
    }

    loadTeachers();
    loadBanners();
    loadTopScorer();
    await loadDynamicUserDisplay();
    loadTools();
    await renderFooter();
    await loadFestivalOverlay();
    if (!instagramPopupInitialized) {
        initInstagramPopupFromSettings();
    }
    initYouTubeAPI(); // Initialize YouTube videos
}

// === Auth forms ===
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
    if (password !== document.getElementById('registerConfirmPassword').value) {
        return alert("Passwords don't match!");
    }
    const genderGuess = detectGenderFromName(name);
    const avatarUrl = getDefaultAvatar(genderGuess);

    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => db.ref('users/' + cred.user.uid).set({
            name,
            email,
            premium: false,
            isVerified: false,
            gender: genderGuess,
            profileImageUrl: avatarUrl,
            joined: Date.now(),
            purchasedVideos: {},
            favorites: {},
            currentView: '+2'
        }))
        .then(() => {
            authModal.style.display = 'none';
            registerForm.reset();
        })
        .catch((error) => alert(error.message));
});

function submitPaymentDetails(paymentType) {
    const user = auth.currentUser;
    if (!user) return alert('Please login to submit your payment details.');
    let amount, utrNumber, contentId = null, title;
    if (paymentType === 'premium') {
        amount = displayPremiumAmount.textContent; utrNumber = UTRNumberInput.value; title = 'Premium Subscription';
    } else if (paymentType === 'video') {
        amount = itemPriceToBuy.textContent; utrNumber = itemUTRNumber.value;
        contentId = currentVideoToBuy.id; title = currentVideoToBuy.title;
    } else if (paymentType === 'verifyBadge') {
        amount = itemPriceToBuy.textContent; utrNumber = itemUTRNumber.value; title = 'Verified Badge';
    }
    if (!utrNumber || !/^\d{12}$/.test(utrNumber)) return alert('Please enter a valid 12-digit UTR number.');
    db.ref('payments').push({
        utr: utrNumber, amount: parseFloat(amount), status: 'pending', type: paymentType, 
        contentId, title, date: Date.now(), userId: user.uid
    }).then(() => {
        alert('Payment details submitted! Your request will be processed after verification.');
        premiumModal.style.display = 'none'; videoBuyModal.style.display = 'none';
        UTRNumberInput.value = ''; itemUTRNumber.value = '';
    }).catch(error => alert('Error submitting payment: ' + error.message));
}

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Please enter your email address:');
    if (email) auth.sendPasswordResetEmail(email).then(() => alert('Password reset email sent!')).catch(error => alert(error.message));
});

// === Banners ===
function loadBanners() {
    db.ref('banners').on('value', snapshot => {
        bannerSlider.innerHTML = ''; currentBannerButtonWrapper.innerHTML = ''; 
        const banners = [];
        snapshot.forEach(child => {
            const banner = child.val();
            const startDate = banner.startDate ? new Date(banner.startDate) : null;
            const endDate = banner.endDate ? new Date(banner.endDate) : null;
            const today = new Date();
            if ((!startDate || today >= startDate) && (!endDate || today <= endDate)) banners.push(banner);
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
    let isDragging = false, startPos = 0, currentTranslate = 0, prevTranslate = 0, animationID;
    document.documentElement.style.setProperty('--initial-bg-image', banners[0]?.imageUrl ? `url('${banners[0].imageUrl}')` : 'none');
    const updateSliderAndButton = () => {
        const offset = -currentBannerIndex * 100;
        bannerSlider.style.transition = 'transform 0.5s ease-out';
        bannerSlider.style.transform = `translateX(${offset}%)`;
        prevTranslate = offset;
        const currentBanner = banners[currentBannerIndex];
        currentBannerButtonWrapper.innerHTML = '';
        if (currentBanner?.buttonText && currentBanner?.buttonUrl) {
            currentBannerButtonWrapper.innerHTML = `<a href="${currentBanner.buttonUrl}" target="_blank" class="btn btn-primary">${currentBanner.buttonText}</a>`;
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
    const getPositionX = e => e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const dragStart = e => { isDragging = true; startPos = getPositionX(e); bannerSlider.style.transition = 'none'; animationID = requestAnimationFrame(animation); bannerSlider.classList.add('grabbing'); clearInterval(bannerInterval); };
    const dragMove = e => { if (isDragging) currentTranslate = prevTranslate + ((getPositionX(e) - startPos) / bannerSlider.clientWidth) * 100; };
    const dragEnd = () => {
        if (!isDragging) return;
        isDragging = false; cancelAnimationFrame(animationID); bannerSlider.classList.remove('grabbing');
        if (currentTranslate - prevTranslate < -10 && currentBannerIndex < slides.length - 1) currentBannerIndex++;
        if (currentTranslate - prevTranslate > 10 && currentBannerIndex > 0) currentBannerIndex--;
        updateSliderAndButton();
    };
    const animation = () => { bannerSlider.style.transform = `translateX(${currentTranslate}%)`; if (isDragging) requestAnimationFrame(animation); };
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) img.addEventListener('dragstart', e => e.preventDefault());
        slide.addEventListener('touchstart', dragStart); slide.addEventListener('touchend', dragEnd); slide.addEventListener('touchmove', dragMove);
        slide.addEventListener('mousedown', dragStart); slide.addEventListener('mouseup', dragEnd); slide.addEventListener('mouseleave', dragEnd); slide.addEventListener('mousemove', dragMove);
    });
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', () => { currentBannerIndex = (currentBannerIndex - 1 + slides.length) % slides.length; updateSliderAndButton(); });
    currentBannerIndex = 0;
    updateSliderAndButton();
}

// === Teachers ===
function loadTeachers() {
    db.ref('teachers').on('value', snapshot => {
        teachersContainer.innerHTML = '';
        if (!snapshot.exists()) return teachersContainer.innerHTML = '<p class="text-center">No teachers added yet.</p>';
        snapshot.forEach(child => {
            const teacher = child.val();
            const photos = (teacher.photoUrls || '').split(',').map(url => url.trim()).filter(Boolean);
            const card = document.createElement('div');
            card.className = 'teacher-card';
            card.innerHTML = `
                <div class="teacher-img">${photos.length > 0 ? `<div class="teacher-image-slider" data-current="0">${photos.map((url, i) => `<div class="slide ${i === 0 ? 'active' : ''}"><img src="${url}" alt="${teacher.name || 'Teacher'}"></div>`).join('')}</div>` : `<i class="fas fa-user" style="font-size: 5rem;"></i>`}</div>
                <div class="teacher-info"><h3>${teacher.name || 'N/A'} ${teacher.verified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="V" class="verified-badge-img">` : ''}</h3><p>${teacher.subject || 'N/A'}</p><p>${teacher.experience || 'N/A'}</p></div>
            `;
            let intervalId = null;
            if (photos.length > 1) {
                card.addEventListener('mouseenter', () => {
                    if (intervalId) return;
                    intervalId = setInterval(() => {
                        const slider = card.querySelector('.teacher-image-slider');
                        const slides = slider.querySelectorAll('.slide');
                        let current = parseInt(slider.dataset.current, 10);
                        slides[current].classList.remove('active');
                        current = (current + 1) % slides.length;
                        slides[current].classList.add('active');
                        slider.dataset.current = current;
                    }, 3000);
                });
                card.addEventListener('mouseleave', () => clearInterval(intervalId));
            }
            teachersContainer.appendChild(card);
        });
    });
}

// === Notes & Quizzes content ===
function loadContent(isLoggedIn, isPremium, purchasedVideos = {}, favorites = {}, category) {
    db.ref('content').orderByChild('category').equalTo(category).on('value', snapshot => {
        notesContentGrid.innerHTML = ''; quizContentGrid.innerHTML = '';
        if (!snapshot.exists()) {
            const msg = `<p class="text-center" style="grid-column: 1 / -1; color: white;">No content for ${category} yet.</p>`;
             notesContentGrid.innerHTML = msg; quizContentGrid.innerHTML = msg;
        } else {
            snapshot.forEach(child => {
                const contentData = child.val();
                if (contentData.type === 'video') return; // videos handled via YouTube
                const card = createContentCard(contentData, child.key, isLoggedIn, isPremium, purchasedVideos, favorites);
                if (contentData.type === 'note') notesContentGrid.appendChild(card);
                else if (contentData.type === 'quiz') quizContentGrid.appendChild(card);
            });
        }
    });
}

function createContentCard(content, contentId, isLoggedIn, isPremium, purchasedVideos, favorites) {
    const card = document.createElement('div');
    card.className = 'content-card';
    let actionButton = '', badge = '', favoriteButton = '';
    if (isLoggedIn) {
        const isFavorited = favorites?.[contentId];
        favoriteButton = `<button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${contentId}')"><i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i></button>`;
    }
    let iconClass = 'fas fa-question';
    if (content.type === 'note') iconClass = 'fas fa-file-pdf';

    if (content.access === 'free') {
        actionButton = createActionButton(content, contentId);
    } else if (content.access === 'premium') {
        badge = `<span class="premium-badge">Premium</span>`;
        if (isLoggedIn && isPremium) actionButton = createActionButton(content, contentId);
        else if (isLoggedIn) actionButton = `<button class="btn btn-primary" onclick="openPremiumModal()">Go Premium</button>`;
        else actionButton = `<button class="btn btn-primary" onclick="openLoginRegisterModal('login')">Login to View</button>`; 
    } else if (content.access === 'buy') {
        badge = `<span class="premium-badge">Buy (₹${content.price || 0})</span>`;
        if (isLoggedIn && purchasedVideos?.[contentId]) actionButton = createActionButton(content, contentId);
        else if (isLoggedIn) actionButton = `<button class="btn btn-primary" onclick="openBuyModal('video', '${content.title}', '${content.price || 0}', '${contentId}')">Buy Now</button>`; 
        else actionButton = `<button class="btn btn-primary" onclick="openLoginRegisterModal('login')">Login to Buy</button>`; 
    }
    card.innerHTML = `<div class="content-thumb"><i class="${iconClass}"></i></div><div class="content-info"><div style="display: flex; justify-content: space-between; align-items: start;"><h3 style="margin-right: 1rem;">${content.title || 'N/A'} ${badge}</h3>${favoriteButton}</div><p>${content.description || 'No description provided.'}</p>${actionButton}</div>`;
    return card;
}

function createActionButton(content, contentId) {
    if (content.type === 'quiz') {
        if (content.question) return `<button class="btn btn-primary" onclick="openQuizModal('${contentId}')">Start Quiz</button>`;
        if (content.url) return `<button class="btn btn-primary" onclick="openContentDisplayModal('${content.url}', 'quiz', '${content.title || "Quiz"}')">View Quiz</button>`;
        return `<button class="btn btn-outline" disabled>No Quiz Content</button>`;
    } else {
        return `<button class="btn btn-primary" onclick="openContentDisplayModal('${content.url}', '${content.type}', '${content.title || "Content"}')">${content.type === 'note' ? 'View Note' : 'View'}</button>`;
    }
}

function toggleFavorite(contentId) {
    const user = auth.currentUser;
    if (!user) return alert('Please log in to manage favorites.');
    const favoriteRef = db.ref(`users/${user.uid}/favorites/${contentId}`);
    favoriteRef.once('value', snapshot => snapshot.exists() ? favoriteRef.remove() : favoriteRef.set(true));
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

function openContentDisplayModal(url, type, title) {
    contentDisplayModalTitle.textContent = title;
    contentIframeWrapper.innerHTML = '';
    if (!url) {
        contentIframeWrapper.innerHTML = `<div class="fallback-content"><h4>Content Not Available</h4><p>The link for this content is missing.</p></div>`;
    } else {
        window.open(url, '_blank', 'noopener,noreferrer');
        contentIframeWrapper.innerHTML = `<div class="fallback-content"><h4>Content Opened in New Tab</h4><p>We've opened this content in a new tab for the best experience.</p><button class="btn btn-primary" style="margin-top:1rem;" onclick="window.open('${url}', '_blank', 'noopener,noreferrer')">Open Again</button></div>`;
    }
    contentDisplayModal.style.display = 'flex';
}

// === Quiz ===
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

// === Notifications ===
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
        showNotification(notif, !!notif.imageUrl);
    });
}

function showNotification(notification, isImage) {
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.id = toastId;
    toast.innerHTML = `${isImage ? `<img src="${notification.imageUrl}" alt="${notification.title}">` : `<div class="toast-icon"><i class="fas fa-info-circle"></i></div>`}<div class="notification-toast-content"><h4>${notification.title}</h4><p>${notification.message}</p></div><button class="toast-close-btn" onclick="document.getElementById('${toastId}').remove()">&times;</button>`;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 10000);
}

// === Footer + global settings ===
async function renderFooter() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    globalSettings = settings;

    footerAboutUsText.textContent = settings.aboutUsText || 'Your premier destination for online learning. We provide top-quality educational content to help students succeed.';
    footerSugamEmail.textContent = settings.contact?.sugamEmail || 'N/A';
    footerDeveloperEmail.textContent = settings.contact?.developerEmail || 'N/A';
    const updateLink = (el, url) => { el.style.display = url ? 'inline-block' : 'none'; if(url) el.href = url; };
    updateLink(footerYoutubeLink, settings.socialLinks?.youtube); 
    updateLink(footerInstagramLink, settings.socialLinks?.instagram); 
    updateLink(footerFacebookLink, settings.socialLinks?.facebook); 
    updateLink(footerTwitterLink, settings.socialLinks?.twitter);
}

// === Festival overlay + THEME CSS ===
async function loadFestivalOverlay() {
    const overlayEl = festivalOverlay || document.getElementById('festival-overlay');
    if (!overlayEl) return;

    try {
        const snap = await db.ref('festivalOverlay').once('value');
        const cfg = snap.val();

        // Reset overlay
        overlayEl.style.display = 'none';
        overlayEl.classList.remove('fullscreen-image');
        overlayEl.style.backgroundImage = 'none';
        overlayEl.innerHTML = '';

        // Reset theme CSS
        if (festivalThemeStyleEl && festivalThemeStyleEl.parentNode) {
            festivalThemeStyleEl.parentNode.removeChild(festivalThemeStyleEl);
            festivalThemeStyleEl = null;
        }

        if (!cfg || cfg.enabled === false) {
            return;
        }

        // THEME CSS (poora site ka look change karne ke liye)
        if (cfg.themeCss) {
            festivalThemeStyleEl = document.createElement('style');
            festivalThemeStyleEl.id = 'festival-theme-style';
            festivalThemeStyleEl.innerHTML = cfg.themeCss;
            document.head.appendChild(festivalThemeStyleEl);
        }

        // Opacity optional
        if (typeof cfg.opacity === 'number') {
            overlayEl.style.opacity = cfg.opacity;
        } else {
            overlayEl.style.opacity = 1;
        }

        // Image/GIF mode
        if (cfg.type === 'image' && cfg.imageUrl) {
            if (cfg.fullscreen) {
                overlayEl.classList.add('fullscreen-image');
                overlayEl.style.backgroundImage = `url('${cfg.imageUrl}')`;
            } else {
                const img = document.createElement('img');
                img.src = cfg.imageUrl;
                img.alt = cfg.alt || 'Festival';
                img.className = 'festival-overlay-img';
                overlayEl.appendChild(img);
            }
        }
        // Custom HTML mode
        else if (cfg.type === 'html' && cfg.htmlCode) {
            overlayEl.innerHTML = cfg.htmlCode;
        }

        overlayEl.style.display = 'block';
    } catch (e) {
        console.error('Error loading festival overlay:', e);
    }
}

// === Dynamic user display (bottom ticker) ===
async function loadDynamicUserDisplay() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    userNotificationCount.textContent = settings.displayTotalUsersCount || '0';

    const realUserNames = [];
    (await db.ref('users').limitToLast(50).once('value')).forEach(child => {
        const name = child.val().name;
        if (name) realUserNames.push(name);
    });

    displayedUserNames = [...new Set([...realUserNames, ...(settings.displayUserNames || [])])];

    if (displayedUserNames.length > 0) {
        userNotificationBar.style.display = 'block';
        userNotificationName.textContent = displayedUserNames.join('  •  ');
    } else {
        userNotificationBar.style.display = 'none';
    }
}

// === Instagram popup ===
function followUser() { window.open('https://www.instagram.com/snr__27?igsh=MXI4YXd5NnIxMDAzcw==', '_blank'); }
function closeInstagramPopup() { instagramPopupModal.style.display = 'none'; clearTimeout(popupAutoCloseTimer); }
function createParticles() {
    const pCont = instagramPopupModal.querySelector('#particles'); if (!pCont) return; pCont.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div'); p.classList.add('particle');
        p.style.cssText = `width:${Math.random()*6+2}px;height:${Math.random()*6+2}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${Math.random()*4+5}s;background:${Math.random()>.5?'rgba(255,0,255,.6)':'rgba(0,255,255,.6)'};`;
        pCont.appendChild(p);
    }
}
function showInstagramPopup() {
    instagramPopupModal.style.display = 'flex';
    instagramPopupContainer.style.animation = 'none'; void instagramPopupContainer.offsetWidth;
    instagramPopupContainer.style.animation = 'fadeIn 0.8s ease-out, neonBorder 4s infinite alternate';
    createParticles();
    popupAutoCloseTimer = setTimeout(() => {
        instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(closeInstagramPopup, 500);
    }, 10000);
}

function initInstagramPopupFromSettings() {
    instagramPopupInitialized = true;
    const show = !globalSettings || globalSettings.showInstagramPopup !== false;
    if (show) {
        setTimeout(showInstagramPopup, 2000);
    } else {
        instagramPopupModal.style.display = 'none';
    }
}

instagramCloseIcon.addEventListener('click', () => { instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards'; setTimeout(closeInstagramPopup, 500); });
instagramCloseBtnInner.addEventListener('click', () => { instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards'; setTimeout(closeInstagramPopup, 500); });
instagramFollowBtn.addEventListener('click', () => { followUser(); instagramPopupContainer.style.animation = 'fadeOut 0.5s forwards'; setTimeout(closeInstagramPopup, 500); });

// === Google translate ===
function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,or,hi,bn,te,ta', autoDisplay: false }, 'google_translate_element'); }
document.getElementById('languageSelect').addEventListener('change', (e) => {
    const lang = e.target.value; document.documentElement.lang = lang;
    const translateEl = document.querySelector('.goog-te-combo'); if (translateEl) { translateEl.value = lang; translateEl.dispatchEvent(new Event('change')); }
});

// === Purchases / Favorites ===
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

// === Top scorer banner ===
let topScorerTimeout;
function loadTopScorer() {
    db.ref('topScorer').on('value', snapshot => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            topScorerBanner.innerHTML = `<p>🏆 <strong>New High Score!</strong> <span>${data.userName}</span> just aced the "<strong>${data.quizTitle}</strong>" quiz! 🎉</p>`;
            topScorerBanner.style.display = 'block'; topScorerBanner.style.opacity = 1;
            clearTimeout(topScorerTimeout);
            topScorerTimeout = setTimeout(() => {
                topScorerBanner.style.opacity = 0;
                setTimeout(() => topScorerBanner.style.display = 'none', 500);
            }, 15000);
        } else { topScorerBanner.style.display = 'none'; }
    });
}

// === Chat ===
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
    db.ref(`chats/${user.uid}/meta`).update({ lastMessage: text, lastTimestamp: timestamp, userName: currentUserData?.name || user.email, hasUnreadAdminMessage: true });
    chatMessageInput.value = '';
});

function renderChatMessage(sender, text, timestamp) {
    const msgEl = document.createElement('div'); msgEl.className = `chat-message ${sender}`;
    msgEl.innerHTML = `<div>${text}</div><div class="chat-message-time">${new Date(timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>`;
    chatMessagesContainer.appendChild(msgEl);
}

// === Share ===
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text; document.body.appendChild(textarea);
    textarea.select(); document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Link copied to clipboard!');
}

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Sugam Academy',
            text: 'Check out Sugam Academy - The best learning platform!',
            url: window.location.href
        }).catch(() => console.log('Share cancelled.'));
    } else {
        copyToClipboard(window.location.href);
    }
});

// === Tools ===
function loadTools() {
    db.ref('tools').on('value', snapshot => {
        toolsGrid.innerHTML = '';
        if (!snapshot.exists()) {
            toolsGrid.innerHTML = '<p style="color: white; text-align: center; grid-column: 1 / -1;">No tools available right now. Check back later!</p>';
            return;
        }
        snapshot.forEach(child => {
            const tool = child.val();
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.innerHTML = `
                <img src="${tool.photoUrl || 'https://via.placeholder.com/80'}" alt="${tool.name}">
                <h3>${tool.name}</h3>
                <a href="${tool.linkUrl}" target="_blank" class="btn">Open Tool</a>
            `;
            toolsGrid.appendChild(card);
        });
    });
}

// === YouTube API Integration ===
const YT_API_KEY = "AIzaSyBt1UlRv0oWNpwJ7HLGmS4MKTakXyd0QQE";
const YT_CHANNEL_HANDLE = "sugam-academy";

async function getChannelId() {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=id,contentDetails&forHandle=${YT_CHANNEL_HANDLE}&key=${YT_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.items && data.items.length > 0) {
        return {
            id: data.items[0].id,
            uploadsPlaylistId: data.items[0].contentDetails.relatedPlaylists.uploads
        };
    }
    throw new Error("YouTube Channel not found. Check handle or API key.");
}

async function getVideos(playlistId, maxResults = 50) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&key=${YT_API_KEY}`;
    const res = await fetch(url);
    return res.json();
}

async function getPlaylists(channelId, maxResults = 12) {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${YT_API_KEY}`;
    const res = await fetch(url);
    return res.json();
}

function renderVideos(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    items.forEach(item => {
        const vidId = item.contentDetails?.videoId;
        const snip = item.snippet;
        if (!vidId || !snip) return;

        const div = document.createElement("div");
        div.className = "youtube-card";
        div.innerHTML = `
          <a href="https://www.youtube.com/watch?v=${vidId}" target="_blank">
            <img src="${snip.thumbnails?.medium?.url}" alt="${snip.title}">
            <div class="title">${snip.title}</div>
          </a>
        `;
        container.appendChild(div);
    });
}

function renderPlaylists(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    items.forEach(item => {
        const snip = item.snippet;
        if (!snip) return;
        const div = document.createElement("div");
        div.className = "youtube-card";
        div.innerHTML = `
          <a href="https://www.youtube.com/playlist?list=${item.id}" target="_blank">
            <img src="${snip.thumbnails?.medium?.url}" alt="${snip.title}">
            <div class="title">${snip.title}</div>
            <div class="desc">${snip.description.substring(0,80)}...</div>
          </a>
        `;
        container.appendChild(div);
    });
}

async function initYouTubeAPI() {
    try {
        const { id: channelId, uploadsPlaylistId } = await getChannelId();

        const videosData = await getVideos(uploadsPlaylistId, 50);
        renderVideos("allVideosGrid", videosData.items);

        const playlistsData = await getPlaylists(channelId, 12);
        renderPlaylists("playlistsGrid", playlistsData.items);

    } catch (err) {
        console.error(err);
        const videoSection = document.getElementById('videos');
        if(videoSection) {
            videoSection.innerHTML = `<p style='color:var(--danger); text-align:center;'>Error loading YouTube videos: ${err.message}</p>`;
        }
    }
}

// YouTube Tabs switching logic
document.querySelectorAll(".youtube-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".youtube-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll(".youtube-section").forEach(sec => sec.classList.remove("active"));
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});

// === Simple Parallax Effect on Hero Background ===
let lastScrollY = 0;
let parallaxTicking = false;

function updateParallax() {
    if (!heroDynamicBg) return;
    const offset = lastScrollY * 0.3;
    heroDynamicBg.style.transform = `translateY(${offset}px)`;
    parallaxTicking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY || window.pageYOffset || 0;
    if (!parallaxTicking) {
        window.requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
});

// === Profile image picker logic ===
function renderProfileImageOptions(gender) {
    if (!profileImageGrid) return;
    const list = gender === 'female' ? DEFAULT_GIRL_AVATARS : DEFAULT_BOY_AVATARS;
    profileImageGrid.innerHTML = '';
    list.forEach(url => {
        const div = document.createElement('div');
        div.className = 'profile-image-option';
        div.innerHTML = `<img src="${url}" alt="Profile">`;
        div.addEventListener('click', () => selectProfileImage(url, gender));
        profileImageGrid.appendChild(div);
    });
}

function openProfileImageModal() {
    const user = auth.currentUser;
    if (!user) {
        alert('Please login to change profile picture.');
        return;
    }
    const gender = currentUserData?.gender || detectGenderFromName(currentUserData?.name || '');
    const tabKey = gender === 'female' ? 'girl' : 'boy';

    profileTabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.gender === tabKey);
    });
    renderProfileImageOptions(gender);
    if (profileImageModal) profileImageModal.style.display = 'flex';
}

async function selectProfileImage(url, gender) {
    const user = auth.currentUser;
    if (!user) return;
    const updates = { profileImageUrl: url };
    if (gender) updates.gender = gender;
    await db.ref('users/' + user.uid).update(updates);
    if (headerProfilePic) headerProfilePic.src = url;
    if (currentUserData) {
        currentUserData.profileImageUrl = url;
        if (gender) currentUserData.gender = gender;
    }
    alert('Profile picture updated!');
    if (profileImageModal) profileImageModal.style.display = 'none';
}

if (profileTabButtons && profileTabButtons.length) {
    profileTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            profileTabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const gender = btn.dataset.gender === 'girl' ? 'female' : 'male';
            renderProfileImageOptions(gender);
        });
    });
}

if (profileImageUploadInput) {
    profileImageUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) uploadCustomProfileImage(file);
    });
}

async function uploadCustomProfileImage(file) {
    const user = auth.currentUser;
    if (!user) {
        alert('Please login to upload.');
        return;
    }
    try {
        const storageRef = storage.ref(`profileImages/${user.uid}/${Date.now()}_${file.name}`);
        const snapshot = await storageRef.put(file);
        const downloadURL = await snapshot.ref.getDownloadURL();
        await db.ref('users/' + user.uid).update({ profileImageUrl: downloadURL });
        if (headerProfilePic) headerProfilePic.src = downloadURL;
        if (currentUserData) currentUserData.profileImageUrl = downloadURL;
        alert('Profile image uploaded!');
        if (profileImageModal) profileImageModal.style.display = 'none';
    } catch (err) {
        console.error('Profile upload error', err);
        alert('Failed to upload image. Please try again.');
    }
}
