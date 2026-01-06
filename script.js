const networks = [
    { name: 'Facebook', url: 'https://www.facebook.com/{}', icon: 'fa-brands fa-facebook' },
    { name: 'YouTube', url: 'https://www.youtube.com/@{}', icon: 'fa-brands fa-youtube' },
    { name: 'Instagram', url: 'https://www.instagram.com/{}/', icon: 'fa-brands fa-instagram' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@{}', icon: 'fa-brands fa-tiktok' },
    { name: 'Twitter (X)', url: 'https://x.com/{}', icon: 'fa-brands fa-x-twitter' },
    { name: 'Pinterest', url: 'https://www.pinterest.com/{}/', icon: 'fa-brands fa-pinterest' },
    { name: 'Reddit', url: 'https://www.reddit.com/user/{}/', icon: 'fa-brands fa-reddit' },
    { name: 'Github', url: 'https://github.com/{}', icon: 'fa-brands fa-github' },
    { name: 'Twitch', url: 'https://www.twitch.tv/{}', icon: 'fa-brands fa-twitch' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/{}', icon: 'fa-brands fa-soundcloud' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/{}', icon: 'fa-brands fa-spotify' },
    { name: 'Medium', url: 'https://medium.com/@{}', icon: 'fa-brands fa-medium' },
    { name: 'Vimeo', url: 'https://vimeo.com/{}', icon: 'fa-brands fa-vimeo' },
    { name: 'Tumblr', url: 'https://{}.tumblr.com/', icon: 'fa-brands fa-tumblr' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/{}', icon: 'fa-brands fa-steam' },
    { name: 'Patreon', url: 'https://www.patreon.com/{}', icon: 'fa-brands fa-patreon' },
    { name: 'Bitbucket', url: 'https://bitbucket.org/{}/', icon: 'fa-brands fa-bitbucket' },
    { name: 'Dribbble', url: 'https://dribbble.com/{}', icon: 'fa-brands fa-dribbble' },
    { name: 'Behance', url: 'https://www.behance.net/{}', icon: 'fa-brands fa-behance' },
    { name: 'Flickr', url: 'https://www.flickr.com/people/{}/', icon: 'fa-brands fa-flickr' },
    { name: 'VK', url: 'https://vk.com/{}', icon: 'fa-brands fa-vk' },
    { name: 'Telegram', url: 'https://t.me/{}', icon: 'fa-brands fa-telegram' },
    { name: 'Slack', url: 'https://{}.slack.com', icon: 'fa-brands fa-slack' },
    { name: 'Dev.to', url: 'https://dev.to/{}', icon: 'fa-brands fa-dev' },
    { name: 'Gitlab', url: 'https://gitlab.com/{}', icon: 'fa-brands fa-gitlab' }
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
            // Treat others as potential hits or errors, but for "searching", maybe assume found if not 404?
            // Safer to be explicit. Let's keep specific 200 logic.
            statusEl.className = 'status taken'; 
            statusEl.innerHTML = '<i class="fa-solid fa-question"></i> Unknown';
        }

    } catch (error) {
        statusEl.className = 'status error';
        statusEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error';
    }
}
