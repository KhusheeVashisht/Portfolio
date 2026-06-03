# Deployment Guide for Portfolio

## 🚀 Vercel Deployment

### Step 1: Prepare Your Project

```bash
npm run build
```

### Step 2: Connect to Vercel

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B: Using GitHub Integration**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click Deploy

### Step 3: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:
- `VITE_GITHUB_USERNAME`: Your GitHub username
- `VITE_EMAILJS_SERVICE_ID`: (if using EmailJS)
- `VITE_EMAILJS_TEMPLATE_ID`: (if using EmailJS)

### Step 4: Deploy

```bash
vercel --prod
```

---

## 📦 Alternative Deployment Options

### Netlify

1. ```bash
   npm run build
   ```

2. Drag and drop `dist` folder to [netlify.com](https://netlify.com)

Or connect GitHub:
- Visit netlify.com
- Connect GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

### GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
}
```

2. Build and deploy:
```bash
npm run build
npm install --save-dev gh-pages
npx gh-pages -d dist
```

### Docker Deployment

1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Build and run**:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update personal information in `constants.js`
- [ ] Replace placeholder images
- [ ] Test all links and buttons
- [ ] Update GitHub username for repo fetching
- [ ] Set up contact form (EmailJS integration)
- [ ] Test responsive design on mobile
- [ ] Optimize images
- [ ] Run production build locally: `npm run preview`
- [ ] Check console for errors
- [ ] Update social media links
- [ ] Set up custom domain (if desired)

---

## 🔗 Post-Deployment

1. **Update your links**:
   - Social media profiles
   - GitHub repository
   - Resume download link
   - Project demo links

2. **Monitor analytics**:
   - Set up Google Analytics
   - Check Vercel Analytics dashboard

3. **Performance optimization**:
   - Run Lighthouse audit
   - Optimize images
   - Enable caching

4. **SEO optimization**:
   - Update meta descriptions
   - Add Open Graph tags
   - Create sitemap.xml

---

## 🐛 Troubleshooting

**Build fails**:
- Check Node version: `node --version` (should be 16+)
- Clear cache: `rm -rf node_modules && npm install`
- Check for TypeScript errors

**Environment variables not loading**:
- Restart dev server
- Check variable names (should start with VITE_)
- Verify `.env` file is in root directory

**Slow performance**:
- Check bundle size: `npm run build -- --analyze`
- Optimize images
- Use dynamic imports for large components

---

## 📞 Support

For issues with:
- **Vercel**: Visit [vercel.com/support](https://vercel.com/support)
- **Vite**: Check [vitejs.dev](https://vitejs.dev)
- **React**: Visit [react.dev](https://react.dev)
- **Tailwind**: See [tailwindcss.com](https://tailwindcss.com)

Happy deploying! 🎉
