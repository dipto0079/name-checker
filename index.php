<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Media Username Checker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
</head>
<body>

    <div class="background-globes">
        <div class="globe globe-1"></div>
        <div class="globe globe-2"></div>
        <div class="globe globe-3"></div>
    </div>

    <div class="container">
        <header>
            <h1><i class="fa-solid fa-at"></i> NameChecker</h1>
            <p>Check username availability across 25+ social networks instantly.</p>
        </header>

        <div class="search-section">
            <div class="input-group">
                <input type="text" id="usernameInput" placeholder="Enter username..." autocomplete="off">
                <button id="checkBtn">Check Availability <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div id="historyContainer" class="history-container">
                <!-- History Chips injected by JS -->
            </div>
            <p id="statusMsg" class="status-msg"></p>
        </div>

        <div class="controls-section">
            <!-- Progress & Stats -->
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <div class="progress-stats">
                    <span id="progressText">0/0 Checked</span>
                    <span id="foundText">0 Found</span>
                </div>
            </div>

            <!-- Category Tabs -->
            <div class="tabs-container">
                <button class="tab-btn active" data-category="all">All</button>
                <button class="tab-btn" data-category="social">Social</button>
                <button class="tab-btn" data-category="video">Video</button>
                <button class="tab-btn" data-category="messaging">Messaging</button>
                <button class="tab-btn" data-category="professional">Professional</button>
                <button class="tab-btn" data-category="games">Games</button>
                <button class="tab-btn" data-category="blogs">Blogs</button>
            </div>

            <!-- Action Filters -->
            <div class="actions-bar">
                <div class="filter-group">
                    <button class="filter-btn active" data-filter="all">Show All</button>
                    <button class="filter-btn" data-filter="found">Found Only</button>
                    <button class="filter-btn" data-filter="notfound">Not Found</button>
                </div>
                <button id="copyBtn" class="action-btn"><i class="fa-regular fa-copy"></i> Copy Links</button>
                <button id="openAllBtn" class="action-btn"><i class="fa-solid fa-up-right-from-square"></i> Open All</button>
                <button id="downloadBtn" class="action-btn"><i class="fa-solid fa-download"></i> Save Image</button>
            </div>
        </div>

        <div class="results-grid" id="resultsGrid">
            <!-- Cards will be injected here by JS -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
