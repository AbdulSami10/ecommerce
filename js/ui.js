import { $, $$, debounce, formatPrice } from "./utils.js";
import { products } from "./data.js";

// ============ HEADER ============
export class Header {
  constructor() {
    this.header = $("#header");
    this.mobileMenuBtn = $("#mobile-menu-toggle");
    this.mobileMenu = $("#mobile-menu");
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.handleScroll());

    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", () =>
        this.toggleMobileMenu()
      );
    }

    // Close mobile menu on link click
    $$(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => this.closeMobileMenu());
    });
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.header.classList.add("scrolled");
    } else {
      this.header.classList.remove("scrolled");
    }
  }

  toggleMobileMenu() {
    this.mobileMenuBtn.classList.toggle("active");
    this.mobileMenu.classList.toggle("active");
    document.body.style.overflow = this.mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  closeMobileMenu() {
    this.mobileMenuBtn.classList.remove("active");
    this.mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ============ SEARCH ============
export class Search {
  constructor() {
    this.toggle = $("#search-toggle");
    this.overlay = $("#search-overlay");
    this.close = $("#search-close");
    this.input = $("#search-input");
    this.suggestions = $("#search-suggestions");
    this.init();
  }

  init() {
    this.toggle?.addEventListener("click", () => this.open());
    this.close?.addEventListener("click", () => this.closeSearch());
    this.overlay?.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.closeSearch();
    });

    this.input?.addEventListener(
      "input",
      debounce((e) => this.handleSearch(e), 300)
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeSearch();
    });
  }

  open() {
    this.overlay.classList.add("active");
    this.input.focus();
    document.body.style.overflow = "hidden";
  }

  closeSearch() {
    this.overlay.classList.remove("active");
    this.input.value = "";
    this.suggestions.innerHTML = "";
    document.body.style.overflow = "";
  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
      this.suggestions.innerHTML = "";
      return;
    }

    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    this.renderSuggestions(results);
  }

  renderSuggestions(results) {
    if (results.length === 0) {
      this.suggestions.innerHTML =
        '<div class="search-suggestion"><p>No products found</p></div>';
      return;
    }

    this.suggestions.innerHTML = results
      .slice(0, 5)
      .map(
        (product) => `
            <div class="search-suggestion" data-id="${product.id}">
                <div class="search-suggestion-image">${product.emoji}</div>
                <div class="search-suggestion-info">
                    <h4>${product.name}</h4>
                    <span>${formatPrice(product.price)}</span>
                </div>
            </div>
        `
      )
      .join("");

    // Add click handlers
    this.suggestions.querySelectorAll(".search-suggestion").forEach((el) => {
      el.addEventListener("click", () => {
        const productId = parseInt(el.dataset.id);
        const product = products.find((p) => p.id === productId);
        if (product) {
          this.closeSearch();
          window.productModal.open(product);
        }
      });
    });
  }
}

// ============ TOAST NOTIFICATIONS ============
export class Toast {
  constructor() {
    this.container = $("#toast-container");
  }

  show(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    toast.innerHTML = `
            <div class="toast-icon">
                ${type === "success" ? "✓" : "✕"}
            </div>
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;

    this.container.appendChild(toast);

    toast
      .querySelector(".toast-close")
      .addEventListener("click", () => this.dismiss(toast));

    setTimeout(() => this.dismiss(toast), 4000);
  }

  dismiss(toast) {
    toast.classList.add("hiding");
    setTimeout(() => toast.remove(), 300);
  }
}

// ============ THEME TOGGLE ============
export class ThemeToggle {
  constructor() {
    this.toggle = $("#theme-toggle");
    this.init();
  }

  init() {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    this.toggle?.addEventListener("click", () => this.toggleTheme());
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
}

// ============ NEWSLETTER ============
export class Newsletter {
  constructor() {
    this.form = $("#newsletter-form");
    this.init();
  }

  init() {
    this.form?.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = $("#newsletter-email").value;

    if (email) {
      window.toast.show("Thank you for subscribing!", "success");
      this.form.reset();
    }
  }
}
