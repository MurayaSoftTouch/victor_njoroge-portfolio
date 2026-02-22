# Victor Kirika Njoroge - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Bootstrap Icons.

## Features

- 🎨 Modern UI/UX with Tailwind CSS and Bootstrap Icons
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Fast performance with Vite
- 📊 JSON-based data management with json-server
- ✨ Smooth animations and transitions
- 🌐 SEO-friendly meta tags
- 📧 Contact form with validation

## Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS, Custom CSS
- **Icons:** Bootstrap Icons
- **Data:** json-server (local JSON API)
- **HTTP Client:** Axios

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd victor-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the JSON server (in one terminal):**
   ```bash
   npm run server
   ```

4. **Start the development server (in another terminal):**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - The app will be available at `http://localhost:3000`
   - The JSON API runs at `http://localhost:5000`

## Project Structure

```
victor-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── db.json          # Portfolio data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start JSON server

## Customization

### Update Portfolio Data

Edit `src/data/db.json` to update:
- Personal information
- Professional summary
- Education history
- Work experience
- Skills
- Projects
- Certifications
- Contact information

### Styling

- Modify `tailwind.config.js` to change colors, fonts, and themes
- Edit `src/index.css` for custom styles and animations

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email:** vkirika75@gmail.com
- **Location:** Temple, Texas, USA
- **LinkedIn:** linkedin.com/in/victorkirika
- **GitHub:** github.com/victorkirika
