import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import saleItems from '../../data/saleMockData';
import './sale.css';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../redux/actions/cartSlice';

const Sale = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: { id: any; name: any; originalPrice?: number; salePrice: any; imageUrl: any; }) => {
    dispatch(addToCartAction({
      id: item.id,
      name: item.name,
      description: '',
      price: `$${item.salePrice}`,
      imageUrl: item.imageUrl,
      category: 'Sale',
      quantity: 1,
    }));
  };

  return (
    <div>
      <Header />
      <div className="sale-container">
        <h1>Sale</h1>
        <div className="sale-items">
          {saleItems.map(item => (
            <div key={item.id} className="sale-item">
              <img src={item.imageUrl} alt={item.name} className="sale-item-image" />
              <h2 className="sale-item-name">{item.name}</h2>
              <p className="sale-item-original-price">Original price: ${item.originalPrice}</p>
              <p className="sale-item-sale-price">Sale price: ${item.salePrice}</p>
              <button className="sale-item-button" onClick={() => handleAddToCart(item)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Sale;
