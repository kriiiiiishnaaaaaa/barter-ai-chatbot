// Products Data - 20 Products for Barter Shop
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        description: "Premium noise-cancelling headphones with 30-hour battery life",
        price: 2999,
        minPrice: 2400,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        description: "Track your health with heart rate monitor and GPS",
        price: 4499,
        minPrice: 3800,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Laptop Backpack",
        description: "Water-resistant backpack with USB charging port",
        price: 1299,
        minPrice: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        category: "Accessories"
    },
    {
        id: 4,
        name: "Mechanical Gaming Keyboard",
        description: "RGB backlit mechanical keyboard with Cherry MX switches",
        price: 3499,
        minPrice: 2900,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 5,
        name: "Portable Power Bank 20000mAh",
        description: "Fast charging power bank with dual USB ports",
        price: 1799,
        minPrice: 1400,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 6,
        name: "HD Webcam 1080p",
        description: "Professional webcam for video calls and streaming",
        price: 2299,
        minPrice: 1800,
        image: "https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 7,
        name: "Wireless Gaming Mouse",
        description: "Ergonomic gaming mouse with adjustable DPI",
        price: 1599,
        minPrice: 1200,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        description: "Portable waterproof speaker with 360° sound",
        price: 2499,
        minPrice: 1999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 9,
        name: "USB-C Hub Adapter",
        description: "7-in-1 USB-C hub with HDMI and card reader",
        price: 1899,
        minPrice: 1500,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
        category: "Accessories"
    },
    {
        id: 10,
        name: "Desk Lamp with Wireless Charger",
        description: "LED desk lamp with phone wireless charging base",
        price: 2199,
        minPrice: 1700,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
        category: "Home"
    },
    {
        id: 11,
        name: "Phone Tripod Stand",
        description: "Flexible tripod for smartphones with remote control",
        price: 899,
        minPrice: 650,
        image: "https://images.unsplash.com/photo-1606016159991-7f0c3c89c46c?w=400&h=300&fit=crop",
        category: "Accessories"
    },
    {
        id: 12,
        name: "Gaming Headset",
        description: "Surround sound headset with noise-canceling mic",
        price: 3199,
        minPrice: 2600,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 13,
        name: "Laptop Cooling Pad",
        description: "RGB cooling pad with 6 quiet fans",
        price: 1499,
        minPrice: 1100,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
        category: "Accessories"
    },
    {
        id: 14,
        name: "Smart LED Light Bulb",
        description: "WiFi-enabled color-changing smart bulb",
        price: 799,
        minPrice: 600,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
        category: "Home"
    },
    {
        id: 15,
        name: "External SSD 1TB",
        description: "Ultra-fast portable SSD with USB 3.2",
        price: 5499,
        minPrice: 4800,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 16,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with charging case",
        price: 1999,
        minPrice: 1500,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 17,
        name: "Phone Camera Lens Kit",
        description: "3-in-1 lens kit: Wide, Macro, and Fisheye",
        price: 1199,
        minPrice: 900,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=300&fit=crop",
        category: "Accessories"
    },
    {
        id: 18,
        name: "Digital Drawing Tablet",
        description: "Graphics tablet with pressure-sensitive pen",
        price: 4999,
        minPrice: 4200,
        image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
        category: "Electronics"
    },
    {
        id: 19,
        name: "Car Phone Mount",
        description: "Magnetic dashboard phone holder for cars",
        price: 599,
        minPrice: 400,
        image: "https://images.unsplash.com/photo-1519368358672-25b03afee3bf?w=400&h=300&fit=crop",
        category: "Accessories"
    },
    {
        id: 20,
        name: "Monitor Screen Bar Light",
        description: "Auto-dimming monitor light bar for eye comfort",
        price: 3299,
        minPrice: 2700,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
        category: "Accessories"
    }
];

// Product Knowledge Base for Pre-purchase Questions
const productKnowledge = {
    warranty: "All our products come with a 1-year manufacturer warranty.",
    delivery: "We offer free delivery within 3-5 business days for all products.",
    return: "You can return any product within 30 days if you're not satisfied.",
    payment: "We accept all major credit cards, debit cards, UPI, and cash on delivery.",
    quality: "All products are 100% authentic and quality-checked before dispatch.",
    shipping: "We ship across India. International shipping is available for selected products.",
    support: "24/7 customer support is available via phone, email, and chat.",
    installation: "Installation guides are provided. Technical support available if needed."
};
