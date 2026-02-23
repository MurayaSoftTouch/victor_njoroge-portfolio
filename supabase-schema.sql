-- Supabase Database Schema for Victor Kirika Njoroge Portfolio
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profile table
CREATE TABLE IF NOT EXISTS profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  bio TEXT,
  avatar TEXT,
  social JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
  icon TEXT,
  color TEXT,
  emoji TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN DEFAULT FALSE,
  description TEXT,
  achievements JSONB DEFAULT '[]',
  technologies JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  tags JSONB DEFAULT '[]',
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Education table
CREATE TABLE IF NOT EXISTS education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  field TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  grade TEXT,
  achievements JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Certifications table
CREATE TABLE IF NOT EXISTS certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  issuer TEXT NOT NULL,
  date DATE,
  credential_id TEXT,
  url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_experience_start_date ON experience(start_date DESC);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured DESC);
CREATE INDEX IF NOT EXISTS idx_education_end_date ON education(end_date DESC);
CREATE INDEX IF NOT EXISTS idx_certifications_date ON certifications(date DESC);

-- Insert sample data (Victor Kirika Njoroge's actual data)

-- Profile
INSERT INTO profile (name, title, tagline, email, phone, location, bio, avatar, social) VALUES
('Victor Kirika Njoroge', 
 'Senior Software Engineer & AI Training Specialist', 
 'Building scalable systems & training advanced AI models with deep technical expertise 🚀',
 'vkirika75@gmail.com',
 '+1 (254) 700 000 000',
 '76502 Temple, Texas, USA',
 'Senior Software Engineer and AI Training Specialist with a Ph.D. in Software Engineering and over 8 years of experience building scalable systems and training advanced AI models. Expert in Reinforcement Learning from Human Feedback (RLHF), Supervised Fine-Tuning (SFT), and Expert-Level Data Annotation for Large Language Models (LLMs).',
 'https://ui-avatars.com/api/?name=Victor+Kirika&size=512&background=0078d4&color=fff',
 '{"github": "https://github.com/MurayaSoftTouch", "linkedin": "https://linkedin.com/in/haman-softwaredev", "portfolio": "https://hamanporfolio.vercel.app"}'::jsonb);

-- Skills
INSERT INTO skills (name, level, icon, color, emoji) VALUES
('Python', 95, 'fa-brands fa-python', '#3776ab', '🐍'),
('TypeScript', 90, 'fa-solid fa-code', '#3178c6', '💎'),
('Elixir', 88, 'fa-solid fa-bolt', '#4b275f', '⚡'),
('JavaScript', 90, 'fa-brands fa-js', '#f7df1e', '⚡'),
('React', 85, 'fa-brands fa-react', '#61dafb', '⚛️'),
('Node.js', 88, 'fa-brands fa-node', '#339933', '🟢'),
('PostgreSQL', 85, 'fa-solid fa-database', '#336791', '🐘'),
('Docker', 82, 'fa-brands fa-docker', '#2496ed', '🐳'),
('Kubernetes', 78, 'fa-solid fa-dharmachakra', '#326ce5', '⎈'),
('AWS', 85, 'fa-brands fa-aws', '#ff9900', '☁️'),
('RLHF & SFT', 92, 'fa-solid fa-brain', '#9333ea', '🧠'),
('LLM Evaluation', 90, 'fa-solid fa-robot', '#06b6d4', '🤖');

-- Experience
INSERT INTO experience (company, role, location, start_date, end_date, current, description, achievements, technologies) VALUES
('Snorkel AI', 'Expert Contributor (Gauss HLE Project)', 'Remote', '2025-12-01', NULL, TRUE,
 'Creating expert-level question-answer pairs for the Humanity''s Last Exam (HLE) benchmark.',
 '["Created graduate-level reasoning problems for HLE benchmark", "Provided detailed solutions using LaTeX and Markdown", "Participated in peer review and adjudication processes"]'::jsonb,
 '["Python", "LaTeX", "Markdown", "Computer Science", "Engineering"]'::jsonb),

('Alignerr', 'AI Trainer & Model Evaluator', 'Remote', '2025-06-01', '2026-02-28', FALSE,
 'Code Human Preference and Sigma Math projects for AI training.',
 '["Conducted rigorous technical reviews of AI-generated code", "Created original mathematical reasoning questions", "Wrote detailed Chain-of-Thought explanations"]'::jsonb,
 '["Python", "TypeScript", "Git", "Mathematics", "Chain-of-Thought"]'::jsonb),

('TELUS International', 'Senior AI Trainer & Responsible AI Maker', 'Remote', '2025-06-01', '2026-01-31', FALSE,
 'Project Armadillo and Knowledge Project AI training.',
 '["Improved model performance by 20% through QA checks", "Graded AI responses ensuring responsible AI compliance", "Contributed expert-level submissions in CS and Mathematics"]'::jsonb,
 '["RLHF", "Responsible AI", "Python", "Data Annotation", "SFT"]'::jsonb),

('Med Labs Boston', 'IT Support Specialist', 'Boston, MA', '2022-01-01', '2025-05-31', FALSE,
 'Provided end-to-end IT support for laboratory systems.',
 '["Automated recurring reporting tasks increasing productivity by 30%", "Ensured stable operations of critical laboratory systems"]'::jsonb,
 '["Python", "Excel VBA", "Cloud Computing", "Cybersecurity", "Linux"]'::jsonb),

('Standard Chartered Bank UK', 'Senior Backend Engineer (Contract)', 'Remote', '2022-12-01', '2023-06-30', FALSE,
 'Built secure backend services for global banking platform.',
 '["Built backend services for global banking platform", "Designed APIs consumed by millions of users"]'::jsonb,
 '["Elixir", "Python", "Phoenix", "PostgreSQL", "REST APIs"]'::jsonb),

('Power Financial Wellness', 'Senior Backend Engineer (FinTech)', 'Nairobi, Kenya', '2021-07-01', '2022-11-30', FALSE,
 'Led backend engineering for high-traffic fintech platform.',
 '["Led backend for high-traffic fintech platform", "Built secure payment gateway integrations"]'::jsonb,
 '["Python", "Django", "PostgreSQL", "Payment APIs", "Docker"]'::jsonb),

('AlsoUG.com', 'Senior Backend Engineer', 'Khartoum, Sudan', '2020-04-01', '2021-06-30', FALSE,
 'Led migration from monolithic legacy system to microservices.',
 '["Led migration from monolith to microservices", "Established automated testing pipelines"]'::jsonb,
 '["Python", "Elixir", "Microservices", "CI/CD", "Docker"]'::jsonb),

('Gladys Technologies', 'Software Engineer', 'Nairobi, Kenya', '2017-04-01', '2020-03-31', FALSE,
 'Developed core REST and GraphQL APIs using Elixir and Phoenix.',
 '["Developed REST and GraphQL APIs", "Implemented OAuth/JWT authentication systems"]'::jsonb,
 '["Elixir", "Phoenix", "GraphQL", "REST", "PostgreSQL"]'::jsonb);

-- Projects
INSERT INTO projects (name, description, image, tags, live_url, github_url, featured) VALUES
('Humanity''s Last Exam (HLE) Benchmark', 'Expert-level question-answer pairs for benchmarking AI models on graduate-level Computer Science problems.',
 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800',
 '["Python", "LaTeX", "AI Evaluation", "Computer Science", "Engineering"]'::jsonb,
 'https://snorkel.ai', 'https://github.com/MurayaSoftTouch/hle-benchmark', TRUE),

('Code Human Preference System', 'AI training system for producing production-ready code through iterative model refinement.',
 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
 '["Python", "TypeScript", "Git", "Code Review", "AI Training"]'::jsonb,
 'https://alignerr.com', 'https://github.com/MurayaSoftTouch/code-preference', TRUE),

('Sigma Math AI Stumping Project', 'Original mathematical reasoning questions across Graph Theory, Number Theory, and Calculus.',
 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800',
 '["Mathematics", "Chain-of-Thought", "AI Evaluation", "Reasoning", "Calculus"]'::jsonb,
 'https://alignerr.com', 'https://github.com/MurayaSoftTouch/sigma-math', TRUE),

('Global Banking Platform APIs', 'Secure, high-performance backend services for global banking platform.',
 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
 '["Elixir", "Python", "Phoenix", "PostgreSQL", "Banking"]'::jsonb,
 'https://sc.com', 'https://github.com/MurayaSoftTouch/banking-apis', FALSE),

('East Africa FinTech Platform', 'High-traffic fintech platform with secure payment gateway integrations.',
 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
 '["Python", "Django", "Payment APIs", "PostgreSQL", "FinTech"]'::jsonb,
 'https://powerfinancial.co.ke', 'https://github.com/MurayaSoftTouch/fintech-platform', FALSE),

('Microservices Migration', 'Large-scale migration from monolithic legacy system to modern service-oriented architecture.',
 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800',
 '["Elixir", "Microservices", "CI/CD", "Docker", "Architecture"]'::jsonb,
 'https://alsoug.com', 'https://github.com/MurayaSoftTouch/microservices-migration', FALSE);

-- Education
INSERT INTO education (institution, degree, field, start_date, end_date, grade, achievements) VALUES
('California State University', 'PhD in Software Engineering', 'Software Engineering', '2019-01-01', '2022-12-31', 'Doctor of Philosophy',
 '["Dissertation on Scalable AI Systems", "Research in Machine Learning"]'::jsonb),

('Lincoln University', 'MSc in Software Engineering', 'Software Engineering', '2015-01-01', '2017-12-31', 'Master of Science',
 '["Thesis on Distributed Systems"]'::jsonb),

('University of Nairobi', 'BSc in Applied Computer Science', 'Computer Science', '2010-01-01', '2014-12-31', 'Bachelor of Science',
 '["Dean''s List", "Best Project Award"]'::jsonb),

('Moringa School', 'Full Stack Software Development', 'Software Development', '2022-01-01', '2022-06-30', 'Certificate',
 '["Full Stack Immersive Program"]'::jsonb),

('Harvard College (Online)', 'Certificate in Computer Science', 'Computer Science', '2020-01-01', '2020-06-30', 'Certificate',
 '["CS50 Completion"]'::jsonb);

-- Certifications
INSERT INTO certifications (name, issuer, date, credential_id, url) VALUES
('AI Ethics and Responsible Data Training', 'DeepLearning.AI', '2023-06-01', 'DL-AI-ETHICS-001', 'https://deeplearning.ai'),
('Cloud Computing Basics', 'Google Cloud Skills Boost', '2022-09-01', 'GCP-CLOUD-002', 'https://cloud.google.com'),
('Cybersecurity Fundamentals', 'Coursera', '2022-03-01', 'CYBER-FUND-003', 'https://coursera.org'),
('AI Hackathon Week', 'Safaricom, Kenya', '2021-11-01', 'AI-HACK-004', 'https://safaricom.co.ke');

-- Enable Row Level Security (RLS)
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view profile" ON profile FOR SELECT USING (true);
CREATE POLICY "Public can view skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Public can view experience" ON experience FOR SELECT USING (true);
CREATE POLICY "Public can view projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can view education" ON education FOR SELECT USING (true);
CREATE POLICY "Public can view certifications" ON certifications FOR SELECT USING (true);

-- Allow anyone to insert contact messages
CREATE POLICY "Anyone can submit contact messages" ON contact_messages FOR INSERT WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profile table
CREATE TRIGGER update_profile_updated_at
  BEFORE UPDATE ON profile
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
