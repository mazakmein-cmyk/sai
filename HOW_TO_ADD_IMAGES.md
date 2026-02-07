# How to Add Images

## Hero section (main banner on the home page)

To use your own shrine/altar photo as the big background image on the home page:

1. Save your image as **`hero-shrine.jpg`** (or .png).
2. Put it in: **`public/images/`**
   - Full path: `public/images/hero-shrine.jpg`
3. Refresh the site. The hero will show your image. If the file is missing, the current temple image is used as fallback.

---

## Carousel images – Quick Steps:

1. **Locate your images** - Find the temple images you want to use on your computer

2. **Copy images to the project**:
   - Open Finder
   - Navigate to: `/Users/shivam.barnwal/Documents/account page/public/images/`
   - Drag and drop your images into this folder

3. **Rename images** (optional but recommended):
   - You can use any names, but for best results, name them:
     - `image1.jpg`, `image2.jpg`, `image3.jpg`, etc.
   - OR use the specific names listed in `public/images/README.md`

4. **Refresh your browser** - The carousel will automatically show your images!

## Alternative: Using Terminal

If you prefer using terminal:

```bash
# Navigate to your images folder
cd ~/Downloads  # or wherever your images are

# Copy images to the project
cp *.jpg "/Users/shivam.barnwal/Documents/account page/public/images/"
```

## Image Requirements:
- **Formats**: JPG, JPEG, PNG, or WebP
- **Size**: Any size (will be automatically optimized)
- **Naming**: Any name is fine, but keep them organized

## Need Help?
If you have images in a specific location, let me know the path and I can help you add them!
