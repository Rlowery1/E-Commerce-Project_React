import React from 'react';
import './myOrders.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const MyOrders: React.FC = () => {
  // Placeholder for orders - replace with real data
  const orders = [
    { id: '1', date: '2022-07-30', total: '$150.00' },
    // ... more orders
  ];

  return (
    <div>
      <Header />
    <div className="my-orders-container">
      <h1>My Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-date">{order.date}</div>
            <div className="order-total">{order.total}</div>
            {/* Add more details and links to view each order */}
          </div>
        ))}
      </div>
    </div>
      <Footer theme="light"/>
    </div>
  );
};

export default MyOrders;
