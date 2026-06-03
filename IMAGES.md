# Portfolio Assets & Images Guide

## 📸 Using Images in Your Portfolio

### Profile Picture

**Location**: `About` section  
**Current URL**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop`

**Change it to your photo**:
```javascript
// src/pages/About.jsx
<motion.img
  src="YOUR_IMAGE_URL" // <-- Replace this
  alt="Profile"
  className="..."
/>
```

### Project Images

**Location**: `src/utils/constants.js` → `projectsData`

**Update each project**:
```javascript
{
  id: 1,
  title: 'Your Project',
  image: 'YOUR_IMAGE_URL', // <-- Replace here
  // ... other properties
}
```

### Creative Work Thumbnails

**Location**: `src/utils/constants.js` → `creativeWorks`

**Update thumbnails**:
```javascript
{
  id: 1,
  title: 'Your Work',
  thumbnail: 'YOUR_IMAGE_URL', // <-- Replace here
  // ... other properties
}
```

---

## 🖼️ Recommended Image Sources

### Free Image Services
- **Unsplash**: [unsplash.com](https://unsplash.com) - Free high-quality photos
- **Pexels**: [pexels.com](https://pexels.com) - Royalty-free images
- **Pixabay**: [pixabay.com](https://pixabay.com) - Free images & vectors
- **Freepik**: [freepik.com](https://freepik.com) - Free & premium resources

### Paid Services
- **Shutterstock**: [shutterstock.com](https://shutterstock.com)
- **Getty Images**: [gettyimages.com](https://gettyimages.com)
- **Adobe Stock**: [stock.adobe.com](https://stock.adobe.com)

---

## 📁 Local Image Storage

### Option 1: Store Images in Project

1. **Create folders**:
```
public/
├── images/
│   ├── profile.jpg
│   ├── projects/
│   │   ├── project1.jpg
│   │   └── project2.jpg
│   └── creative/
│       ├── video1.jpg
│       └── video2.jpg
```

2. **Use in code**:
```javascript
// Reference as root path
<img src="/images/profile.jpg" alt="Profile" />
```

### Option 2: CDN (Recommended for Large Projects)

Use a CDN service:
- **Cloudinary**: [cloudinary.com](https://cloudinary.com)
- **AWS S3**: [aws.amazon.com/s3](https://aws.amazon.com/s3)
- **Firebase Storage**: [firebase.google.com](https://firebase.google.com)

---

## 🎨 Image Optimization

### Before Using Images

1. **Resize to appropriate dimensions**:
   - Profile: 500x500px minimum
   - Project cards: 800x600px minimum
   - Thumbnails: 400x300px minimum

2. **Optimize file size**:
   - Use tools like:
     - [TinyPNG](https://tinypng.com) - Compress PNG/JPG
     - [ImageOptim](https://imageoptim.com) - Mac optimization
     - [Squoosh](https://squoosh.app) - Online optimizer

3. **Choose correct format**:
   - **JPEG**: Photography, complex images
   - **PNG**: Graphics, transparent backgrounds
   - **WebP**: Modern format, smaller file size
   - **SVG**: Icons, logos, vectors

### Image Quality vs Performance

```
Original: 2MB → Optimized: 200KB
```

This significantly improves page load speed!

---

## 🔗 Direct Image URLs

### Using Unsplash URLs

Copy and paste direct URLs:

```
https://images.unsplash.com/photo-XXXXXXXXXX?w=500&h=500&fit=crop
```

**Parameters**:
- `w=500` - Width
- `h=500` - Height
- `fit=crop` - Crop mode

### Example Images (Ready to Use)

**Profile Pictures**:
```
https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop
https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop
```

**Tech/Code Projects**:
```
https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop
```

**Design/Creative**:
```
https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop
```

---

## ✅ Checklist

- [ ] Replace profile image URL
- [ ] Update all project images
- [ ] Add creative work thumbnails
- [ ] Optimize all images for size
- [ ] Test loading speed
- [ ] Verify images display correctly on mobile

---

## 🐛 Image Not Showing?

**Common Issues**:

1. **Wrong URL format**
   - Ensure URL is valid (try opening in browser)
   - Check for typos

2. **Cross-Origin Issues**
   - Use CORS-enabled image services
   - Unsplash, Pexels, Pixabay all support this

3. **Image Too Large**
   - Optimize image size
   - Use image optimization tools

4. **Local File Issues**
   - Place files in `public` folder
   - Use path starting with `/` (e.g., `/images/photo.jpg`)

---

## 💡 Tips

- Use high-quality, relevant images
- Maintain consistent aspect ratios
- Consider your brand colors
- Test on mobile devices
- Use descriptive alt text
- Cache images for faster loading

Happy customizing! 🎨
