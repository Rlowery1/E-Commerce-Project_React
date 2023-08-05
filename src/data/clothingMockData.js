export const products = [
    // Activewear
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Activewear Product ${i + 1}`,
        description: `This is activewear product ${i + 1}`,
        price: (19.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'activewear',
    })),
    // Blazers & Suits
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 11,
        name: `Blazer ${i + 1}`,
        description: `This is blazer ${i + 1}`,
        price: (59.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'blazers & suits',
    })),
    // Coats & Jackets
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 21,
        name: `Coat ${i + 1}`,
        description: `This is coat ${i + 1}`,
        price: (89.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'coats & jackets',
    })),
    // Denim
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 31,
        name: `Denim Product ${i + 1}`,
        description: `This is denim product ${i + 1}`,
        price: (49.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'denim',
    })),
    // Pants
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 41,
        name: `Pants ${i + 1}`,
        description: `This is pants ${i + 1}`,
        price: (29.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'pants',
    })),
    // Polos & T-Shirts
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 51,
        name: `Polo ${i + 1}`,
        description: `This is polo ${i + 1}`,
        price: (19.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'polos & t shirts',
    })),
    // Shirts
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 61,
        name: `Shirt ${i + 1}`,
        description: `This is shirt ${i + 1}`,
        price: (24.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'shirts',
    })),
    // Shorts
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 71,
        name: `Shorts ${i + 1}`,
        description: `This is shorts ${i + 1}`,
        price: (19.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'shorts',
    })),
    // Sweaters & Knitwear
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 81,
        name: `Sweater ${i + 1}`,
        description: `This is sweater ${i + 1}`,
        price: (49.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'sweaters & knitwear',
    })),
    // Swimwear
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 91,
        name: `Swimwear ${i + 1}`,
        description: `This is swimwear ${i + 1}`,
        price: (29.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'swimwear',
    })),
    // Underwear & Socks
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 101,
        name: `Underwear ${i + 1}`,
        description: `This is underwear ${i + 1}`,
        price: (14.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'underwear & socks',
    })),
];
