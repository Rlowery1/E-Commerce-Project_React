// src/pages/AboutUs/AboutUs.tsx
import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "../About Us/aboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="about-us-content">
        <h1>About Us</h1>
        <div className="our-story-section">
          <h2>Our Story</h2>
          <p>Elegance Men's Fashion is a premier destination for high-end men's fashion. Since our inception in 2023, we have been steadfast in our commitment to providing our discerning clientele with meticulously crafted clothing that exudes sophistication and style. Our brand is synonymous with quality. Each piece is a testament to our dedication to fine craftsmanship and superior materials. We don't just sell clothes - we offer an experience, a statement, and a commitment to excellence that is woven into the very fabric of our products. At Elegance Men's Fashion, we believe that style is an expression of individuality. Our collections are designed to empower our customers to express their unique style and make a statement. We invite you to join us on this journey of style and elegance.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
