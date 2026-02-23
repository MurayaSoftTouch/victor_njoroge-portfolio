from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from .models import (
    Profile, Education, Certification, Experience,
    Skills, Skill, Project, Achievement, Contact
)
from . import data

app = FastAPI(
    title="Victor Kirika Njoroge - Portfolio API",
    description="Backend API for Victor's portfolio website",
    version="1.0.0"
)

# CORS middleware - allow frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """API health check."""
    return {"message": "Victor Kirika Portfolio API", "status": "running"}


@app.get("/api/profile", response_model=Profile)
async def get_profile():
    """Get profile information."""
    return data.get_profile()


@app.get("/api/education", response_model=List[Education])
async def get_education():
    """Get education history."""
    return data.get_education()


@app.get("/api/certifications", response_model=List[Certification])
async def get_certifications():
    """Get certifications."""
    return data.get_certifications()


@app.get("/api/experience", response_model=List[Experience])
async def get_experience():
    """Get work experience."""
    return data.get_experience()


@app.get("/api/skills", response_model=Skills)
async def get_skills():
    """Get technical skills."""
    return data.get_skills()


@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    """Get portfolio projects."""
    return data.get_projects()


@app.get("/api/achievements", response_model=List[Achievement])
async def get_achievements():
    """Get achievements."""
    return data.get_achievements()


@app.get("/api/contact", response_model=Contact)
async def get_contact():
    """Get contact information."""
    return data.get_contact()


@app.get("/api/all")
async def get_all():
    """Get all portfolio data at once."""
    return data.get_all_data()


@app.post("/api/contact/submit")
async def submit_contact(form_data: dict):
    """Handle contact form submission (placeholder)."""
    # In production, you would send an email or save to database
    print(f"Contact form submission: {form_data}")
    return {"message": "Message received successfully!", "status": "success"}
