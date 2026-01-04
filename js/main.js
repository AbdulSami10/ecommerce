/* ========================================
   NEXUS - Main Application Module
   Initialization and Application Setup
   ======================================== */

// Import utilities
import { $, $$ } from './utils.js';

// Import animations
import {
    CustomCursor,
    ParticleSystem,
    MagneticButtons,
    ScrollAnimations,
    CounterAnimation,
    LoadingScreen
} from './animations.js';

// Import UI components
import {
    Header,
    Search,
    Toast,
    ThemeToggle,
    Newsletter
} from './ui.js';

// Import cart
import { Cart } from './cart.js';

// Import products
import {
    ProductModal,
    ProductsGrid,
    ProductDetailPage
} from './products.js';

// Import carousels
import {
    FeaturedCarousel,
    TestimonialsCarousel
} from './carousels.js';

// Import forms
import {
    ContactForm,
    Checkout
} from './forms.js';

// ============ INITIALIZE APP ============
document.addEventListener('DOMContentLoaded', () => {
    // Loading screen (only on home page)
    const loadingScreen = $('#loading-screen');
    if (loadingScreen) {
        document.body.style.overflow = 'hidden';
        const loader = new LoadingScreen();
        loader.hide();
    }

    // Initialize all animation components
    new CustomCursor();
    new ParticleSystem();
    new MagneticButtons();
    new ScrollAnimations();

    // Initialize UI components
    new Header();
    new Search();
    new ThemeToggle();

    // Initialize global toast and cart (attach to window for global access)
    window.toast = new Toast();
    window.cart = new Cart();
    window.productModal = new ProductModal();

    // Page-specific initializations
    if ($('#products-grid')) {
        new ProductsGrid();
    }

    if ($('#featured-track')) {
        new FeaturedCarousel();
    }

    if ($('#testimonials-track')) {
        new TestimonialsCarousel();
    }

    if ($$('.stat-value[data-count]').length || $$('.stat-number[data-count]').length) {
        new CounterAnimation();
    }

    if ($('#newsletter-form')) {
        new Newsletter();
    }

    if ($('#contact-form')) {
        new ContactForm();
    }

    if ($('#product-detail')) {
        new ProductDetailPage();
    }

    if ($('#checkout-form')) {
        new Checkout();
    }

    console.log('🚀 NEXUS E-Commerce initialized (Modular version)');
});
