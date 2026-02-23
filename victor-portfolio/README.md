# Victor Kirika Njoroge - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Python backend.

## Features

- 🎨 Modern UI/UX with Tailwind CSS and Bootstrap Icons
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Fast performance with Vite
- 🐍 Python backend (zero dependencies - uses standard library)
- ✨ Smooth animations and transitions
- 🌐 SEO-friendly meta tags
- 📧 Contact form with backend integration

## Tech Stack

- **Frontend:** React 18, Vite
- **Backend:** Python 3 (HTTP server - no dependencies required)
- **Styling:** Tailwind CSS, Custom CSS
- **Icons:** Bootstrap Icons
- **Data:** JSON file
- **HTTP Client:** Axios

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python 3.8+

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd victor-portfolio
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the Python backend (in one terminal):**
   ```bash
   npm run backend
   # Or manually:
   cd backend && python3 run.py
   ```
   Backend will run at `http://localhost:8000`

2. **Start the development server (in another terminal):**
   ```bash
   npm run dev
   ```
   Frontend will run at `http://localhost:3000`

3. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

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
│   │   └── db.json          # Portfolio data (frontend copy)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py          # FastAPI version (optional)
│   │   ├── models.py        # Pydantic models (optional)
│   │   └── data.py          # Data loading (optional)
│   ├── data/
│   │   └── db.json          # Portfolio data (backend)
│   ├── run.py               # Main backend server (zero deps)
│   └── requirements.txt     # Optional dependencies
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API info |
| GET | `/api/profile` | Get profile information |
| GET | `/api/education` | Get education history |
| GET | `/api/certifications` | Get certifications |
| GET | `/api/experience` | Get work experience |
| GET | `/api/skills` | Get technical skills |
| GET | `/api/projects` | Get portfolio projects |
| GET | `/api/achievements` | Get achievements |
| GET | `/api/contact` | Get contact information |
| GET | `/api/all` | Get all data at once |
| POST | `/api/contact/submit` | Submit contact form |

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run backend` - Start Python backend
- `python3 backend/run.py` - Direct backend start

## API Examples

```bash
# Get all portfolio data
curl http://localhost:8000/api/all

# Get profile
curl http://localhost:8000/api/profile

# Get experience
curl http://localhost:8000/api/experience

# Submit contact form
curl -X POST http://localhost:8000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hello"}'
```

## Customization

### Update Portfolio Data

Edit `backend/data/db.json` to update all portfolio information. The frontend will automatically reflect changes.

### Styling

- Modify `tailwind.config.js` to change colors, fonts, and themes
- Edit `src/index.css` for custom styles and animations

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy Backend

The Python backend uses only standard library, making it easy to deploy:

```bash
# Any server with Python 3 can run:
python3 backend/run.py
```

Options:
- **Railway**: Easy Python deployment
- **Render**: Free tier available
- **Heroku**: With Procfile
- **VPS**: Run with systemd or supervisor

### Deploy Frontend

- **Vercel**: `vercel`
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Push `dist/` folder

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email:** vkirika75@gmail.com
- **Location:** Temple, Texas, USA
- **LinkedIn:** linkedin.com/in/victorkirika
- **GitHub:** github.com/victorkirika
