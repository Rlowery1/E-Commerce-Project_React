import React, { useEffect } from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Title, SmallSubTitle } from "../../styles/Theme/typography.styles";
import styled from 'styled-components';
import Categories from '../../components/Clothing Category/categories';
import './clothing.css';

const ClothingTitle = styled(Title)`
  font-size: 2.5rem;
  font-weight: lighter;
  text-transform: capitalize;
`;

const Clothing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="clothing-container">
        <div className="title-container">
          <ClothingTitle>Clothing</ClothingTitle>
        </div>
        <SmallSubTitle>Explore our latest collections.</SmallSubTitle>
        <Categories />
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default Clothing;
