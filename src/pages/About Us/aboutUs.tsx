// src/pages/AboutUs/AboutUs.tsx
import React, {useEffect} from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "../About Us/aboutUs.css";
import ceoHeadshot1 from '../../assets/images/ceo_Headshot_1.jpg';
import ceoHeadshot2 from '../../assets/images/ceo_Headshot_2.jpg';

const AboutUs: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Header />
      <div className="about-us-content">
        <h1>About Us</h1>

        {/* Existing Story Section */}
        <div className="our-story-section">
        <h2>Our Story</h2>
        <p>Elegance Men's Fashion is a premier destination for high-end men's fashion. Since our inception in 2023, we have been steadfast in our commitment to providing our discerning clientele with meticulously crafted clothing that exudes sophistication and style. Our brand is synonymous with quality. Each piece is a testament to our dedication to fine craftsmanship and superior materials. We don't just sell clothes - we offer an experience, a statement, and a commitment to excellence that is woven into the very fabric of our products. At Elegance Men's Fashion, we believe that style is an expression of individuality. Our collections are designed to empower our customers to express their unique style and make a statement. We invite you to join us on this journey of style and elegance.</p>
        </div>
        {/* Team Section */}
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-member">
            <img src={ceoHeadshot1} alt="Team Member 1" />
            <h3>Blake Shrell</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={ceoHeadshot2} alt="Team Member 2" />
            <h3>Julian Nemar</h3>
            <p>Creative Director</p>
          </div>
          {/* Add more team members as needed */}
        </div>

        {/* Vision and Mission Section */}
        <div className="vision-mission-section">
          <h2>Our Vision & Mission</h2>
          <p>At Elegance Men's Fashion, our mission is to redefine luxury in men's apparel by crafting garments that combine timeless aesthetics with innovative design. Our curated collections embody elegance, confidence, and sophistication, providing the modern gentleman with an unparalleled fashion experience. Through our commitment to quality, sustainability, and creativity, we strive to inspire individuality and empower our clients to express their unique style. Join us in celebrating excellence in craftsmanship and the art of masculine elegance.</p>
        </div>

        {/* Newsletter Signup */}
        <div className="cta-section">
          <h2>Stay Connected</h2>
          <p className="cta-section-text">Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

