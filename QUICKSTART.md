# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ (Download from [nodejs.org](https://nodejs.org))
- npm (comes with Node.js)
- Git (optional, for version control)

### Installation & Setup

1. **Navigate to project directory**:
```bash
cd Portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
Browser should automatically open at `http://localhost:3000`

---

## ✏️ Customizing Your Portfolio

### 1. Update Personal Information

**File**: `src/utils/constants.js`

Update these sections:
```javascript
// Skills
export const skillsData = { ... }

// Projects
export const projectsData = [ ... ]

// Achievements
export const achievementsData = [ ... ]

// Social Links
export const socialLinks = { ... }
```

### 2. Update Hero Section

**File**: `src/pages/Hero.jsx`

- Change "Your Name" to your actual name
- Update email and social links
- Modify the typing title text

### 3. Add Your Images

Replace placeholder image URLs:
- Profile picture URL in `About.jsx`
- Project images in `projectsData`
- Creative work thumbnails

### 4. Setup Contact Form

To enable email:

1. **Sign up for EmailJS**:
   - Visit [emailjs.com](https://www.emailjs.com)
   - Create account and get API key

2. **Update environment variables**:
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Add your EmailJS credentials
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. **Enable EmailJS in Contact.jsx**:
```javascript
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

### 5. Setup GitHub Projects

Update your GitHub username in `src/pages/GitHubProjects.jsx`:

```javascript
const { repos, loading, error } = useGitHubRepos('YOUR_GITHUB_USERNAME');
```

---

## 🎨 Color Customization

**File**: `tailwind.config.js`

Main colors:
```javascript
colors: {
  neon: {
    blue: '#0ea5e9',     // Change this
    cyan: '#06b6d4',     // Change this
    purple: '#9333ea',   // Change this
  },
  dark: {
    bg: '#0f172a',       // Background
    card: '#1e293b',     // Card background
  }
}
```

---

## 📱 Testing Responsive Design

1. **In VS Code/Browser DevTools**:
   - Press `F12` to open DevTools
   - Click device toggle (mobile phone icon)
   - Test on different screen sizes

2. **Device sizes to test**:
   - Mobile: 375px width
   - Tablet: 768px width
   - Desktop: 1024px+ width

---

## 🐛 Common Issues & Solutions

### Port Already in Use

```bash
npm run dev -- --port 3001
```

### Dependencies Conflict

```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Updating

```bash
# Clear Tailwind cache
npm run build
npm run dev
```

### Images Not Loading

- Use absolute URLs from image hosting services
- Or place images in `public` folder and reference with `/filename`

---

## 📦 Build for Production

```bash
npm run build
```

This creates optimized files in `dist` folder.

To preview locally:
```bash
npm run preview
```

---

## 🚀 Deploy to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Visit [vercel.com](https://vercel.com)**
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click Deploy

3. **Done!** Your site is live 🎉

---

## 📚 Resources

- **React**: [react.dev](https://react.dev)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)
- **React Icons**: [react-icons.github.io](https://react-icons.github.io)

---

## ❓ Need Help?

- Check [README.md](./README.md) for detailed documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
- Review component files for code examples

Happy coding! 🎉
