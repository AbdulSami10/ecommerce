/* ========================================
   NEXUS - Shopping Cart Module
   Cart functionality and state management
   ======================================== */

import { $, $$, formatPrice } from './utils.js';

export class Cart {
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
