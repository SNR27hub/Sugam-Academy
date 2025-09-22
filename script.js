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
const messaging = firebase.messaging();

// DOM Elements
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');
const loginRegisterBtn = document.getElementById('loginRegisterBtn'); 
const userAuthenticatedControls = document.querySelector('.user-authenticated-controls');
const authModal = document.getElementById('authModal'); 
const adminPanel = document.getElementById('adminPanel');
const adminLogout = document.getElementById('adminLogout');
const adminNavLinks = document.querySelectorAll('.admin-nav a');
const adminSections = document.querySelectorAll('.admin-section');

// Content & Playlist Elements
const videoContentGrid = document.getElementById('videoContentGrid');
const notesContentGrid = document.getElementById('notesContentGrid');
const quizContentGrid = document.getElementById('quizContentGrid');
const toolsContentGrid = document.getElementById('toolsContentGrid');
const categorySelector = document.getElementById('categorySelector');
const contentFormContainer = document.getElementById('contentFormContainer');
const contentForm = document.getElementById('contentForm');
const cancelContent = document.getElementById('cancelContent');
const adminContentTableBody = document.getElementById('adminContentTableBody');
const addContentBtn = document.getElementById('addContentBtn');
const contentPlaylistSelect = document.getElementById('contentPlaylist');

// Playlist Admin Elements
const addPlaylistBtn = document.getElementById('addPlaylistBtn');
const playlistFormContainer = document.getElementById('playlistFormContainer');
const playlistForm = document.getElementById('playlistForm');
const cancelPlaylist = document.getElementById('cancelPlaylist');
const playlistsTableBody = document.getElementById('playlistsTableBody');

// Settings & Titles
const generalSettingsForm = document.getElementById('generalSettingsForm');
const adminToolsSectionTitleInput = document.getElementById('adminToolsSectionTitle');
const adminResourcesSectionTitleInput = document.getElementById('adminResourcesSectionTitle');
const toolsSectionTitle = document.getElementById('toolsSectionTitle');
const resourcesSectionTitle = document.getElementById('resourcesSectionTitle');

// Other global variables
let currentUserView = '+2';
const VERIFIED_BADGE_IMG_URL = 'https://i.postimg.cc/02bVmN0y/badge.png';

// --- Preloader & Initialization ---
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('fade-out');
        mainContent.style.display = 'block';
    }, 500);
});

auth.onAuthStateChanged(user => {
    if (user) {
        db.ref('users/' + user.uid).on('value', snap => {
            const userData = snap.val();
            if (user.email === 'sugamacadamy@gmail.com') {
                showAdminPanel();
            } else {
                updateUI(userData);
                initializePushNotifications();
            }
        });
    } else {
        updateUI(null);
    }
});

// --- Push Notification Logic ---
function initializePushNotifications() {
    messaging.requestPermission().then(() => messaging.getToken())
    .then(token => {
        if (token && auth.currentUser) {
            db.ref(`users/${auth.currentUser.uid}/fcmToken`).set(token);
        }
    }).catch(err => console.error('Notification permission denied.', err));
}

messaging.onMessage((payload) => {
    // This can be enhanced to show an in-app toast notification
    console.log('Message received. ', payload);
});

// --- Helper Functions ---
function scrollToForm(formContainer) {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- Main UI Update Function ---
async function updateUI(userData) {
    adminPanel.style.display = 'none';
    mainContent.style.display = 'block'; // Ensure main content is visible for users

    if (userData && userData.name) {
        loginRegisterBtn.style.display = 'none';
        userAuthenticatedControls.style.display = 'flex';
        // Further UI updates for logged-in user...
        currentUserView = userData.currentView || '+2';
        categorySelector.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === currentUserView);
        });
        loadContent(true, userData.premium, userData.purchasedVideos || {}, userData.favorites || {}, currentUserView);
    } else {
        loginRegisterBtn.style.display = 'flex';
        userAuthenticatedControls.style.display = 'none';
        // Further UI updates for logged-out user...
        currentUserView = '+2';
        categorySelector.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === currentUserView);
        });
        loadContent(false, false, {}, {}, currentUserView);
    }
    
    // Load content visible to all users
    loadTools();
    await loadSectionTitles();
    // Load other shared components...
}

async function showAdminPanel() {
    mainContent.style.display = 'none';
    adminPanel.style.display = 'block';
    // Load all admin data
    loadAdminPlaylists();
    loadAdminContent();
    loadAdminTools();
    await loadAdminSettings();
    // Load other admin sections...
}


// --- Section Title Management ---
async function loadSectionTitles() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    toolsSectionTitle.textContent = settings.toolsSectionTitle || 'Student Tools';
    resourcesSectionTitle.textContent = settings.resourcesSectionTitle || 'Learning Resources';
}

async function loadAdminSettings() {
    const settings = (await db.ref('settings').once('value')).val() || {};
    adminToolsSectionTitleInput.value = settings.toolsSectionTitle || '';
    adminResourcesSectionTitleInput.value = settings.resourcesSectionTitle || '';
    // Load other settings...
}

generalSettingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const settingsData = {
        toolsSectionTitle: adminToolsSectionTitleInput.value.trim() || 'Student Tools',
        resourcesSectionTitle: adminResourcesSectionTitleInput.value.trim() || 'Learning Resources',
        // other settings...
    };
    await db.ref('settings').update(settingsData);
    alert('Settings saved!');
    loadSectionTitles(); // Refresh titles on the main page if visible
});


// --- Playlist Management (Admin & Frontend) ---
function loadAdminPlaylists() {
    db.ref('playlists').on('value', snapshot => {
        playlistsTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const playlist = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${playlist.title}</td>
                <td>${playlist.category}</td>
                <td>
                    <button class="btn btn-primary" onclick="editPlaylist('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deletePlaylist('${child.key}')">Delete</button>
                </td>
            `;
            playlistsTableBody.appendChild(row);
        });
    });
}

addPlaylistBtn.addEventListener('click', () => {
    playlistForm.reset();
    playlistForm.dataset.editId = '';
    scrollToForm(playlistFormContainer);
});
cancelPlaylist.addEventListener('click', () => playlistFormContainer.style.display = 'none');

playlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('playlistTitle').value.trim();
    const category = document.getElementById('playlistCategory').value;
    if (!title || !category) return alert('Title and Category are required.');

    const data = {
        title,
        category,
        description: document.getElementById('playlistDescription').value.trim() || null
    };

    const editId = playlistForm.dataset.editId;
    const ref = editId ? db.ref('playlists/' + editId) : db.ref('playlists').push();
    ref.set(data).then(() => {
        alert(`Playlist ${editId ? 'updated' : 'added'}!`);
        playlistFormContainer.style.display = 'none';
    });
});

function editPlaylist(id) {
    db.ref('playlists/' + id).once('value').then(snap => {
        const p = snap.val();
        document.getElementById('playlistTitle').value = p.title || '';
        document.getElementById('playlistCategory').value = p.category || '+2';
        document.getElementById('playlistDescription').value = p.description || '';
        playlistForm.dataset.editId = id;
        scrollToForm(playlistFormContainer);
    });
}

function deletePlaylist(id) {
    if (confirm('Are you sure? Deleting a playlist will NOT delete its content, but the content will become orphaned.')) {
        db.ref('playlists/' + id).remove().then(() => alert('Playlist deleted!'));
    }
}


// --- Content Management (Admin & Frontend) ---
async function populatePlaylistDropdown() {
    contentPlaylistSelect.innerHTML = '<option value="">Select a Playlist</option>';
    const snapshot = await db.ref('playlists').once('value');
    if (snapshot.exists()) {
        snapshot.forEach(child => {
            const playlist = child.val();
            const option = document.createElement('option');
            option.value = child.key;
            option.textContent = `${playlist.title} (${playlist.category})`;
            contentPlaylistSelect.appendChild(option);
        });
    }
}

addContentBtn.addEventListener('click', () => {
    contentForm.reset();
    contentForm.dataset.editId = '';
    populatePlaylistDropdown();
    scrollToForm(contentFormContainer);
});
cancelContent.addEventListener('click', () => contentFormContainer.style.display = 'none');

contentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const playlistId = contentPlaylistSelect.value;
    const title = document.getElementById('contentTitle').value.trim();
    // ... get other form values ...
    if (!playlistId || !title) return alert('Playlist and Title are required.');

    const data = {
        playlistId,
        title,
        type: document.getElementById('contentType').value,
        thumbnailUrl: document.getElementById('contentThumbnailUrl').value.trim() || null,
        url: document.getElementById('contentUrl').value.trim() || null,
        access: document.getElementById('contentAccess').value,
        price: parseFloat(document.getElementById('contentPrice').value) || null,
        // Quiz data if applicable...
    };

    const editId = contentForm.dataset.editId;
    const ref = editId ? db.ref('content/' + editId) : db.ref('content').push();
    ref.set(data).then(() => {
        alert(`Content ${editId ? 'updated' : 'added'}!`);
        contentFormContainer.style.display = 'none';
    });
});

function loadAdminContent() {
    db.ref('content').on('value', async snapshot => {
        adminContentTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        
        const playlistsSnap = await db.ref('playlists').once('value');
        const playlists = playlistsSnap.val() || {};

        snapshot.forEach(child => {
            const content = child.val();
            const playlistTitle = playlists[content.playlistId]?.title || 'N/A (Orphaned)';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${content.title}</td>
                <td>${playlistTitle}</td>
                <td>${content.type}</td>
                <td>${content.access}</td>
                <td><button class="btn btn-primary" onclick="editContent('${child.key}')">Edit</button>...</td>
            `;
            adminContentTableBody.appendChild(row);
        });
    });
}

async function editContent(id) {
    await populatePlaylistDropdown();
    db.ref('content/' + id).once('value').then(snap => {
        const content = snap.val();
        contentPlaylistSelect.value = content.playlistId || '';
        document.getElementById('contentTitle').value = content.title || '';
        // ... set other form values ...
        contentForm.dataset.editId = id;
        scrollToForm(contentFormContainer);
    });
}

async function loadContent(isLoggedIn, isPremium, purchased, favorites, category) {
    document.getElementById('content').style.display = 'block'; // Show the section
    const playlistsSnap = await db.ref('playlists').orderByChild('category').equalTo(category).once('value');
    const contentSnap = await db.ref('content').once('value');
    
    const playlists = playlistsSnap.val() || {};
    const allContent = contentSnap.val() || {};
    
    videoContentGrid.innerHTML = '';
    notesContentGrid.innerHTML = '';
    quizContentGrid.innerHTML = '';

    if (Object.keys(playlists).length === 0) {
        videoContentGrid.innerHTML = `<p class="text-center">No playlists found for ${category}.</p>`;
        return;
    }

    for (const playlistId in playlists) {
        const playlist = playlists[playlistId];
        
        const playlistContainer = document.createElement('div');
        playlistContainer.className = 'playlist-container';
        playlistContainer.innerHTML = `
            <div class="playlist-header">
                <h3>${playlist.title}</h3>
                ${playlist.description ? `<p>${playlist.description}</p>` : ''}
            </div>
            <div class="content-grid" id="grid-${playlistId}-videos"></div>
            <div class="content-grid" id="grid-${playlistId}-notes"></div>
            <div class="content-grid" id="grid-${playlistId}-quizzes"></div>
        `;

        videoContentGrid.appendChild(playlistContainer.cloneNode(true));
        notesContentGrid.appendChild(playlistContainer.cloneNode(true));
        quizContentGrid.appendChild(playlistContainer.cloneNode(true));
    }
    
    for (const contentId in allContent) {
        const content = allContent[contentId];
        if (playlists[content.playlistId]) { // Check if content belongs to a valid playlist in the current category
            const card = createContentCard(content, contentId, isLoggedIn, isPremium, purchased, favorites);
            const targetGridId = `grid-${content.playlistId}-${content.type}s`;
            const targetGrid = document.getElementById(targetGridId);
            if (targetGrid) {
                targetGrid.appendChild(card);
            }
        }
    }
}

function createContentCard(content, contentId, isLoggedIn, isPremium, purchased, favorites) {
    const card = document.createElement('div');
    card.className = 'content-card';
    
    const thumbHtml = content.thumbnailUrl 
        ? `<img src="${content.thumbnailUrl}" alt="${content.title}" loading="lazy">` 
        : `<i class="fas fa-play-circle"></i>`; // Fallback icon

    let actionButtonHtml = ''; // Logic to create action buttons based on access
    // ... This logic remains the same as before

    card.innerHTML = `
        <div class="content-thumb">${thumbHtml}</div>
        <div class="content-info">
            <h3>${content.title}</h3>
            ${actionButtonHtml}
        </div>
    `;
    return card;
}


// --- Student Tools Management (Admin & Frontend) ---
function loadTools() {
    db.ref('tools').on('value', snapshot => {
        toolsContentGrid.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val();
            const card = document.createElement('div');
            card.className = 'content-card';
            const thumbHtml = item.imageUrl 
                ? `<img src="${item.imageUrl}" alt="${item.title}" loading="lazy">` 
                : `<i class="fas fa-link"></i>`;
            card.innerHTML = `
                <div class="content-thumb">${thumbHtml}</div>
                <div class="content-info">
                    <h3>${item.title}</h3>
                    <p>${item.description || 'Click to open this tool.'}</p>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">Open Tool</a>
                </div>`;
            toolsContentGrid.appendChild(card);
        });
    });
}

function loadAdminTools() {
    db.ref('tools').on('value', snapshot => {
        const toolsTableBody = document.getElementById('toolsTableBody');
        toolsTableBody.innerHTML = '';
        if (!snapshot.exists()) return;
        snapshot.forEach(child => {
            const item = child.val();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.title}</td>
                <td>${item.imageUrl ? `<img src="${item.imageUrl}" style="width: 50px;">` : 'None'}</td>
                <td><a href="${item.url}" target="_blank">View</a></td>
                <td>
                    <button class="btn btn-primary" onclick="editTool('${child.key}')">Edit</button>
                    <button class="btn btn-outline" onclick="deleteTool('${child.key}')">Delete</button>
                </td>
            `;
            toolsTableBody.appendChild(row);
        });
    });
}
// Add/Edit/Delete functions for tools are the same as before

// All other functions (login, banners, teachers, chat, etc.) remain the same...
// Make sure to copy them from the previous version if they are missing here.
