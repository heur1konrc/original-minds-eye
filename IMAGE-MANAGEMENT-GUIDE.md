# HTML Version - Image Management Guide
## Mind's Eye Photography Website

### 🎯 Overview

This guide shows you how to add, remove, and manage images on your HTML version of the Mind's Eye Photography website.

## 📏 Image Requirements

### Optimal Dimensions
- **Best:** 1800x1200 pixels (3:2 aspect ratio)
- **Good:** 1500x1000 or 1200x800 pixels  
- **Minimum:** 900x600 pixels

### File Format
- **Preferred:** JPG (smaller file size)
- **Acceptable:** PNG (larger file size)
- **Maximum size:** 3MB per image

### Watermark Requirements
- **Text:** "© 2025 Mind's Eye Photography"
- **Position:** Lower left corner
- **Color:** White text
- **Opacity:** 20% (semi-transparent)
- **Font:** Any clean, readable font

## 🛠️ Adding New Images

### Step 1: Prepare Your Images

1. **Resize your image** to 1800x1200 pixels using any photo editor:
   - Photoshop: Image → Image Size
   - GIMP: Image → Scale Image  
   - Online tools: Canva, Photopea, or ResizeImage.net

2. **Add watermark** in lower left corner:
   - Text: "© 2025 Mind's Eye Photography"
   - White color, 20% opacity
   - Position about 20 pixels from left and bottom edges

3. **Save as JPG** with high quality (90-95%)

4. **Name your file** descriptively:
   - Good: `sunset-lake-wisconsin.jpg`
   - Bad: `IMG_1234.jpg`

### Step 2: Upload to SiteGround

1. **Log into SiteGround** control panel
2. **Go to File Manager** (or use FTP client)
3. **Navigate to:** `public_html/assets/`
4. **Upload your image** to the assets folder
5. **Note the exact filename** for the next step

### Step 3: Add to Website Code

1. **Open File Manager** in SiteGround
2. **Navigate to:** `public_html/`
3. **Edit:** `script.js` (NOT index.html)
4. **Find the portfolioData array** (around line 2-100)
5. **Add your image entry** following this format:

```javascript
{
    id: 'your-image-name',
    title: 'Your Image Title',
    description: 'Brief description of the image',
    image: 'assets/your-image-filename.jpg',
    category: 'wildlife' // or 'landscapes', 'portraits', 'events', 'nature'
}
```

**Example:**
```javascript
{
    id: 'sunset-lake',
    title: 'Sunset Over Lake',
    description: 'Golden hour reflection on Wisconsin lake',
    image: 'assets/sunset-lake-wisconsin.jpg',
    category: 'landscapes'
}
```

6. **Save the file**
7. **Test your website** - the new image should appear!

## 🗑️ Removing Images

### Step 1: Remove from Website Code
1. **Edit:** `public_html/script.js`
2. **Find the image entry** in the portfolioData array
3. **Delete the entire entry** (including the comma)
4. **Save the file**

### Step 2: Delete Image File
1. **Go to:** `public_html/assets/`
2. **Find your image file**
3. **Delete the file** to free up space

## 📝 Organizing by Category

Your website has these categories:
- **landscapes** - Nature and scenic photography
- **wildlife** - Animals and birds
- **portraits** - People photography  
- **events** - Weddings, celebrations
- **nature** - Flowers, macro, close-ups

When adding images, use the correct category to ensure they appear in the right filter section.

## 🔧 Troubleshooting

### Image Not Appearing?
- Check filename spelling in the code
- Ensure image is uploaded to `/assets/` folder
- Verify image file isn't corrupted
- Clear browser cache and refresh

### Image Too Large/Slow Loading?
- Resize to maximum 1800x1200 pixels
- Compress JPG to 90-95% quality
- Consider using online compression tools

### Wrong Aspect Ratio?
- Your website displays images in 3:2 format
- Images with different ratios will be cropped
- Always use 3:2 ratio (width 1.5x height) for best results

### JavaScript Errors?
- Check for missing commas between image entries
- Ensure all quotes are properly closed
- Validate JSON syntax if unsure

## 📞 Need Help?

For complex changes or technical issues, contact your developer with:
- SiteGround login credentials
- Description of what you want to change
- Any error messages you're seeing

**Remember: Edit script.js, not index.html, to manage your portfolio images!**

