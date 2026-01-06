# How to Run the NEXUS E-Commerce Website

## Quick Start

Your website now uses ES6 modules and **must be run through a local web server**.

### ⚠️ Don't Do This

❌ Double-clicking `index.html` to open it directly **won't work** (preloader will be stuck)

### ✅ Do This Instead

**Option 1: Python Server (Easiest)**

```bash
cd d:\projects\sami\ecommerce
python -m http.server 8080



```

Then open: **http://localhost:8080**

**Option 2: VS Code Live Server**

1. Install "Live Server" extension in VS Code
2. Right-click any `.html` file → "Open with Live Server"

**Option 3: Node.js**

```bash
npx http-server -p 8080
```

---

## Why?

ES6 modules (the new modular JavaScript structure) require a web server due to browser security (CORS) restrictions.

## For Production

Deploy to any hosting service - the modular code works perfectly on real servers!

---

**Currently Running:** Python server on port 8080  
**Access at:** http://localhost:8080
