/* ========================================
   NEXUS - Data Layer
   Products and Testimonials Data
   ======================================== */

export const products = [
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

export const testimonials = [
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
