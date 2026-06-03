# MCA Student Portfolio Website

A modern, futuristic portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Showcasing technical skills, projects, achievements, and creative work with smooth animations and responsive design.

## 🚀 Features

- **Futuristic Design**: Dark mode default with neon color accents (cyan, blue, purple)
- **Glassmorphism Cards**: Modern card design with blur effects
- **Smooth Animations**: Framer Motion animations throughout the site
- **Particle Background**: Subtle animated particles for visual appeal
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Dark/Light Mode**: Toggle between dark and light themes
- **Multiple Sections**:
  - Hero with animated typing text
  - About Me section with profile image
  - Skills (categorized by domain)
  - Projects (filterable by category)
  - GitHub Projects (fetched from API)
  - Achievements Timeline
  - Creative Work Showcase
  - Resume & Experience
  - Contact Form
  - Footer

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **HTTP Client**: Axios

## 🛠️ Installation

1. **Clone and Navigate**:
```bash
cd Portfolio
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Start Development Server**:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx   # Navbar with menu
│   │   ├── ProjectCard.jsx  # Project display card
│   │   ├── SkillCard.jsx    # Skill badge component
│   │   ├── SocialLinks.jsx  # Social media links
│   │   ├── Modal.jsx        # Modal/dialog component
│   │   ├── LoadingScreen.jsx
│   │   ├── AnimatedGradient.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── GitHubRepoCard.jsx
│   ├── pages/               # Section components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── GitHubProjects.jsx
│   │   ├── Achievements.jsx
│   │   ├── CreativeWork.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── globals.css      # Global styles
│   ├── hooks/
│   │   └── useCustom.js     # Custom React hooks
│   ├── utils/
│   │   └── constants.js     # Data and constants
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Update Personal Information
Edit `src/utils/constants.js` to update:
- Skills data
- Projects list
- Achievements
- Social media links
- Creative works
- Navigation items

### Style Customization
- Colors: Modify `tailwind.config.js` theme colors
- Animations: Edit keyframes in `tailwind.config.js`
- Global styles: Update `src/styles/globals.css`

### Add Your Content
1. **Profile Image**: Replace image URLs in `About` section
2. **Resume**: Update download link in `Resume` section
3. **GitHub Username**: Change in `GitHubProjects.jsx`
4. **Contact Email**: Update email in `Contact` section

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Build for Production
```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 Features to Implement

- [ ] Contact form with EmailJS integration
- [ ] Blog section for articles
- [ ] Testimonials section
- [ ] Newsletter subscription
- [ ] Dark/Light mode persistence
- [ ] Share buttons for projects
- [ ] Search functionality

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a modern portfolio template for MCA students and professionals.

---

**Happy coding! 🚀**
