# Neural Security Grid 2024 🔐

An immersive, cyberpunk-themed event landing page featuring neural network visualizations, real-time threat detection simulation, and interactive ML project demonstrations.

## 🎯 Event Details

**Neural Security Grid 2024: Where AI Meets Cybersecurity**

- **Date**: March 15-16, 2024
- **Location**: RNS Institute of Technology, Bangalore
- **Organizer**: Lakshmi Lavanya N - AI/ML Engineer & Security Researcher

## ✨ Features

### 🧠 Interactive Elements
- **Neural Network Background**: Real-time particle system with dynamic connections
- **Matrix Rain Effect**: Classic cyberpunk aesthetic with cascading code
- **Threat Score Tracker**: Live visitor engagement monitoring system
- **Particle Burst Effects**: Interactive visual feedback on button clicks
- **Smooth Scroll Animations**: Fade-in effects for sections and cards

### 🎨 Design Highlights
- Cyberpunk/Matrix-inspired color scheme (Cyber Green: #00ff41, Cyber Blue: #00d9ff)
- Custom Orbitron & JetBrains Mono fonts for tech aesthetic
- Glitch effects on hero title
- Glowing borders and shadow effects
- Fully responsive design for all devices

### 🔧 Technical Implementation
- Pure HTML5, CSS3, JavaScript (No frameworks required)
- Canvas API for neural network and matrix animations
- Intersection Observer API for scroll animations
- CSS Grid & Flexbox for responsive layouts
- Custom CSS animations and transitions

## 📂 Project Structure

```
neural-security-grid/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling (cyberpunk theme)
├── script.js           # Interactive features & animations
└── README.md          # Documentation
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `neural-security-grid` (or any name you prefer)
3. Make it **Public**
4. Don't initialize with README (we already have files)

### Step 2: Upload Files

**Option A: Via GitHub Web Interface**
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop all three files:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Click "Commit changes"

**Option B: Via Git Commands**
```bash
# Navigate to your project folder
cd neural-security-grid

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Neural Security Grid landing page"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/neural-security-grid.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/neural-security-grid/
```

Example: `https://lakshmilavanya.github.io/neural-security-grid/`

## 🎨 Customization Guide

### Change Event Details
Edit `index.html` and modify:
- Event dates (search for "MARCH 15-16, 2024")
- Location details
- Organizer information
- Contact details in footer

### Modify Color Scheme
Edit `styles.css` CSS variables in `:root`:
```css
:root {
    --primary-cyber: #00ff41;      /* Main green */
    --secondary-cyber: #00d9ff;    /* Accent blue */
    --accent-red: #ff0055;         /* Alert red */
    --accent-purple: #b600ff;      /* Purple accent */
    --dark-bg: #0a0e17;           /* Dark background */
}
```

### Adjust Animations
In `script.js`, modify:
- Particle count: `const particleCount = 100;`
- Matrix rain speed: `setInterval(draw, 50);`
- Threat score calculation factors

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🌟 Key Sections

1. **Hero Section**: Glitch title, event details, CTA buttons
2. **Security Layers**: Three project showcases with unlock demos
3. **Organizer Profile**: Bio, achievements, social links
4. **Event Agenda**: Two-day schedule with timeline
5. **Registration**: Interactive form with stat counters
6. **Footer**: Quick links and contact information

## 🎓 Educational Value

This project demonstrates:
- Advanced CSS animations and effects
- Canvas API for graphics
- DOM manipulation and event handling
- Responsive design principles
- Modern JavaScript ES6+ features
- Performance optimization techniques

## 🐛 Easter Egg

Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 📧 Contact

**Lakshmi Lavanya N**
- Email: lakshmilavanya292@gmail.com
- Phone: +91 7795952603
- LinkedIn: [lakshmi-lavanya-n](https://www.linkedin.com/in/lakshmi-lavanya-n)
- GitHub: [lakshmilavanya](https://github.com/lakshmilavanya)
- LeetCode: [lakshmilavanya](https://leetcode.com/lakshmilavanya)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Inspired by cyberpunk and Matrix aesthetics
- Built with passion for AI/ML and cybersecurity
- Designed for the Neural Security Grid 2024 conference

---

**Built with AI • Secured with ML** 🔐

*Last Updated: February 2024*
