# Oasis Portfolio Website

A modern, professional portfolio website showcasing 6 years of web development experience.

## 🚀 Quick Start

1. **Add Your Avatar Image**
   - Place your avatar image in the `images/` folder
   - Name it `avatar.jpg` (or update the path in `index.html` line 78)
   - Recommended size: 300x300px or larger (square format)
   - Supported formats: JPG, PNG, WebP

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

## 📁 File Structure

```
Oasis-Portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles
│   ├── responsive.css  # Mobile responsive styles
│   └── animations.css  # Animation keyframes
├── js/
│   ├── main.js         # Navigation and core functionality
│   ├── animations.js   # Scroll animations and skill bars
│   └── contact.js      # Contact form handling
├── images/
│   └── avatar.jpg      # Your avatar image (add this!)
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --accent-color: #00d4ff;
    /* ... */
}
```

### Content
- Update personal information in `index.html`
- Add your projects to the Portfolio section
- Modify the About section with your story

### Contact Form
The contact form currently opens your email client. To integrate with a service:
- **Formspree**: Add action URL to form tag
- **EmailJS**: Add EmailJS script and configuration
- **Backend API**: Update `js/contact.js` with your API endpoint

## 📱 Features

- ✅ Fully Responsive Design
- ✅ Smooth Scroll Animations
- ✅ Interactive Navigation
- ✅ Portfolio Filter System
- ✅ Animated Skill Bars
- ✅ Contact Form
- ✅ SEO Optimized
- ✅ Modern Dark Theme

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live at `username.github.io/repository-name`

### Netlify
1. Drag and drop the `Oasis-Portfolio` folder to Netlify
2. Your site will be live instantly!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the portfolio directory
3. Follow the prompts

## 📝 Notes

- Make sure to add your avatar image to `images/avatar.jpg`
- Update project images in the Portfolio section
- Test the contact form functionality
- Add your actual project links and GitHub repositories
- Consider adding a favicon for better branding

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Poppins, Inter)

---

**Made with ❤️ by Oasis**

