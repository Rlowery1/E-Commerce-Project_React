import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import coverPhoto from "../../assets/images/cover_Photo_Homepage.jpg";
import { Title, LargeBodyText, SubTitle } from "../../styles/Theme/typography.styles";
import { Link } from 'react-router-dom';
import './homePage.css';
import { useInterval } from 'react-use';
import fallCollection from '../../assets/images/fall_Collection.jpg';
import springCollection from '../../assets/images/spring_Collection.jpg';
import summerCollection from '../../assets/images/summer_Collection.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Zoom} from 'react-awesome-reveal';
import image1 from '../../assets/images/ceo_Headshot_1.jpg';
import image2 from '../../assets/images/ceo_Headshot_2.jpg';
import image3 from '../../assets/images/ceo_Headshot_3.jpg';
import featureImage1 from '../../assets/images/featured_Products_1.jpg'
import featureImage2 from '../../assets/images/featured_Products_2.jpg'
import featureImage3 from '../../assets/images/featured_Products_3.jpg'
import featureImage4 from '../../assets/images/featured_Products_4.jpg'
import galleryImage1 from '../../assets/images/gallery_1.jpg'
import galleryImage2 from '../../assets/images/gallery_2.jpg'
import galleryImage3 from '../../assets/images/gallery_3.jpg'
import galleryImage4 from '../../assets/images/gallery_4.jpg'
import galleryImage5 from '../../assets/images/gallery_5.jpg'
import galleryImage6 from '../../assets/images/gallery_6.jpg'
import galleryImage7 from '../../assets/images/gallery_7.jpg'
import galleryImage8 from '../../assets/images/gallery_8.jpg'
import arrivalsImage1 from '../../assets/images/new_Arrivals_1.jpg'
import arrivalsImage2 from '../../assets/images/new_Arrivals_2.jpg'
import arrivalsImage3 from '../../assets/images/new_Arrivals_3.jpg'
import arrivalsImage4 from '../../assets/images/new_Arrivals_4.jpg'






const testimonials = [
  {
    id: 1,
    text: "Elegance Men's Fashion is my go-to for high-quality, stylish clothing. The attention to detail is unparalleled, and their collections always make a statement.",
    author: "Alexander Bennett",
    title: "CEO, Bennett Enterprises",
    image: image1
  },
  {
    id: 2,
    text: "The quality of the clothes at Elegance Men's Fashion is exceptional. Their pieces are not just clothing, they're a lifestyle. I can't recommend them enough.",
    author: "Sebastian Clarke",
    title: "Founder, Clarke Industries",
    image: image2
  },
  {
    id: 3,
    text: "I've been a customer of Elegance Men's Fashion since they opened. Their commitment to quality and style is evident in every piece. I always look forward to their new collections.",
    author: "Oliver Harper",
    title: "Entrepreneur",
    image: image3
  },
  // Add more testimonials as needed
  {
    id: 4,
    text: "The designs at Elegance Men's Fashion are always on point. They have a great understanding of the latest trends and how to make them work for their customers.",
    author: "Liam Smith",
    title: "Fashion Blogger",
    image: image3 // Make sure to import this image at the top of your file
  },
  {
    id: 5,
    text: "Elegance Men's Fashion has transformed the way I approach my wardrobe. Their clothes are not just stylish, but also extremely comfortable.",
    author: "Noah Johnson",
    title: "Model",
    image: image3 // Make sure to import this image at the top of your file
  },
];



function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSubscribeMessage, setShowSubscribeMessage] = useState(false);
  const [email, setEmail] = useState('');
  const featuredImages = [featureImage1, featureImage2, featureImage3, featureImage4];
  const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8];
  const arrivalsImages = [arrivalsImage1, arrivalsImage2, arrivalsImage3, arrivalsImage4];
  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials.slice(0, 3));
  const ourStoryRef = useRef(null);

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubscribed(true);
    setShowSubscribeMessage(true);
    setEmail('');
    setTimeout(() => {
      setShowSubscribeMessage(false);
    }, 3000);
  };

  useInterval(() => {
    const nextIndex = (currentTestimonials[2].id % testimonials.length) + 1;
    const nextTestimonials = testimonials.filter((t) => t.id >= nextIndex && t.id < nextIndex + 3);
    setCurrentTestimonials(
      nextTestimonials.length < 3
        ? [...nextTestimonials, ...testimonials.slice(0, 3 - nextTestimonials.length)]
        : nextTestimonials
    );
  }, 5000);



  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    if (ourStoryRef.current) {
      observer.observe(ourStoryRef.current);
    }

    return () => {
      if (ourStoryRef.current) {
        observer.unobserve(ourStoryRef.current);
      }
    };
  }, []);






  return (
    <div>
      <div className="HomePage">
        <Header />

        <img src={coverPhoto} alt="Cover" className={`cover-photo ${isScrolled ? 'cover-photo-scrolled' : ''}`} />
        <section id="our-story" ref={ourStoryRef}>
          <Title>Our Story</Title>
          <LargeBodyText>
            Elegance Men's Fashion is a premier destination for high-end men's fashion. Since our inception in 2023, we have been steadfast in our commitment to providing our discerning clientele with meticulously crafted clothing that exudes sophistication and style.

            Our brand is synonymous with quality. Each piece is a testament to our dedication to fine craftsmanship and superior materials. We don't just sell clothes - we offer an experience, a statement, and a commitment to excellence that is woven into the very fabric of our products.

            At Elegance Men's Fashion, we believe that style is an expression of individuality. Our collections are designed to empower our customers to express their unique style and make a statement. We invite you to join us on this journey of style and elegance.
          </LargeBodyText>
        </section>

        <section id="collections">
          <Title>Collections</Title>
          <div className="collection-container">
            <Link to="/fall-collection">
              <button className="cta-button">Shop Now</button>
            </Link>
            <div className="collection">
              <div className="collection-content">
                <img src={fallCollection} alt="Fall Collection" className="collection-image" />
                <div className="collection-overlay">
                  <div className="collection-title">Fall Collection</div>
                </div>
              </div>
            </div>
          </div>
          <div className="collection-container">
            <Link to="/spring-collection">
              <button className="cta-button">Shop Now</button>
            </Link>
            <div className="collection">
              <div className="collection-content">
                <img src={springCollection} className="collection-image" alt="Spring Collection" />
                <div className="collection-overlay">
                  <div className="collection-title">Spring Collection</div>
                </div>
              </div>
            </div>
          </div>
          <div className="collection-container">
            <Link to="/summer-collection">
              <button className="cta-button">Shop Now</button>
            </Link>
            <div className="collection">
              <div className="collection-content">
                <img src={summerCollection} alt="Summer Collection" className="collection-image" />
                <div className="collection-overlay">
                  <div className="collection-title">Summer Collection</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <form className="newsletter-signup" onSubmit={handleSubscribe}>
          <Title>Subscribe to our newsletter</Title>
          <input type="email" placeholder="Your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="newsletter-signup button homepage-signup-button">Subscribe</button>
          {showSubscribeMessage && <p id="subscribe-message" className="fade">Subscribed</p>}
        </form>

          <section id="about-us" className="about-us-section">
          <Title>About Us</Title>
          <LargeBodyText>
            We are a high-end men's fashion company...
          </LargeBodyText>
          <div className="testimonials">
            {currentTestimonials.map(({ id, image, author, text }) => (
              <div key={id} className="testimonial">
                <img src={image} alt={author} />
                <Title>{author}</Title>
                <LargeBodyText>{text}</LargeBodyText>
              </div>
            ))}
          </div>
        </section>

        <section id="featured-products">
          <Title>Featured Products</Title>
          <div className="product-grid">
            {featuredImages.map((image, i) => (
              <Zoom key={i}>
                <div className="product">
                  <img src={image} alt={`Featured Product ${i + 1}`} style={{ objectFit: 'contain', height: '100%', width: '100%' }} />
                  <div className="product-details">
                    <Title>Featured Product {i + 1}</Title>
                    <SubTitle>$100</SubTitle>
                    <LargeBodyText>This is a brief description of the product.</LargeBodyText>
                    <button className="product-button">View Details</button>
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </section>

        <section id="new-arrivals">
          <Title>New Arrivals</Title>
          <div className="carousel">
            {arrivalsImages.map((image, i) => (
              <div className="carousel-item" key={i}>
                <img src={image} alt={`New Arrival ${i + 1}`} style={{ objectFit: 'contain', height: '100%', width: '100%' }} />
                <Title>New Arrival {i + 1}</Title>
                <SubTitle>$100</SubTitle>
                <LargeBodyText>This is a brief description of the product.</LargeBodyText>
                <button className="product-button">View Details</button>
              </div>
            ))}
          </div>
        </section>



        <section id="gallery">
          <Title>Gallery</Title>
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            transitionTime={1000}
            stopOnHover
          >
            {galleryImages.map((image, i) => (
              <div key={i}>
                <img src={image} alt={`Product ${i + 1}`} style={{ objectFit: 'contain', height: '100%', width: '100%' }} />
              </div>
            ))}
          </Carousel>
        </section>

        <div className={`spacer ${isScrolled ? 'spacer-scrolled' : ''}`} />
          <Footer className="footer-instance homepage-footer" theme="light" />
        </div>
      </div>
    );
  }



  export default HomePage;
