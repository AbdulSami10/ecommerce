# NEXUS E-Commerce - Modular JavaScript Structure

This document explains the refactored modular JavaScript structure for the NEXUS e-commerce project.

## 📁 File Structure

```
ecommerce/
├── js/
│   ├── data.js          # Products and testimonials data
│   ├── utils.js         # Utility functions (formatPrice, generateStars, debounce, $, $$)
│   ├── animations.js    # Visual effects (CustomCursor, ParticleSystem, MagneticButtons, ScrollAnimations, CounterAnimation, LoadingScreen)
│   ├── ui.js            # UI components (Header, Search, Toast, ThemeToggle, Newsletter)
│   ├── cart.js          # Shopping cart functionality
│   ├── products.js      # Product-related (ProductModal, ProductsGrid, ProductDetailPage)
│   ├── carousels.js     # Carousel components (FeaturedCarousel, TestimonialsCarousel)
│   ├── forms.js         # Form handlers (ContactForm, Checkout)
│   └── main.js          # Main initialization and app setup
├── script.backup.js     # Original monolithic script (backup)
└── *.html               # HTML files updated to use ES6 modules
```

## 🔧 Module Descriptions

### data.js
- Exports `products` array (12 products with full details)
- Exports `testimonials` array (5 customer testimonials)

### utils.js
- `$` - Shorthand for `document.querySelector`
- `$$` - Shorthand for `document.querySelectorAll`
- `formatPrice(price)` - Formats numbers as currency
- `generateStars(rating)` - Generates star rating display
- `debounce(func, wait)` - Debounce utility for performance

### animations.js
- `CustomCursor` - Custom cursor with smooth follow animation
- `ParticleSystem` - Animated background particles
- `MagneticButtons` - Magnetic hover effect for buttons
- `ScrollAnimations` - Intersection Observer based scroll animations
- `CounterAnimation` - Animated number counters
- `LoadingScreen` - Initial loading screen

### ui.js
- `Header` - Header scroll effects and mobile menu
- `Search` - Search overlay with product suggestions
- `Toast` - Toast notification system
- `ThemeToggle` - Dark/light theme switcher
- `Newsletter` - Newsletter form handler

### cart.js
- `Cart` - Complete shopping cart functionality
  - Add/remove items
  - Update quantities
  - LocalStorage persistence
  - Cart sidebar UI

### products.js
- `ProductModal` - Quick view modal for products
- `ProductsGrid` - Products page with filtering, sorting, pagination
- `ProductDetailPage` - Individual product detail page

### carousels.js
- `FeaturedCarousel` - Featured products carousel
- `TestimonialsCarousel` - Customer testimonials carousel with autoplay

### forms.js
- `ContactForm` - Contact form submission handler
- `Checkout` - Complete checkout flow with order processing

### main.js
- Main entry point that imports and initializes all modules
- Page-specific component initialization
- Global object setup (window.toast, window.cart, window.productModal)

## 🚀 How It Works

1. **ES6 Modules**: All HTML files now load `main.js` as a module:
   ```html
   <script type="module" src="js/main.js"></script>
   ```

2. **Imports**: Each module imports only what it needs:
   ```javascript
   import { $, formatPrice } from './utils.js';
   import { products } from './data.js';
   ```

3. **Exports**: Each module exports its classes/functions:
   ```javascript
   export class Cart { ... }
   export function formatPrice(price) { ... }
   ```

4. **Initialization**: `main.js` initializes all components on DOMContentLoaded

## ✅ Benefits

1. **Better Organization**: Code is grouped by functionality
2. **Easier Maintenance**: Find and update specific features quickly
3. **Reduced Complexity**: Each file has a clear, single responsibility
4. **Better Performance**: Browsers can cache modules separately
5. **Modern Standards**: Uses ES6 modules instead of global scope pollution
6. **Type Safety Ready**: Easy to add TypeScript in the future

## 🔄 Migration from Old Structure

The original `script.js` (1846 lines) has been:
- Backed up as `script.backup.js`
- Split into 9 focused modules
- All HTML files updated to use the new structure

## 🧪 Testing

All functionality remains identical to the original implementation:
- ✅ Cart operations
- ✅ Product filtering and sorting
- ✅ Modal interactions
- ✅ Form submissions
- ✅ Animations and visual effects
- ✅ Theme switching
- ✅ Search functionality

## 📝 Notes

- All modules use strict mode implicitly (ES6 modules)
- No global variables except `window.toast`, `window.cart`, and `window.productModal` (needed for cross-component communication)
- Browser compatibility: Modern browsers with ES6 module support required
