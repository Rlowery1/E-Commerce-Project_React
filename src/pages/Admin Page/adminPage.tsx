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
