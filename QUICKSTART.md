# Quick Start Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Configure API (2 min)

1. Open `config.js`
2. Replace the API URL:
```javascript
API_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
```
3. Get your deployment ID from Google Apps Script (see DEPLOYMENT.md)

### Step 2: Create Icons (1 min)

Option A - **Quick SVG** (Current):
- SVG icons are already included
- They work but won't show on all devices

Option B - **Proper PNG** (Recommended):
1. Go to https://favicon.io/favicon-generator/
2. Text: "SA", Background: #2a5298
3. Download and extract
4. Rename files to `icon-192.png` and `icon-512.png`
5. Replace the SVG files

### Step 3: Deploy to GitHub (2 min)

1. Create new repository at https://github.com/new
2. Name it `recruitment-portal`
3. Make it **Public**
4. Upload all files
5. Go to Settings > Pages
6. Source: main branch, / (root)
7. Save

### Done! ✅

Your PWA is live at:
```
https://YOUR_USERNAME.github.io/recruitment-portal/
```

## Testing Locally

```bash
# If you have Python installed:
python -m http.server 8000

# Then open:
http://localhost:8000
```

## What You Get

✅ Progressive Web App
✅ Mobile installable
✅ Offline support
✅ Google Sheets integration
✅ Email notifications
✅ Responsive design
✅ 20+ job positions

## Next Steps

1. **Test** - Submit a test application
2. **Customize** - Edit positions in `positions.js`
3. **Share** - Send links to candidates
4. **Monitor** - Check Google Sheets for submissions

## Need Help?

- Read full `README.md`
- Check `DEPLOYMENT.md` for details
- See `CREATE_ICONS.md` for icon help

## File Checklist

Essential files:
- [x] index.html
- [x] apply.html
- [x] styles.css
- [x] app.js
- [x] apply-form.js
- [x] positions.js
- [x] config.js ⚠️ MUST EDIT!
- [x] sw.js
- [x] manifest.json
- [x] icon files

## Common Issues

**Problem:** Form not submitting
**Solution:** Check CONFIG.API_URL in config.js

**Problem:** PWA won't install
**Solution:** Must be on HTTPS (GitHub Pages auto-provides)

**Problem:** Icons not showing
**Solution:** Use PNG icons instead of SVG (see CREATE_ICONS.md)

---

**Ready to go?** Edit `config.js` then deploy! 🎉
