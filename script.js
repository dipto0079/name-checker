const networks = [
    // Social
    { name: 'Facebook', url: 'https://www.facebook.com/{}', icon: 'fa-brands fa-facebook', category: 'social' },
    { name: 'Instagram', url: 'https://www.instagram.com/{}/', icon: 'fa-brands fa-instagram', category: 'social' },
    { name: 'Twitter (X)', url: 'https://x.com/{}', icon: 'fa-brands fa-x-twitter', category: 'social' },
    { name: 'Threads', url: 'https://www.threads.net/@{}', icon: 'fa-brands fa-threads', category: 'social' },
    { name: 'Tumblr', url: 'https://{}.tumblr.com/', icon: 'fa-brands fa-tumblr', category: 'blogs' },
    { name: 'Reddit', url: 'https://www.reddit.com/user/{}/', icon: 'fa-brands fa-reddit', category: 'social' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/{}/', icon: 'fa-brands fa-pinterest', category: 'social' },
    { name: 'VK', url: 'https://vk.com/{}', icon: 'fa-brands fa-vk', category: 'social' },
    { name: 'Weibo', url: 'https://weibo.com/n/{}', icon: 'fa-brands fa-weibo', category: 'social' },
    { name: 'QQ', url: 'https://user.qzone.qq.com/{}', icon: 'fa-brands fa-qq', category: 'social' },
    { name: 'Clubhouse', url: 'https://www.clubhouse.com/@{}', icon: 'fa-regular fa-comments', category: 'social' },
    { name: 'Mixi', url: 'https://mixi.jp/show_friend.pl?id={}', icon: 'fa-solid fa-user-group', category: 'social' },
    { name: 'ShareChat', url: 'https://sharechat.com/profile/{}', icon: 'fa-solid fa-share-nodes', category: 'social' },
    { name: 'Koo', url: 'https://www.kooapp.com/profile/{}', icon: 'fa-solid fa-kiwi-bird', category: 'social' },

    // Video
    { name: 'YouTube', url: 'https://www.youtube.com/@{}', icon: 'fa-brands fa-youtube', category: 'video' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@{}', icon: 'fa-brands fa-tiktok', category: 'video' },
    { name: 'Twitch', url: 'https://www.twitch.tv/{}', icon: 'fa-brands fa-twitch', category: 'video' },
    { name: 'Vimeo', url: 'https://vimeo.com/{}', icon: 'fa-brands fa-vimeo', category: 'video' },
    { name: 'Douyin', url: 'https://www.douyin.com/user/{}', icon: 'fa-brands fa-tiktok', category: 'video' },

    // Messaging
    { name: 'WhatsApp', url: 'https://wa.me/{}', icon: 'fa-brands fa-whatsapp', category: 'messaging' },
    { name: 'Messenger', url: 'https://m.me/{}', icon: 'fa-brands fa-facebook-messenger', category: 'messaging' },
    { name: 'Telegram', url: 'https://t.me/{}', icon: 'fa-brands fa-telegram', category: 'messaging' },
    { name: 'Snapchat', url: 'https://www.snapchat.com/add/{}', icon: 'fa-brands fa-snapchat', category: 'messaging' },
    { name: 'Discord', url: 'https://discord.com/users/{}', icon: 'fa-brands fa-discord', category: 'messaging' },
    { name: 'LINE', url: 'https://line.me/ti/p/~{}', icon: 'fa-brands fa-line', category: 'messaging' },
    { name: 'Viber', url: 'https://viber.click/{}', icon: 'fa-brands fa-viber', category: 'messaging' },
    { name: 'WeChat', url: 'https://weixin.qq.com/r/{}', icon: 'fa-brands fa-weixin', category: 'messaging' },
    { name: 'KakaoTalk', url: 'https://open.kakao.com/me/{}', icon: 'fa-solid fa-comment', category: 'messaging' },
    { name: 'Signal', url: 'https://signal.me/#p/{}', icon: 'fa-brands fa-signal', category: 'messaging' },
    { name: 'Slack', url: 'https://{}.slack.com', icon: 'fa-brands fa-slack', category: 'messaging' },

    // Professional / Blogs / Others
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/{}/', icon: 'fa-brands fa-linkedin', category: 'professional' },
    { name: 'Medium', url: 'https://medium.com/@{}', icon: 'fa-brands fa-medium', category: 'blogs' },
    { name: 'Quora', url: 'https://www.quora.com/profile/{}', icon: 'fa-brands fa-quora', category: 'blogs' },
    { name: 'Github', url: 'https://github.com/{}', icon: 'fa-brands fa-github', category: 'professional' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/{}', icon: 'fa-brands fa-soundcloud', category: 'video' }, // Audio actually but similar
    { name: 'Spotify', url: 'https://open.spotify.com/user/{}', icon: 'fa-brands fa-spotify', category: 'video' },
    { name: 'KakaoStory', url: 'https://story.kakao.com/{}', icon: 'fa-solid fa-book-open', category: 'blogs' },
    { name: 'WordPress', url: 'https://{}.wordpress.com', icon: 'fa-brands fa-wordpress', category: 'blogs' },
    { name: 'Blogger', url: 'https://{}.blogspot.com', icon: 'fa-brands fa-blogger', category: 'blogs' },
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/User:{}', icon: 'fa-brands fa-wikipedia-w', category: 'blogs' },

    // Games
    { name: 'Steam', url: 'https://steamcommunity.com/id/{}', icon: 'fa-brands fa-steam', category: 'games' },
    { name: 'Roblox', url: 'https://www.roblox.com/user.aspx?username={}', icon: 'fa-solid fa-gamepad', category: 'games' } // Using legacy search URL that might redirect or 200
];

const usernameInput = document.getElementById('usernameInput');
const checkBtn = document.getElementById('checkBtn');
const resultsGrid = document.getElementById('resultsGrid');
const statusMsg = document.getElementById('statusMsg');

// New Control Elements
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const foundText = document.getElementById('foundText');
const copyBtn = document.getElementById('copyBtn');
const tabBtns = document.querySelectorAll('.tab-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeCategory = 'all';
let activeFilter = 'all'; // all, found, notfound
let resultsData = {}; // Store results: { NetworkName: { status: 'found'/'notfound', url: '...' } }
let totalChecks = 0;
let completedChecks = 0;
let foundCount = 0;

// Initialize
function initGrid() {
    resultsGrid.innerHTML = '';
    networks.forEach(net => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.category = net.category;
        card.dataset.name = net.name;
        // Default state
        card.dataset.result = 'pending';
        
        card.innerHTML = `
            <div class="icon-box">
                <i class="${net.icon}"></i>
            </div>
            <div class="card-info">
                <h3>${net.name}</h3>
                <span class="status waiting" id="status-${net.name.replace(/\s/g, '-')}">
                    <i class="fa-regular fa-clock"></i> Waiting
                </span>
            </div>
        `;
        resultsGrid.appendChild(card);
    });
    updateVisibility();
}

initGrid();

// Tabs Logic
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        updateVisibility();
    });
});

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        updateVisibility();
    });
});

function updateVisibility() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cat = card.dataset.category;
        const res = card.dataset.result; // pending, found, notfound

        let catMatch = (activeCategory === 'all' || cat === activeCategory);
        let filterMatch = true;

        if (activeFilter === 'found') {
            filterMatch = (res === 'found');
        } else if (activeFilter === 'notfound') {
            filterMatch = (res === 'notfound');
        }

        if (catMatch && filterMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Check Logic
checkBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (!username) {
        statusMsg.textContent = 'Please enter a username.';
        statusMsg.style.color = '#ef4444';
        return;
    }

    startSearch(username);
});

function startSearch(username) {
    statusMsg.textContent = `Searching for accounts with username "${username}"...`;
    statusMsg.style.color = '#94a3b8';
    
    // Reset Stats
    resultsData = {};
    totalChecks = networks.length;
    completedChecks = 0;
    foundCount = 0;
    updateProgress();
    
    // Reset Cards
    document.querySelectorAll('.card').forEach(c => c.dataset.result = 'pending');
    initGrid(); // Re-init to clear old statuses visually if needed, but easier to just reset contents
    
    // Actually we re-initialized grid to reset "Waiting" state text
    // Now trigger checks
    networks.forEach(net => {
        checkNetwork(net, username);
    });
}

async function checkNetwork(net, username) {
    const statusEl = document.getElementById(`status-${net.name.replace(/\s/g, '-')}`);
    const card = statusEl.closest('.card');
    
    // Set loading state
    statusEl.className = 'status checking';
    statusEl.innerHTML = '<div class="spinner"></div> Searching...';

    // Construct URL
    const targetUrl = net.url.replace('{}', username);
    const proxyUrl = `check.php?url=${encodeURIComponent(targetUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data.status === 200) {
            // Found
            statusEl.className = 'status available'; 
            statusEl.innerHTML = `<i class="fa-solid fa-check"></i> Found <a href="${targetUrl}" target="_blank" style="color: inherit; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
            card.dataset.result = 'found';
            foundCount++;
            resultsData[net.name] = targetUrl;
        } else {
            // Not Found (404 or others)
            statusEl.className = 'status error'; 
            statusEl.innerHTML = '<i class="fa-solid fa-xmark"></i> Not Found';
            card.dataset.result = 'notfound';
        }
    } catch (error) {
        statusEl.className = 'status error';
        statusEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error';
        card.dataset.result = 'notfound'; // Treat error as not found for filtering
    } finally {
        completedChecks++;
        updateProgress();
        updateVisibility(); // Update in case filters are active live
    }
}

function updateProgress() {
    const pct = Math.round((completedChecks / totalChecks) * 100);
    progressFill.style.width = `${pct}%`;
    progressText.textContent = `${completedChecks}/${totalChecks} Checked`;
    foundText.textContent = `${foundCount} Found`;

    if (completedChecks === totalChecks) {
        statusMsg.textContent = `Search complete. Found ${foundCount} profiles.`;
        statusMsg.style.color = '#22c55e';
    }
}

// Copy Logic
copyBtn.addEventListener('click', () => {
    const links = Object.values(resultsData).join('\n');
    if (!links) {
        alert('No profiles found to copy.');
        return;
    }
    navigator.clipboard.writeText(links).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
});
