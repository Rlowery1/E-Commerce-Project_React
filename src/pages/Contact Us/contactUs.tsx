// src/pages/ContactUs/ContactUs.tsx
import React, {useEffect} from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "../Contact Us/contactUs.css";

const ContactUs: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} required />

            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Address:</h2>
          <p>Elegance Men's Fashion</p>
          <p>123 Fashion Street</p>
          <p>New York, NY 10001</p>
          <h2>Phone:</h2>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
