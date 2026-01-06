import { $, $$, formatPrice, generateStars, debounce } from "./utils.js";
import { products } from "./data.js";

// ============ PRODUCT MODAL ============
export class ProductModal {
  constructor() {
    this.modal = $("#product-modal");
    this.closeBtn = $("#modal-close");
    this.mainImage = $("#modal-main-image");
    this.thumbs = $("#modal-thumbs");
    this.badges = $("#modal-badges");
    this.title = $("#modal-title");
    this.rating = $("#modal-rating");
    this.price = $("#modal-price");
    this.description = $("#modal-description");
    this.quantity = $("#modal-quantity");
    this.addToCartBtn = $("#modal-add-to-cart");
    this.viewDetailsBtn = $("#modal-view-details");

    this.currentProduct = null;
    this.init();
  }

  init() {
    this.closeBtn?.addEventListener("click", () => this.close());
    this.modal
      ?.querySelector(".modal-overlay")
      ?.addEventListener("click", () => this.close());

    $("#qty-decrease")?.addEventListener("click", () =>
      this.updateQuantity(-1)
    );
    $("#qty-increase")?.addEventListener("click", () => this.updateQuantity(1));

    this.addToCartBtn?.addEventListener("click", () => this.handleAddToCart());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
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
      this.mainImage.src = "";
      this.mainImage.alt = product.emoji;
    }

    const thumbContent = product.image
      ? `<img src="${product.image}" alt="${product.name}">`
      : product.emoji;

    this.thumbs.innerHTML = `
            <div class="gallery-thumb active">${thumbContent}</div>
            <div class="gallery-thumb">${thumbContent}</div>
            <div class="gallery-thumb">${thumbContent}</div>
        `;

    this.badges.innerHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badge}</span>`
      : "";

    this.title.textContent = product.name;

    this.rating.innerHTML = `
            <span class="stars">${generateStars(product.rating)}</span>
            <span class="count">${
              product.rating
            } (${product.reviews.toLocaleString()} reviews)</span>
        `;

    this.price.innerHTML = product.originalPrice
      ? `${formatPrice(product.price)}<span class="original">${formatPrice(
          product.originalPrice
        )}</span>`
      : formatPrice(product.price);

    this.description.textContent = product.description;

    // Set View Details link
    if (this.viewDetailsBtn) {
      this.viewDetailsBtn.href = `product.html?id=${product.id}`;
    }

    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
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
}

// ============ PRODUCTS GRID ============
export class ProductsGrid {
  constructor() {
    this.grid = $("#products-grid");
    this.countEl = $("#products-showing");
    this.sortSelect = $("#sort-select");
    this.pagination = $("#products-pagination");
    this.filterToggle = $("#mobile-filter-toggle");
    this.filterSidebar = $("#filter-sidebar");
    this.clearFilters = $("#clear-filters");
    this.applyFilters = $("#apply-filters");

    this.filters = {
      categories: ["all"],
      priceMin: 0,
      priceMax: 2000,
      rating: 0,
    };

    this.currentPage = 1;
    this.itemsPerPage = 8;

    this.init();
  }

  init() {
    this.sortSelect?.addEventListener("change", () => this.render());
    this.filterToggle?.addEventListener("click", () => this.toggleFilters());
    this.clearFilters?.addEventListener("click", () => this.resetFilters());
    this.applyFilters?.addEventListener("click", () => {
      this.collectFilters();
      this.render();
      this.toggleFilters();
    });

    // Price range slider
    $("#price-range")?.addEventListener("input", (e) => {
      $("#price-max").value = e.target.value;
    });

    // Simulate loading
    setTimeout(() => this.render(), 800);
  }

  toggleFilters() {
    this.filterSidebar.classList.toggle("active");
  }

  collectFilters() {
    // Categories
    const checkedCats = $$("#category-filters input:checked");
    this.filters.categories = Array.from(checkedCats).map(
      (input) => input.value
    );

    // Price
    this.filters.priceMin = parseInt($("#price-min").value) || 0;
    this.filters.priceMax = parseInt($("#price-max").value) || 2000;

    // Rating
    const checkedRating = $('input[name="rating"]:checked');
    this.filters.rating = parseInt(checkedRating?.value) || 0;
  }

  resetFilters() {
    $$("#category-filters input").forEach((input) => {
      input.checked = input.value === "all";
    });
    $("#price-min").value = 0;
    $("#price-max").value = 2000;
    $("#price-range").value = 2000;
    $$('input[name="rating"]').forEach((input) => {
      input.checked = input.value === "0";
    });

    this.filters = {
      categories: ["all"],
      priceMin: 0,
      priceMax: 2000,
      rating: 0,
    };

    this.render();
  }

  getFilteredProducts() {
    return products.filter((p) => {
      // Category filter
      if (
        !this.filters.categories.includes("all") &&
        !this.filters.categories.includes(p.category)
      ) {
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
    const sortBy = this.sortSelect?.value || "featured";

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
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

    this.grid.innerHTML = paged
      .map((product) => this.renderProductCard(product))
      .join("");

    this.renderPagination(filtered.length);
    this.setupCardListeners();
  }

  renderProductCard(product) {
    const badgeHtml = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badge}</span>`
      : "";

    const imageHtml = product.image
      ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
      : product.emoji;

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
                            <a href="product.html?id=${
                              product.id
                            }" class="product-action-btn" title="View Details">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="product-content">
                        <span class="product-category">${
                          product.category
                        }</span>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            <span class="rating-stars">${generateStars(
                              product.rating
                            )}</span>
                            <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                        </div>
                        <div class="product-footer">
                            <span class="product-price">
                                ${formatPrice(product.price)}
                                ${
                                  product.originalPrice
                                    ? `<span class="original">${formatPrice(
                                        product.originalPrice
                                      )}</span>`
                                    : ""
                                }
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
      this.pagination.innerHTML = "";
      return;
    }

    let html = "";
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn ${
        i === this.currentPage ? "active" : ""
      }" data-page="${i}">${i}</button>`;
    }

    this.pagination.innerHTML = html;

    this.pagination.querySelectorAll(".page-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.currentPage = parseInt(btn.dataset.page);
        this.render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  setupCardListeners() {
    this.grid.querySelectorAll(".product-card").forEach((card) => {
      const id = parseInt(card.dataset.id);
      const product = products.find((p) => p.id === id);

      if (!product) return;

      card.querySelector(".quick-view-btn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        window.productModal.open(product);
      });

      card.querySelector(".add-to-cart-btn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        window.cart.addItem(product);
      });

      card.addEventListener("click", () => {
        window.productModal.open(product);
      });
    });
  }
}

// ============ PRODUCT DETAIL PAGE ============
export class ProductDetailPage {
  constructor() {
    this.init();
  }

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    if (!productId) {
      window.location.href = "products.html";
      return;
    }

    const product = products.find((p) => p.id === productId);

    if (!product) {
      window.location.href = "products.html";
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
    $("#breadcrumb-product").textContent = product.name;

    // Image
    if (product.image) {
      $("#product-main-image").src = product.image;
      $("#product-main-image").alt = product.name;
      $("#product-main-emoji").style.display = "none";
    } else {
      $("#product-main-image").style.display = "none";
      $("#product-main-emoji").textContent = product.emoji;
    }

    // Thumbnails
    $("#product-thumbnails").innerHTML = `
            <div class="gallery-thumb-item active">${
              product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : product.emoji
            }</div>
            <div class="gallery-thumb-item">${
              product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : product.emoji
            }</div>
            <div class="gallery-thumb-item">${
              product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : product.emoji
            }</div>
        `;

    // Badges
    $("#product-badges").innerHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badge}</span>`
      : "";

    // Name
    $("#product-name").textContent = product.name;

    // Rating
    $("#product-rating").innerHTML = `
            <span class="stars">${generateStars(product.rating)}</span>
            <span class="count">${
              product.rating
            } (${product.reviews.toLocaleString()} reviews)</span>
        `;

    // Category
    $("#product-category").textContent = product.category;

    // Price
    $("#product-price").innerHTML = product.originalPrice
      ? `${formatPrice(product.price)}<span class="original">${formatPrice(
          product.originalPrice
        )}</span>`
      : formatPrice(product.price);

    // Description
    $("#product-description").textContent = product.description;
  }

  renderRelatedProducts(currentProduct) {
    const related = products
      .filter(
        (p) =>
          p.category === currentProduct.category && p.id !== currentProduct.id
      )
      .slice(0, 4);

    $("#related-products").innerHTML = related
      .map(
        (product) => `
            <a href="product.html?id=${
              product.id
            }" class="related-product-card">
                <div class="product-card">
                    <div class="product-card-inner">
                        <div class="product-image">
                            ${
                              product.image
                                ? `<img src="${product.image}" alt="${product.name}">`
                                : product.emoji
                            }
                        </div>
                        <div class="product-content">
                            <h3 class="product-title">${product.name}</h3>
                            <span class="product-price">${formatPrice(
                              product.price
                            )}</span>
                        </div>
                    </div>
                </div>
            </a>
        `
      )
      .join("");
  }

  setupEventListeners(product) {
    // Quantity controls
    $("#detail-qty-decrease")?.addEventListener("click", () => {
      const input = $("#detail-quantity");
      input.value = Math.max(1, parseInt(input.value) - 1);
    });

    $("#detail-qty-increase")?.addEventListener("click", () => {
      const input = $("#detail-quantity");
      input.value = Math.min(10, parseInt(input.value) + 1);
    });

    // Add to cart
    $("#detail-add-to-cart")?.addEventListener("click", () => {
      const quantity = parseInt($("#detail-quantity").value);
      window.cart.addItem(product, quantity);
    });
  }
}
