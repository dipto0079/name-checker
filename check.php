<?php
header('Content-Type: application/json');

// Disable error reporting for cleaner JSON output in production
error_reporting(0);

if (!isset($_GET['url'])) {
    echo json_encode(['status' => 400, 'error' => 'Missing URL parameter']);
    exit;
}

$url = $_GET['url'];

// Initialize CURL
$ch = curl_init();

// Set options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_NOBODY, true); // We only need headers, not body
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Timeout after 5 seconds
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Follow redirects
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

// Exec
curl_exec($ch);

// Get HTTP Code
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

curl_close($ch);

if ($error) {
    echo json_encode(['status' => 500, 'error' => $error, 'url' => $url]);
    exit;
}

// Logic:
// 200 usually means profile exists (Taken)
// 404 usually means profile does not exist (Available)
// specific handling might be needed for some sites
echo json_encode([
    'status' => $httpCode,
    'url' => $url
]);
?>
