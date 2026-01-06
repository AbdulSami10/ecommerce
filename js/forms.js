import { $, $$, formatPrice } from "./utils.js";

// ============ CONTACT FORM ============
export class ContactForm {
  constructor() {
    this.form = $("#contact-form");
    this.init();
  }

  init() {
    this.form?.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = $("#contact-name").value;
    const email = $("#contact-email").value;
    const subject = $("#contact-subject").value;
    const message = $("#contact-message").value;

    if (name && email && subject && message) {
      window.toast.show(
        "Message sent successfully! We'll get back to you soon.",
        "success"
      );
      this.form.reset();
    }
  }
}

// ============ CHECKOUT PAGE ============
export class Checkout {
  constructor() {
    this.form = $("#checkout-form");
    this.orderItems = $("#order-items");
    this.confirmationModal = $("#confirmation-modal");

    this.init();
  }

  init() {
    console.log("Checkout initialized");
    console.log("Form:", this.form);
    console.log("OrderItems:", this.orderItems);
    console.log("Confirmation Modal:", this.confirmationModal);

    this.loadCartItems();
    this.setupFormListeners();
    this.formatCardInputs();
  }

  loadCartItems() {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");

    console.log("Cart data from localStorage:", cartData);
    console.log("Number of items:", cartData.length);

    if (cartData.length === 0) {
      // Show empty cart message
      const checkoutGrid = document.querySelector(".checkout-grid");
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
      this.orderItems = $("#order-items");
      console.log("Re-queried orderItems:", this.orderItems);
    }

    if (!this.orderItems) {
      console.error("Order items container not found in DOM!");
      return;
    }

    // Render order items
    this.orderItems.innerHTML = cartData
      .map(
        (item) => `
            <div class="order-item">
                <div class="order-item-image">
                    ${
                      item.image
                        ? `<img src="${item.image}" alt="${item.name}">`
                        : item.emoji
                    }
                </div>
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-qty">Qty: ${item.quantity}</div>
                </div>
                <div class="order-item-price">${formatPrice(
                  item.price * item.quantity
                )}</div>
            </div>
        `
      )
      .join("");

    // Calculate totals
    const subtotal = cartData.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const orderSubtotal = document.getElementById("order-subtotal");
    const orderTax = document.getElementById("order-tax");
    const orderTotal = document.getElementById("order-total");

    if (orderSubtotal) orderSubtotal.textContent = formatPrice(subtotal);
    if (orderTax) orderTax.textContent = formatPrice(tax);
    if (orderTotal) orderTotal.textContent = formatPrice(total);
  }

  setupFormListeners() {
    // Payment method toggle
    $$(".payment-method").forEach((method) => {
      method.addEventListener("click", () => {
        $$(".payment-method").forEach((m) => m.classList.remove("active"));
        method.classList.add("active");

        const cardDetails = $("#card-details");
        if (method.querySelector("input").value === "card") {
          cardDetails.style.display = "flex";
        } else {
          cardDetails.style.display = "none";
        }
      });
    });

    // Form submission
    if (this.form) {
      console.log("Adding submit event listener to form");
      this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    } else {
      console.error("Checkout form not found!");
    }
  }

  formatCardInputs() {
    // Format card number with spaces
    $("#cardNumber")?.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
      value = value.match(/.{1,4}/g)?.join(" ") || value;
      e.target.value = value;
    });

    // Format expiry date
    $("#expiry")?.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4);
      }
      e.target.value = value;
    });

    // CVV only numbers
    $("#cvv")?.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const btn = $("#place-order-btn");
    const btnText = btn.querySelector(".btn-text");
    const btnLoader = btn.querySelector(".btn-loader");

    // Show loading state
    btnText.style.display = "none";
    btnLoader.style.display = "flex";
    btn.disabled = true;

    // Collect form data
    const formData = new FormData(this.form);
    const orderData = {
      email: formData.get("email"),
      phone: formData.get("phone"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      address: formData.get("address"),
      address2: formData.get("address2"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip: formData.get("zip"),
      country: formData.get("country"),
      orderNumber: this.generateOrderNumber(),
      orderDate: new Date().toLocaleDateString(),
      items: JSON.parse(localStorage.getItem("cart") || "[]"),
    };

    // Calculate totals
    const subtotal = orderData.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    orderData.subtotal = formatPrice(subtotal);
    orderData.tax = formatPrice(subtotal * 0.1);
    orderData.total = formatPrice(subtotal * 1.1);

    // Build items list for email
    orderData.itemsList = orderData.items
      .map(
        (item) =>
          `${item.name} x${item.quantity} - ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    try {
      // Log order data (no email sending)
      this.logOrderData(orderData);

      // Show success
      this.showConfirmation(orderData);

      // Clear cart
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Email error:", error);
      // Still show confirmation (email might fail but order can proceed)
      this.showConfirmation(orderData);
      localStorage.removeItem("cart");
    }

    // Reset button
    btnText.style.display = "inline";
    btnLoader.style.display = "none";
    btn.disabled = false;
  }

  logOrderData(orderData) {
    // Simply log the order data for demo/development purposes
    console.log("Order placed successfully!");
    console.log("Order Number:", orderData.orderNumber);
    console.log("Customer Email:", orderData.email);
    console.log("Order Details:", orderData);
  }

  generateOrderNumber() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `NX-${timestamp}-${random}`;
  }

  showConfirmation(orderData) {
    $("#order-number").textContent = orderData.orderNumber;
    $("#confirmation-email").textContent = orderData.email;
    this.confirmationModal.classList.add("active");

    // Auto-redirect to home after 5 seconds
    let countdown = 5;
    const redirectBtn =
      this.confirmationModal.querySelector(".btn-primary span");

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
        window.location.href = "index.html";
      }
    }, 1000);

    // Allow manual click to redirect immediately
    const continueBtn = this.confirmationModal.querySelector(".btn-primary");
    continueBtn.onclick = () => {
      clearInterval(countdownInterval);
      window.location.href = "index.html";
    };
  }
}
