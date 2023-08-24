import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../../graphql/mutations';
import { listProducts } from '../../graphql/queries';
import { accessories } from '../../data/accessoriesMockData';
import { shoes as shoesMockData } from '../../data/shoesMockData';
import { products as clothingMockData } from '../../data/clothingMockData';


type SpringCollectionProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  seasonalCollection: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  subcategory?: string;
  isNewArrival?: boolean;
  gender?: string;
  seasonalCollection?: string;
};

const categories = ['Hats', 'Belts', 'Shoes', 'Watches', 'Shirts'];

const springCollectionMockData = [
  { id: 1, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Hat', price: 400, description: 'Stylish summer hat', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 2, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Belt', price: 175, description: 'Elegant summer belt', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 3, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Shoes', price: 850, description: 'Comfortable summer shoes', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 4, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Watch', price: 2300, description: 'Luxury summer watch', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 5, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Shirt', price: 645, description: 'Casual summer shirt', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 6, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Bag', price: 1430, description: 'Trendy summer bag', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 7, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Glasses', price: 2000, description: 'Chic summer glasses', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 8, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Shorts', price: 950, description: 'Sleek summer shorts', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  // Add more items as needed...
];

const saleItemsMockData = [
  { id: 1, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Sale Hat', originalPrice: 500, salePrice: 400, description: 'Stylish sale hat', category: 'Hats', seasonalCollection: 'sale collection' },
  { id: 2, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Sale Belt', originalPrice: 200, salePrice: 175, description: 'Elegant sale belt', category: 'Belts', seasonalCollection: 'sale collection' },
  { id: 3, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Sale Shoes', originalPrice: 600, salePrice: 450, description: 'Comfortable sale shoes', category: 'Shoes', seasonalCollection: 'sale collection' },
  { id: 4, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Sale Watch', originalPrice: 2500, salePrice: 2000, description: 'Luxury sale watch', category: 'Watches', seasonalCollection: 'sale collection' },
  { id: 5, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Sale Shirt', originalPrice: 700, salePrice: 550, description: 'Casual sale shirt', category: 'Shirts', seasonalCollection: 'sale collection' },
  { id: 6, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Sale Bag', originalPrice: 1500, salePrice: 1150, description: 'Trendy sale bag', category: 'Bags', seasonalCollection: 'sale collection' },
  { id: 7, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Sale Glasses', originalPrice: 2200, salePrice: 1650, description: 'Chic sale glasses', category: 'Glasses', seasonalCollection: 'sale collection' },
  { id: 8, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Sale Shorts', originalPrice: 1000, salePrice: 750, description: 'Sleek sale shorts', category: 'Shorts', seasonalCollection: 'sale collection' },
  { id: 9, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Sale Jacket', originalPrice: 1200, salePrice: 900, description: 'Warm sale jacket', category: 'Jackets', seasonalCollection: 'sale collection' },
  { id: 10, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Sale Skirt', originalPrice: 800, salePrice: 600, description: 'Elegant sale skirt', category: 'Skirts', seasonalCollection: 'sale collection' },
  { id: 11, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Sale Jeans', originalPrice: 900, salePrice: 675, description: 'Stylish sale jeans', category: 'Jeans', seasonalCollection: 'sale collection' },
  { id: 12, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Sale Sunglasses', originalPrice: 300, salePrice: 225, description: 'Trendy sale sunglasses', category: 'Sunglasses', seasonalCollection: 'sale collection' },
];

const giftsMockData = [
  { id: 1, name: 'Elegant Watch', price: 250, description: 'A luxurious timepiece', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Watches', seasonalCollection: 'Winter', isBestSeller: true, isFeaturedGift: false },
  { id: 2, name: 'Leather Wallet', price: 85, description: 'A stylish leather wallet', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Accessories', seasonalCollection: 'Summer', isBestSeller: false, isFeaturedGift: true },
  { id: 3, name: 'Perfume Set', price: 120, description: 'An exotic perfume set', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Fragrances', seasonalCollection: 'Spring', isBestSeller: true, isFeaturedGift: true },
  { id: 4, name: 'Designer Sunglasses', price: 180, description: 'High-end designer sunglasses', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Eyewear', seasonalCollection: 'Summer', isBestSeller: false, isFeaturedGift: false },
  { id: 5, name: 'Gourmet Chocolate Box', price: 45, description: 'Delicious gourmet chocolates', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Edibles', seasonalCollection: 'Any', isBestSeller: true, isFeaturedGift: false },
  { id: 6, name: 'Spa Gift Basket', price: 100, description: 'Relaxing spa essentials', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Wellness', seasonalCollection: 'Any', isBestSeller: false, isFeaturedGift: true },
  { id: 7, name: 'Sterling Silver Necklace', price: 200, description: 'Elegant sterling silver necklace', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Jewelry', seasonalCollection: 'Winter', isBestSeller: true, isFeaturedGift: true },
  { id: 8, name: 'Handmade Leather Journal', price: 50, description: 'Crafted leather journal', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Stationery', seasonalCollection: 'Fall', isBestSeller: false, isFeaturedGift: false },
  { id: 9, name: 'Bluetooth Headphones', price: 150, description: 'Wireless Bluetooth headphones', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Electronics', seasonalCollection: 'Any', isBestSeller: true, isFeaturedGift: false },
  { id: 10, name: 'Fine Wine Collection', price: 180, description: 'A collection of fine wines', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Beverages', seasonalCollection: 'Any', isBestSeller: false, isFeaturedGift: true },
];

const newArrivalsMockData = [
  { id: 1, name: 'New Arrival Watch', price: 250, description: 'A luxurious timepiece', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Watches', isNewArrival: true },
  { id: 2, name: 'New Arrival Wallet', price: 85, description: 'A stylish leather wallet', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Accessories', isNewArrival: true },
  { id: 3, name: 'New Arrival Sunglasses', price: 180, description: 'High-end designer sunglasses', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Eyewear', isNewArrival: true },
  { id: 4, name: 'New Arrival Jacket', price: 150, description: 'Warm winter jacket', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Jackets', isNewArrival: true },
  { id: 5, name: 'New Arrival Jeans', price: 90, description: 'Stylish blue jeans', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Jeans', isNewArrival: true },
  { id: 6, name: 'New Arrival Perfume', price: 120, description: 'An exotic perfume set', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Fragrances', isNewArrival: true },
  { id: 7, name: 'New Arrival Necklace', price: 200, description: 'Elegant sterling silver necklace', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Jewelry', isNewArrival: true },
  { id: 8, name: 'New Arrival Headphones', price: 150, description: 'Wireless Bluetooth headphones', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Electronics', isNewArrival: true },
  { id: 9, name: 'New Arrival Shoes', price: 80, description: 'Comfortable sneakers', imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', category: 'Shoes', isNewArrival: true },
  { id: 10, name: 'New Arrival Shirt', price: 45, description: 'Casual summer shirt', imageUrl: 'https://i.imgur.com/sgvplFV.jpg', category: 'Shirts', isNewArrival: true }
  // Add more items as needed...
];

const summerCollectionMockData = [
  { id: 1, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Hat', price: 400, description: 'Stylish summer hat', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 2, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Belt', price: 175, description: 'Elegant summer belt', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 3, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Shoes', price: 850, description: 'Comfortable summer shoes', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 4, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Watch', price: 2300, description: 'Luxury summer watch', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 5, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Shirt', price: 645, description: 'Casual summer shirt', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 6, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Bag', price: 1430, description: 'Trendy summer bag', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 7, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Glasses', price: 2000, description: 'Chic summer glasses', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 8, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Shorts', price: 950, description: 'Sleek summer shorts', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 9, imageUrl: 'https://i.imgur.com/jNFRfmN.jpg', name: 'Summer Skirt', price: 1200, description: 'Elegant summer skirt', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
  { id: 10, imageUrl: 'https://i.imgur.com/sgvplFV.jpg', name: 'Summer Jacket', price: 1800, description: 'Cool summer jacket', category: categories[Math.floor(Math.random() * categories.length)], seasonalCollection: 'summer collection' },
];










const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Partial<Product>>({});

  const fetchProducts = async () => {
    try {
      const result: any = await API.graphql(graphqlOperation(listProducts));
      setProducts(result.data.listProducts.items);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleAddProduct = async () => {
    try {
      if (formData.name && formData.description && formData.price && formData.imageUrl && formData.category) {
        await API.graphql(graphqlOperation(createProduct, { input: formData }));
        fetchProducts();
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to add hard-coded mock data to the database
  const addMockDataToDatabase = async () => {
    try {
      for (const product of accessories) {
        const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: price,
            imageUrl: product.imageUrl,
            category: product.category,
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  // Function to add shoes mock data to the database
  const addShoesMockDataToDatabase = async () => {
    try {
      console.log("Adding shoes mock data to the database.");
      for (const product of shoesMockData) {
        console.log("Adding product:", product);
        const price = parseFloat(product.price.replace('$', ''));// Remove dollar sign
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: price,
            imageUrl: product.imageUrl,
            category: product.category,
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  // Function to add clothing mock data to the database
  const addClothingMockDataToDatabase = async () => {
    try {
      console.log("Adding clothing mock data to the database.");
      for (const product of clothingMockData) {
        console.log("Adding product:", product);
        const price = parseFloat(product.price); // No dollar sign in price
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: price,
            imageUrl: product.imageUrl,
            category: product.category.replace('&', 'and'), // Replace '&' with 'and'
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  // Function to add Spring collection mock data to the database
  const addSpringCollectionMockDataToDatabase = async () => {
    try {
      console.log("Adding Spring collection mock data to the database.");
      for (const product of springCollectionMockData) {
        console.log("Adding product:", product);
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            category: product.category,
            seasonalCollection: product.seasonalCollection,
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  const addSaleItemsMockDataToDatabase = async () => {
    try {
      console.log("Adding sale items mock data to the database.");
      for (const product of saleItemsMockData) {
        console.log("Adding product:", product);
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: product.salePrice,
            originalPrice: product.originalPrice,
            imageUrl: product.imageUrl,
            category: product.category,
            seasonalCollection: product.seasonalCollection,
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  const addGiftsMockDataToDatabase = async () => {
    try {
      console.log("Adding gifts mock data to the database.");
      for (const product of giftsMockData) {
        console.log("Adding product:", product);
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            category: product.category,
            seasonalCollection: product.seasonalCollection,
            isBestSeller: product.isBestSeller,
            isFeaturedGift: product.isFeaturedGift,
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  const addNewArrivalsMockDataToDatabase = async () => {
    try {
      console.log("Adding new arrivals mock data to the database.");
      for (const product of newArrivalsMockData) {
        console.log("Adding product:", product);
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            category: product.category,
            isNewArrival: product.isNewArrival,
            // Add other fields as needed...
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };

  const addSummerCollectionMockDataToDatabase = async () => {
    try {
      console.log("Adding summer collection mock data to the database.");
      for (const product of summerCollectionMockData) {
        console.log("Adding product:", product);
        await API.graphql(graphqlOperation(createProduct, {
          input: {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            category: product.category,
            seasonalCollection: 'summer collection',
          }
        }));
      }
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error adding mock data:", error);
    }
  };








  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Admin Page</h2>
      <div>
        {/* Input fields for various product attributes */}
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Price" onChange={handleInputChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleInputChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleInputChange} />
        <input type="text" name="subcategory" placeholder="Subcategory" onChange={handleInputChange} />
        <input type="checkbox" name="isNewArrival" onChange={handleCheckboxChange} />
        <select name="gender" onChange={handleSelectChange}>
          <option value="Male">Male</option>
          <option value="Unisex">Unisex</option>
        </select>
        <button onClick={addMockDataToDatabase}>Add Accessory Mock Data to Database</button> {/* Existing button */}
        <button onClick={addShoesMockDataToDatabase}>Add Shoes Mock Data to Database</button> {/* New button for shoes */}
        <button onClick={addClothingMockDataToDatabase}>Add Clothing Mock Data to Database</button>
        <button onClick={addSpringCollectionMockDataToDatabase}>Add Spring Collection Mock Data to Database</button>
        <button onClick={addSaleItemsMockDataToDatabase}>Add Sale Items Mock Data to Database</button>
        <button onClick={addGiftsMockDataToDatabase}>Add Gifts Mock Data to Database</button>
        <button onClick={addNewArrivalsMockDataToDatabase}>Add New Arrivals Mock Data to Database</button>
        <button onClick={addSummerCollectionMockDataToDatabase}>Add Summer Collection Mock Data to Database</button>
      </div>
      <div>
        {/* Render the products */}
        {products.map((product) => (
          <div key={product.id}>
            {/* Render product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
