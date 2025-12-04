# README - ScholarMatch Website

## Project Overview

**ScholarMatch** is an AI-powered scholarship finder designed to help students instantly discover scholarships they qualify for, with clear and simple explanations. This is a modern, responsive website built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Core Features:**
- Clean, accessible, mobile-responsive design
- Interactive chatbot for scholarship questions
- How It Works section with step-by-step guide
- Benefits showcase for student empowerment
- Smooth scrolling navigation
- Floating chatbot launcher button
- WCAG 2.1 AA accessibility compliance

🎨 **Design System:**
- Custom CSS variables for easy theming
- Trustworthy blue + growth green color palette
- Responsive grid layouts
- Smooth animations and transitions
- Professional typography system

⚡ **JavaScript Features:**
- Mobile menu toggle with hamburger icon
- Interactive chatbot with message flow
- Smooth scroll navigation
- Event listeners for CTA buttons
- Keyboard navigation support
- Loading states and animations

♿ **Accessibility:**
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard-navigable interface
- High color contrast ratios (4.5:1+)
- Skip-to-content link
- Screen reader friendly

## Project Structure

```
ScholarMatch/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── app.js          # JavaScript interactivity
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── package.json        # Project metadata
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Live Server extension (optional, for local development)

### Installation

1. **Clone or open the repository:**
   ```bash
   cd ScholarMatch
   ```

2. **Open with Live Server** (Recommended for development):
   - In VS Code, right-click `index.html`
   - Select "Open with Live Server"
   - The site will open at `http://localhost:5500`

3. **Or open directly in browser:**
   - Simply open `index.html` in your browser
   - Works offline (no server required for basic functionality)

## Live Server Configuration

### VS Code Extension
1. Install "Live Server" by Ritwick Dey
2. Right-click any `.html` file and select "Open with Live Server"
3. Auto-refresh on file changes

### Command Line (Node.js)
```bash
npm install -g live-server
cd path/to/ScholarMatch
live-server
```

## Technologies Used

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Responsive design with CSS variables and Grid/Flexbox
- **JavaScript (Vanilla)** - No frameworks, pure DOM manipulation
- **Accessibility** - WCAG 2.1 AA compliant

## Customization Guide

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-blue: #2563EB;      /* Main brand color */
    --secondary-green: #10B981;   /* Accent color */
    --accent-gold: #F59E0B;       /* Highlight color */
}
```

### Modify Chatbot Responses
Edit the `CHATBOT_RESPONSES` object in `js/app.js`:
```javascript
const CHATBOT_RESPONSES = {
    greeting: "Your custom greeting...",
    // Add more responses...
};
```

### Update Navigation Links
Edit the nav menu in `index.html`:
```html
<ul class="nav-menu" id="nav-menu">
    <li><a href="#section-id" class="nav-link">Link Label</a></li>
</ul>
```

## Browser Support

- Chrome/Edge: ✅ Full support (latest 2 versions)
- Firefox: ✅ Full support (latest 2 versions)
- Safari: ✅ Full support (14+)
- Mobile browsers: ✅ Full support

## Performance Optimization

- Vanilla JS (no framework overhead)
- Minimal CSS (no preprocessor needed)
- No external dependencies
- Optimized animations using CSS
- Debounced event handlers
- Lazy-load ready structure

## Future Enhancements

Planned features for version 2.0:
- 🔗 Real scholarship database API integration
- 🔐 User authentication and profiles
- 📊 Advanced scholarship filters (major, GPA, location, etc.)
- 🤖 Real AI chatbot backend (OpenAI/Hugging Face integration)
- 💾 Save scholarships for later
- 📱 Progressive Web App (PWA) capabilities
- 📈 Analytics and tracking
- 🌙 Dark mode toggle
- 🌍 Internationalization (i18n) support

## Accessibility Features

✅ **WCAG 2.1 AA Compliance:**
- Semantic HTML landmarks (nav, main, footer)
- ARIA labels and roles for interactive elements
- Keyboard-only navigation support
- Color contrast ratios ≥ 4.5:1
- Focus indicators on all interactive elements
- Skip-to-content link
- Proper heading hierarchy
- Screen reader optimization

## Git Workflow

```bash
# View changes
git status

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

## Troubleshooting

**Issue: Styles not loading**
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths in HTML are correct
- Ensure CSS file is in `css/` folder

**Issue: JavaScript not working**
- Open browser console (F12) for error messages
- Ensure JavaScript is enabled
- Check that `js/app.js` is properly linked

**Issue: Chatbot not responding**
- Check browser console for errors
- Verify JavaScript file is loaded
- Ensure all DOM elements exist in HTML

## Contributing

To contribute improvements:
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make changes and test
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
- Create an issue on GitHub
- Email: hello@scholarmatch.com
- Check documentation in code comments

## Version History

**v1.0.0** (December 2024)
- Initial release
- Core website with responsive design
- Interactive chatbot interface
- Accessibility compliance
- Mobile-friendly layout

---

**Made with ❤️ for students seeking scholarship opportunities**

Happy coding! 🚀
