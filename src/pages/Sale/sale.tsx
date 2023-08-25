import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './sale.css';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../redux/actions/cartSlice';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import {Link} from "react-router-dom";

type SaleItem = {
  id: string;
  name: string;
  originalPrice?: number; // Adjust this if originalPrice is available in your data
  price: number;
  imageUrl: string;
  seasonalCollection: string;
};

const Sale = () => {
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const dispatch = useDispatch();

  const handleAddToCart = (item: SaleItem) => {
    dispatch(addToCartAction({
      id: parseInt(item.id),
      name: item.name,
      description: '',
      price: item.price,
      imageUrl: item.imageUrl,
      category: 'Sale',
      quantity: 1,
    }));
  };


  const fetchSaleItems = async () => {
    try {
      const result: any = await API.graphql({
        query: listProducts,
        variables: {
          filter: { seasonalCollection: { eq: 'sale collection' } }, // Filter by seasonal collection
        },
        authMode: "API_KEY",
      });

      setSaleItems(result.data.listProducts.items as SaleItem[]); // Set the state with the fetched items
    } catch (error) {
      console.error("Error fetching Sale collection:", error);
    }
  };

  useEffect(() => {
    fetchSaleItems();
  }, []);

  return (
    <div>
      <Header />
      <div className="sale-container">
        <h1>Sale</h1>
        <div className="sale-items">
          {saleItems.map(item => (
            <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>  {/* Added Link */}
              <div className="sale-item">
                <img src={item.imageUrl} alt={item.name} className="sale-item-image" />
                <h2 className="sale-item-name">{item.name}</h2>
                <p className="sale-item-original-price">Original price: ${item.originalPrice}</p> {/* Adjust if originalPrice is available */}
                <p className="sale-item-sale-price">Sale price: ${item.price}</p>
                <button onClick={(e) => {e.preventDefault(); handleAddToCart(item);}} className="sale-item-button">Add to cart</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};


export default Sale;
