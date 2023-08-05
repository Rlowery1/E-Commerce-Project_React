// accessoriesMockData.js
export const accessories = [
    // Watches
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Watch ${i + 1}`,
        description: `This is watch ${i + 1}`,
        price: (199.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'watches',
    })),
    // Sunglasses
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 11,
        name: `Sunglasses ${i + 1}`,
        description: `This is sunglasses ${i + 1}`,
        price: (59.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'sunglasses',
    })),
    // Belts
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 21,
        name: `Belt ${i + 1}`,
        description: `This is belt ${i + 1}`,
        price: (49.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'belts',
    })),
    // Hats
    ...Array.from({ length: 10 }, (_, i) => ({
        id: i + 31,
        name: `Hat ${i + 1}`,
        description: `This is hat ${i + 1}`,
        price: (29.99 + i).toFixed(2),
        imageUrl: 'image-url',
        category: 'hats',
    })),
    // Other accessories...
];
