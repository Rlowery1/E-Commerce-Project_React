const { createCategory } = require('../src/graphql/mutations');

const categories = ['watches', 'sunglasses', 'belts', 'hats'];

async function createCategories() {
    const categoryIds = {};
    for (const name of categories) {
        try {
            const result = await API.graphql({
                query: createCategory,
                variables: {
                    input: { name },
                },
            });
            // Store the IDs of the created categories for later use
            categoryIds[name] = result.data.createCategory.id;
        } catch (error) {
            console.error('Error creating category:', error);
        }
    }
    return categoryIds;
}

async function populateAccessories() {
    const categoryIds = await createCategories();
    for (const item of accessories) {
        // Ensure that the category exists before trying to create a product
        if (item.category in categoryIds) {
            const productItem = {
                id: item.id.toString(),
                name: item.name,
                description: item.description,
                price: parseFloat(item.price),
                image: item.imageUrl,
                categoryId: categoryIds[item.category], // Use the ID of the category
            };

            try {
                await API.graphql({ query: createProduct, variables: { input: productItem } });
            } catch (error) {
                console.error('Error populating accessories:', error);
            }
        } else {
            console.error('Unknown category:', item.category);
        }
    }
}

populateAccessories();
