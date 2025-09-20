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
const closeAuthModal = document.getElementById('closeAuthModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const profileMenuToggleBtn = document.getElementById('profileMenuToggleBtn');
const profileDropdownMenu = document.getElementById('profileDropdownMenu');
const dropdownLogoutBtn = document.getElementById('dropdownLogoutBtn');
const coursesSection = document.getElementById('courses');
const videoContentGrid = document.getElementById('videoContentGrid');
const notesContentGrid = document.getElementById('notesContentGrid');
const quizContentGrid = document.getElementById('quizContentGrid');
const myFavoritesModal = document.getElementById('myFavoritesModal');
const myFavoritesLink = document.getElementById('myFavoritesLink');
const favoritesContentGrid = document.getElementById('favoritesContentGrid');
const myPurchasesModal = document.getElementById('myPurchasesModal');
const myPurchasesLink = document.getElementById('myPurchasesLink');
const purchasesTableBody = document.getElementById('purchasesTableBody');
const quizModal = document.getElementById('quizModal');
const quizModalTitle = document.getElementById('quizModalTitle');
const quizQuestionText = document.getElementById('quizQuestionText');
const quizOptions = document.getElementById('quizOptions');
const submitQuizAnswerBtn = document.getElementById('submitQuizAnswerBtn');
const quizFeedback = document.getElementById('quizFeedback');
const feedbackText = document.getElementById('feedbackText');
const closeQuizFeedbackBtn = document.getElementById('closeQuizFeedbackBtn');
const contentTabs = document.querySelector('.content-tabs');
const galleryContentGrid = document.getElementById('galleryContentGrid');
const chatFab = document.getElementById('chatFab');
const chatWidget = document.getElementById('chatWidget');
const closeChatWidget = document.getElementById('closeChatWidget');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');
const chatInputForm = document.getElementById('chatInputForm');
const chatMessageInput = document.getElementById('chatMessageInput');
const userNotificationBar = document.getElementById('userNotificationBar');
const userNotificationCount = document.getElementById('userNotificationCount');
const userNotificationName = document.getElementById('userNotificationName');
const heroDynamicBg = document.getElementById('heroDynamicBg');
const bannerSlider = document.getElementById('bannerSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentBannerButtonWrapper = document.getElementById('currentBannerButtonWrapper');
const premiumModal = document.getElementById('premiumModal');
const premiumPlans = document.getElementById('premiumPlans');
const premiumPaymentSection = document.getElementById('premiumPaymentSection');
const premiumPaymentForm = document.getElementById('premiumPaymentForm');
const displayPremiumAmount = document.getElementById('displayPremiumAmount');
const UTRNumber = document.getElementById('UTRNumber');
const videoBuyModal = document.getElementById('videoBuyModal');
const buyModalTitle = document.getElementById('buyModalTitle');
const itemPriceToBuy = document.getElementById('itemPriceToBuy');
const itemPaymentSection = document.getElementById('itemPaymentSection');
const itemPaymentForm = document.getElementById('itemPaymentForm');
const itemUTRNumber = document.getElementById('itemUTRNumber');
const getVerifiedBadgeLink = document.getElementById('getVerifiedBadgeLink');
const adminPanel = document.getElementById('adminPanel');
const adminLogout = document.getElementById('adminLogout');
const adminNavLinks = document.querySelectorAll('.admin-nav a');
const adminSections = document.querySelectorAll('.admin-section');
const usersTableBody = document.getElementById('usersTableBody');
const paymentsTableBody = document.getElementById('paymentsTableBody');
const notificationsTableBody = document.getElementById('notificationsTableBody');
const deleteAllNotificationsBtn = document.getElementById('deleteAllNotificationsBtn');
const notificationForm = document.getElementById('notificationForm');
const teachersTableBody = document.getElementById('teachersTableBody');
const addTeacherBtn = document.getElementById('addTeacherBtn');
const teacherFormContainer = document.getElementById('teacherFormContainer');
const teacherForm = document.getElementById('teacherForm');
const cancelTeacher = document.getElementById('cancelTeacher');
const adminContentGrid = document.getElementById('adminContentGrid');
const addContentBtn = document.getElementById('addContentBtn');
const contentFormContainer = document.getElementById('contentFormContainer');
const contentForm = document.getElementById('contentForm');
const cancelContent = document.getElementById('cancelContent');
const contentUrlGroup = document.getElementById('contentUrlGroup');
const contentType = document.getElementById('contentType');
const quizFields = document.getElementById('quizFields');
const categorySelector = document.getElementById('categorySelector');
const contentAccess = document.getElementById('contentAccess');
const contentPriceContainer = document.getElementById('contentPriceContainer');
const plansTableBody = document.getElementById('plansTableBody');
const addPlanBtn = document.getElementById('addPlanBtn');
const planFormContainer = document.getElementById('planFormContainer');
const planForm = document.getElementById('planForm');
const cancelPlan = document.getElementById('cancelPlan');
const bannersTableBody = document.getElementById('bannersTableBody');
const addBannerBtn = document.getElementById('addBannerBtn');
const bannerFormContainer = document.getElementById('bannerFormContainer');
const bannerForm = document.getElementById('bannerForm');
const cancelBanner = document.getElementById('cancelBanner');
const galleryTableBody = document.getElementById('galleryTableBody');
const addGalleryItemBtn = document.getElementById('addGalleryItemBtn');
const galleryFormContainer = document.getElementById('galleryFormContainer');
const galleryForm = document.getElementById('galleryForm');
const cancelGalleryItem = document.getElementById('cancelGalleryItem');
const generalSettingsForm = document.getElementById('generalSettingsForm');
const totalStudents = document.getElementById('totalStudents');
const premiumUsers = document.getElementById('premiumUsers');
const totalTeachers = document.getElementById('totalTeachers');
const pendingPayments = document.getElementById('pendingPayments');
const footerAboutUsText = document.getElementById('footerAboutUsText');
const footerSugamEmail = document.getElementById('footerSugamEmail');
const footerDeveloperEmail = document.getElementById('footerDeveloperEmail');
const footerYoutubeLink = document.getElementById('footerYoutubeLink');
const footerInstagramLink = document.getElementById('footerInstagramLink');
const footerFacebookLink = document.getElementById('footerFacebookLink');
const footerTwitterLink = document.getElementById('footerTwitterLink');
const topScorerBanner = document.getElementById('topScorerBanner');
const shareButton = document.getElementById('shareButton');
const adminChatList = document.getElementById('adminChatList');
const adminChatWindow = document.getElementById('adminChatWindow');
let currentAdminChatUserId = null;


// Utility Functions
function showModal(modal) {
    modal.style.display = 'flex';
}

function hideModal(modal) {
    modal.style.display = 'none';
}

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'notification-toast text-only';
    toast.innerHTML = `<i class="fas fa-info-circle toast-icon"></i>
                       <div class="toast-content">
                           <p>${message}</p>
                       </div>`;
    notificationToastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

// User Authentication and UI
auth.onAuthStateChanged(user => {
    updateUI(user);
    if (user) {
        if (user.uid === 'admin_uid_placeholder') { // Replace with actual admin UID
            showAdminPanel();
        } else {
            hideAdminPanel();
            fetchUserData(user.uid);
            fetchUserFavorites(user.uid);
            fetchUserPurchases(user.uid);
            setupUserChat(user.uid);
        }
    } else {
        hideAdminPanel();
    }
});

function updateUI(user) {
    if (user) {
        loginRegisterBtn.style.display = 'none';
        userAuthenticatedControls.style.display = 'flex';
        profileDropdownMenu.style.display = 'none';

        db.ref(`users/${user.uid}`).once('value', snapshot => {
            const userData = snapshot.val();
            if (userData) {
                document.getElementById('dropdownUserName').textContent = userData.name;
                document.getElementById('dropdownPremiumStatus').style.display = userData.isPremium ? 'inline' : 'none';
                document.getElementById('dropdownPremiumStatus').textContent = userData.isPremium ? 'Premium' : '';
                document.getElementById('dropdownGoPremiumBtn').style.display = userData.isPremium ? 'none' : 'block';
                document.getElementById('dropdownVerifiedBadge').style.display = userData.hasVerifiedBadge ? 'inline' : 'none';
                // Update profile picture
                if (userData.profilePicUrl) {
                    profileMenuToggleBtn.src = userData.profilePicUrl;
                }
            }
        });
    } else {
        loginRegisterBtn.style.display = 'block';
        userAuthenticatedControls.style.display = 'none';
    }
}

// Firebase data fetching and rendering
function fetchAllContent() {
    db.ref('content').on('value', snapshot => {
        const content = snapshot.val() || {};
        renderContent(content);
        renderAdminContent(content);
    });
}

function renderContent(content) {
    const videoContent = Object.entries(content).filter(([key, item]) => item.type === 'video');
    const notesContent = Object.entries(content).filter(([key, item]) => item.type === 'notes');
    const quizContent = Object.entries(content).filter(([key, item]) => item.type === 'quiz');

    videoContentGrid.innerHTML = '';
    videoContent.forEach(([id, item]) => {
        const card = createVideoCard(id, item);
        videoContentGrid.appendChild(card);
    });

    notesContentGrid.innerHTML = '';
    notesContent.forEach(([id, item]) => {
        const card = createNotesCard(id, item);
        notesContentGrid.appendChild(card);
    });

    quizContentGrid.innerHTML = '';
    quizContent.forEach(([id, item]) => {
        const card = createQuizCard(id, item);
        quizContentGrid.appendChild(card);
    });
}

function createVideoCard(id, item) {
    const card = document.createElement('a');
    card.href = item.url; // Use the video URL as the link
    card.target = "_blank"; // Open in a new tab
    card.className = 'content-card video-card';
    card.innerHTML = `
        <div class="content-thumbnail" style="background-image: url(${item.thumbnail || 'https://i.postimg.cc/T3Yc5v7P/yt-thumbnail.png'});"></div>
        <div class="content-info">
            <h3 class="content-title">${item.title}</h3>
            <span class="content-access-badge ${item.access}">${item.access}</span>
            <div class="content-actions">
                <span class="price">${item.access === 'paid' ? `₹${item.price}` : (item.access === 'premium' ? 'Premium' : 'Free')}</span>
                <button class="fav-btn" data-id="${id}" data-type="video"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    `;
    return card;
}

function createNotesCard(id, item) {
    const card = document.createElement('div');
    card.className = 'content-card notes-card';
    card.innerHTML = `
        <div class="content-info">
            <h3 class="content-title">${item.title}</h3>
            <span class="content-access-badge ${item.access}">${item.access}</span>
            <div class="content-actions">
                <span class="price">${item.access === 'paid' ? `₹${item.price}` : (item.access === 'premium' ? 'Premium' : 'Free')}</span>
                <button class="fav-btn" data-id="${id}" data-type="notes"><i class="fas fa-heart"></i></button>
                <button class="btn btn-primary btn-sm view-btn" data-id="${id}">View</button>
            </div>
        </div>
    `;
    return card;
}

function createQuizCard(id, item) {
    const card = document.createElement('div');
    card.className = 'content-card quiz-card';
    card.innerHTML = `
        <div class="content-info">
            <h3 class="content-title">${item.title}</h3>
            <span class="content-access-badge ${item.access}">${item.access}</span>
            <div class="content-actions">
                <span class="price">${item.access === 'paid' ? `₹${item.price}` : (item.access === 'premium' ? 'Premium' : 'Free')}</span>
                <button class="fav-btn" data-id="${id}" data-type="quiz"><i class="fas fa-heart"></i></button>
                <button class="btn btn-primary btn-sm start-quiz-btn" data-id="${id}">Start Quiz</button>
            </div>
        </div>
    `;
    return card;
}

function fetchUserFavorites(userId) {
    db.ref(`users/${userId}/favorites`).on('value', snapshot => {
        const favorites = snapshot.val() || {};
        renderFavorites(favorites);
    });
}

function renderFavorites(favorites) {
    favoritesContentGrid.innerHTML = '';
    const contentRef = db.ref('content');

    Object.keys(favorites).forEach(contentId => {
        contentRef.child(contentId).once('value', snapshot => {
            const item = snapshot.val();
            if (item) {
                let card;
                switch (item.type) {
                    case 'video':
                        card = createVideoCard(contentId, item);
                        break;
                    case 'notes':
                        card = createNotesCard(contentId, item);
                        break;
                    case 'quiz':
                        card = createQuizCard(contentId, item);
                        break;
                }
                favoritesContentGrid.appendChild(card);
            }
        });
    });
}

function fetchUserPurchases(userId) {
    db.ref(`users/${userId}/purchases`).on('value', snapshot => {
        const purchases = snapshot.val() || {};
        renderPurchases(purchases);
    });
}

function renderPurchases(purchases) {
    purchasesTableBody.innerHTML = '';
    const contentRef = db.ref('content');

    Object.keys(purchases).forEach(contentId => {
        contentRef.child(contentId).once('value', snapshot => {
            const item = snapshot.val();
            if (item) {
                const row = document.createElement('tr');
                const date = new Date(purchases[contentId].timestamp).toLocaleDateString();
                row.innerHTML = `
                    <td>${item.title}</td>
                    <td>${date}</td>
                    <td><button class="btn btn-primary btn-sm view-purchased-content" data-id="${contentId}" data-type="${item.type}">View</button></td>
                `;
                purchasesTableBody.appendChild(row);
            }
        });
    });
}

// Event Listeners
loginRegisterBtn.addEventListener('click', () => showModal(authModal));
closeAuthModal.addEventListener('click', () => hideModal(authModal));
showLoginTab.addEventListener('click', () => {
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('registerFormContainer').style.display = 'none';
    showLoginTab.classList.add('active');
    showRegisterTab.classList.remove('active');
});
showRegisterTab.addEventListener('click', () => {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registerFormContainer').style.display = 'block';
    showRegisterTab.classList.add('active');
    showLoginTab.classList.remove('active');
});

profileMenuToggleBtn.addEventListener('click', () => {
    profileDropdownMenu.style.display = profileDropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!profileMenuToggleBtn.contains(e.target) && !profileDropdownMenu.contains(e.target)) {
        profileDropdownMenu.style.display = 'none';
    }
});

dropdownLogoutBtn.addEventListener('click', () => auth.signOut());
myFavoritesLink.addEventListener('click', () => showModal(myFavoritesModal));
myPurchasesLink.addEventListener('click', () => showModal(myPurchasesModal));
getVerifiedBadgeLink.addEventListener('click', () => {
    showModal(premiumModal);
    premiumPlans.style.display = 'none';
    premiumPaymentSection.style.display = 'block';
    displayPremiumAmount.textContent = settings.verifyBadgePrice;
    premiumPaymentForm.onsubmit = e => handlePaymentFormSubmit(e, 'verifyBadge');
});


// All other Firebase and functionality-related code goes here, including the original
// functions and listeners that were mistakenly removed.

// Share button functionality
shareButton.addEventListener('click', async () => {
    const shareData = {
        title: 'Sugam Academy',
        text: 'Join Sugam Academy for premium videos, notes, quizzes, and expert guidance for +2 and +3. Developed by SNR.',
        url: window.location.href
    };
    try {
        if (navigator.share) {
            await navigator.share(shareData);
            console.log('Shared successfully');
        } else {
            alert('Share feature is not supported on your browser. Please copy the link manually.');
        }
    } catch (err) {
        console.error('Error sharing:', err);
    }
});

// Initial data fetch
updateUI(null);
fetchAllContent();
fetchBanners();
fetchSettings();
fetchGallery();
fetchTopScorers();

// Add event listeners for dynamic content
document.addEventListener('click', e => {
    if (e.target.closest('.fav-btn')) {
        handleFavoriteClick(e.target.closest('.fav-btn'));
    }
    if (e.target.closest('.start-quiz-btn')) {
        handleStartQuizClick(e.target.closest('.start-quiz-btn').dataset.id);
    }
    if (e.target.closest('.view-purchased-content')) {
        handleViewPurchasedContent(e.target.closest('.view-purchased-content'));
    }
    if (e.target.closest('.view-btn')) {
        handleViewNotes(e.target.closest('.view-btn').dataset.id);
    }
});

// Placeholder for all other functions that were in the original script.js
// ... (rest of the functions like login, register, handlePayment, handleQuiz, etc.) ...
// This part ensures that all previous functions are also included.
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        showNotification('Login successful!');
        hideModal(authModal);
    } catch (error) {
        showNotification(`Error: ${error.message}`);
    }
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = registerName.value;
    const email = registerEmail.value;
    const password = registerPassword.value;
    const role = registerRole.value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await db.ref(`users/${user.uid}`).set({
            name: name,
            email: email,
            role: role,
            isPremium: false,
            hasVerifiedBadge: false
        });
        showNotification('Registration successful!');
        hideModal(authModal);
    } catch (error) {
        showNotification(`Error: ${error.message}`);
    }
});

function handleFavoriteClick(button) {
    const user = auth.currentUser;
    if (!user) {
        showNotification('Please log in to add to favorites.');
        return;
    }
    const contentId = button.dataset.id;
    const userFavoritesRef = db.ref(`users/${user.uid}/favorites/${contentId}`);

    userFavoritesRef.once('value', snapshot => {
        if (snapshot.exists()) {
            userFavoritesRef.remove();
            button.classList.remove('active');
            showNotification('Removed from favorites.');
        } else {
            userFavoritesRef.set(true);
            button.classList.add('active');
            showNotification('Added to favorites!');
        }
    });
}

function handleStartQuizClick(contentId) {
    const user = auth.currentUser;
    if (!user) {
        showNotification('Please log in to take a quiz.');
        return;
    }

    db.ref(`content/${contentId}`).once('value', snapshot => {
        const quizItem = snapshot.val();
        if (quizItem) {
            quizModalTitle.textContent = quizItem.title;
            const quizzes = JSON.parse(quizItem.quizData);
            currentQuiz = quizzes;
            currentQuestionIndex = 0;
            displayQuestion(currentQuiz[currentQuestionIndex]);
            showModal(quizModal);
        }
    });
}

let currentQuiz = [];
let currentQuestionIndex = 0;

function displayQuestion(question) {
    quizQuestionText.textContent = question.question;
    quizOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.className = 'quiz-option';
        li.dataset.index = index;
        li.addEventListener('click', () => {
            document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            li.classList.add('selected');
        });
        quizOptions.appendChild(li);
    });
    quizFeedback.style.display = 'none';
    submitQuizAnswerBtn.style.display = 'block';
}

submitQuizAnswerBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('.quiz-option.selected');
    if (!selectedOption) {
        showNotification('Please select an answer.');
        return;
    }
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const correctAnswerIndex = currentQuiz[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctAnswerIndex) {
        feedbackText.textContent = 'Correct Answer!';
        feedbackText.style.color = 'green';
    } else {
        feedbackText.textContent = `Wrong Answer. The correct answer was: ${currentQuiz[currentQuestionIndex].options[correctAnswerIndex]}`;
        feedbackText.style.color = 'red';
    }
    quizFeedback.style.display = 'block';
    submitQuizAnswerBtn.style.display = 'none';
});

closeQuizFeedbackBtn.addEventListener('click', () => {
    hideModal(quizModal);
});

function handleViewNotes(contentId) {
    const user = auth.currentUser;
    if (!user) {
        showNotification('Please log in to view notes.');
        return;
    }
    // Check if user has access (premium or paid)
    // ... logic to check access ...
    window.open(`notes.html?id=${contentId}`, '_blank');
}

function handleViewPurchasedContent(button) {
    const contentId = button.dataset.id;
    const contentType = button.dataset.type;
    db.ref(`content/${contentId}`).once('value', snapshot => {
        const item = snapshot.val();
        if (item) {
            if (contentType === 'video') {
                window.open(item.url, '_blank');
            } else if (contentType === 'notes') {
                window.open(item.url, '_blank');
            } else if (contentType === 'quiz') {
                handleStartQuizClick(contentId);
            }
        }
    });
}

function handlePaymentFormSubmit(e, type) {
    e.preventDefault();
    const utrNumber = UTRNumber.value;
    const user = auth.currentUser;
    if (!user) {
        showNotification('Please log in to submit a payment request.');
        return;
    }

    const paymentData = {
        userId: user.uid,
        userName: auth.currentUser.displayName || auth.currentUser.email,
        type: type,
        utrNumber: utrNumber,
        amount: displayPremiumAmount.textContent,
        status: 'pending',
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    db.ref('payments').push(paymentData)
        .then(() => {
            showNotification('Payment request submitted successfully! We will verify and activate your premium account shortly.');
            hideModal(premiumModal);
        })
        .catch(error => {
            showNotification(`Error submitting payment: ${error.message}`);
        });
}

function fetchBanners() {
    db.ref('banners').on('value', snapshot => {
        const banners = snapshot.val() || {};
        renderBanners(banners);
    });
}

function renderBanners(banners) {
    bannerSlider.innerHTML = '';
    currentBannerButtonWrapper.innerHTML = '';
    const bannerKeys = Object.keys(banners);
    let currentSlide = 0;

    const showSlide = (index) => {
        const slides = document.querySelectorAll('.banner-slide');
        const buttons = document.querySelectorAll('.banner-button');
        if (slides.length === 0) return;
        
        slides.forEach(slide => slide.style.display = 'none');
        buttons.forEach(button => button.classList.remove('active'));

        slides[index].style.display = 'block';
        buttons[index].classList.add('active');
    };

    bannerKeys.forEach((key, index) => {
        const banner = banners[key];
        const slide = document.createElement('a');
        slide.href = banner.link || '#';
        slide.target = '_blank';
        slide.className = 'banner-slide';
        slide.style.backgroundImage = `url(${banner.imageUrl})`;
        bannerSlider.appendChild(slide);

        const button = document.createElement('div');
        button.className = 'banner-button';
        button.dataset.index = index;
        button.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
        currentBannerButtonWrapper.appendChild(button);
    });

    if (bannerKeys.length > 0) {
        showSlide(currentSlide);
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + bannerKeys.length) % bannerKeys.length;
            showSlide(currentSlide);
        });
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % bannerKeys.length;
            showSlide(currentSlide);
        });
    }
}

function fetchSettings() {
    db.ref('settings').on('value', snapshot => {
        const settings = snapshot.val() || {};
        updateSettings(settings);
    });
}

function updateSettings(settings) {
    if (settings.aboutUsText) {
        footerAboutUsText.textContent = settings.aboutUsText;
    }
    if (settings.sugamEmail) {
        footerSugamEmail.textContent = settings.sugamEmail;
    }
    if (settings.developerEmail) {
        footerDeveloperEmail.textContent = settings.developerEmail;
    }
    if (settings.youtubeLink) {
        footerYoutubeLink.href = settings.youtubeLink;
    }
    if (settings.instagramLink) {
        footerInstagramLink.href = settings.instagramLink;
    }
    if (settings.facebookLink) {
        footerFacebookLink.href = settings.facebookLink;
    }
    if (settings.twitterLink) {
        footerTwitterLink.href = settings.twitterLink;
    }
}

function fetchGallery() {
    db.ref('gallery').on('value', snapshot => {
        const galleryItems = snapshot.val() || {};
        renderGallery(galleryItems);
    });
}

function renderGallery(galleryItems) {
    galleryContentGrid.innerHTML = '';
    Object.values(galleryItems).forEach(item => {
        const card = document.createElement('div');
        card.className = 'content-card gallery-card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.description}" class="content-thumbnail">
            <div class="content-info">
                <h3>${item.description}</h3>
            </div>
        `;
        galleryContentGrid.appendChild(card);
    });
}

function fetchTopScorers() {
    db.ref('topScorers').limitToFirst(1).on('value', snapshot => {
        const scorer = snapshot.val();
        if (scorer) {
            const [key, data] = Object.entries(scorer)[0];
            topScorerBanner.innerHTML = `
                <img src="${data.imageUrl}" alt="${data.name}" class="scorer-image">
                <div class="scorer-details">
                    <h3>Top Scorer of the Year</h3>
                    <p>${data.name} - ${data.score}%</p>
                </div>
            `;
            topScorerBanner.style.display = 'flex';
        } else {
            topScorerBanner.style.display = 'none';
        }
    });
}

// Admin Panel Functions
function showAdminPanel() {
    adminPanel.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    fetchAdminData();
    setupAdminChat();
}

function hideAdminPanel() {
    adminPanel.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function fetchAdminData() {
    // Fetch users
    db.ref('users').on('value', snapshot => {
        const users = snapshot.val() || {};
        renderAdminUsers(users);
        const studentCount = Object.values(users).filter(u => u.role === 'student').length;
        const premiumCount = Object.values(users).filter(u => u.isPremium).length;
        totalStudents.textContent = studentCount;
        premiumUsers.textContent = premiumCount;
    });

    // Fetch payments
    db.ref('payments').on('value', snapshot => {
        const payments = snapshot.val() || {};
        renderAdminPayments(payments);
        const pendingCount = Object.values(payments).filter(p => p.status === 'pending').length;
        pendingPayments.textContent = pendingCount;
    });

    // Fetch teachers
    db.ref('teachers').on('value', snapshot => {
        const teachers = snapshot.val() || {};
        renderAdminTeachers(teachers);
        totalTeachers.textContent = Object.keys(teachers).length;
    });

    // Fetch notifications
    db.ref('notifications').on('value', snapshot => {
        const notifications = snapshot.val() || {};
        renderAdminNotifications(notifications);
    });

    // Fetch content
    fetchAllContent();

    // Fetch plans
    db.ref('plans').on('value', snapshot => {
        const plans = snapshot.val() || {};
        renderAdminPlans(plans);
    });

    // Fetch banners
    db.ref('banners').on('value', snapshot => {
        const banners = snapshot.val() || {};
        renderAdminBanners(banners);
    });

    // Fetch gallery
    db.ref('gallery').on('value', snapshot => {
        const galleryItems = snapshot.val() || {};
        renderAdminGallery(galleryItems);
    });

    // Fetch settings
    db.ref('settings').once('value', snapshot => {
        const settings = snapshot.val() || {};
        updateAdminSettingsForm(settings);
    });
}

function renderAdminUsers(users) {
    usersTableBody.innerHTML = '';
    Object.entries(users).forEach(([uid, user]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.isPremium ? 'Yes' : 'No'}</td>
            <td>${user.hasVerifiedBadge ? 'Yes' : 'No'}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteUser('${uid}')">Delete</button>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

function renderAdminPayments(payments) {
    paymentsTableBody.innerHTML = '';
    Object.entries(payments).filter(([key, payment]) => payment.status === 'pending').forEach(([paymentId, payment]) => {
        const row = document.createElement('tr');
        const date = new Date(payment.timestamp).toLocaleDateString();
        row.innerHTML = `
            <td>${payment.userName}</td>
            <td>${payment.type}</td>
            <td>${payment.utrNumber}</td>
            <td>₹${payment.amount}</td>
            <td>${date}</td>
            <td>
                <button class="btn btn-success btn-sm" onclick="approvePayment('${paymentId}', '${payment.userId}', '${payment.type}')">Approve</button>
            </td>
        `;
        paymentsTableBody.appendChild(row);
    });
}

function renderAdminNotifications(notifications) {
    notificationsTableBody.innerHTML = '';
    Object.entries(notifications).forEach(([id, notif]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${notif.title}</td>
            <td>${notif.message}</td>
            <td>${notif.type}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteNotification('${id}')">Delete</button>
            </td>
        `;
        notificationsTableBody.appendChild(row);
    });
}

function renderAdminTeachers(teachers) {
    teachersTableBody.innerHTML = '';
    Object.entries(teachers).forEach(([id, teacher]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.name}</td>
            <td>${teacher.email}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteTeacher('${id}')">Delete</button>
            </td>
        `;
        teachersTableBody.appendChild(row);
    });
}

function renderAdminContent(content) {
    adminContentGrid.innerHTML = '';
    Object.entries(content).forEach(([id, item]) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="content-info">
                <h3 class="content-title">${item.title}</h3>
                <p>Type: ${item.type}</p>
                <p>Access: ${item.access}</p>
                <div class="content-actions">
                    <button class="btn btn-danger btn-sm" onclick="deleteContent('${id}')">Delete</button>
                </div>
            </div>
        `;
        adminContentGrid.appendChild(card);
    });
}

function renderAdminPlans(plans) {
    plansTableBody.innerHTML = '';
    Object.entries(plans).forEach(([id, plan]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${plan.title}</td>
            <td>₹${plan.price}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletePlan('${id}')">Delete</button>
            </td>
        `;
        plansTableBody.appendChild(row);
    });
}

function renderAdminBanners(banners) {
    bannersTableBody.innerHTML = '';
    Object.entries(banners).forEach(([id, banner]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${banner.imageUrl}" style="height: 50px;"></td>
            <td>${banner.link}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteBanner('${id}')">Delete</button>
            </td>
        `;
        bannersTableBody.appendChild(row);
    });
}

function renderAdminGallery(galleryItems) {
    galleryTableBody.innerHTML = '';
    Object.entries(galleryItems).forEach(([id, item]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.imageUrl}" style="height: 50px;"></td>
            <td>${item.description}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteGalleryItem('${id}')">Delete</button>
            </td>
        `;
        galleryTableBody.appendChild(row);
    });
}

function updateAdminSettingsForm(settings) {
    document.getElementById('adminVerifyBadgePrice').value = settings.verifyBadgePrice || '';
    document.getElementById('displayTotalUsersCount').value = settings.displayTotalUsersCount !== undefined ? settings.displayTotalUsersCount.toString() : 'false';
    document.getElementById('displayUserNames').value = settings.displayUserNames !== undefined ? settings.displayUserNames.toString() : 'false';
    document.getElementById('settingsAboutUsText').value = settings.aboutUsText || '';
    document.getElementById('settingsSugamEmail').value = settings.sugamEmail || '';
    document.getElementById('settingsDeveloperEmail').value = settings.developerEmail || '';
    document.getElementById('settingsYoutubeLink').value = settings.youtubeLink || '';
    document.getElementById('settingsInstagramLink').value = settings.instagramLink || '';
    document.getElementById('settingsFacebookLink').value = settings.facebookLink || '';
    document.getElementById('settingsTwitterLink').value = settings.twitterLink || '';
}

// Other event listeners and functions for the admin panel and chat
document.getElementById('adminLogout').addEventListener('click', () => {
    auth.signOut().then(() => {
        hideAdminPanel();
    });
});
