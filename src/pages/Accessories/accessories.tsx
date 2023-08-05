// src/pages/Accessories/accessories.tsx
import React, { useEffect } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Title, SmallSubTitle } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import AccessoryCategories from '../../components/Accessories Category/accessoryCategories'
import './accessories.css';

const AccessoriesTitle = styled(Title)`
  font-size: 2.5rem;
  font-weight: lighter;
  text-transform: capitalize;
`;

const Accessories = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="title-container">
          <AccessoriesTitle>Accessories</AccessoriesTitle>
        </div>
      </div>
      <div className="accessories-container">
        <SmallSubTitle>Explore our latest collections.</SmallSubTitle>
        <AccessoryCategories />
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Accessories;
