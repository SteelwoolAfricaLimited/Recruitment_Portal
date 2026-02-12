# Steelwool Africa Recruitment Portal PWA

A Progressive Web App for managing job applications at Steelwool Africa.

## Features

- 📱 **Progressive Web App** - Install on mobile and desktop
- 🔄 **Offline Support** - Works without internet connection
- 📋 **Multiple Positions** - 20+ job positions across departments
- 📧 **Email Notifications** - Automatic confirmation emails
- 💾 **Google Sheets Integration** - Applications stored in Google Sheets
- 🎨 **Modern UI** - Clean, responsive design

## Setup Instructions

### 1. Deploy Google Apps Script Backend

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Copy the code from your existing Google Apps Script
4. Click **Deploy** > **New deployment**
5. Select type: **Web app**
6. Set **Execute as**: Me
7. Set **Who has access**: Anyone
8. Click **Deploy**
9. Copy the web app URL

### 2. Configure the PWA

1. Open `config.js`
2. Replace `YOUR_DEPLOYMENT_ID` with your actual deployment URL:
   ```javascript
   API_URL: 'https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec'
   ```

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files from the `recruitment-pwa` folder
3. Go to repository Settings > Pages
4. Select branch: `main` (or `master`)
5. Select folder: `/ (root)`
6. Click Save
7. Your PWA will be live at: `https://yourusername.github.io/repository-name/`

#### Option B: Using Git Command Line

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/recruitment-pwa.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## File Structure

```
recruitment-pwa/
├── index.html           # Main landing page (position selector)
├── apply.html           # Application form page
├── styles.css           # All CSS styles
├── app.js               # Main app logic for position selector
├── apply-form.js        # Form submission logic
├── positions.js         # Position definitions
├── config.js            # Configuration (API URL)
├── sw.js                # Service worker for PWA
├── manifest.json        # PWA manifest
├── icon-192.png         # App icon 192x192
├── icon-512.png         # App icon 512x512
└── README.md            # This file
```

## Customization

### Adding New Positions

Edit `positions.js`:

```javascript
POSITIONS = {
  'new-position-key': {
    name: 'Position Name',
    department: 'DEPARTMENT_KEY',
    type: 'Full-time'
  }
}
```

### Styling

Edit `styles.css` to change colors, fonts, and layout.

### Form Fields

Edit `apply.html` to add/remove form fields.

## Testing Locally

1. Install [Python](https://www.python.org/downloads/) (if not installed)
2. Navigate to the project folder
3. Run local server:
   ```bash
   python -m http.server 8000
   ```
4. Open browser to `http://localhost:8000`

## Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**PWA not installing?**
- Ensure you're using HTTPS (GitHub Pages provides this)
- Check browser console for errors
- Verify manifest.json is accessible

**Form not submitting?**
- Check CONFIG.API_URL in config.js
- Verify Google Apps Script deployment is set to "Anyone"
- Check browser console for API errors

**Files not caching?**
- Clear browser cache
- Check service worker registration in DevTools
- Update CACHE_NAME in sw.js to force new cache

## Security Notes

- Never commit sensitive API keys to public repositories
- Use environment variables for production
- Validate all inputs on server side
- Implement rate limiting on backend

## License

Copyright © 2025 Steelwool Africa. All rights reserved.

## Support

For issues and questions, contact: hr@steelwoolafrica.com
