# How to Create App Icons

## Online Icon Generators (Easiest)

### Option 1: Favicon.io
1. Go to https://favicon.io/favicon-generator/
2. Design your icon with text "SA" or company logo
3. Choose colors (background: #2a5298, text: white)
4. Download package
5. Extract `android-chrome-192x192.png` → rename to `icon-192.png`
6. Extract `android-chrome-512x512.png` → rename to `icon-512.png`

### Option 2: RealFaviconGenerator
1. Go to https://realfavicongenerator.net/
2. Upload company logo or create text icon
3. Generate icons
4. Download and extract the needed sizes

## Using Image Editing Software

### Photoshop/GIMP:
1. Create new image: 512x512px
2. Background: #2a5298 (brand blue)
3. Add text "S" or "SA" in white
4. Or add company logo
5. Save as PNG
6. Create 192x192 version by resizing

### Simple SVG Icon (for developers):

Create `icon.svg`:
```svg
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#2a5298"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
        fill="white" font-size="280" font-family="Arial, sans-serif" 
        font-weight="bold">S</text>
</svg>
```

Then convert to PNG using:
- Online: https://svgtopng.com/
- Command line: `convert icon.svg -resize 192x192 icon-192.png`

## Placeholder Icons (Temporary)

For testing, you can use data URIs in manifest.json:

```json
"icons": [
  {
    "src": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='192' height='192'><rect width='192' height='192' fill='%232a5298'/><text x='96' y='96' text-anchor='middle' dy='.3em' fill='white' font-size='100' font-weight='bold'>S</text></svg>",
    "sizes": "192x192",
    "type": "image/svg+xml"
  }
]
```

## Requirements

- **icon-192.png**: 192x192 pixels, PNG format
- **icon-512.png**: 512x512 pixels, PNG format  
- Should be square
- Should work on any background color
- File size: < 100KB each

## Quick Command Line (if ImageMagick installed)

```bash
# Create 512x512 icon
convert -size 512x512 xc:"#2a5298" \
  -gravity center -pointsize 280 -fill white -font Arial-Bold \
  -annotate +0+0 "S" icon-512.png

# Create 192x192 icon
convert icon-512.png -resize 192x192 icon-192.png
```
