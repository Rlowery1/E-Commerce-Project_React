// src/pages/Shoes/shoes.tsx
import React, { useEffect } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Title, SmallSubTitle } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import ShoeCategories from '../../components/Shoes Category/shoeCategories'
import './shoes.css';

const ShoesTitle = styled(Title)`
  font-size: 2.5rem;
  font-weight: lighter;
  text-transform: capitalize;
`;

const Shoes = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="title-container">
          <ShoesTitle>Shoes</ShoesTitle>
        </div>
        <SmallSubTitle>Explore our latest collections.</SmallSubTitle>
        <ShoeCategories />
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Shoes;
