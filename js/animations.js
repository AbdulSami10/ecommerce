import { $, $$ } from "./utils.js";

// ============ CUSTOM CURSOR ============
export class CustomCursor {
  constructor() {
    this.dot = $(".cursor-dot");
    this.outline = $(".cursor-outline");
    this.posX = 0;
    this.posY = 0;
    this.mouseX = 0;
    this.mouseY = 0;

    if (window.innerWidth > 1024) {
      this.init();
    }
  }

  init() {
    document.addEventListener("mousemove", (e) => {
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
    const hoverElements = $$("a, button, .product-card, .magnetic-btn");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (this.outline) this.outline.classList.add("hover");
      });

      el.addEventListener("mouseleave", () => {
        if (this.outline) this.outline.classList.remove("hover");
      });
    });
  }
}

// ============ PARTICLES ============
export class ParticleSystem {
  constructor() {
    this.container = $("#particles-container");
    this.particleCount = 30;
    this.init();
  }

  init() {
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";

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

    const colors = ["#00d4ff", "#9333ea", "#ff006e"];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    this.container.appendChild(particle);
  }
}

// ============ MAGNETIC BUTTONS ============
export class MagneticButtons {
  constructor() {
    this.buttons = $$(".magnetic-btn");
    this.init();
  }

  init() {
    this.buttons.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => this.handleMouseMove(e, btn));
      btn.addEventListener("mouseleave", (e) => this.handleMouseLeave(e, btn));
    });
  }

  handleMouseMove(e, btn) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  }

  handleMouseLeave(e, btn) {
    btn.style.transform = "translate(0, 0)";
  }
}

// ============ SCROLL ANIMATIONS ============
export class ScrollAnimations {
  constructor() {
    this.elements = $$(".animate-on-scroll");
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.elements.forEach((el) => observer.observe(el));
  }
}

// ============ COUNTER ANIMATION ============
export class CounterAnimation {
  constructor() {
    this.counters = $$(".stat-value[data-count]");
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.counters.forEach((counter) => observer.observe(counter));
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

// ============ LOADING SCREEN ============
export class LoadingScreen {
  constructor() {
    this.screen = $("#loading-screen");
  }

  hide() {
    setTimeout(() => {
      this.screen.classList.add("hidden");
      document.body.style.overflow = "";
    }, 1500);
  }
}
