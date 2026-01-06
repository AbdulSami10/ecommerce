# NEXUS ◈

<div align="center">

**Premium Tech & Lifestyle E-Commerce Platform**

_Experience the Future of Luxury Tech Shopping_

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ES6 Modules](https://img.shields.io/badge/ES6+-Modules-orange?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</div>

---

## 🌟 About

**NEXUS** is a cutting-edge, premium e-commerce platform designed for luxury tech and lifestyle products. Built with modern web technologies, it delivers a stunning user experience with smooth animations, glassmorphism effects, and a responsive design that works flawlessly across all devices.

This project showcases advanced front-end development with a focus on:

- **Premium UI/UX Design** with modern aesthetics
- **Modular ES6 Architecture** for maintainability
- **Smooth Animations** and interactive elements
- **Fully Responsive** design for mobile, tablet, and desktop
- **Shopping Cart** functionality with persistent storage
- **Product Filtering** and search capabilities

---

## ✨ Features

### 🛍️ E-Commerce Functionality

- **Product Catalog** - Browse 12+ curated premium tech products
- **Shopping Cart** - Add, remove, and update quantities with real-time total calculation
- **Checkout System** - Complete order form with validation
- **Product Quick View** - Modal for detailed product information
- **Search & Filter** - Find products by category, price range, and ratings
- **Persistent Cart** - Cart state saved in localStorage

### 🎨 Design & UI

- **Custom Cursor** - Magnetic interactive cursor for desktop
- **Particle Background** - Dynamic particle effects
- **Glassmorphism** - Modern frosted glass UI components
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Animations** - Scroll-based animations and micro-interactions
- **Custom Loading Screen** - Branded preloader experience
- **Responsive Navigation** - Mobile-first hamburger menu

### 🏗️ Technical Features

- **ES6 Modules** - Clean, organized codebase
- **Modular Architecture** - Separated concerns (data, UI, cart, animations)
- **No Dependencies** - Pure vanilla JavaScript
- **SEO Optimized** - Meta tags and semantic HTML
- **Modern Fonts** - Google Fonts (Inter & Outfit)
- **Image Optimization** - Unsplash CDN integration

---

## 📁 Project Structure

```
ecommerce/
├── index.html              # Homepage
├── products.html           # Products catalog page
├── product.html            # Individual product page
├── checkout.html           # Checkout page
├── about.html              # About page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet (77KB+)
├── HOW_TO_RUN.md          # Development setup guide
│
├── js/                     # Modular JavaScript
│   ├── main.js            # Entry point
│   ├── data.js            # Products & testimonials data
│   ├── utils.js           # Utility functions
│   ├── animations.js      # Animation controllers
│   ├── ui.js              # UI components & interactions
│   ├── cart.js            # Shopping cart logic
│   ├── products.js        # Product rendering & filtering
│   ├── carousels.js       # Carousel components
│   └── forms.js           # Form validation & handling
│
└── .git/                  # Git repository
```

---

## 🚀 Getting Started

### Prerequisites

You need one of the following to run the project:

- **Python 3.x** (easiest option)
- **VS Code** with Live Server extension
- **Node.js** with npx

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdulSami10/ecommerce.git
   cd ecommerce
   ```

2. **Run a local web server**

   **⚠️ IMPORTANT:** Do NOT open `index.html` directly in your browser. The project uses ES6 modules which require a web server due to CORS restrictions.

   **Option 1: Python Server (Recommended)**

   ```bash
   python -m http.server 8080
   ```

   Then open: **http://localhost:8080**

   **Option 2: VS Code Live Server**

   - Install the "Live Server" extension
   - Right-click any `.html` file → "Open with Live Server"

   **Option 3: Node.js**

   ```bash
   npx http-server -p 8080
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8080`
   - Enjoy the NEXUS experience! 🎉

---

## 🎯 Usage

### Shopping Experience

1. **Browse Products** - Explore featured items on the homepage or visit the products page
2. **Filter & Search** - Use category filters, price range sliders, and search bar
3. **View Details** - Click "Quick View" or product images for detailed information
4. **Add to Cart** - Select quantity and add items to your shopping cart
5. **Checkout** - Click "Proceed to Checkout" and fill out the order form

### Theme Switching

- Click the sun/moon icon in the header to toggle between light and dark themes

### Interactive Features

- Hover over buttons for magnetic cursor effects (desktop)
- Scroll to trigger fade-in animations
- Experience smooth carousels on the homepage

---

## 🛠️ Technologies Used

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **HTML5**             | Semantic structure and SEO                 |
| **CSS3**              | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Interactive functionality                  |
| **ES6 Modules**       | Code organization and reusability          |
| **LocalStorage API**  | Persistent shopping cart                   |
| **Google Fonts**      | Typography (Inter, Outfit)                 |
| **Unsplash API**      | High-quality product images                |

---

## 📱 Responsive Design

NEXUS is fully responsive and optimized for:

- 📱 **Mobile** (320px - 767px)
- 📱 **Tablet** (768px - 1023px)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Screens** (1440px+)

---

## 🎨 Design Philosophy

### Color Palette

- **Primary Gradient**: Purple to pink (`#6366f1` → `#a855f7`)
- **Dark Theme**: Rich dark backgrounds with vibrant accents
- **Light Theme**: Clean whites with subtle grays

### Typography

- **Headings**: Outfit (Bold, 600-800 weight)
- **Body Text**: Inter (300-500 weight)

### Effects

- Glassmorphism with backdrop blur
- Smooth CSS transitions (0.3s ease)
- Hover states with scale and glow effects
- Particle background animations

---

## 📦 Key Components

### Product Card

- Product image with hover effects
- Badge indicators (New, Sale, Trending)
- Star ratings and review counts
- Price display with original price strikethrough
- Quick view and add-to-cart buttons

### Shopping Cart

- Sidebar overlay with smooth slide-in
- Item list with thumbnails
- Quantity adjustment controls
- Real-time subtotal calculation
- Persistent across sessions

### Carousels

- Featured products carousel
- Customer testimonials slider
- Touch-enabled for mobile devices
- Auto-play with manual controls

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported - ES6 modules required)

---

## 📝 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database connectivity (MongoDB/PostgreSQL)
- [ ] User authentication and accounts
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics integration

---

## 👨‍💻 Author

**Abdul Sami**

- GitHub: [@AbdulSami10](https://github.com/AbdulSami10)
- Project: NEXUS E-Commerce Platform

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- **Unsplash** - For beautiful product imagery
- **Google Fonts** - For Inter and Outfit typefaces
- **Modern Web Design Community** - For inspiration and best practices

---

<div align="center">

**Built with 💙 by Abdul Sami**

_Making luxury tech shopping accessible and beautiful_

⭐ Star this repo if you found it helpful!

</div>

# NEXUS ◈

<div align="center">

**Premium Tech & Lifestyle E-Commerce Platform**

_Experience the Future of Luxury Tech Shopping_

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ES6 Modules](https://img.shields.io/badge/ES6+-Modules-orange?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</div>

---

## 🌟 About

**NEXUS** is a cutting-edge, premium e-commerce platform designed for luxury tech and lifestyle products. Built with modern web technologies, it delivers a stunning user experience with smooth animations, glassmorphism effects, and a responsive design that works flawlessly across all devices.

This project showcases advanced front-end development with a focus on:

- **Premium UI/UX Design** with modern aesthetics
- **Modular ES6 Architecture** for maintainability
- **Smooth Animations** and interactive elements
- **Fully Responsive** design for mobile, tablet, and desktop
- **Shopping Cart** functionality with persistent storage
- **Product Filtering** and search capabilities

---

## ✨ Features

### 🛍️ E-Commerce Functionality

- **Product Catalog** - Browse 12+ curated premium tech products
- **Shopping Cart** - Add, remove, and update quantities with real-time total calculation
- **Checkout System** - Complete order form with validation
- **Product Quick View** - Modal for detailed product information
- **Search & Filter** - Find products by category, price range, and ratings
- **Persistent Cart** - Cart state saved in localStorage

### 🎨 Design & UI

- **Custom Cursor** - Magnetic interactive cursor for desktop
- **Particle Background** - Dynamic particle effects
- **Glassmorphism** - Modern frosted glass UI components
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Animations** - Scroll-based animations and micro-interactions
- **Custom Loading Screen** - Branded preloader experience
- **Responsive Navigation** - Mobile-first hamburger menu

### 🏗️ Technical Features

- **ES6 Modules** - Clean, organized codebase
- **Modular Architecture** - Separated concerns (data, UI, cart, animations)
- **No Dependencies** - Pure vanilla JavaScript
- **SEO Optimized** - Meta tags and semantic HTML
- **Modern Fonts** - Google Fonts (Inter & Outfit)
- **Image Optimization** - Unsplash CDN integration

---

## 📁 Project Structure

```
ecommerce/
├── index.html              # Homepage
├── products.html           # Products catalog page
├── product.html            # Individual product page
├── checkout.html           # Checkout page
├── about.html              # About page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet (77KB+)
├── HOW_TO_RUN.md          # Development setup guide
│
├── js/                     # Modular JavaScript
│   ├── main.js            # Entry point
│   ├── data.js            # Products & testimonials data
│   ├── utils.js           # Utility functions
│   ├── animations.js      # Animation controllers
│   ├── ui.js              # UI components & interactions
│   ├── cart.js            # Shopping cart logic
│   ├── products.js        # Product rendering & filtering
│   ├── carousels.js       # Carousel components
│   └── forms.js           # Form validation & handling
│
└── .git/                  # Git repository
```

---

## 🚀 Getting Started

### Prerequisites

You need one of the following to run the project:

- **Python 3.x** (easiest option)
- **VS Code** with Live Server extension
- **Node.js** with npx

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdulSami10/ecommerce.git
   cd ecommerce
   ```

2. **Run a local web server**

   **⚠️ IMPORTANT:** Do NOT open `index.html` directly in your browser. The project uses ES6 modules which require a web server due to CORS restrictions.

   **Option 1: Python Server (Recommended)**

   ```bash
   python -m http.server 8080
   ```

   Then open: **http://localhost:8080**

   **Option 2: VS Code Live Server**

   - Install the "Live Server" extension
   - Right-click any `.html` file → "Open with Live Server"

   **Option 3: Node.js**

   ```bash
   npx http-server -p 8080
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8080`
   - Enjoy the NEXUS experience! 🎉

---

## 🎯 Usage

### Shopping Experience

1. **Browse Products** - Explore featured items on the homepage or visit the products page
2. **Filter & Search** - Use category filters, price range sliders, and search bar
3. **View Details** - Click "Quick View" or product images for detailed information
4. **Add to Cart** - Select quantity and add items to your shopping cart
5. **Checkout** - Click "Proceed to Checkout" and fill out the order form

### Theme Switching

- Click the sun/moon icon in the header to toggle between light and dark themes

### Interactive Features

- Hover over buttons for magnetic cursor effects (desktop)
- Scroll to trigger fade-in animations
- Experience smooth carousels on the homepage

---

## 🛠️ Technologies Used

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **HTML5**             | Semantic structure and SEO                 |
| **CSS3**              | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Interactive functionality                  |
| **ES6 Modules**       | Code organization and reusability          |
| **LocalStorage API**  | Persistent shopping cart                   |
| **Google Fonts**      | Typography (Inter, Outfit)                 |
| **Unsplash API**      | High-quality product images                |

---

## 📱 Responsive Design

NEXUS is fully responsive and optimized for:

- 📱 **Mobile** (320px - 767px)
- 📱 **Tablet** (768px - 1023px)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Screens** (1440px+)

---

## 🎨 Design Philosophy

### Color Palette

- **Primary Gradient**: Purple to pink (`#6366f1` → `#a855f7`)
- **Dark Theme**: Rich dark backgrounds with vibrant accents
- **Light Theme**: Clean whites with subtle grays

### Typography

- **Headings**: Outfit (Bold, 600-800 weight)
- **Body Text**: Inter (300-500 weight)

### Effects

- Glassmorphism with backdrop blur
- Smooth CSS transitions (0.3s ease)
- Hover states with scale and glow effects
- Particle background animations

---

## 📦 Key Components

### Product Card

- Product image with hover effects
- Badge indicators (New, Sale, Trending)
- Star ratings and review counts
- Price display with original price strikethrough
- Quick view and add-to-cart buttons

### Shopping Cart

- Sidebar overlay with smooth slide-in
- Item list with thumbnails
- Quantity adjustment controls
- Real-time subtotal calculation
- Persistent across sessions

### Carousels

- Featured products carousel
- Customer testimonials slider
- Touch-enabled for mobile devices
- Auto-play with manual controls

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported - ES6 modules required)

---

## 📝 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database connectivity (MongoDB/PostgreSQL)
- [ ] User authentication and accounts
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics integration

---

## 👨‍💻 Author

**Abdul Sami**

- GitHub: [@AbdulSami10](https://github.com/AbdulSami10)
- Project: NEXUS E-Commerce Platform

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- **Unsplash** - For beautiful product imagery
- **Google Fonts** - For Inter and Outfit typefaces
- **Modern Web Design Community** - For inspiration and best practices

---

<div align="center">

**Built with 💙 by Abdul Sami**

_Making luxury tech shopping accessible and beautiful_

⭐ Star this repo if you found it helpful!

</div>
