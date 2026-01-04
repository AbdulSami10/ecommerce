/* ========================================
   NEXUS - Luxury E-Commerce JavaScript
   ======================================== */

const products = [
    {
        id: 1,
        name: "Quantum Pro X",
        category: "audio",
        price: 349,
        originalPrice: 449,
        rating: 4.9,
        reviews: 2847,
        badge: "new",
        emoji: "🎧",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
        description: "Experience unparalleled audio quality with our flagship wireless headphones. Featuring active noise cancellation, 40-hour battery life, and premium memory foam cushions.",
        featured: true
    },
    {
        id: 2,
        name: "Nova Smart Watch",
        category: "wearables",
        price: 299,
        originalPrice: null,
        rating: 4.7,
        reviews: 1923,
        badge: "trending",
        emoji: "⌚",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
        description: "Your ultimate fitness companion with advanced health monitoring, GPS tracking, and seamless smartphone integration. Water-resistant up to 50 meters.",
        featured: true
    },
    {
        id: 3,
        name: "Eclipse Speakers",
        category: "audio",
        price: 599,
        originalPrice: 799,
        rating: 4.8,
        reviews: 856,
        badge: "sale",
        emoji: "🔊",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
        description: "Immersive 360° sound experience with our premium smart speakers. Voice-controlled with multi-room audio support and stunning design.",
        featured: true
    },
    {
        id: 4,
        name: "Titan Gaming Controller",
        category: "gaming",
        price: 79,
        originalPrice: null,
        rating: 4.6,
        reviews: 3421,
        badge: null,
        emoji: "🎮",
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&q=80",
        description: "Precision gaming controller with adaptive triggers, haptic feedback, and customizable buttons. Compatible with all major platforms."
    },
    {
        id: 5,
        name: "Prism VR Headset",
        category: "gaming",
        price: 499,
        originalPrice: 599,
        rating: 4.8,
        reviews: 1245,
        badge: "sale",
        emoji: "🥽",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80",
        description: "Next-generation virtual reality with 4K resolution per eye, inside-out tracking, and an extensive game library. Step into new worlds.",
        featured: true
    },
    {
        id: 6,
        name: "Aura Smart Lamp",
        category: "smart-home",
        price: 149,
        originalPrice: null,
        rating: 4.5,
        reviews: 2156,
        badge: "new",
        emoji: "💡",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
        description: "Transform your space with 16 million colors and smart scheduling. Works with all major voice assistants and smart home systems."
    },
    {
        id: 7,
        name: "Zenith Earbuds Pro",
        category: "audio",
        price: 199,
        originalPrice: 249,
        rating: 4.7,
        reviews: 4523,
        badge: "trending",
        emoji: "🎵",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
        description: "True wireless earbuds with spatial audio, adaptive EQ, and up to 30 hours of battery life with the charging case.",
        featured: true
    },
    {
        id: 8,
        name: "Orbit Wireless Charger",
        category: "accessories",
        price: 69,
        originalPrice: null,
        rating: 4.4,
        reviews: 1876,
        badge: null,
        emoji: "🔋",
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&q=80",
        description: "Fast wireless charging for all Qi-compatible devices. Sleek design with LED charging indicator and foreign object detection."
    },
    {
        id: 9,
        name: "Nexus Hub Max",
        category: "smart-home",
        price: 249,
        originalPrice: 299,
        rating: 4.6,
        reviews: 987,
        badge: "sale",
        emoji: "🏠",
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&q=80",
        description: "The central hub for your smart home. Control all your devices, stream content, and make video calls on the beautiful 10-inch display."
    },
    {
        id: 10,
        name: "Stealth Gaming Mouse",
        category: "gaming",
        price: 89,
        originalPrice: null,
        rating: 4.8,
        reviews: 2654,
        badge: "trending",
        emoji: "🖱️",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
        description: "Ultra-precise gaming mouse with 25,000 DPI sensor, programmable buttons, and RGB lighting. Designed for esports professionals."
    },
    {
        id: 11,
        name: "Crystal Power Bank",
        category: "accessories",
        price: 59,
        originalPrice: null,
        rating: 4.3,
        reviews: 3245,
        badge: null,
        emoji: "⚡",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
        description: "20,000mAh portable power bank with fast charging support. Charge multiple devices simultaneously with the transparent design."
    },
    {
        id: 12,
        name: "Pulse Fitness Band",
        category: "wearables",
        price: 129,
        originalPrice: 159,
        rating: 4.5,
        reviews: 1654,
        badge: "sale",
        emoji: "📱",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80",
        description: "Lightweight fitness tracker with heart rate monitoring, sleep analysis, and 14-day battery life. Your 24/7 health companion.",
        featured: true
    }
];

const testimonials = [
    {
        id: 1,
        text: "The Quantum Pro X headphones are absolutely incredible. The sound quality is unmatched, and the noise cancellation is perfect for my daily commute. Best purchase I've made this year!",
        author: "Sarah Chen",
        role: "Music Producer",
        avatar: "SC",
        rating: 5
    },
    {
        id: 2,
        text: "I've been using the Nova Smart Watch for 3 months now, and it's completely changed how I track my fitness. The battery life is amazing, and it looks stunning on my wrist.",
        author: "Marcus Johnson",
        role: "Fitness Trainer",
        avatar: "MJ",
        rating: 5
    },
    {
        id: 3,
        text: "NEXUS customer service is exceptional. Had a small issue with my order and they resolved it within hours. The products are premium quality and worth every penny.",
        author: "Emma Rodriguez",
        role: "Tech Enthusiast",
        avatar: "ER",
        rating: 5
    },
    {
        id: 4,
        text: "The Eclipse Speakers transformed my living room into a concert hall. The sound is rich, detailed, and fills the entire space. Highly recommend!",
        author: "David Park",
        role: "Audio Engineer",
        avatar: "DP",
        rating: 5
    },
    {
        id: 5,
        text: "Fast shipping, beautiful packaging, and exceptional product quality. NEXUS has become my go-to for all premium tech purchases. Simply outstanding!",
        author: "Lisa Thompson",
        role: "Designer",
        avatar: "LT",
        rating: 5
    }
];

// ============ UTILITY FUNCTIONS ============
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar && fullStars < 5) stars += '☆';
    stars += '☆'.repeat(5 - Math.ceil(rating));
    return stars;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============ CUSTOM CURSOR ============
class CustomCursor {
    constructor() {
        this.dot = $('.cursor-dot');
        this.outline = $('.cursor-outline');
        this.posX = 0;
        this.posY = 0;
        this.mouseX = 0;
        this.mouseY = 0;

        if (window.innerWidth > 1024) {
            this.init();
        }
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            if (this.dot) {
                this.dot.style.left = `${e.clientX}px`;
                this.dot.style.top = `${e.clientY}px`;
            }
        });

        this.animate();
        this.setupHoverEffects();
    }

    animate() {
        this.posX += (this.mouseX - this.posX) * 0.15;
        this.posY += (this.mouseY - this.posY) * 0.15;

        if (this.outline) {
            this.outline.style.left = `${this.posX}px`;
            this.outline.style.top = `${this.posY}px`;
        }

        requestAnimationFrame(() => this.animate());
    }

    setupHoverEffects() {
        const hoverElements = $$('a, button, .product-card, .magnetic-btn');

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (this.outline) this.outline.classList.add('hover');
            });

            el.addEventListener('mouseleave', () => {
                if (this.outline) this.outline.classList.remove('hover');
            });
        });
    }
}

// ============ PARTICLES ============
class ParticleSystem {
    constructor() {
        this.container = $('#particles-container');
        this.particleCount = 30;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            animation-duration: ${duration}s;
            animation-delay: -${delay}s;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;

        const colors = ['#00d4ff', '#9333ea', '#ff006e'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        this.container.appendChild(particle);
    }
}

// ============ MAGNETIC BUTTONS ============
class MagneticButtons {
    constructor() {
        this.buttons = $$('.magnetic-btn');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => this.handleMouseMove(e, btn));
            btn.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, btn));
        });
    }

    handleMouseMove(e, btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }

    handleMouseLeave(e, btn) {
        btn.style.transform = 'translate(0, 0)';
    }
}

// ============ SCROLL ANIMATIONS ============
class ScrollAnimations {
    constructor() {
        this.elements = $$('.animate-on-scroll');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(el => observer.observe(el));
    }
}

// ============ HEADER ============
class Header {
    constructor() {
        this.header = $('#header');
        this.mobileMenuBtn = $('#mobile-menu-toggle');
        this.mobileMenu = $('#mobile-menu');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());

        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu on link click
        $$('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        this.mobileMenuBtn.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
        document.body.style.overflow = this.mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.mobileMenuBtn.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============ SEARCH ============
class Search {
    constructor() {
        this.toggle = $('#search-toggle');
        this.overlay = $('#search-overlay');
        this.close = $('#search-close');
        this.input = $('#search-input');
        this.suggestions = $('#search-suggestions');
        this.init();
    }

    init() {
        this.toggle?.addEventListener('click', () => this.open());
        this.close?.addEventListener('click', () => this.closeSearch());
        this.overlay?.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.closeSearch();
        });

        this.input?.addEventListener('input', debounce((e) => this.handleSearch(e), 300));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeSearch();
        });
    }

    open() {
        this.overlay.classList.add('active');
        this.input.focus();
        document.body.style.overflow = 'hidden';
    }

    closeSearch() {
        this.overlay.classList.remove('active');
        this.input.value = '';
        this.suggestions.innerHTML = '';
        document.body.style.overflow = '';
    }

    handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            this.suggestions.innerHTML = '';
            return;
        }

        const results = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        this.renderSuggestions(results);
    }

    renderSuggestions(results) {
        if (results.length === 0) {
            this.suggestions.innerHTML = '<div class="search-suggestion"><p>No products found</p></div>';
            return;
        }

        this.suggestions.innerHTML = results.slice(0, 5).map(product => `
            <div class="search-suggestion" data-id="${product.id}">
                <div class="search-suggestion-image">${product.emoji}</div>
                <div class="search-suggestion-info">
                    <h4>${product.name}</h4>
                    <span>${formatPrice(product.price)}</span>
                </div>
            </div>
        `).join('');

        // Add click handlers
        this.suggestions.querySelectorAll('.search-suggestion').forEach(el => {
            el.addEventListener('click', () => {
                const productId = parseInt(el.dataset.id);
                const product = products.find(p => p.id === productId);
                if (product) {
                    this.closeSearch();
                    window.productModal.open(product);
                }
            });
        });
    }
}

// ============ CART ============
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.toggle = $('#cart-toggle');
        this.overlay = $('#cart-overlay');
        this.sidebar = $('#cart-sidebar');
        this.close = $('#cart-close');
        this.itemsContainer = $('#cart-items');
        this.countBadge = $('#cart-count');
        this.totalEl = $('#cart-total');
        this.checkoutBtn = $('#checkout-btn');

        this.init();
    }

    init() {
        this.toggle?.addEventListener('click', () => this.openCart());
        this.close?.addEventListener('click', () => this.closeCart());
        this.overlay?.addEventListener('click', () => this.closeCart());
        this.checkoutBtn?.addEventListener('click', () => this.checkout());

        this.render();
        this.updateBadge();
    }

    openCart() {
        this.overlay.classList.add('active');
        this.sidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        this.overlay.classList.remove('active');
        this.sidebar.classList.remove('active');
        document.body.style.overflow = '';
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...product, quantity });
        }

        this.save();
        this.render();
        this.updateBadge();
        this.animateBadge();

        window.toast.show(`${product.name} added to cart`, 'success');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        this.render();
        this.updateBadge();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, Math.min(10, quantity));
            this.save();
            this.render();
        }
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    updateBadge() {
        if (!this.countBadge) return; // Skip if element doesn't exist (e.g., on checkout page)

        const count = this.getTotalItems();
        this.countBadge.textContent = count;
        this.countBadge.classList.toggle('show', count > 0);
    }

    animateBadge() {
        this.countBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            this.countBadge.style.transform = 'scale(1)';
        }, 200);
    }

    checkout() {
        if (this.items.length === 0) {
            window.toast.show('Your cart is empty', 'error');
            return;
        }
        window.location.href = 'checkout.html';
    }

    render() {
        const cartFooter = $('#cart-footer');

        // Skip rendering if cart elements don't exist on this page
        if (!this.itemsContainer) return;

        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = `
                <div class="cart-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <p>Your cart is empty</p>
                    <a href="products.html" class="btn btn-secondary">Start Shopping</a>
                </div>
            `;
            if (cartFooter) cartFooter.style.display = 'none';
            return;
        }

        if (cartFooter) cartFooter.style.display = 'block';

        this.itemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                    <div class="cart-item-controls">
                        <div class="cart-qty-controls">
                            <button class="cart-qty-btn" data-action="decrease">-</button>
                            <span class="cart-qty">${item.quantity}</span>
                            <button class="cart-qty-btn" data-action="increase">+</button>
                        </div>
                        <button class="cart-remove-btn">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');

        if (this.totalEl) {
            this.totalEl.textContent = formatPrice(this.getTotal());
        }

        // Add event listeners
        this.itemsContainer.querySelectorAll('.cart-item').forEach(el => {
            const id = parseInt(el.dataset.id);

            el.querySelector('[data-action="decrease"]')?.addEventListener('click', () => {
                const item = this.items.find(i => i.id === id);
                if (item) this.updateQuantity(id, item.quantity - 1);
            });

            el.querySelector('[data-action="increase"]')?.addEventListener('click', () => {
                const item = this.items.find(i => i.id === id);
                if (item) this.updateQuantity(id, item.quantity + 1);
            });

            el.querySelector('.cart-remove-btn')?.addEventListener('click', () => {
                this.removeItem(id);
            });
        });
    }
}

// ============ TOAST NOTIFICATIONS ============
class Toast {
    constructor() {
        this.container = $('#toast-container');
    }

    show(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        toast.innerHTML = `
            <div class="toast-icon">
                ${type === 'success' ? '✓' : '✕'}
            </div>
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;

        this.container.appendChild(toast);

        toast.querySelector('.toast-close').addEventListener('click', () => this.dismiss(toast));

        setTimeout(() => this.dismiss(toast), 4000);
    }

    dismiss(toast) {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }
}

// ============ PRODUCT MODAL ============
class ProductModal {
    constructor() {
        this.modal = $('#product-modal');
        this.closeBtn = $('#modal-close');
        this.mainImage = $('#modal-main-image');
        this.thumbs = $('#modal-thumbs');
        this.badges = $('#modal-badges');
        this.title = $('#modal-title');
        this.rating = $('#modal-rating');
        this.price = $('#modal-price');
        this.description = $('#modal-description');
        this.quantity = $('#modal-quantity');
        this.addToCartBtn = $('#modal-add-to-cart');
        this.viewDetailsBtn = $('#modal-view-details');
        this.zoomBtn = $('#gallery-zoom');
        this.zoomModal = $('#zoom-modal');
        this.zoomImage = $('#zoom-image');
        this.zoomClose = $('#zoom-close');

        this.currentProduct = null;
        this.init();
    }

    init() {
        this.closeBtn?.addEventListener('click', () => this.close());
        this.modal?.querySelector('.modal-overlay')?.addEventListener('click', () => this.close());

        $('#qty-decrease')?.addEventListener('click', () => this.updateQuantity(-1));
        $('#qty-increase')?.addEventListener('click', () => this.updateQuantity(1));

        this.addToCartBtn?.addEventListener('click', () => this.handleAddToCart());

        this.zoomBtn?.addEventListener('click', () => this.openZoom());
        this.zoomClose?.addEventListener('click', () => this.closeZoom());
        this.zoomModal?.addEventListener('click', (e) => {
            if (e.target === this.zoomModal) this.closeZoom();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
                this.closeZoom();
            }
        });
    }

    open(product) {
        this.currentProduct = product;
        this.quantity.value = 1;

        // Update modal content with image or emoji
        if (product.image) {
            this.mainImage.src = product.image;
            this.mainImage.alt = product.name;
        } else {
            this.mainImage.src = '';
            this.mainImage.alt = product.emoji;
        }

        const thumbContent = product.image ?
            `<img src="${product.image}" alt="${product.name}">` : product.emoji;

        this.thumbs.innerHTML = `
            <div class="gallery-thumb active">${thumbContent}</div>
            <div class="gallery-thumb">${thumbContent}</div>
            <div class="gallery-thumb">${thumbContent}</div>
        `;

        this.badges.innerHTML = product.badge ?
            `<span class="product-badge badge-${product.badge}">${product.badge}</span>` : '';

        this.title.textContent = product.name;

        this.rating.innerHTML = `
            <span class="stars">${generateStars(product.rating)}</span>
            <span class="count">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
        `;

        this.price.innerHTML = product.originalPrice ?
            `${formatPrice(product.price)}<span class="original">${formatPrice(product.originalPrice)}</span>` :
            formatPrice(product.price);

        this.description.textContent = product.description;

        // Set View Details link
        if (this.viewDetailsBtn) {
            this.viewDetailsBtn.href = `product.html?id=${product.id}`;
        }

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    updateQuantity(delta) {
        const newVal = parseInt(this.quantity.value) + delta;
        this.quantity.value = Math.max(1, Math.min(10, newVal));
    }

    handleAddToCart() {
        if (this.currentProduct) {
            window.cart.addItem(this.currentProduct, parseInt(this.quantity.value));
            this.close();
        }
    }

    // openZoom() {
    //     if (this.currentProduct) {
    //         this.zoomImage.innerHTML = `<span class="placeholder-emoji">${this.currentProduct.emoji}</span>`;
    //         this.zoomModal.classList.add('active');
    //     }
    // }

    // closeZoom() {
    //     this.zoomModal.classList.remove('active');
    // }
}

// ============ PRODUCTS GRID ============
class ProductsGrid {
    constructor() {
        this.grid = $('#products-grid');
        this.countEl = $('#products-showing');
        this.sortSelect = $('#sort-select');
        this.pagination = $('#products-pagination');
        this.filterToggle = $('#mobile-filter-toggle');
        this.filterSidebar = $('#filter-sidebar');
        this.clearFilters = $('#clear-filters');
        this.applyFilters = $('#apply-filters');

        this.filters = {
            categories: ['all'],
            priceMin: 0,
            priceMax: 2000,
            rating: 0
        };

        this.currentPage = 1;
        this.itemsPerPage = 8;

        this.init();
    }

    init() {
        this.sortSelect?.addEventListener('change', () => this.render());
        this.filterToggle?.addEventListener('click', () => this.toggleFilters());
        this.clearFilters?.addEventListener('click', () => this.resetFilters());
        this.applyFilters?.addEventListener('click', () => {
            this.collectFilters();
            this.render();
            this.toggleFilters();
        });

        // Price range slider
        $('#price-range')?.addEventListener('input', (e) => {
            $('#price-max').value = e.target.value;
        });

        // Simulate loading
        setTimeout(() => this.render(), 800);
    }

    toggleFilters() {
        this.filterSidebar.classList.toggle('active');
    }

    collectFilters() {
        // Categories
        const checkedCats = $$('#category-filters input:checked');
        this.filters.categories = Array.from(checkedCats).map(input => input.value);

        // Price
        this.filters.priceMin = parseInt($('#price-min').value) || 0;
        this.filters.priceMax = parseInt($('#price-max').value) || 2000;

        // Rating
        const checkedRating = $('input[name="rating"]:checked');
        this.filters.rating = parseInt(checkedRating?.value) || 0;
    }

    resetFilters() {
        $$('#category-filters input').forEach(input => {
            input.checked = input.value === 'all';
        });
        $('#price-min').value = 0;
        $('#price-max').value = 2000;
        $('#price-range').value = 2000;
        $$('input[name="rating"]').forEach(input => {
            input.checked = input.value === '0';
        });

        this.filters = {
            categories: ['all'],
            priceMin: 0,
            priceMax: 2000,
            rating: 0
        };

        this.render();
    }

    getFilteredProducts() {
        return products.filter(p => {
            // Category filter
            if (!this.filters.categories.includes('all') &&
                !this.filters.categories.includes(p.category)) {
                return false;
            }

            // Price filter
            if (p.price < this.filters.priceMin || p.price > this.filters.priceMax) {
                return false;
            }

            // Rating filter
            if (this.filters.rating > 0 && p.rating < this.filters.rating) {
                return false;
            }

            return true;
        });
    }

    getSortedProducts(filtered) {
        const sortBy = this.sortSelect?.value || 'featured';

        return [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'price-low': return a.price - b.price;
                case 'price-high': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'newest': return b.id - a.id;
                default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
            }
        });
    }

    render() {
        const filtered = this.getFilteredProducts();
        const sorted = this.getSortedProducts(filtered);

        // Pagination
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const paged = sorted.slice(start, start + this.itemsPerPage);

        this.countEl.textContent = filtered.length;

        this.grid.innerHTML = paged.map(product => this.renderProductCard(product)).join('');

        this.renderPagination(filtered.length);
        this.setupCardListeners();
    }

    renderProductCard(product) {
        const badgeHtml = product.badge ?
            `<span class="product-badge badge-${product.badge}">${product.badge}</span>` : '';

        const imageHtml = product.image ?
            `<img src="${product.image}" alt="${product.name}" loading="lazy">` :
            product.emoji;

        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-card-inner">
                    <div class="product-image">
                        ${imageHtml}
                        <div class="product-badges">${badgeHtml}</div>
                        <div class="product-actions">
                            <button class="product-action-btn quick-view-btn" title="Quick View">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                            <a href="product.html?id=${product.id}" class="product-action-btn" title="View Details">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="product-content">
                        <span class="product-category">${product.category}</span>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            <span class="rating-stars">${generateStars(product.rating)}</span>
                            <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                        </div>
                        <div class="product-footer">
                            <span class="product-price">
                                ${formatPrice(product.price)}
                                ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ''}
                            </span>
                            <button class="add-to-cart-btn" title="Add to Cart">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);

        if (totalPages <= 1) {
            this.pagination.innerHTML = '';
            return;
        }

        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === this.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }

        this.pagination.innerHTML = html;

        this.pagination.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentPage = parseInt(btn.dataset.page);
                this.render();
                document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    setupCardListeners() {
        this.grid.querySelectorAll('.product-card').forEach(card => {
            const id = parseInt(card.dataset.id);
            const product = products.find(p => p.id === id);

            if (!product) return;

            card.querySelector('.quick-view-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                window.productModal.open(product);
            });

            card.querySelector('.add-to-cart-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                window.cart.addItem(product);
            });

            card.addEventListener('click', () => {
                window.productModal.open(product);
            });
        });
    }
}

// ============ FEATURED CAROUSEL ============
class FeaturedCarousel {
    constructor() {
        this.track = $('#featured-track');
        this.prevBtn = $('#featured-prev');
        this.nextBtn = $('#featured-next');
        this.dotsContainer = $('#featured-dots');

        this.currentIndex = 0;
        this.itemsPerView = 3;

        this.init();
    }

    init() {
        this.renderCards();
        this.renderDots();
        this.updatePosition();

        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());

        window.addEventListener('resize', debounce(() => this.handleResize(), 200));
        this.handleResize();
    }

    renderCards() {
        const featured = products.filter(p => p.featured);

        this.track.innerHTML = featured.map(product => {
            const imageContent = product.image ?
                `<img src="${product.image}" alt="${product.name}">` : product.emoji;

            return `
            <div class="featured-card" data-id="${product.id}">
                <div class="featured-card-image">${imageContent}</div>
                <div class="featured-card-content">
                    ${product.badge ? `<span class="featured-card-badge badge-${product.badge}">${product.badge}</span>` : ''}
                    <h3 class="featured-card-title">${product.name}</h3>
                    <p class="featured-card-price">
                        ${formatPrice(product.price)}
                        ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ''}
                    </p>
                </div>
            </div>
        `}).join('');

        this.track.querySelectorAll('.featured-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                const product = products.find(p => p.id === id);
                if (product) window.productModal.open(product);
            });
        });
    }

    renderDots() {
        const featured = products.filter(p => p.featured);
        const totalDots = Math.ceil(featured.length / this.itemsPerView);

        this.dotsContainer.innerHTML = Array(totalDots).fill(0).map((_, i) =>
            `<div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');

        this.dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.currentIndex = parseInt(dot.dataset.index);
                this.updatePosition();
            });
        });
    }

    handleResize() {
        if (window.innerWidth < 768) {
            this.itemsPerView = 1;
        } else if (window.innerWidth < 1024) {
            this.itemsPerView = 2;
        } else {
            this.itemsPerView = 3;
        }
        this.renderDots();
        this.updatePosition();
    }

    prev() {
        const featured = products.filter(p => p.featured);
        const maxIndex = Math.ceil(featured.length / this.itemsPerView) - 1;
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : maxIndex;
        this.updatePosition();
    }

    next() {
        const featured = products.filter(p => p.featured);
        const maxIndex = Math.ceil(featured.length / this.itemsPerView) - 1;
        this.currentIndex = this.currentIndex < maxIndex ? this.currentIndex + 1 : 0;
        this.updatePosition();
    }

    updatePosition() {
        const cardWidth = this.track.querySelector('.featured-card')?.offsetWidth || 380;
        const gap = 30;
        const offset = this.currentIndex * (cardWidth + gap) * this.itemsPerView;

        this.track.style.transform = `translateX(-${offset}px)`;

        this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }
}

// ============ TESTIMONIALS CAROUSEL ============
class TestimonialsCarousel {
    constructor() {
        this.track = $('#testimonials-track');
        this.prevBtn = $('#testimonials-prev');
        this.nextBtn = $('#testimonials-next');
        this.dotsContainer = $('#testimonials-dots');

        this.currentIndex = 0;
        this.autoplayInterval = null;

        this.init();
    }

    init() {
        this.renderCards();
        this.renderDots();
        this.startAutoplay();

        this.prevBtn?.addEventListener('click', () => {
            this.stopAutoplay();
            this.prev();
            this.startAutoplay();
        });

        this.nextBtn?.addEventListener('click', () => {
            this.stopAutoplay();
            this.next();
            this.startAutoplay();
        });
    }

    renderCards() {
        this.track.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${t.avatar}</div>
                    <div class="author-info">
                        <h4>${t.author}</h4>
                        <span>${t.role}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderDots() {
        this.dotsContainer.innerHTML = testimonials.map((_, i) =>
            `<div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');

        this.dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                this.stopAutoplay();
                this.currentIndex = parseInt(dot.dataset.index);
                this.updatePosition();
                this.startAutoplay();
            });
        });
    }

    prev() {
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : testimonials.length - 1;
        this.updatePosition();
    }

    next() {
        this.currentIndex = this.currentIndex < testimonials.length - 1 ? this.currentIndex + 1 : 0;
        this.updatePosition();
    }

    updatePosition() {
        const cardWidth = this.track.querySelector('.testimonial-card')?.offsetWidth || 380;
        const gap = 30;
        const offset = this.currentIndex * (cardWidth + gap);

        this.track.style.transform = `translateX(-${offset}px)`;

        this.dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.next(), 5000);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
}

// ============ COUNTER ANIMATION ============
class CounterAnimation {
    constructor() {
        this.counters = $$('.stat-value[data-count]');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(el) {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.textContent = target;
            }
        };

        requestAnimationFrame(animate);
    }
}

// ============ NEWSLETTER ============
class Newsletter {
    constructor() {
        this.form = $('#newsletter-form');
        this.init();
    }

    init() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = $('#newsletter-email').value;

        if (email) {
            window.toast.show('Thank you for subscribing!', 'success');
            this.form.reset();
        }
    }
}

// ============ LOADING SCREEN ============
class LoadingScreen {
    constructor() {
        this.screen = $('#loading-screen');
    }

    hide() {
        setTimeout(() => {
            this.screen.classList.add('hidden');
            document.body.style.overflow = '';
        }, 1500);
    }
}

// ============ INITIALIZE APP ============
document.addEventListener('DOMContentLoaded', () => {
    // Loading screen (only on home page)
    const loadingScreen = $('#loading-screen');
    if (loadingScreen) {
        document.body.style.overflow = 'hidden';
        const loader = new LoadingScreen();
        loader.hide();
    }

    // Initialize all components
    new CustomCursor();
    new ParticleSystem();
    new MagneticButtons();
    new ScrollAnimations();
    new Header();
    new Search();
    new ThemeToggle();

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

    console.log('🚀 NEXUS E-Commerce initialized');
});

// ============ THEME TOGGLE ============
class ThemeToggle {
    constructor() {
        this.toggle = $('#theme-toggle');
        this.init();
    }

    init() {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        this.toggle?.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
}

// ============ CONTACT FORM ============
class ContactForm {
    constructor() {
        this.form = $('#contact-form');
        this.init();
    }

    init() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const name = $('#contact-name').value;
        const email = $('#contact-email').value;
        const subject = $('#contact-subject').value;
        const message = $('#contact-message').value;

        if (name && email && subject && message) {
            window.toast.show('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.form.reset();
        }
    }
}

// ============ PRODUCT DETAIL PAGE ============
class ProductDetailPage {
    constructor() {
        this.init();
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));

        if (!productId) {
            window.location.href = 'products.html';
            return;
        }

        const product = products.find(p => p.id === productId);

        if (!product) {
            window.location.href = 'products.html';
            return;
        }

        this.renderProduct(product);
        this.renderRelatedProducts(product);
        this.setupEventListeners(product);
    }

    renderProduct(product) {
        // Update page title
        document.title = `${product.name} | NEXUS`;

        // Breadcrumb
        $('#breadcrumb-product').textContent = product.name;

        // Image
        if (product.image) {
            $('#product-main-image').src = product.image;
            $('#product-main-image').alt = product.name;
            $('#product-main-emoji').style.display = 'none';
        } else {
            $('#product-main-image').style.display = 'none';
            $('#product-main-emoji').textContent = product.emoji;
        }

        // Thumbnails
        $('#product-thumbnails').innerHTML = `
            <div class="gallery-thumb-item active">${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}</div>
            <div class="gallery-thumb-item">${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}</div>
            <div class="gallery-thumb-item">${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}</div>
        `;

        // Badges
        $('#product-badges').innerHTML = product.badge ?
            `<span class="product-badge badge-${product.badge}">${product.badge}</span>` : '';

        // Name
        $('#product-name').textContent = product.name;

        // Rating
        $('#product-rating').innerHTML = `
            <span class="stars">${generateStars(product.rating)}</span>
            <span class="count">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
        `;

        // Category
        $('#product-category').textContent = product.category;

        // Price
        $('#product-price').innerHTML = product.originalPrice ?
            `${formatPrice(product.price)}<span class="original">${formatPrice(product.originalPrice)}</span>` :
            formatPrice(product.price);

        // Description
        $('#product-description').textContent = product.description;
    }

    renderRelatedProducts(currentProduct) {
        const related = products
            .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
            .slice(0, 4);

        $('#related-products').innerHTML = related.map(product => `
            <a href="product.html?id=${product.id}" class="related-product-card">
                <div class="product-card">
                    <div class="product-card-inner">
                        <div class="product-image">
                            ${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}
                        </div>
                        <div class="product-content">
                            <h3 class="product-title">${product.name}</h3>
                            <span class="product-price">${formatPrice(product.price)}</span>
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    }

    setupEventListeners(product) {
        // Quantity controls
        $('#detail-qty-decrease')?.addEventListener('click', () => {
            const input = $('#detail-quantity');
            input.value = Math.max(1, parseInt(input.value) - 1);
        });

        $('#detail-qty-increase')?.addEventListener('click', () => {
            const input = $('#detail-quantity');
            input.value = Math.min(10, parseInt(input.value) + 1);
        });

        // Add to cart
        $('#detail-add-to-cart')?.addEventListener('click', () => {
            const quantity = parseInt($('#detail-quantity').value);
            window.cart.addItem(product, quantity);
        });
    }
}

// ============ CHECKOUT PAGE ============
class Checkout {
    constructor() {
        this.form = $('#checkout-form');
        this.orderItems = $('#order-items');
        this.confirmationModal = $('#confirmation-modal');

        this.init();
    }

    init() {

        console.log('Checkout initialized');
        console.log('Form:', this.form);
        console.log('OrderItems:', this.orderItems);
        console.log('Confirmation Modal:', this.confirmationModal);

        this.loadCartItems();
        this.setupFormListeners();
        this.formatCardInputs();
    }

    loadCartItems() {
        const cartData = JSON.parse(localStorage.getItem('cart') || '[]');

        console.log('Cart data from localStorage:', cartData);
        console.log('Number of items:', cartData.length);

        if (cartData.length === 0) {
            // Show empty cart message
            const checkoutGrid = document.querySelector('.checkout-grid');
            if (checkoutGrid) {
                checkoutGrid.innerHTML = `
                    <div class="empty-cart-checkout">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <h2>Your Cart is Empty</h2>
                        <p>Add some items to your cart before checking out.</p>
                        <a href="products.html" class="btn btn-primary magnetic-btn">
                            <span>Browse Products</span>
                        </a>
                    </div>
                `;
            }
            return;
        }

        // Re-query if not found
        if (!this.orderItems) {
            this.orderItems = $('#order-items');
            console.log('Re-queried orderItems:', this.orderItems);
        }

        if (!this.orderItems) {
            console.error('Order items container not found in DOM!');
            return;
        }

        // Render order items
        this.orderItems.innerHTML = cartData.map(item => `
            <div class="order-item">
                <div class="order-item-image">
                    ${item.image ? `<img src="${item.image}" alt="${item.name}">` : item.emoji}
                </div>
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-qty">Qty: ${item.quantity}</div>
                </div>
                <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
        `).join('');

        // Calculate totals
        const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.05;
        const total = subtotal + tax;

        const orderSubtotal = document.getElementById('order-subtotal');
        const orderTax = document.getElementById('order-tax');
        const orderTotal = document.getElementById('order-total');

        if (orderSubtotal) orderSubtotal.textContent = formatPrice(subtotal);
        if (orderTax) orderTax.textContent = formatPrice(tax);
        if (orderTotal) orderTotal.textContent = formatPrice(total);
    }

    setupFormListeners() {
        // Payment method toggle
        $$('.payment-method').forEach(method => {
            method.addEventListener('click', () => {
                $$('.payment-method').forEach(m => m.classList.remove('active'));
                method.classList.add('active');

                const cardDetails = $('#card-details');
                if (method.querySelector('input').value === 'card') {
                    cardDetails.style.display = 'flex';
                } else {
                    cardDetails.style.display = 'none';
                }
            });
        });

        // Form submission
        if (this.form) {
            console.log('Adding submit event listener to form');
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            console.error('Checkout form not found!');
        }
    }

    formatCardInputs() {
        // Format card number with spaces
        $('#cardNumber')?.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            value = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = value;
        });

        // Format expiry date
        $('#expiry')?.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });

        // CVV only numbers
        $('#cvv')?.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        const btn = $('#place-order-btn');
        const btnText = btn.querySelector('.btn-text');
        const btnLoader = btn.querySelector('.btn-loader');

        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        btn.disabled = true;

        // Collect form data
        const formData = new FormData(this.form);
        const orderData = {
            email: formData.get('email'),
            phone: formData.get('phone'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            address: formData.get('address'),
            address2: formData.get('address2'),
            city: formData.get('city'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            country: formData.get('country'),
            orderNumber: this.generateOrderNumber(),
            orderDate: new Date().toLocaleDateString(),
            items: JSON.parse(localStorage.getItem('cart') || '[]')
        };

        // Calculate totals
        const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        orderData.subtotal = formatPrice(subtotal);
        orderData.tax = formatPrice(subtotal * 0.1);
        orderData.total = formatPrice(subtotal * 1.1);

        // Build items list for email
        orderData.itemsList = orderData.items.map(item =>
            `${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
        ).join('\n');

        try {
            // Log order data (no email sending)
            this.logOrderData(orderData);

            // Show success
            this.showConfirmation(orderData);

            // Clear cart
            localStorage.removeItem('cart');

        } catch (error) {
            console.error('Email error:', error);
            // Still show confirmation (email might fail but order can proceed)
            this.showConfirmation(orderData);
            localStorage.removeItem('cart');
        }

        // Reset button
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        btn.disabled = false;
    }

    logOrderData(orderData) {
        // Simply log the order data for demo/development purposes
        console.log('Order placed successfully!');
        console.log('Order Number:', orderData.orderNumber);
        console.log('Customer Email:', orderData.email);
        console.log('Order Details:', orderData);
    }

    generateOrderNumber() {
        const timestamp = Date.now().toString(36).toUpperCase();
        const random = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `NX-${timestamp}-${random}`;
    }

    showConfirmation(orderData) {
        $('#order-number').textContent = orderData.orderNumber;
        $('#confirmation-email').textContent = orderData.email;
        this.confirmationModal.classList.add('active');

        // Auto-redirect to home after 5 seconds
        let countdown = 5;
        const redirectBtn = this.confirmationModal.querySelector('.btn-primary span');

        const updateButtonText = () => {
            redirectBtn.textContent = `Continue Shopping (${countdown}s)`;
        };

        updateButtonText();

        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                updateButtonText();
            } else {
                clearInterval(countdownInterval);
                window.location.href = 'index.html';
            }
        }, 1000);

        // Allow manual click to redirect immediately
        const continueBtn = this.confirmationModal.querySelector('.btn-primary');
        continueBtn.onclick = () => {
            clearInterval(countdownInterval);
            window.location.href = 'index.html';
        };
    }
}

