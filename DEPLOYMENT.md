# Deployment Guide - Victor Kirika Njoroge Portfolio

## 📋 Prerequisites

1. **Supabase Account** - [Sign up at supabase.com](https://supabase.com)
2. **Netlify Account** - [Sign up at netlify.com](https://netlify.com)
3. **Node.js 18+** installed locally

---

## 🗄️ Step 1: Setup Supabase Database

### 1.1 Create a New Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details:
   - **Name**: `victor-portfolio`
   - **Database Password**: (save this securely)
   - **Region**: Choose closest to your audience

### 1.2 Run the Database Schema
1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql`
3. Paste and run the SQL script
4. This creates all tables and inserts your portfolio data

### 1.3 Get Your Supabase Credentials
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### 1.4 Create .env File
Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🚀 Step 2: Deploy to Netlify

### Option A: Deploy via Netlify CLI (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize your project
netlify init

# Choose:
# - Create & configure a new site
# - Select your team
# - Site name: victor-njoroge-portfolio (or custom)
# - Build command: npm run build
# - Publish directory: dist

# Set environment variables
netlify env:set VITE_SUPABASE_URL your_supabase_url
netlify env:set VITE_SUPABASE_ANON_KEY your_supabase_anon_key

# Deploy
netlify deploy --prod
```

### Option B: Deploy via Netlify Dashboard

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/MurayaSoftTouch/victor-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`

3. **Set Environment Variables**:
   - Go to **Site settings** → **Environment variables**
   - Add:
     - `VITE_SUPABASE_URL` = your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

4. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete (~2-3 minutes)

---

## 🔧 Step 3: Custom Domain (Optional)

1. In Netlify dashboard, go to **Domain settings**
2. Click "Add custom domain"
3. Enter your domain (e.g., `victorkirika.dev`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

---

## 📊 Step 4: Verify Deployment

### Check these after deployment:
- ✅ Homepage loads with 3D animations
- ✅ All sections render correctly
- ✅ Contact form submits to Supabase
- ✅ Social links work
- ✅ Mobile responsive design works
- ✅ No console errors

### View Contact Form Submissions:
1. Go to Supabase dashboard
2. Navigate to **Table Editor**
3. Select `contact_messages` table
4. View all submitted messages

---

## 🔄 Continuous Deployment

Netlify automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Netlify will rebuild and deploy automatically (~2-3 minutes).

---

## 🛠️ Troubleshooting

### Build Fails
```bash
# Test build locally
npm run build

# Check for errors
npm run build --debug
```

### Supabase Connection Issues
- Verify environment variables are set correctly
- Check Supabase project is active
- Ensure RLS policies allow public read access

### 404 on Page Refresh
The `netlify.toml` redirect handles this. Verify it exists.

---

## 📱 Post-Deployment Checklist

- [ ] Update social links in Supabase `profile` table
- [ ] Add Google Analytics (optional)
- [ ] Set up form submission notifications
- [ ] Test contact form on mobile
- [ ] Verify all project links work
- [ ] Check Lighthouse performance score

---

## 🎯 Quick Commands Reference

```bash
# Local Development
npm run dev          # Start dev server

# Build & Preview
npm run build        # Production build
npm run preview      # Preview production build

# Netlify CLI
netlify login        # Login to Netlify
netlify init         # Initialize project
netlify deploy       # Deploy to draft URL
netlify deploy --prod # Deploy to production
netlify env:set      # Set environment variable
netlify open         # Open site in browser
```

---

## 📞 Support

For issues:
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **This Project**: Check `README.md`

---

Made with ❤️ by Victor Kirika Njoroge
