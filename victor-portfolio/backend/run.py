#!/usr/bin/env python3
"""
Victor Kirika Portfolio - Backend Server
Simple HTTP server using Python standard library.
No external dependencies required.
"""

import json
import http.server
import socketserver
from urllib.parse import urlparse, parse_qs
from pathlib import Path

PORT = 8000
DATA_FILE = Path(__file__).parent / "data" / "db.json"

# Load portfolio data
with open(DATA_FILE, "r") as f:
    DATA = json.load(f)


class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP request handler for portfolio API."""

    def do_GET(self):
        """Handle GET requests."""
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        # CORS headers
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Type", "application/json")
        self.end_headers()

        # API routes
        if path == "/api/profile" or path == "/api/profile/":
            self.wfile.write(json.dumps(DATA.get("profile", {})).encode())
        elif path == "/api/education" or path == "/api/education/":
            self.wfile.write(json.dumps(DATA.get("education", [])).encode())
        elif path == "/api/certifications" or path == "/api/certifications/":
            self.wfile.write(json.dumps(DATA.get("certifications", [])).encode())
        elif path == "/api/experience" or path == "/api/experience/":
            self.wfile.write(json.dumps(DATA.get("experience", [])).encode())
        elif path == "/api/skills" or path == "/api/skills/":
            self.wfile.write(json.dumps(DATA.get("skills", {})).encode())
        elif path == "/api/projects" or path == "/api/projects/":
            self.wfile.write(json.dumps(DATA.get("projects", [])).encode())
        elif path == "/api/achievements" or path == "/api/achievements/":
            self.wfile.write(json.dumps(DATA.get("achievements", [])).encode())
        elif path == "/api/contact" or path == "/api/contact/":
            self.wfile.write(json.dumps(DATA.get("contact", {})).encode())
        elif path == "/api/all" or path == "/api/all/":
            self.wfile.write(json.dumps(DATA).encode())
        elif path == "/" or path == "":
            response = {
                "message": "Victor Kirika Portfolio API",
                "status": "running",
                "endpoints": [
                    "/api/profile",
                    "/api/education",
                    "/api/certifications",
                    "/api/experience",
                    "/api/skills",
                    "/api/projects",
                    "/api/achievements",
                    "/api/contact",
                    "/api/all",
                ]
            }
            self.wfile.write(json.dumps(response).encode())
        else:
            self.wfile.write(json.dumps({"error": "Not found"}).encode())

    def do_POST(self):
        """Handle POST requests."""
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        # CORS headers
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Type", "application/json")
        self.end_headers()

        if path == "/api/contact/submit" or path == "/api/contact/submit/":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            print(f"Contact form submission: {post_data.decode()}")
            response = {"message": "Message received successfully!", "status": "success"}
            self.wfile.write(json.dumps(response).encode())
        else:
            self.wfile.write(json.dumps({"error": "Not found"}).encode())

    def do_OPTIONS(self):
        """Handle CORS preflight requests."""
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def log_message(self, format, *args):
        """Custom log format."""
        print(f"[API] {args[0]}")


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), PortfolioHandler) as httpd:
        print(f"🚀 Portfolio Backend running at http://localhost:{PORT}")
        print(f"📚 API Docs: http://localhost:{PORT}/ (root endpoint)")
        print(f"Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Backend server stopped")
