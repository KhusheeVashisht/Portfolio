# Complete File Directory

## 📂 Portfolio Project Structure

```
Portfolio/
│
├── 📦 Configuration & Setup Files
│   ├── package.json                 # Dependencies, scripts, project metadata
│   ├── vite.config.js              # Vite build configuration
│   ├── tailwind.config.js           # Tailwind CSS theme customization
│   ├── postcss.config.js            # PostCSS plugins configuration
│   ├── index.html                   # Main HTML template
│   ├── .gitignore                   # Git ignore patterns
│   ├── .env.example                 # Environment variables template
│   └── .vscode/
│       ├── settings.json            # VS Code settings
│       └── extensions.json          # Recommended extensions
│
├── 📚 Documentation
│   ├── README.md                    # Project overview & features
│   ├── QUICKSTART.md                # Quick setup & customization guide
│   ├── DEPLOYMENT.md                # Deployment options (Vercel, Netlify, etc.)
│   ├── FEATURES.md                  # Detailed features documentation
│   ├── IMAGES.md                    # Image setup & optimization guide
│   ├── SETUP_COMPLETE.md            # Setup completion checklist
│   └── FILE_DIRECTORY.md            # This file
│
├── 📁 Source Code (src/)
│   │
│   ├── main.jsx                     # Application entry point
│   ├── App.jsx                      # Main App component with routing
│   │
│   ├── 🧩 components/
│   │   ├── index.js                 # Centralized component exports
│   │   ├── Navigation.jsx           # Fixed header with menu & theme toggle
│   │   ├── ProjectCard.jsx          # Reusable project display card
│   │   ├── SkillCard.jsx            # Skill badge component
│   │   ├── SocialLinks.jsx          # Social media icons group
│   │   ├── Modal.jsx                # Reusable modal/dialog component
│   │   ├── GitHubRepoCard.jsx       # GitHub repository card
│   │   ├── LoadingScreen.jsx        # Initial loading animation
│   │   ├── AnimatedGradient.jsx     # Animated background gradient
│   │   ├── ParticleBackground.jsx   # Floating particles effect
│   │   └── ScrollIndicator.jsx      # "Scroll down" indicator animation
│   │
│   ├── 📄 pages/
│   │   ├── index.js                 # Centralized page exports
│   │   ├── Hero.jsx                 # Landing section with typing animation
│   │   ├── About.jsx                # About me section
│   │   ├── Skills.jsx               # Skills showcase with filters
│   │   ├── Projects.jsx             # Projects grid with filters
│   │   ├── GitHubProjects.jsx       # GitHub API integration section
│   │   ├── Achievements.jsx         # Timeline & achievements section
│   │   ├── CreativeWork.jsx         # Video showcase section
│   │   ├── Resume.jsx               # Experience & education section
│   │   ├── Contact.jsx              # Contact form section
│   │   └── Footer.jsx               # Footer with links & social
│   │
│   ├── 🎨 styles/
│   │   └── globals.css              # Global styles & custom animations
│   │
│   ├── 🔌 hooks/
│   │   └── useCustom.js             # Custom hooks:
│   │                                #   - useScrollAnimation()
│   │                                #   - useDarkMode()
│   │                                #   - useGitHubRepos()
│   │
│   ├── 🔧 utils/
│   │   ├── constants.js             # All data:
│   │   │                            #   - skillsData
│   │   │                            #   - projectsData
│   │   │                            #   - achievementsData
│   │   │                            #   - creativeWorks
│   │   │                            #   - socialLinks
│   │   │                            #   - navLinks
│   │   │
│   │   └── emailService.js          # Email functionality:
│   │                                #   - initializeEmailJS()
│   │                                #   - sendEmail()
│   │
│   └── 📸 assets/                   # Static assets (images, videos)
│       └── (empty - use external URLs)
│
├── 📁 Public Assets (public/)
│   └── (Static files served as-is)
│
└── 📁 Build Output (generated on build)
    └── dist/                        # Production-ready files
```

---

## 🔑 Important Files Explained

### Configuration Files

| File | Purpose | Customize |
|------|---------|-----------|
| `package.json` | Dependencies & scripts | Add/remove dependencies |
| `vite.config.js` | Build settings | Change port, optimize |
| `tailwind.config.js` | Theme colors & animations | Change color palette |
| `index.html` | Base HTML | Update title, meta tags |
| `.env.example` | Environment variables | Add API keys, secrets |

### Source Code Organization

**`src/App.jsx`** - Main application
- Imports all sections
- Sets up routing
- Manages loading state
- Includes progress bar

**`src/main.jsx`** - Entry point
- Mounts React app to DOM
- Imports global styles

**`src/components/`** - Reusable UI Components
- Used across multiple sections
- Self-contained logic
- Styled components
- Accept props for customization

**`src/pages/`** - Page/Section Components
- Each represents a main section
- Import reusable components
- Manage section-specific state
- Include scroll animations

**`src/styles/globals.css`** - Global Styles
- Tailwind directives
- Custom animations
- Global utility classes
- Custom Tailwind extensions

**`src/hooks/useCustom.js`** - Custom React Hooks
- `useScrollAnimation()` - Scroll reveal effect
- `useDarkMode()` - Dark/light mode toggle
- `useGitHubRepos()` - Fetch GitHub repos

**`src/utils/constants.js`** - Application Data
- All content data
- Skills list
- Projects information
- Achievement details
- Social links
- Navigation items

---

## 📊 Component Dependencies

```
App
├─ Navigation (uses: useDarkMode, navLinks)
├─ AnimatedGradient
├─ ParticleBackground
│
├─ Hero (uses: ScrollIndicator)
├─ About (uses: useScrollAnimation)
├─ Skills (uses: useScrollAnimation, SkillCard)
├─ Projects (uses: ProjectCard, Modal, projectsData)
├─ GitHubProjects (uses: useGitHubRepos, GitHubRepoCard)
├─ Achievements (uses: useScrollAnimation, achievementsData)
├─ CreativeWork (uses: Modal, creativeWorks)
├─ Resume (uses: useScrollAnimation)
├─ Contact (uses: useScrollAnimation, SocialLinks, emailService)
├─ Footer (uses: SocialLinks, navLinks)
│
└─ ProgressBar (scroll listener)
```

---

## 🎨 Component Map

### Navigation & Layout
- **Navigation** - Header with menu, dark mode toggle
- **Footer** - Footer with links, copyright, back-to-top

### Content Sections
- **Hero** - Landing section with typing animation
- **About** - About me with profile image
- **Skills** - Skills with filters and categories
- **Projects** - Projects grid with modal details
- **GitHubProjects** - GitHub repos from API
- **Achievements** - Timeline of achievements
- **CreativeWork** - Video showcase
- **Resume** - Experience & education
- **Contact** - Contact form & information

### Reusable Components
- **ProjectCard** - Displays project information
- **SkillCard** - Displays skill badge
- **GitHubRepoCard** - Displays repository
- **SocialLinks** - Social media icons
- **Modal** - Popup/dialog container
- **ScrollIndicator** - Scroll down animation

### Background & Effects
- **AnimatedGradient** - Moving gradient background
- **ParticleBackground** - Floating particles
- **LoadingScreen** - Loading animation
- **ProgressBar** - Scroll progress indicator

---

## 🔄 Data Flow

```
App (main component)
│
├─ constants.js (read)
│  ├─ skillsData
│  ├─ projectsData
│  ├─ achievementsData
│  ├─ creativeWorks
│  ├─ socialLinks
│  └─ navLinks
│
├─ Hooks (useScrollAnimation, useDarkMode, useGitHubRepos)
│
└─ Components (render data + add interactivity)
```

---

## 📝 Adding New Features

### Add a New Skill
1. Edit `src/utils/constants.js`
2. Add to `skillsData` object
3. Automatically appears in Skills section

### Add a New Project
1. Edit `src/utils/constants.js`
2. Add to `projectsData` array
3. Automatically appears with filtering

### Add a New Section
1. Create component in `src/pages/`
2. Import in `src/App.jsx`
3. Add to JSX rendering
4. Update `navLinks` in constants.js

### Modify Styling
1. Update `tailwind.config.js` for theme
2. Update `globals.css` for custom styles
3. Use Tailwind classes in components

---

## 🚀 File Usage Guide

### When Adding Your Content
- **Name, Title, Bio**: Update in `Hero.jsx`, `About.jsx`, constants
- **Images**: Update URLs in component files or constants
- **Projects**: Add to `constants.js` projectsData
- **Skills**: Add to `constants.js` skillsData
- **Social Links**: Update `socialLinks` in constants
- **Contact Email**: Update in `Contact.jsx`
- **Achievements**: Add to `achievementsData` in constants

### When Customizing Design
- **Colors**: Edit `tailwind.config.js` theme colors
- **Animations**: Edit keyframes in `tailwind.config.js`
- **Global Styles**: Update `src/styles/globals.css`
- **Component Styles**: Modify Tailwind classes in JSX

### When Setting Up Features
- **Dark Mode**: Already configured with `useDarkMode()` hook
- **GitHub Repos**: Update username in `GitHubProjects.jsx`
- **Contact Form**: Configure EmailJS in `Contact.jsx`
- **Email Service**: Setup in `src/utils/emailService.js`

---

## 📂 Size & Performance

### File Sizes (approximate)
- **Components**: ~50KB total
- **Pages**: ~80KB total
- **Styles**: ~20KB (Tailwind)
- **Utilities**: ~10KB
- **Bundle (gzipped)**: ~150KB

### Load Performance
- Initial load: < 2 seconds
- Animations: 60fps
- Mobile optimized
- Image lazy loading ready

---

## 🔗 Related Documentation

For more details, see:
- [QUICKSTART.md](./QUICKSTART.md) - Quick setup
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy options
- [FEATURES.md](./FEATURES.md) - Detailed features
- [IMAGES.md](./IMAGES.md) - Image setup

---

## ✅ File Checklist

Essential files for functionality:
- [ ] `package.json` - Dependencies
- [ ] `vite.config.js` - Build config
- [ ] `tailwind.config.js` - Styling
- [ ] `src/App.jsx` - Main app
- [ ] `src/main.jsx` - Entry point
- [ ] `src/pages/*` - All section components
- [ ] `src/components/*` - Reusable components
- [ ] `src/utils/constants.js` - Data
- [ ] `src/styles/globals.css` - Global styles
- [ ] `index.html` - HTML template

---

Created with ❤️ for modern portfolio websites! 🚀
