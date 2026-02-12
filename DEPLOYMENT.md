# Deployment Guide

## Quick Deploy to GitHub Pages

### Step 1: Prepare Your Files

1. Download all files from the `recruitment-pwa` folder
2. Update `config.js` with your Google Apps Script URL

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `recruitment-portal` (or your choice)
3. Description: "Steelwool Africa Recruitment Portal"
4. **Keep it Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 3: Upload Files

**Via Web Interface:**
1. Click "uploading an existing file"
2. Drag all files into the browser
3. Commit changes

**Via Git:**
```bash
cd recruitment-pwa
git init
git add .
git commit -m "Initial deployment"
git remote add origin https://github.com/YOUR_USERNAME/recruitment-portal.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Source: Deploy from a branch
4. Branch: `main` / `(root)`
5. Click Save

### Step 5: Access Your PWA

Your site will be live at:
```
https://YOUR_USERNAME.github.io/recruitment-portal/
```

## Google Apps Script Setup

### 1. Create Apps Script Project

1. Go to https://script.google.com
2. New Project
3. Paste your recruitment script code
4. Save project

### 2. Deploy as Web App

1. Click Deploy > New deployment
2. Type: Web app
3. Description: "Recruitment Portal API"
4. Execute as: Me
5. Who has access: Anyone
6. Deploy

### 3. Get Deployment URL

Copy the URL that looks like:
```
https://script.google.com/macros/s/AKfycbx.../exec
```

### 4. Update PWA Config

In `config.js`:
```javascript
const CONFIG = {
  API_URL: 'YOUR_DEPLOYMENT_URL_HERE',
  // ...
};
```

### 5. Test Connection

1. Open browser DevTools (F12)
2. Submit a test application
3. Check Console for errors
4. Verify data in Google Sheets

## Alternative Deployments

### Netlify

1. Sign up at https://netlify.com
2. Drag folder into Netlify Drop
3. Site will be deployed instantly
4. Custom domain available

### Vercel

```bash
npm install -g vercel
cd recruitment-pwa
vercel
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Custom Domain Setup

### GitHub Pages Custom Domain

1. Buy domain (e.g., apply.steelwoolafrica.com)
2. In repository Settings > Pages
3. Add custom domain
4. Update DNS records:
   ```
   Type: CNAME
   Name: apply
   Value: YOUR_USERNAME.github.io
   ```

### SSL Certificate

GitHub Pages provides free SSL automatically for custom domains.

## Monitoring and Analytics

### Add Google Analytics

In `index.html` and `apply.html`, add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Updating the PWA

### Update Content

1. Edit files locally
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```

### Force Cache Update

In `sw.js`, increment version:
```javascript
const CACHE_NAME = 'steelwool-recruitment-v2'; // was v1
```

## Troubleshooting

### Issue: PWA won't install
**Solution:** Ensure you're on HTTPS and manifest.json is valid

### Issue: Form submissions failing
**Solution:** Check CONFIG.API_URL and Apps Script deployment permissions

### Issue: Icons not showing
**Solution:** Verify icon files exist and paths in manifest.json are correct

### Issue: Changes not appearing
**Solution:** Clear browser cache or update CACHE_NAME in sw.js

## Security Checklist

- [ ] Google Apps Script deployed with correct permissions
- [ ] No sensitive data in config.js
- [ ] HTTPS enabled (automatic with GitHub Pages)
- [ ] Rate limiting configured on backend
- [ ] Form validation on both client and server
- [ ] File upload size limits enforced

## Performance Optimization

1. **Compress Images:** Use tools like TinyPNG for icons
2. **Minify Code:** Use tools like UglifyJS for production
3. **Enable Caching:** Service worker already implements this
4. **CDN:** GitHub Pages already uses CDN

## Support

Questions? Email: techsupport@steelwoolafrica.com
