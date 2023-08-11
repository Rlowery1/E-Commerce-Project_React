// src/data/shoesMockData.js
export const shoes = [
    // Formal Shoes
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Formal Shoe ${i + 1}`,
        description: `This is a description for Formal Shoe ${i + 1}.`,
        price: `$${(100 + i * 10).toFixed(2)}`,
        imageUrl: 'imageUrlForShoe',
        category: 'formal shoes'
    })),
    // Casual Shoes
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 11,
        name: `Casual Shoe ${i + 1}`,
        description: `This is a description for Casual Shoe ${i + 1}.`,
        price: `$${(80 + i * 10).toFixed(2)}`,
        imageUrl: 'imageUrlForShoe',
        category: 'casual shoes'
    })),
    // Sports Shoes
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 21,
        name: `Sports Shoe ${i + 1}`,
        description: `This is a description for Sports Shoe ${i + 1}.`,
        price: `$${(90 + i * 10).toFixed(2)}`,
        imageUrl: 'imageUrlForShoe',
        category: 'sports shoes'
    })),
    // Boots
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 31,
        name: `Boot ${i + 1}`,
        description: `This is a description for Boot ${i + 1}.`,
        price: `$${(110 + i * 10).toFixed(2)}`,
        imageUrl: 'imageUrlForShoe',
        category: 'boots'
    })),
    // Other shoes...
];
