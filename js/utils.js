/* ========================================
   NEXUS - Utility Functions
   Helper functions for formatting and DOM manipulation
   ======================================== */

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

export function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar && fullStars < 5) stars += '☆';
    stars += '☆'.repeat(5 - Math.ceil(rating));
    return stars;
}

export function debounce(func, wait) {
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
