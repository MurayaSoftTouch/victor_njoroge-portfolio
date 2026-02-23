from pydantic import BaseModel
from typing import List, Optional


class Profile(BaseModel):
    name: str
    title: str
    email: str
    location: str
    phone: Optional[str] = None
    linkedin: Optional[str] = None
    github: Optional[str] = None
    avatar: Optional[str] = None
    summary: Optional[str] = None


class Education(BaseModel):
    id: int
    institution: str
    degree: str
    location: str
    year: str
    description: Optional[str] = None


class Certification(BaseModel):
    id: int
    name: str
    issuer: str
    year: str
    description: Optional[str] = None


class Experience(BaseModel):
    id: int
    company: str
    role: str
    location: str
    period: str
    responsibilities: List[str]
    technologies: List[str]


class Skill(BaseModel):
    name: str
    level: int


class Skills(BaseModel):
    programming: List[Skill]
    operatingSystems: List[Skill]
    aiTools: List[Skill]
    cloudPlatforms: List[Skill]
    databases: List[Skill]
    networking: List[Skill]
    productivity: List[Skill]


class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]
    image: Optional[str] = None
    link: Optional[str] = None
    featured: bool = False


class Achievement(BaseModel):
    id: int
    title: str
    description: str


class Contact(BaseModel):
    email: str
    location: str
    availability: Optional[str] = None
