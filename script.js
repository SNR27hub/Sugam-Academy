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
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const userProfileImage = document.getElementById('userProfileImage');
const logoutBtn = document.getElementById('logoutBtn');
const notificationModal = document.getElementById('notificationModal');
const closeNotificationModal = document.getElementById('closeNotificationModal');
const notificationList = document.getElementById('notificationList');
const contentDisplayModal = document.getElementById('contentDisplayModal');
const closeContentDisplayModal = document.getElementById('closeContentDisplayModal');
const contentDisplayModalTitle = document.getElementById('contentDisplayModalTitle');
const contentIframeWrapper = document.getElementById('contentIframeWrapper');
const shareButton = document.getElementById('shareButton');

// Function to handle link copy
const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

// Function to get embeddable URL
function getEmbeddableUrl(url) {
    if (url.includes('drive.google.com') && url.includes('view')) {
        return url.replace('/view', '/preview');
    }
    return url;
}

function openContentDisplayModal(url, type, title) {
    if (type === 'video' || url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com")) {
        window.open(url, '_blank', 'noopener,noreferrer');
        contentDisplayModalTitle.textContent = title;
        contentIframeWrapper.innerHTML = `
            <div class="fallback-content">
                <h4>Opening Video in New Tab</h4>
                <p>The video is being opened in a new browser tab for the best viewing experience. If it doesn't open automatically, please check your pop-up settings.</p>
                <p style="margin-top: 1rem;">If the new tab didn't open, please click the button below.</p>
                <button class="btn btn-primary" style="margin-top: 1rem;" onclick="window.open('${url}', '_blank', 'noopener,noreferrer')">Open Video Manually</button>
            </div>
        `;
        contentDisplayModal.style.display = 'flex';
    } else {
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
}

// Function to update UI based on user authentication state
const updateUI = (user) => {
    if (user) {
        // User is signed in.
        loginRegisterBtn.style.display = 'none';
        userAuthenticatedControls.style.display = 'flex';
        // Hide the auth modal if it's open
        authModal.style.display = 'none';
    } else {
        // User is signed out.
        loginRegisterBtn.style.display = 'block';
        userAuthenticatedControls.style.display = 'none';
        // Clear user profile image or set a default one
        userProfileImage.src = 'default-avatar.png'; // Or any other default image
    }
};

// Event listener for login/register button
loginRegisterBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    // Initially show the login tab
    showLoginTab.click();
});

// Event listeners for closing modals
document.querySelector('.close-auth-modal').addEventListener('click', () => {
    authModal.style.display = 'none';
});

closeNotificationModal.addEventListener('click', () => {
    notificationModal.style.display = 'none';
});

closeContentDisplayModal.addEventListener('click', () => {
    contentDisplayModal.style.display = 'none';
});

// Switch tabs in auth modal
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (tab.id === 'showLoginTab') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    });
});

// User logout
logoutBtn.addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log('User signed out successfully.');
    }).catch((error) => {
        console.error('Sign out error', error);
    });
});

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        updateUI(user);
        db.ref('users/' + user.uid).once('value', snapshot => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData.profileImage) {
                    userProfileImage.src = userData.profileImage;
                }
            } else {
                // User data not found, maybe new user.
                db.ref('users/' + user.uid).set({
                    email: user.email,
                    displayName: user.displayName || 'Anonymous',
                    profileImage: 'default-avatar.png'
                });
            }
        });
        setupLiveChatListeners();
    } else {
        // User is signed out.
        updateUI(null);
    }
});

// Live Chat functionality for admin
let currentAdminChatUserId = null;

function setupLiveChatListeners() {
    const adminChatUsersList = document.getElementById('adminChatUsersList');
    const adminMessagesContainer = document.getElementById('adminMessagesContainer');

    db.ref('chats').on('value', snapshot => {
        adminChatUsersList.innerHTML = '';
        snapshot.forEach(child => {
            const userId = child.key;
            const userData = child.val().meta;
            const userEmail = userData.email || 'Anonymous';
            const li = document.createElement('li');
            li.textContent = userEmail;
            if (userData.hasUnreadAdminMessage) {
                li.style.fontWeight = 'bold';
            }
            li.addEventListener('click', () => {
                currentAdminChatUserId = userId;
                // Highlight selected user
                document.querySelectorAll('#adminChatUsersList li').forEach(item => item.classList.remove('active'));
                li.classList.add('active');
                // Display messages for this user
                db.ref(`chats/${currentAdminChatUserId}/messages`).orderByChild('timestamp').on('value', snapshot => {
                    adminMessagesContainer.innerHTML = '';
                    snapshot.forEach(child => renderChatMessage(child.val().sender, child.val().text, child.val().timestamp, adminMessagesContainer));
                    adminMessagesContainer.scrollTop = adminMessagesContainer.scrollHeight;
                });
                // Mark messages as read by admin
                db.ref(`chats/${currentAdminChatUserId}/meta/hasUnreadAdminMessage`).set(false);
            });
            adminChatUsersList.appendChild(li);
        });
    });

    document.getElementById('adminChatInputForm').addEventListener('submit', e => {
        e.preventDefault();
        const text = document.getElementById('adminChatMessageInput').value.trim();
        if (!text || !currentAdminChatUserId) return;
        db.ref(`chats/${currentAdminChatUserId}/messages`).push({
            sender: 'admin',
            text,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        db.ref(`chats/${currentAdminChatUserId}/meta`).update({
            hasUnreadAdminMessage: false
        });
        document.getElementById('adminChatMessageInput').value = '';
    });
}

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
            await navigator.clipboard.writeText(shareData.url);
            alert('Link copy hua ab share karo');
            console.log('URL copied to clipboard');
        }
    } catch (err) {
        console.error('Error sharing:', err);
        try {
            await navigator.clipboard.writeText(shareData.url);
            alert('Link copy hua ab share karo');
            console.log('Error in sharing, but URL copied to clipboard');
        } catch (clipboardErr) {
            console.error('Failed to copy URL to clipboard:', clipboardErr);
            alert('Share nahi ho paya. Kripya link ko manually copy karein.');
        }
    }
});
updateUI(null);
