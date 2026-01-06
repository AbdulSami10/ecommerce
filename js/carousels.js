import { $, $$, debounce, formatPrice } from "./utils.js";
import { products, testimonials } from "./data.js";

// ============ FEATURED CAROUSEL ============
export class FeaturedCarousel {
  constructor() {
    this.track = $("#featured-track");
    this.prevBtn = $("#featured-prev");
    this.nextBtn = $("#featured-next");
    this.dotsContainer = $("#featured-dots");

    this.currentIndex = 0;
    this.itemsPerView = 3;

    this.init();
  }

  init() {
    this.renderCards();
    this.renderDots();
    this.updatePosition();

    this.prevBtn?.addEventListener("click", () => this.prev());
    this.nextBtn?.addEventListener("click", () => this.next());

    window.addEventListener(
      "resize",
      debounce(() => this.handleResize(), 200)
    );
    this.handleResize();
  }

  renderCards() {
    const featured = products.filter((p) => p.featured);

    this.track.innerHTML = featured
      .map((product) => {
        const imageContent = product.image
          ? `<img src="${product.image}" alt="${product.name}">`
          : product.emoji;

        return `
            <div class="featured-card" data-id="${product.id}">
                <div class="featured-card-image">${imageContent}</div>
                <div class="featured-card-content">
                    ${
                      product.badge
                        ? `<span class="featured-card-badge badge-${product.badge}">${product.badge}</span>`
                        : ""
                    }
                    <h3 class="featured-card-title">${product.name}</h3>
                    <p class="featured-card-price">
                        ${formatPrice(product.price)}
                        ${
                          product.originalPrice
                            ? `<span class="original">${formatPrice(
                                product.originalPrice
                              )}</span>`
                            : ""
                        }
                    </p>
                </div>
            </div>
        `;
      })
      .join("");

    this.track.querySelectorAll(".featured-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = parseInt(card.dataset.id);
        const product = products.find((p) => p.id === id);
        if (product) window.productModal.open(product);
      });
    });
  }

  renderDots() {
    const featured = products.filter((p) => p.featured);
    const totalDots = Math.ceil(featured.length / this.itemsPerView);

    this.dotsContainer.innerHTML = Array(totalDots)
      .fill(0)
      .map(
        (_, i) =>
          `<div class="carousel-dot ${
            i === 0 ? "active" : ""
          }" data-index="${i}"></div>`
      )
      .join("");

    this.dotsContainer.querySelectorAll(".carousel-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
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
    const featured = products.filter((p) => p.featured);
    const maxIndex = Math.ceil(featured.length / this.itemsPerView) - 1;
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : maxIndex;
    this.updatePosition();
  }

  next() {
    const featured = products.filter((p) => p.featured);
    const maxIndex = Math.ceil(featured.length / this.itemsPerView) - 1;
    this.currentIndex =
      this.currentIndex < maxIndex ? this.currentIndex + 1 : 0;
    this.updatePosition();
  }

  updatePosition() {
    const cardWidth =
      this.track.querySelector(".featured-card")?.offsetWidth || 380;
    const gap = 30;
    const offset = this.currentIndex * (cardWidth + gap) * this.itemsPerView;

    this.track.style.transform = `translateX(-${offset}px)`;

    this.dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex);
    });
  }
}

// ============ TESTIMONIALS CAROUSEL ============
export class TestimonialsCarousel {
  constructor() {
    this.track = $("#testimonials-track");
    this.prevBtn = $("#testimonials-prev");
    this.nextBtn = $("#testimonials-next");
    this.dotsContainer = $("#testimonials-dots");

    this.currentIndex = 0;
    this.autoplayInterval = null;

    this.init();
  }

  init() {
    this.renderCards();
    this.renderDots();
    this.startAutoplay();

    this.prevBtn?.addEventListener("click", () => {
      this.stopAutoplay();
      this.prev();
      this.startAutoplay();
    });

    this.nextBtn?.addEventListener("click", () => {
      this.stopAutoplay();
      this.next();
      this.startAutoplay();
    });
  }

  renderCards() {
    this.track.innerHTML = testimonials
      .map(
        (t) => `
            <div class="testimonial-card">
                <div class="testimonial-rating">${"★".repeat(t.rating)}</div>
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${t.avatar}</div>
                    <div class="author-info">
                        <h4>${t.author}</h4>
                        <span>${t.role}</span>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  renderDots() {
    this.dotsContainer.innerHTML = testimonials
      .map(
        (_, i) =>
          `<div class="carousel-dot ${
            i === 0 ? "active" : ""
          }" data-index="${i}"></div>`
      )
      .join("");

    this.dotsContainer.querySelectorAll(".carousel-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        this.stopAutoplay();
        this.currentIndex = parseInt(dot.dataset.index);
        this.updatePosition();
        this.startAutoplay();
      });
    });
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : testimonials.length - 1;
    this.updatePosition();
  }

  next() {
    this.currentIndex =
      this.currentIndex < testimonials.length - 1 ? this.currentIndex + 1 : 0;
    this.updatePosition();
  }

  updatePosition() {
    const cardWidth =
      this.track.querySelector(".testimonial-card")?.offsetWidth || 380;
    const gap = 30;
    const offset = this.currentIndex * (cardWidth + gap);

    this.track.style.transform = `translateX(-${offset}px)`;

    this.dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === this.currentIndex);
    });
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.next(), 5000);
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
}
