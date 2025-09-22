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
            if (user && user.email === 'sugamacadamy@gmail.com') {
                // If user is admin, don't show maintenance mode
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

// --- DOM Elements (No changes needed here, keeping it for completeness) ---
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

// --- Event Listeners Initialization (No changes needed here) ---
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

// --- All other functions (UI, Auth, Data Loading, etc.) ---
// These are mostly unchanged but are included here for completeness.
// ... (The rest of the script.js file from the previous response goes here, but with the following functions updated) ...

// --- UPDATED/FIXED FUNCTIONS ---

function handleBannerForm(e) {
    e.preventDefault();
    const title = document.getElementById('bannerTitle').value.trim();
    const imageUrl = document.getElementById('bannerImageUrl').value.trim();
    if (!title || !imageUrl) return alert('Title and Image URL are required.');
    const data = {
        title, imageUrl,
        buttonText: document.getElementById('bannerButtonText').value.trim() || null,
        buttonUrl: document.getElementById('bannerButtonUrl').value.trim() || null,
        startDate: document.getElementById('bannerStartDate').value || null,
        endDate: document.getElementById('bannerEndDate').value || null
    };
    const editId = bannerForm.dataset.editId;
    const ref = editId ? db.ref('banners/' + editId) : db.ref('banners').push();
    ref.set(data).then(() => {
        alert('Banner saved successfully!');
        bannerFormContainer.style.display = 'none';
    }).catch(error => alert('Error saving banner: ' + error.message));
}

function handleToolForm(e) {
    e.preventDefault();
    const title = document.getElementById('toolTitle').value.trim();
    const link = document.getElementById('toolLink').value.trim();
    if (!title || !link) return alert('Title and Link are required.');
    const data = {
        title, link,
        imageUrl: document.getElementById('toolImageUrl').value.trim() || null
    };
    const editId = toolForm.dataset.editId;
    const ref = editId ? db.ref('tools/' + editId) : db.ref('tools').push();
    ref.set(data).then(() => {
        alert('Tool saved successfully!');
        toolFormContainer.style.display = 'none';
    }).catch(error => alert('Error saving tool: ' + error.message));
}

function handleContentForm(e) {
    e.preventDefault();
    const title = document.getElementById('contentTitle').value.trim();
    const category = document.getElementById('contentCategory').value;
    if (!title || !category) return alert('Title and Category are required.');

    const data = {
        title, category,
        thumbnailUrl: document.getElementById('contentThumbnailUrl').value.trim() || null,
        type: document.getElementById('contentType').value,
        url: document.getElementById('contentUrl').value.trim() || null,
        access: document.getElementById('contentAccess').value,
        price: parseFloat(document.getElementById('contentPrice').value) || null,
    };
    
    if (data.type === 'quiz') {
        data.question = document.getElementById('quizQuestion').value.trim();
        data.options = [
            document.getElementById('quizOption1').value.trim(),
            document.getElementById('quizOption2').value.trim(),
            document.getElementById('quizOption3').value.trim(),
            document.getElementById('quizOption4').value.trim()
        ].filter(Boolean);
        data.correctAnswer = document.getElementById('quizCorrectAnswer').value.trim();
    }
    const editId = contentForm.dataset.editId;
    const ref = editId ? db.ref('content/' + editId) : db.ref('content').push();
    ref.set(data).then(() => {
        alert('Content saved successfully!');
        contentFormContainer.style.display = 'none';
    }).catch(error => alert('Error saving content: ' + error.message));
}

function handleTeacherForm(e) {
    e.preventDefault();
    const name = document.getElementById('teacherName').value.trim();
    const subject = document.getElementById('teacherSubject').value.trim();
    if (!name || !subject) return alert('Name and Subject are required.');
    const data = {
        name, subject,
        experience: document.getElementById('teacherExperience').value.trim() || null,
        photoUrls: document.getElementById('teacherPhotoUrls').value.trim() || null,
        verified: document.getElementById('teacherVerified').checked
    };
    const editId = teacherForm.dataset.editId;
    const ref = editId ? db.ref('teachers/' + editId) : db.ref('teachers').push();
    ref.set(data).then(() => {
        alert('Teacher saved successfully!');
        teacherFormContainer.style.display = 'none';
    }).catch(error => alert('Error saving teacher: ' + error.message));
}

function handlePlanForm(e) {
    e.preventDefault();
    const name = document.getElementById('planName').value.trim();
    const price = parseFloat(document.getElementById('planPrice').value);
    if (!name || isNaN(price) || price <= 0) return alert('Name and valid price are required.');
    const data = {
        name, price,
        description: document.getElementById('planDescription').value.trim() || null
    };
    const editId = planForm.dataset.editId;
    const ref = editId ? db.ref('plans/' + editId) : db.ref('plans').push();
    ref.set(data).then(() => {
        alert('Plan saved successfully!');
        planFormContainer.style.display = 'none';
    }).catch(error => alert('Error saving plan: ' + error.message));
}

async function handleSettingsForm(e) {
    e.preventDefault();
    const settingsData = {
        maintenanceModeEnabled: maintenanceModeToggle.checked,
        adminVerifyBadgePrice: parseFloat(adminVerifyBadgePrice.value) || null,
        toolsSectionTitle: toolsSectionTitleInput.value.trim() || null,
        displayTotalUsersCount: displayTotalUsersCountInput.value.trim() || null,
        displayUserNames: displayUserNamesInput.value.split(',').map(n => n.trim()).filter(Boolean),
        aboutUsText: settingsAboutUsText.value.trim() || null,
        contact: { sugamEmail: settingsSugamEmail.value.trim() || null, developerEmail: settingsDeveloperEmail.value.trim() || null },
        socialLinks: { youtube: settingsYoutubeLink.value.trim() || null, instagram: settingsInstagramLink.value.trim() || null, facebook: settingsFacebookLink.value.trim() || null, twitter: settingsTwitterLink.value.trim() || null }
    };
    try {
        await db.ref('settings').update(settingsData);
        alert('Settings saved successfully!');
        if (settingsData.maintenanceModeEnabled) {
            document.getElementById('maintenanceOverlay').style.display = 'flex';
        }
    } catch (error) {
        alert('Error saving settings: ' + error.message);
    }
}

function loadUsers() {
    db.ref('users').on('value', snapshot => {
        usersTableBody.innerHTML = '';
        if (!snapshot.exists()) {
            usersTableBody.innerHTML = '<tr><td colspan="4" class="text-center">No users found. (Check Firebase Rules)</td></tr>';
            return;
        }
        snapshot.forEach(child => {
            const user = child.val();
            const row = usersTableBody.insertRow();
            row.innerHTML = `
                <td>${user.name || 'N/A'} ${user.isVerified ? `<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">` : ''}</td>
                <td>${user.email || 'N/A'}</td>
                <td>${user.premium ? '<span class="premium-badge">Premium</span>' : 'Free'}</td>
                <td>
                    <button class="btn btn-outline" onclick="blockUser('${child.key}')">Block</button>
                </td>
            `;
        });
    }, error => {
        console.error("Firebase read failed for users:", error);
        usersTableBody.innerHTML = '<tr><td colspan="4" class="text-center">Error loading users. Check Firebase Rules and console for details.</td></tr>';
    });
}

async function fetchInstagramFollowers() {
    const instagramFollowerCount = document.getElementById('follower-count');
    if (!instagramFollowerCount) return;
    instagramFollowerCount.innerHTML = '<span class="loading"></span>';
    await new Promise(resolve => setTimeout(resolve, 1500));
    instagramFollowerCount.innerHTML = "1M+";
}

function showInstagramPopup() {
    if (adminPanel.style.display === 'block') return;
    instagramPopupModal.style.display = 'flex';
    const container = instagramPopupModal.querySelector('.popup-container');
    container.style.animation = 'none';
    void container.offsetWidth;
    container.style.animation = 'fadeIn 0.8s ease-out, neonBorder 4s infinite alternate';
    fetchInstagramFollowers();
    popupAutoCloseTimer = setTimeout(closeInstagramPopup, 10000);
}

// --- Paste all other unchanged functions from the previous script.js here ---
// This includes: updateUI, switchAuthTab, handleLogin, handleRegister, handleForgotPassword, handleCategoryChange, handleTabChange, handleShare, handleSearch, loadContent, createContentCard, createActionButton, loadBanners, initBannerSlider, loadTools, loadTeachers, loadNotifications, showNotificationToast, openLoginRegisterModal, openBuyModal, openPremiumModal, openContentInNewTab, openQuizModal, handleSubmitQuiz, toggleFavorite, submitPaymentDetails, renderFooter, openMyPurchasesModal, openMyFavoritesModal, loadTopScorer, closeInstagramPopup, showAdminPanel, initializeAdminEventListeners, handleAdminNav, loadDashboardStats, loadAdminBanners, editBanner, deleteBanner, loadAdminTools, editTool, deleteTool, loadAdminContent, editContent, deleteContent, blockUser, loadPayments, verifyPayment, rejectPayment, loadAdminTeachers, editTeacher, deleteTeacher, handleNotificationForm, loadAdminNotifications, handlePlanForm, editPlan, deletePlan, loadAdminPlans, initializeUserChat, handleChatSubmit, renderChatMessage, loadAdminChatList, openAdminChat, loadDynamicUserDisplay, loadAdminSettings, googleTranslateElementInit.
// The code is very long, so I'm just listing them. The full code block above contains all necessary functions.
// The following is a compact version of the remaining functions to ensure completeness.
function updateUI(e){document.body.style.display="block",adminPanel.style.display="none",document.querySelector("header").style.display="block",document.querySelector(".hero").style.display="flex",document.querySelector("footer").style.display="block",document.querySelectorAll("section").forEach(e=>{"adminPanel"!==e.id&&(e.style.display="block")}),document.getElementById("content").style.display="none";const t=e&&e.name;t?(loginRegisterBtn.style.display="none",userAuthenticatedControls.style.display="flex",profileDropdownMenu.style.display="none",dropdownUserName.textContent=e.name,dropdownPremiumStatus.textContent=e.premium?"Premium User":"Free User",dropdownGoPremiumBtn.style.display=e.premium?"none":"block",dropdownVerifiedBadge.style.display=e.isVerified?"inline-block":"none",currentUserView=e.currentView||"+2",categorySelector.querySelectorAll("button").forEach(t=>{t.classList.toggle("active",t.dataset.category===currentUserView)}),loadNotifications(!0),loadContent(!0,e.premium,e.purchasedVideos||{},e.favorites||{},currentUserView),chatFab.style.display="flex",initializeUserChat()):(loginRegisterBtn.style.display="flex",userAuthenticatedControls.style.display="none",profileDropdownMenu.style.display="none",currentUserView="+2",categorySelector.querySelectorAll("button").forEach(e=>{e.classList.toggle("active","+2"===e.dataset.category)}),loadNotifications(!1),loadContent(!1,!1,{},{},currentUserView),chatFab.style.display="none",chatWidget.style.display="none"),loadTeachers(),loadBanners(),loadTools(),loadTopScorer(),loadDynamicUserDisplay(),renderFooter(),setTimeout(showInstagramPopup,3e3)}
function switchAuthTab(e){"login"===e?(showLoginTab.classList.add("active"),showRegisterTab.classList.remove("active"),loginFormContainer.style.display="block",registerFormContainer.style.display="none"):(showRegisterTab.classList.add("active"),showLoginTab.classList.remove("active"),registerFormContainer.style.display="block",loginFormContainer.style.display="none")}
function handleLogin(e){e.preventDefault();const t=document.getElementById("loginEmail").value,o=document.getElementById("loginPassword").value;auth.signInWithEmailAndPassword(t,o).then(()=>{authModal.style.display="none",loginForm.reset()}).catch(e=>alert(e.message))}
function handleRegister(e){e.preventDefault();const t=document.getElementById("registerName").value,o=document.getElementById("registerEmail").value,n=document.getElementById("registerPassword").value;if(n!==document.getElementById("registerConfirmPassword").value)return alert("Passwords don't match!");auth.createUserWithEmailAndPassword(o,n).then(e=>{const n=e.user;db.ref("users/"+n.uid).set({name:t,email:o,premium:!1,isVerified:!1,joined:Date.now(),purchasedVideos:{},favorites:{},currentView:"+2"}),authModal.style.display="none",registerForm.reset()}).catch(e=>alert(e.message))}
function handleForgotPassword(e){e.preventDefault();const t=prompt("Please enter your email address:");t&&auth.sendPasswordResetEmail(t).then(()=>alert("Password reset email sent!")).catch(e=>alert(e.message))}
function handleCategoryChange(e){if("BUTTON"!==e.target.tagName)return;const t=e.target.dataset.category;if(t===currentUserView)return;categorySelector.querySelectorAll("button").forEach(e=>e.classList.remove("active")),e.target.classList.add("active"),currentUserView=t,searchInput.value="";const o=auth.currentUser,n=e=>{loadContent(!!o,e.premium,e.purchasedVideos,e.favorites,currentUserView),o&&db.ref("users/"+o.uid).update({currentView:currentUserView})};o?db.ref("users/"+o.uid).once("value").then(e=>n(e.val())):n()}
function handleTabChange(e){contentTabs.querySelectorAll(".tab-link").forEach(e=>e.classList.remove("active")),contentTabs.querySelector(`.tab-link[data-tab="${e}"]`).classList.add("active"),document.querySelectorAll("#content .content-section").forEach(e=>e.style.display="none"),document.getElementById(e).style.display="block",searchInput.value="",handleSearch()}
function handleShare(){navigator.share?navigator.share({title:"Sugam Academy",text:"Check out Sugam Academy - The best learning platform!",url:window.location.href}).catch(()=>console.log("Share cancelled.")):navigator.clipboard.writeText(window.location.href).then(()=>alert("Link copied to clipboard!"))}
function handleSearch(){const e=searchInput.value.toLowerCase();document.querySelectorAll(".content-grid .content-card").forEach(t=>{const o=t.querySelector("h3")?.textContent.toLowerCase()||"";t.style.display=o.includes(e)?"flex":"none"})}
function loadContent(e,t,o={},n={},a){document.getElementById("content").style.display="block";const i=db.ref("content");i.orderByChild("category").equalTo(a).on("value",i=>{videoContentGrid.innerHTML="",notesContentGrid.innerHTML="",quizContentGrid.innerHTML="",allContentData=[];const l=document.createDocumentFragment(),d=document.createDocumentFragment(),r=document.createDocumentFragment();i.exists()&&i.forEach(a=>{const i={id:a.key,...a.val()};allContentData.push(i);const s=createContentCard(i,i.id,e,t,o,n);"video"===i.type?l.appendChild(s):"note"===i.type?d.appendChild(s):"quiz"===i.type&&r.appendChild(s)});const s=`<p class="text-center" style="grid-column: 1 / -1;">No content found for the ${a} section. Check back soon!</p>`;videoContentGrid.innerHTML=l.children.length>0?"":s,notesContentGrid.innerHTML=d.children.length>0?"":s,quizContentGrid.innerHTML=r.children.length>0?"":s,videoContentGrid.appendChild(l),notesContentGrid.appendChild(d),quizContentGrid.appendChild(r),handleSearch()})}
function createContentCard(e,t,o,n,a,i){const l=document.createElement("div");l.className="content-card";let d;d=e.thumbnailUrl?`<img src="${e.thumbnailUrl}" alt="${e.title||"Thumbnail"}">`:`<i class="${"video"===e.type?"fas fa-video":"note"===e.type?"fas fa-file-pdf":"fas fa-question"}"></i>`;const r=o&&i&&i[t],s=o?`<button class="favorite-btn ${r?"favorited":""}" onclick="toggleFavorite('${t}')"><i class="${r?"fas":"far"} fa-heart"></i></button>`:"";let c="",u="";return"free"===e.access?u=createActionButton(e,t):"premium"===e.access?(c='<span class="premium-badge">Premium</span>',u=o&&n?createActionButton(e,t):o?'<button class="btn btn-primary" onclick="openPremiumModal()">Go Premium</button>':'<button class="btn btn-primary" onclick="openLoginRegisterModal(\'login\')">Login to View</button>'):"buy"===e.access&&(c=`<span class="premium-badge">Buy (₹${e.price||0})</span>`,u=o&&a&&a[t]?createActionButton(e,t):o?`<button class="btn btn-primary" onclick="openBuyModal('video', '${e.title}', '${e.price||0}', '${t}')">Buy Now</button>`:'<button class="btn btn-primary" onclick="openLoginRegisterModal(\'login\')">Login to Buy</button>'),l.innerHTML=`\n        <div class="content-thumb">${d}</div>\n        <div class="content-info">\n            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">\n                <h3 style="margin: 0 1rem 0 0; flex-grow: 1;">${e.title||"N/A"} ${c}</h3>\n                ${s}\n            </div>\n            ${u}\n        </div>`,l}
function createActionButton(e,t){return"quiz"===e.type?e.question?`<button class="btn btn-primary" onclick="openQuizModal('${t}')">Start Quiz</button>`:e.url?`<button class="btn btn-primary" onclick="openContentInNewTab('${e.url}')">View Quiz</button>`:'<button class="btn btn-outline" disabled>No Quiz Content</button>':`<button class="btn btn-primary" onclick="openContentInNewTab('${e.url}')">${"video"===e.type?"Watch Now":"View Note"}</button>`}
function loadBanners(){db.ref("banners").on("value",e=>{bannerSlider.innerHTML="",currentBannerButtonWrapper.innerHTML="";const t=[];e.forEach(o=>{const n=o.val(),a=n.startDate?new Date(n.startDate):null,i=n.endDate?new Date(n.endDate):null,l=new Date;(a&&l<a||i&&l>i)||t.push(n)}),t.length>0?(bannerSliderContainer.style.display="block",t.forEach(e=>{const t=document.createElement("div");t.className="banner-slide",t.innerHTML=`<img src="${e.imageUrl}" alt="${e.title||"Banner Image"}">`,bannerSlider.appendChild(t)}),initBannerSlider(t)):(bannerSliderContainer.style.display="none",currentBannerButtonWrapper.style.display="none",heroDynamicBg.style.backgroundImage="none")})}
function initBannerSlider(e){if(0===document.querySelectorAll(".banner-slide").length)return;const t=e[0]?.imageUrl;document.documentElement.style.setProperty("--initial-bg-image",t?`url('${t}')`:"none");const o=()=>{bannerSlider.style.transform=`translateX(${-currentBannerIndex*100}%)`;const t=e[currentBannerIndex];currentBannerButtonWrapper.innerHTML=t?.buttonText&&t?.buttonUrl?`<a href="${t.buttonUrl}" target="_blank" class="btn btn-primary">${t.buttonText}</a>`:"",currentBannerButtonWrapper.style.display=currentBannerButtonWrapper.innerHTML?"block":"none",n()},n=()=>{clearInterval(bannerInterval),a()},a=()=>{e.length>1&&(bannerInterval=setInterval(()=>{currentBannerIndex=(currentBannerIndex+1)%e.length,o()},5e3))};nextBtn.onclick=()=>{currentBannerIndex=(currentBannerIndex+1)%e.length,o()},prevBtn.onclick=()=>{currentBannerIndex=(currentBannerIndex-1+e.length)%e.length,o()},currentBannerIndex=0,o()}
function loadTools(){db.ref("settings/toolsSectionTitle").on("value",e=>{toolsSectionTitle.textContent=e.val()||"Student Tools"}),db.ref("tools").on("value",e=>{if(toolsGrid.innerHTML="",!e.exists())return void(document.getElementById("toolsSection").style.display="none");document.getElementById("toolsSection").style.display="block";const t=document.createDocumentFragment();e.forEach(e=>{const o=e.val(),n=document.createElement("a");n.href=o.link,n.target="_blank",n.rel="noopener noreferrer",n.className="tool-card",n.innerHTML=`\n                ${o.imageUrl?`<img src="${o.imageUrl}" alt="${o.title}">`:""}\n                <h3>${o.title}</h3>\n            `,t.appendChild(n)}),toolsGrid.appendChild(t)})}
function loadTeachers(){db.ref("teachers").on("value",e=>{teachersContainer.innerHTML="",e.exists()&&e.forEach(e=>{const t=e.val(),o=t.photoUrls?t.photoUrls.split(",").map(e=>e.trim()).filter(Boolean):[],n=document.createElement("div");n.className="teacher-card";let a=o.length>0?`<div class="teacher-image-slider" data-current="0">${o.map((e,t)=>`<div class="slide ${0===t?"active":""}"><img src="${e}" alt="${t.name||"Teacher"} photo"></div>`).join("")}</div>`:'<i class="fas fa-user" style="font-size: 5rem;"></i>';if(n.innerHTML=`\n                <div class="teacher-img">${a}</div>\n                <div class="teacher-info">\n                    <h3>${t.name||"N/A"} ${t.verified?`<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">`:""}</h3>\n                    <p>${t.subject||"N/A"}</p>\n                    <p>${t.experience||"N/A"}</p>\n                </div>\n            `,o.length>1){let e=null;n.addEventListener("mouseenter",()=>{if(e)return;e=setInterval(()=>{const t=n.querySelector(".teacher-image-slider");if(!t)return;const o=t.querySelectorAll(".slide");let a=parseInt(t.dataset.current,10);o[a].classList.remove("active"),a=(a+1)%o.length,o[a].classList.add("active"),t.dataset.current=a},3e3)}),n.addEventListener("mouseleave",()=>clearInterval(e))}teachersContainer.appendChild(n)})})}
function loadNotifications(e){const t=db.ref("notifications");t.on("value",t=>{const o=t.numChildren();notificationCount.textContent=o,dropdownNotificationCount.textContent=o,notificationBell.style.display=o>0&&e?"flex":"none"});const o=Date.now();t.orderByChild("date").startAt(o).on("child_added",t=>{e&&(!adminPanel.style.display||"none"===adminPanel.style.display)&&showNotificationToast(t.val())})}
function showNotificationToast(e){const t="toast-"+Date.now(),o=document.createElement("div");o.className="notification-toast",o.id=t;let n=e.imageUrl?`<img src="${e.imageUrl}" alt="${e.title}">`:'<div class="toast-icon"><i class="fas fa-info-circle"></i></div>';o.innerHTML=`${n}<div class="notification-toast-content"><h4>${e.title}</h4><p>${e.message}</p></div><button class="toast-close-btn" onclick="document.getElementById('${t}').remove()">&times;</button>`,notificationToastContainer.appendChild(o),setTimeout(()=>o.classList.add("show"),100),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>o.remove(),500)},1e4)}
function openLoginRegisterModal(e="login"){authModal.style.display="flex",switchAuthTab(e)}
function openBuyModal(e,t,o,n=null){currentPaymentType=e,buyModalTitle.textContent=`${"video"===e?"Buy Video: ":"Purchase: "}${t}`,itemPriceToBuy.textContent=o,currentVideoToBuy={id:n,title:t,price:o},videoBuyModal.style.display="flex"}
function openPremiumModal(){premiumModal.style.display="flex",db.ref("plans").once("value").then(e=>{const t=e.val(),o=t?Object.keys(t)[0]:null;displayPremiumAmount.textContent=t&&o?t[o].price:"100"})}
function openContentInNewTab(e){return e?void window.open(e,"_blank","noopener,noreferrer"):alert("Content link is not available.")}
async function openQuizModal(e){const t=await db.ref("content/"+e).once("value");if(currentQuizData=t.val(),currentQuizId=e,currentQuizData&&currentQuizData.question)return document.getElementById("quizQuestionContainer").style.display="block",quizFeedback.style.display="none",submitQuizAnswerBtn.style.display="block",closeQuizFeedbackBtn.style.display="none",quizModalTitle.textContent=currentQuizData.title||"Quiz",quizQuestionText.textContent=currentQuizData.question,quizOptions.innerHTML=currentQuizData.options.map(e=>`<label class="quiz-option"><input type="radio" name="quizOption" value="${e}">${e}</label>`).join(""),void(quizModal.style.display="flex");alert("Quiz not configured.")}
function handleSubmitQuiz(){const e=document.querySelector('input[name="quizOption"]:checked');if(!e)return alert("Please select an answer!");document.getElementById("quizQuestionContainer").style.display="none",quizFeedback.style.display="block",submitQuizAnswerBtn.style.display="none",closeQuizFeedbackBtn.style.display="block",e.value===currentQuizData.correctAnswer?(quizFeedback.className="quiz-feedback correct",quizFeedback.innerHTML="Congratulations! Correct!",auth.currentUser&&db.ref(`users/${auth.currentUser.uid}/name`).once("value").then(e=>{db.ref("topScorer").set({userName:e.val()||"Anonymous",quizTitle:currentQuizData.title||"a quiz"})})):(quizFeedback.className="quiz-feedback incorrect",quizFeedback.innerHTML=`Incorrect. Correct answer: <strong>${currentQuizData.correctAnswer}</strong>.`)}
function toggleFavorite(e){const t=auth.currentUser;if(!t)return alert("Please log in to manage favorites.");const o=db.ref(`users/${t.uid}/favorites/${e}`);o.once("value",e=>{e.exists()?o.remove():o.set(!0)})}
function submitPaymentDetails(e){const t=auth.currentUser;if(!t)return alert("Please login to submit your payment details.");let o,n,a=null,i;if("premium"===e)o=displayPremiumAmount.textContent,n=UTRNumberInput.value,i="Premium Subscription";else if("video"===e)o=itemPriceToBuy.textContent,n=itemUTRNumber.value,a=currentVideoToBuy.id,i=currentVideoToBuy.title;else{if("verifyBadge"!==e)return;o=itemPriceToBuy.textContent,n=itemUTRNumber.value,i="Verified Badge"}if(!n||!/^\d{12}$/.test(n))return alert("Please enter a valid 12-digit UTR number.");db.ref("payments").push({utr:n,amount:parseFloat(o),status:"pending",type:e,contentId:a,title:i,date:Date.now(),userId:t.uid}).then(()=>{alert("Payment details submitted! Your request will be processed after verification."),premiumModal.style.display="none",videoBuyModal.style.display="none",UTRNumberInput.value="",itemUTRNumber.value=""}).catch(e=>alert("Error submitting payment: "+e.message))}
async function renderFooter(){const e=(await db.ref("settings").once("value")).val()||{},t=(t,o)=>{t.style.display=o?"inline-block":"none",o&&(t.href=o)};footerAboutUsText.textContent=e.aboutUsText||"Your trusted source for quality education.",footerSugamEmail.textContent=e.contact?.sugamEmail||"N/A",footerDeveloperEmail.textContent=e.contact?.developerEmail||"N/A",t(footerYoutubeLink,e.socialLinks?.youtube),t(footerInstagramLink,e.socialLinks?.instagram),t(footerFacebookLink,e.socialLinks?.facebook),t(footerTwitterLink,e.socialLinks?.twitter)}
async function openMyPurchasesModal(){const e=auth.currentUser;e&&(myPurchasesModal.style.display="flex",db.ref("payments").orderByChild("userId").equalTo(e.uid).on("value",e=>{purchasesTableBody.innerHTML="",e.exists()&&e.forEach(e=>{const t=e.val(),o=purchasesTableBody.insertRow(0);o.innerHTML=`<td>${t.title||t.type}</td><td>₹${t.amount}</td><td>${new Date(t.date).toLocaleDateString()}</td><td><span class="status-badge status-${t.status}">${t.status}</span></td>`})}))}
async function openMyFavoritesModal(){const e=auth.currentUser;if(!e)return;myFavoritesModal.style.display="flex",favoritesContentGrid.innerHTML="<p>Loading...</p>";const t=await db.ref(`users/${e.uid}`).once("value"),o=t.val(),n=o.favorites||{},a=Object.keys(n);if(0===a.length)return void(favoritesContentGrid.innerHTML="<p>No favorites yet.</p>");const i=a.map(e=>db.ref(`content/${e}`).once("value")),l=await Promise.all(i);favoritesContentGrid.innerHTML="";const d=document.createDocumentFragment();l.forEach(t=>{t.exists()&&d.appendChild(createContentCard(t.val(),t.key,!0,o.premium,o.purchasedVideos,o.favorites))}),favoritesContentGrid.appendChild(d)}
function loadTopScorer(){db.ref("topScorer").on("value",e=>{e.exists()?(topScorerBanner.innerHTML=`<p>🏆 <strong>New High Score!</strong> <span>${e.val().userName}</span> just aced the "<strong>${e.val().quizTitle}</strong>" quiz! 🎉</p>`,topScorerBanner.style.display="block",topScorerBanner.style.opacity=1,setTimeout(()=>{topScorerBanner.style.opacity=0,setTimeout(()=>topScorerBanner.style.display="none",500)},15e3)):topScorerBanner.style.display="none"})}
function closeInstagramPopup(){if("none"===instagramPopupModal.style.display)return;const e=instagramPopupModal.querySelector(".popup-container");e.style.animation="fadeOut 0.5s forwards",setTimeout(()=>{instagramPopupModal.style.display="none",clearTimeout(popupAutoCloseTimer)},500)}
async function showAdminPanel(){adminPanel.style.display="block",document.body.style.paddingTop="0",document.querySelector("header").style.display="none",document.querySelector(".hero").style.display="none",document.querySelector("footer").style.display="none",document.querySelectorAll("section").forEach(e=>{"adminPanel"!==e.id&&(e.style.display="none")}),closeInstagramPopup(),initializeAdminEventListeners(),handleAdminNav("dashboard")}
function initializeAdminEventListeners(){if(adminPanel.dataset.listenersInitialized)return;adminPanel.dataset.listenersInitialized="true",addBannerBtn.addEventListener("click",()=>{bannerForm.reset(),bannerForm.dataset.editId="",bannerFormContainer.style.display="block",bannerFormContainer.scrollIntoView({behavior:"smooth",block:"center"})}),cancelBanner.addEventListener("click",()=>bannerFormContainer.style.display="none"),bannerForm.addEventListener("submit",handleBannerForm),addToolBtn.addEventListener("click",()=>{toolForm.reset(),toolForm.dataset.editId="",toolFormContainer.style.display="block",toolFormContainer.scrollIntoView({behavior:"smooth",block:"center"})}),cancelTool.addEventListener("click",()=>toolFormContainer.style.display="none"),toolForm.addEventListener("submit",handleToolForm),addContentBtn.addEventListener("click",()=>{contentForm.reset(),contentForm.dataset.editId="",contentPriceContainer.style.display="none",quizFields.style.display="none",contentUrlInput.required=!0,contentFormContainer.style.display="block",contentFormContainer.scrollIntoView({behavior:"smooth",block:"center"})}),cancelContent.addEventListener("click",()=>contentFormContainer.style.display="none"),contentForm.addEventListener("submit",handleContentForm),notificationForm.addEventListener("submit",handleNotificationForm),deleteAllNotificationsBtn.addEventListener("click",()=>{confirm("Delete ALL notifications?")&&db.ref("notifications").remove()}),addTeacherBtn.addEventListener("click",()=>{teacherForm.reset(),teacherForm.dataset.editId="",teacherFormContainer.style.display="block",teacherFormContainer.scrollIntoView({behavior:"smooth",block:"center"})}),cancelTeacher.addEventListener("click",()=>teacherFormContainer.style.display="none"),teacherForm.addEventListener("submit",handleTeacherForm),addPlanBtn.addEventListener("click",()=>{planForm.reset(),planForm.dataset.editId="",planFormContainer.style.display="block",planFormContainer.scrollIntoView({behavior:"smooth",block:"center"})}),cancelPlan.addEventListener("click",()=>planFormContainer.style.display="none"),planForm.addEventListener("submit",handlePlanForm),generalSettingsForm.addEventListener("submit",handleSettingsForm)}
function handleAdminNav(e){adminNavLinks.forEach(e=>e.classList.remove("active")),document.querySelector(`.admin-nav a[data-section="${e}"]`).classList.add("active"),adminSections.forEach(e=>e.classList.remove("active"));const t="tools"===e?"toolsSectionAdmin":`${e}Section`;switch(document.getElementById(t).classList.add("active"),e){case"dashboard":loadDashboardStats();break;case"banners":loadAdminBanners();break;case"tools":loadAdminTools();break;case"users":loadUsers();break;case"content":loadAdminContent();break;case"payments":loadPayments();break;case"notifications":loadAdminNotifications();break;case"chats":loadAdminChatList();break;case"teachers":loadAdminTeachers();break;case"plans":loadAdminPlans();break;case"settings":loadAdminSettings()}}
function loadDashboardStats(){db.ref("users").once("value").then(e=>{totalStudents.textContent=e.numChildren(),premiumUsers.textContent=Object.values(e.val()||{}).filter(e=>e.premium).length}),db.ref("teachers").once("value").then(e=>totalTeachers.textContent=e.numChildren()),db.ref("payments").once("value").then(e=>{pendingPayments.textContent=Object.values(e.val()||{}).filter(e=>"pending"===e.status).length})}
function loadAdminBanners(){db.ref("banners").on("value",e=>{bannersTableBody.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=bannersTableBody.insertRow();n.innerHTML=`\n                <td>${o.title||"N/A"}</td>\n                <td><img src="${o.imageUrl}" style="width: 100px;"></td>\n                <td>${o.buttonText||"N/A"}</td>\n                <td>${o.startDate||"N/A"} to ${o.endDate||"N/A"}</td>\n                <td>\n                    <button class="btn btn-primary" onclick="editBanner('${t.key}')">Edit</button>\n                    <button class="btn btn-outline" onclick="deleteBanner('${t.key}')">Delete</button>\n                </td>`})})}
function editBanner(e){db.ref("banners/"+e).once("value").then(t=>{const o=t.val();document.getElementById("bannerTitle").value=o.title||"",document.getElementById("bannerImageUrl").value=o.imageUrl||"",document.getElementById("bannerButtonText").value=o.buttonText||"",document.getElementById("bannerButtonUrl").value=o.buttonUrl||"",document.getElementById("bannerStartDate").value=o.startDate||"",document.getElementById("bannerEndDate").value=o.endDate||"",bannerForm.dataset.editId=e,bannerFormContainer.style.display="block",bannerFormContainer.scrollIntoView({behavior:"smooth",block:"center"})})}
function deleteBanner(e){confirm("Delete banner?")&&db.ref("banners/"+e).remove()}
function loadAdminTools(){db.ref("tools").on("value",e=>{toolsTableBody.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=toolsTableBody.insertRow();n.innerHTML=`\n                <td>${o.title||"N/A"}</td>\n                <td><a href="${o.link}" target="_blank">${o.link}</a></td>\n                <td>${o.imageUrl?`<img src="${o.imageUrl}" style="width: 50px;">`:"None"}</td>\n                <td>\n                    <button class="btn btn-primary" onclick="editTool('${t.key}')">Edit</button>\n                    <button class="btn btn-outline" onclick="deleteTool('${t.key}')">Delete</button>\n                </td>`})})}
function editTool(e){db.ref("tools/"+e).once("value").then(t=>{const o=t.val();document.getElementById("toolTitle").value=o.title||"",document.getElementById("toolLink").value=o.link||"",document.getElementById("toolImageUrl").value=o.imageUrl||"",toolForm.dataset.editId=e,toolFormContainer.style.display="block",toolFormContainer.scrollIntoView({behavior:"smooth",block:"center"})})}
function deleteTool(e){confirm("Delete tool?")&&db.ref("tools/"+e).remove()}
function loadAdminContent(){db.ref("content").on("value",e=>{adminContentGrid.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=document.createElement("div");n.className="content-card";const a=o.thumbnailUrl?`<img src="${o.thumbnailUrl}" alt="Thumb">`:`<i class="fas fa-${"video"===o.type?"video":"note"===o.type?"file-pdf":"brain"}"></i>`;n.innerHTML=`\n                <div class="content-thumb">${a}</div>\n                <div class="content-info">\n                    <h3>${o.title||"N/A"} ${"free"!==o.access?`<span class="premium-badge">${o.access}</span>`:""}</h3>\n                    <p><strong>Category: ${o.category||"N/A"}</strong></p>\n                    <div class="action-buttons">\n                        <button class="btn btn-primary" onclick="editContent('${t.key}')">Edit</button>\n                        <button class="btn btn-outline" onclick="deleteContent('${t.key}')">Delete</button>\n                    </div>\n                </div>`,adminContentGrid.appendChild(n)})})}
function editContent(e){db.ref("content/"+e).once("value").then(t=>{const o=t.val();document.getElementById("contentTitle").value=o.title||"",document.getElementById("contentThumbnailUrl").value=o.thumbnailUrl||"",document.getElementById("contentCategory").value=o.category||"+2",document.getElementById("contentType").value=o.type||"video",document.getElementById("contentUrl").value=o.url||"",document.getElementById("contentAccess").value=o.access||"free",document.getElementById("contentPrice").value=o.price||"",contentPriceContainer.style.display="free"!==o.access?"block":"none",quizFields.style.display="quiz"===o.type?"block":"none","quiz"===o.type&&(document.getElementById("quizQuestion").value=o.question||"",document.getElementById("quizOption1").value=o.options?.[0]||"",document.getElementById("quizOption2").value=o.options?.[1]||"",document.getElementById("quizOption3").value=o.options?.[2]||"",document.getElementById("quizOption4").value=o.options?.[3]||"",document.getElementById("quizCorrectAnswer").value=o.correctAnswer||""),contentForm.dataset.editId=e,contentFormContainer.style.display="block",contentFormContainer.scrollIntoView({behavior:"smooth",block:"center"})})}
function deleteContent(e){confirm("Delete content?")&&db.ref("content/"+e).remove()}
function blockUser(e){confirm("Block this user? This is a placeholder.")&&alert("User block functionality to be implemented.")}
function loadPayments(){db.ref("payments").on("value",e=>{paymentsTableBody.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=paymentsTableBody.insertRow();let a=`<span class="status-badge status-${o.status}">${o.status}</span>`;"pending"===o.status&&(a=`\n                        <button class="btn btn-primary" onclick="verifyPayment('${t.key}', '${o.userId}', '${o.type}', '${o.contentId}')">Verify</button>\n                        <button class="btn btn-outline" onclick="rejectPayment('${t.key}')">Reject</button>\n                    `),n.innerHTML=`\n                    <td>${o.userName||"N/A"}</td>\n                    <td>${o.utr||"N/A"}</td>\n                    <td>₹${o.amount||"0"} (${o.type||"N/A"})</td>\n                    <td>${a}</td>\n                `})})}
function verifyPayment(e,t,o,n){db.ref("payments/"+e).update({status:"verified"}).then(()=>{("premium"===o?db.ref("users/"+t).update({premium:!0}):"video"===o?db.ref(`users/${t}/purchasedVideos/${n}`).set(!0):"verifyBadge"===o&&db.ref("users/"+t).update({isVerified:!0}),alert("Payment verified!")}))}
function rejectPayment(e){confirm("Reject this payment?")&&db.ref("payments/"+e).update({status:"rejected"})}
function loadAdminTeachers(){db.ref("teachers").on("value",e=>{teachersTableBody.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=teachersTableBody.insertRow();n.innerHTML=`\n                <td>${o.name||"N/A"} ${o.verified?`<img src="${VERIFIED_BADGE_IMG_URL}" alt="Verified" class="verified-badge-img">`:""}</td>\n                <td>${o.subject||"N/A"}</td>\n                <td>\n                    <button class="btn btn-primary" onclick="editTeacher('${t.key}')">Edit</button>\n                    <button class="btn btn-outline" onclick="deleteTeacher('${t.key}')">Delete</button>\n                </td>`})})}
function editTeacher(e){db.ref("teachers/"+e).once("value").then(t=>{const o=t.val();document.getElementById("teacherName").value=o.name||"",document.getElementById("teacherSubject").value=o.subject||"",document.getElementById("teacherExperience").value=o.experience||"",document.getElementById("teacherPhotoUrls").value=o.photoUrls||"",document.getElementById("teacherVerified").checked=o.verified||!1,teacherForm.dataset.editId=e,teacherFormContainer.style.display="block",teacherFormContainer.scrollIntoView({behavior:"smooth",block:"center"})})}
function deleteTeacher(e){confirm("Delete teacher?")&&db.ref("teachers/"+e).remove()}
function handleNotificationForm(e){e.preventDefault();const t=document.getElementById("notificationTitle").value.trim(),o=document.getElementById("notificationMessage").value.trim(),n=document.getElementById("notificationImageUrl").value.trim();t&&o&&db.ref("notifications").push({title:t,message:o,imageUrl:n||null,date:Date.now()}).then(()=>{notificationForm.reset(),alert("Notification sent")})}
function loadAdminNotifications(){db.ref("notifications").on("value",e=>{notificationsTableBody.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=notificationsTableBody.insertRow();n.innerHTML=`<td>${o.title||"N/A"}</td><td>${o.message||"N/A"}</td><td>${o.imageUrl?`<a href="${o.imageUrl}" target="_blank">View</a>`:"None"}</td><td>${new Date(o.date).toLocaleDateString()}</td>`})})}
function editPlan(e){db.ref("plans/"+e).once("value").then(t=>{const o=t.val();document.getElementById("planName").value=o.name||"",document.getElementById("planPrice").value=o.price||"",document.getElementById("planDescription").value=o.description||"",planForm.dataset.editId=e,planFormContainer.style.display="block",planFormContainer.scrollIntoView({behavior:"smooth",block:"center"})})}
function deletePlan(e){confirm("Delete this plan?")&&db.ref("plans/"+e).remove().then(()=>alert("Plan deleted!"))}
function loadAdminPlans(){db.ref("plans").on("value",e=>{plansTableBody.innerHTML="",e.exists()&&e.forEach(t=>{const o=t.val(),n=plansTableBody.insertRow();n.innerHTML=`<td>${o.name||"N/A"}</td><td>₹${o.price||"0"}</td><td>${o.description||"N/A"}</td><td><button class="btn btn-primary" onclick="editPlan('${t.key}')">Edit</button><button class="btn btn-outline" onclick="deletePlan('${t.key}')">Delete</button></td>`})})}
function initializeUserChat(){const e=auth.currentUser;e&&db.ref(`chats/${e.uid}/messages`).orderByChild("timestamp").on("value",e=>{chatMessagesContainer.innerHTML="",e.exists()?e.forEach(t=>renderChatMessage(t.val().sender,t.val().text,t.val().timestamp)):chatMessagesContainer.innerHTML='<p style="text-align:center; color:#94a3b8;">Start a conversation!</p>',chatMessagesContainer.scrollTop=chatMessagesContainer.scrollHeight})}
function handleChatSubmit(e){e.preventDefault();const t=auth.currentUser,o=chatMessageInput.value.trim();if(t&&o){const e=firebase.database.ServerValue.TIMESTAMP;db.ref(`chats/${t.uid}/messages`).push({sender:"user",text:o,timestamp:e}),db.ref(`chats/${t.uid}/meta`).update({lastMessage:o,lastTimestamp:e,userName:t.displayName||t.email,hasUnreadAdminMessage:!0}),chatMessageInput.value=""}}
function renderChatMessage(e,t,o,n=chatMessagesContainer){const a=document.createElement("div");a.className=`chat-message ${e}`,a.innerHTML=`<div>${t}</div><div class="chat-message-time">${new Date(o).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>`,n.appendChild(a)}
function loadAdminChatList(){db.ref("chats").orderByChild("meta/lastTimestamp").on("value",async e=>{adminChatList.innerHTML="",e.exists()&&(chatList=[],e.forEach(e=>chatList.push({userId:e.key,...e.val().meta})),chatList.reverse().forEach(e=>{const t=document.createElement("div");t.className="admin-chat-list-item",t.dataset.userId=e.userId,t.innerHTML=`<strong>${e.userName}</strong><span>${e.lastMessage?e.lastMessage.substring(0,30)+"...":"N/A"}</span>`,t.addEventListener("click",()=>openAdminChat(e.userId,e.userName)),adminChatList.appendChild(t)}))})}
function openAdminChat(e,t){currentAdminChatUserId=e,document.querySelectorAll(".admin-chat-list-item").forEach(t=>t.classList.toggle("active",t.dataset.userId===e)),adminChatWindow.innerHTML=`<div class="chat-widget-header"><span>Chat with ${t}</span></div><div class="chat-messages" id="adminChatMessagesContainer"></div><form class="chat-input-form" id="adminChatInputForm"><input type="text" id="adminChatMessageInput" placeholder="Type reply..." required><button type="submit"><i class="fas fa-paper-plane"></i></button></form>`;const o=document.getElementById("adminChatMessagesContainer");db.ref(`chats/${e}/messages`).orderByChild("timestamp").on("value",e=>{o.innerHTML="",e.forEach(e=>renderChatMessage(e.val().sender,e.val().text,e.val().timestamp,o)),o.scrollTop=o.scrollHeight}),document.getElementById("adminChatInputForm").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("adminChatMessageInput").value.trim();t&&currentAdminChatUserId&&(db.ref(`chats/${currentAdminChatUserId}/messages`).push({sender:"admin",text:t,timestamp:firebase.database.ServerValue.TIMESTAMP}),db.ref(`chats/${currentAdminChatUserId}/meta`).update({hasUnreadAdminMessage:!1}),document.getElementById("adminChatMessageInput").value="")})}
async function loadDynamicUserDisplay(){const e=(await db.ref("settings").once("value")).val()||{};userNotificationCount.textContent=e.displayTotalUsersCount||"0";const t=[];(await db.ref("users").once("value")).forEach(e=>t.push(e.val().name));const o=[...new Set([...t,...e.displayUserNames||[]])];clearInterval(userNameRotationInterval),clearInterval(userNotificationBarInterval),userNotificationBar.classList.remove("show"),o.length>0&&(userNotificationBarInterval=setInterval(()=>{userNotificationBar.style.display="flex",userNotificationBar.classList.add("show"),userNameRotationInterval=setInterval(()=>{userNotificationName.classList.remove("slide-in-out"),void userNotificationName.offsetWidth,userNotificationName.classList.add("slide-in-out"),setTimeout(()=>{currentDynamicUserNameIndex=(currentDynamicUserNameIndex+1)%o.length,userNotificationName.textContent=o[currentDynamicUserNameIndex]},500)},5e3),setTimeout(()=>{userNotificationBar.classList.remove("show"),clearInterval(userNameRotationInterval)},7e3)},2e4))}
let currentDynamicUserNameIndex=0,userNameRotationInterval;
async function loadAdminSettings(){const e=(await db.ref("settings").once("value")).val()||{};maintenanceModeToggle.checked=e.maintenanceModeEnabled||!1,adminVerifyBadgePrice.value=e.adminVerifyBadgePrice||"",toolsSectionTitleInput.value=e.toolsSectionTitle||"",displayTotalUsersCountInput.value=e.displayTotalUsersCount||"",displayUserNamesInput.value=(e.displayUserNames||[]).join(", "),settingsAboutUsText.value=e.aboutUsText||"",settingsSugamEmail.value=e.contact?.sugamEmail||"",settingsDeveloperEmail.value=e.contact?.developerEmail||"",settingsYoutubeLink.value=e.socialLinks?.youtube||"",settingsInstagramLink.value=e.socialLinks?.instagram||"",settingsFacebookLink.value=e.socialLinks?.facebook||"",settingsTwitterLink.value=e.socialLinks?.twitter||""}
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,or,hi,bn,te,ta",autoDisplay:!1},"google_translate_element")}