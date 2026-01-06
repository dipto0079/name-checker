const networks = [
    { name: 'Facebook', url: 'https://www.facebook.com/{}', icon: 'fa-brands fa-facebook' },
    { name: 'YouTube', url: 'https://www.youtube.com/@{}', icon: 'fa-brands fa-youtube' },
    { name: 'Instagram', url: 'https://www.instagram.com/{}/', icon: 'fa-brands fa-instagram' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@{}', icon: 'fa-brands fa-tiktok' },
    { name: 'Twitter (X)', url: 'https://x.com/{}', icon: 'fa-brands fa-x-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/{}/', icon: 'fa-brands fa-linkedin' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/{}/', icon: 'fa-brands fa-pinterest' },
    { name: 'Reddit', url: 'https://www.reddit.com/user/{}/', icon: 'fa-brands fa-reddit' },
    { name: 'Snapchat', url: 'https://www.snapchat.com/add/{}', icon: 'fa-brands fa-snapchat' },
    { name: 'Threads', url: 'https://www.threads.net/@{}', icon: 'fa-brands fa-threads' },
    { name: 'Tumblr', url: 'https://{}.tumblr.com/', icon: 'fa-brands fa-tumblr' },
    { name: 'Twitch', url: 'https://www.twitch.tv/{}', icon: 'fa-brands fa-twitch' },
    { name: 'Discord', url: 'https://discord.com/users/{}', icon: 'fa-brands fa-discord' }, // ID based mainly, but included
    { name: 'WhatsApp', url: 'https://wa.me/{}', icon: 'fa-brands fa-whatsapp' }, // Phone based
    { name: 'Messenger', url: 'https://m.me/{}', icon: 'fa-brands fa-facebook-messenger' },
    { name: 'Telegram', url: 'https://t.me/{}', icon: 'fa-brands fa-telegram' },
    { name: 'Quora', url: 'https://www.quora.com/profile/{}', icon: 'fa-brands fa-quora' },
    { name: 'Medium', url: 'https://medium.com/@{}', icon: 'fa-brands fa-medium' },
    { name: 'WeChat', url: 'https://weixin.qq.com/r/{}', icon: 'fa-brands fa-weixin' }, // Hard to check
    { name: 'LINE', url: 'https://line.me/ti/p/~{}', icon: 'fa-brands fa-line' },
    { name: 'Viber', url: 'https://viber.click/{}', icon: 'fa-brands fa-viber' }, // Phone based
    { name: 'VK', url: 'https://vk.com/{}', icon: 'fa-brands fa-vk' },
    { name: 'Weibo', url: 'https://weibo.com/n/{}', icon: 'fa-brands fa-weibo' },
    { name: 'QQ', url: 'https://user.qzone.qq.com/{}', icon: 'fa-brands fa-qq' },
    { name: 'Clubhouse', url: 'https://www.clubhouse.com/@{}', icon: 'fa-regular fa-comments' }, // No brand icon yet in some sets? Using generic or check if exists.
    { name: 'Douyin', url: 'https://www.douyin.com/user/{}', icon: 'fa-brands fa-tiktok' }, // Same icon as tiktok?
    { name: 'KakaoTalk', url: 'https://open.kakao.com/me/{}', icon: 'fa-solid fa-comment' }, // Custom icon
    { name: 'KakaoStory', url: 'https://story.kakao.com/{}', icon: 'fa-solid fa-book-open' },
    { name: 'Mixi', url: 'https://mixi.jp/show_friend.pl?id={}', icon: 'fa-solid fa-user-group' },
    { name: 'ShareChat', url: 'https://sharechat.com/profile/{}', icon: 'fa-solid fa-share-nodes' },
    { name: 'Koo', url: 'https://www.kooapp.com/profile/{}', icon: 'fa-solid fa-kiwi-bird' }, // KOO icon?
    { name: 'Github', url: 'https://github.com/{}', icon: 'fa-brands fa-github' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/{}', icon: 'fa-brands fa-soundcloud' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/{}', icon: 'fa-brands fa-spotify' },
    { name: 'Vimeo', url: 'https://vimeo.com/{}', icon: 'fa-brands fa-vimeo' }
];

const usernameInput = document.getElementById('usernameInput');
const checkBtn = document.getElementById('checkBtn');
const resultsGrid = document.getElementById('resultsGrid');
const statusMsg = document.getElementById('statusMsg');

// Initialize Cards
function initGrid() {
    resultsGrid.innerHTML = '';
    networks.forEach(net => {
        const card = document.createElement('div');
        card.className = 'card';
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
}

initGrid();

checkBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (!username) {
        statusMsg.textContent = 'Please enter a username.';
        statusMsg.style.color = '#ef4444';
        return;
    }

    statusMsg.textContent = `Searching for accounts with username "${username}"...`;
    statusMsg.style.color = '#94a3b8';

    networks.forEach(net => {
        checkNetwork(net, username);
    });
});

async function checkNetwork(net, username) {
    const statusEl = document.getElementById(`status-${net.name.replace(/\s/g, '-')}`);
    
    // Set loading state
    statusEl.className = 'status checking';
    statusEl.innerHTML = '<div class="spinner"></div> Searching...';

    // Construct URL
    const targetUrl = net.url.replace('{}', username);
    const proxyUrl = `check.php?url=${encodeURIComponent(targetUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data.status === 404) {
            // 404 means user doesn't exist => Not Found
            statusEl.className = 'status error'; // Red or gray to indicate "No account here"
            statusEl.innerHTML = '<i class="fa-solid fa-xmark"></i> Not Found';
        } else if (data.status === 200) {
            // 200 means user exists => Account Found
            statusEl.className = 'status available'; // Green to indicate "Yes, found!"
            statusEl.innerHTML = `<i class="fa-solid fa-check"></i> Account Found <a href="${targetUrl}" target="_blank" style="color: inherit; margin-left: 5px;"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
        } else {
            statusEl.className = 'status taken'; 
            statusEl.innerHTML = '<i class="fa-solid fa-question"></i> Unknown';
        }

    } catch (error) {
        statusEl.className = 'status error';
        statusEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error';
    }
}
