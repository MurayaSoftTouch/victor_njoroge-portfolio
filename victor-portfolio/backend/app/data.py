import json
from pathlib import Path

DATA_FILE = Path(__file__).parent.parent / "data" / "db.json"


def load_data():
    """Load portfolio data from JSON file."""
    with open(DATA_FILE, "r") as f:
        return json.load(f)


def get_profile():
    data = load_data()
    return data.get("profile", {})


def get_education():
    data = load_data()
    return data.get("education", [])


def get_certifications():
    data = load_data()
    return data.get("certifications", [])


def get_experience():
    data = load_data()
    return data.get("experience", [])


def get_skills():
    data = load_data()
    return data.get("skills", {})


def get_projects():
    data = load_data()
    return data.get("projects", [])


def get_achievements():
    data = load_data()
    return data.get("achievements", [])


def get_contact():
    data = load_data()
    return data.get("contact", {})


def get_all_data():
    """Get all portfolio data."""
    return load_data()
