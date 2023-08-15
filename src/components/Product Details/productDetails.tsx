  import React, { useEffect, useState } from 'react';
  import { useParams } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { API } from 'aws-amplify';
  import { getProduct } from '../../graphql/queries';
  import Header from '../Header/header';
  import Footer from '../Footer/footer';
  import './productDetails.css';
  import { addToCart, CartItem } from '../../redux/actions/cartSlice';

  interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    // ... other properties
  }

  const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('S');
    const dispatch = useDispatch(); // Get the dispatch function from Redux
    const [fadeIn, setFadeIn] = useState(false);
    const [imageFadeIn, setImageFadeIn] = useState(false);

    const handleAddToCart = () => {
      if (product) {
        // Convert the price to a number
        const price = parseFloat(product.price);

        // Create the cart item based on the selected product, size, and quantity
        const cartItem: CartItem = {
          id: Number(product.id),
          name: product.name,
          description: product.description,
          price, // Use the converted price
          imageUrl: product.imageUrl,
          category: '', // Add the category if needed
          quantity,
        };

        dispatch(addToCart(cartItem)); // Dispatch the addToCart action to add the item to the cart
      }
    };


    // Function to handle size change
    const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedSize(e.target.value);
    };

    // Calculate the total price based on size and quantity
    let sizePriceFactor = 1; // Default factor for Small size
    if (selectedSize === 'M') sizePriceFactor = 1.10; // 10% increase for Medium
    if (selectedSize === 'L') sizePriceFactor = 1.20; // 20% increase for Large

    // Calculate the total price based on size, quantity, and product price
    const totalPrice = product ? parseFloat(product.price) * sizePriceFactor * quantity : 0;

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const result = await API.graphql({
            query: getProduct,
            variables: { id },
            authMode: 'API_KEY'
          }) as { data: { getProduct: Product } };
          setProduct(result.data.getProduct);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      

      fetchProduct();
    }, [id]);

    // Fade-in effect logic
    useEffect(() => {
      setFadeIn(false); // Reset the fade-in state to false
      setTimeout(() => setFadeIn(true), 10); // Set the fade-in state to true after a brief delay
    }, [id]);

    if (!product) {
      return <div className="product-loading">Loading...</div>;
    }

    return (
      <div className={`product-page ${fadeIn ? 'fade-in' : ''}`}>
        <Header />
        <div className="product-details">
          <div className="product-image-container">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-total-price">Total: ${totalPrice.toFixed(2)}</p>
            <div className="product-options">
              <select className="product-size" onChange={handleSizeChange}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="product-quantity"
              />
              <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* You can add other sections like related products, reviews, etc. */}
        <Footer />
      </div>
    );
  };

  export default ProductDetails;
