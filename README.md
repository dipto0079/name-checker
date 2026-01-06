# Social Media Username Checker

A premium, aesthetically pleasing web application that allows users to instantly search for existing social media accounts across 25+ networks using a specific username.

![Project Preview](https://via.placeholder.com/800x400?text=Social+Media+Checker+Preview) 
*(You can replace this link with a screenshot of your actual app)*

## 🚀 Features

- **25+ Social Networks Supported**: Checks Facebook, X (Twitter), Instagram, TikTok, GitHub, LinkedIn, and many more.
- **Instant Search**: Asynchronously checks availability using AJAX.
- **Premium UI**: Modern "Glassmorphism" design with animated backgrounds and smooth transitions.
- **Direct Access**: Successfully found accounts link directly to the profile page.
- **Responsive**: Works perfectly on desktop and mobile devices.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Custom Variables & Animations), JavaScript (ES6+).
- **Backend**: PHP (Simple Proxy Script to bypass CORS headers).
- **Icons**: FontAwesome 6.

## 📦 Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone git@github.com:dipto0079/name-checker.git
   ```

2. **Serve the project**:
   - This project requires a PHP server because of the `check.php` proxy.
   - You can use Apache (XAMPP/WAMP/MAMP) or the built-in PHP server.
   
   **Using PHP Built-in Server**:
   ```bash
   cd name-checker
   php -S localhost:8000
   ```

3. **Open in Browser**:
   - Navigate to `http://localhost:8000`

## 📂 File Structure

```
/
├── index.php      # Main application interface
├── style.css      # Core styles and animations
├── script.js      # Frontend logic and network definitions
├── check.php      # Backend proxy for URL status checking
└── README.md      # Project documentation
```

## 📝 Configuration

To add more social networks, check `script.js` and add a new object to the `networks` array:

```javascript
{ 
    name: 'NewNetwork', 
    url: 'https://newnetwork.com/{}', // {} is the username placeholder
    icon: 'fa-brands fa-icon-name' 
}
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is open-source and free to use.
