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
            <p id="statusMsg" class="status-msg"></p>
        </div>

        <div class="results-grid" id="resultsGrid">
            <!-- Cards will be injected here by JS -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
