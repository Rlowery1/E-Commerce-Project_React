import React, {useEffect, useRef, useState} from 'react';
import './springCollection.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartSlice';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import { Link } from 'react-router-dom';

type CollectionItem = {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  review: string;
};

const fetchSpringCollection = async () => {
  try {
    const result: any = await API.graphql({
      query: listProducts,
      variables: {
        filter: { seasonalCollection: { eq: 'spring collection' } }, // Filter by seasonal collection
      },
      authMode: "API_KEY",
    });

    return result.data.listProducts.items as CollectionItem[];
  } catch (error) {
    console.error("Error fetching Fall collection:", error);
    return [];
  }
};

const SpringCollection = () => {

  const dispatch = useDispatch();
  const [collectionItems, setCollectionItems] = useState<CollectionItem[]>([]);



  const testimonials = [
    {
      id: 1,
      text: 'The collection is fantastic! The quality of the fabric and the craftsmanship is top-notch. I am extremely satisfied with my purchase.',
      name: 'Alex Schreiber',
      position: 'CEO',
      company: 'Legacy Co.',
      image: 'https://i.imgur.com/abc123.jpg'
    },
    {
      id: 2,
      text: 'These styles are truly a breath of fresh air in the fashion industry. The attention to detail in every piece is truly remarkable.',
      name: 'Elizabeth Schuyler',
      position: 'Fashion Blogger',
      company: 'Modern Styles',
      image: 'https://i.imgur.com/xyz456.jpg'
    },
    {
      id: 3,
      text: 'The combination of classic and contemporary is seamlessly achieved in this collection. Highly recommended!',
      name: 'Bill Lankford',
      position: 'Influencer',
      company: 'Fashion Forward',
      image: 'https://i.imgur.com/abc123.jpg'
    },
    // Add more testimonials...
  ];


  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [promoOpacity, setPromoOpacity] = useState(1);
  const [startAnimations, setStartAnimations] = useState(false);
  const promotionalRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    const height = window.innerHeight;

    // Fade in/out header text
    if (offset <= height * 0.6) {
      setHeaderOpacity(1 - offset / (height * 0.6));
    } else {
      setHeaderOpacity(0);
    }

    // Fade in promotional section
    if (offset > height * 0.6) {
      let newPromoOpacity = (offset - height) / (height / 2);
      setPromoOpacity(Math.min(newPromoOpacity, 1));
    } else {
      setPromoOpacity(0);
    }

// Start animations when the user has scrolled 60% down the page
    setStartAnimations(offset >= height * 0.6);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add the "animate__animated" and "animate__slideInUp" classes when the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__slideInUp');
        }
      },
      {
        // Trigger the animation when the promotional section is in the viewport
        threshold: 0.1
      }
    );

    if (promotionalRef.current) {
      observer.observe(promotionalRef.current);
    }

    return () => {
      if (promotionalRef.current) {
        observer.unobserve(promotionalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("spring-collection-page");

    return () => {
      document.body.classList.remove("spring-collection-page");
    };
  }, []);

  useEffect(() => {
    fetchSpringCollection().then(items => {
      setCollectionItems(items);
    });
  }, []);

  const handleAddToCart = (item: any) => { // You may define a proper type for the item
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      imageUrl: item.image,
      category: 'Summer Collection',
      quantity: 1,
    }));
  };
console.log("collection test",collectionItems)


  return (
    <div className="spring-collection">
      <Header />
      <div className="hero">
        <h1 style={{ opacity: headerOpacity }}>Spring Collection</h1>
      </div>
      <div className={`promotional spring`} ref={promotionalRef} style={{ opacity: promoOpacity }}>
        <div className={`promo-image promo-image-left`}></div>
        <h2>Up to 50% off select items</h2>
        <div className={`promo-image promo-image-right`}></div>
      </div>
      <div className="collection-list">
        {collectionItems.map(item => (
          <Link to={`/product/${item.id}`} key={item.id}> {/* Added Link here */}
            <div className="collection-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="details">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <p className="description">{item.description}</p>
                <button className="add-to-cart-btn" onClick={(e) => {e.preventDefault(); handleAddToCart(item);}}>Add to Cart</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="testimonials">
        <h2>What our customers are saying</h2>
        {testimonials.map(testimonial => (
          <div className="testimonial" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-position">{testimonial.position}, {testimonial.company}</p>
            <p className="testimonial-text">{`"${testimonial.text}"`}</p>
          </div>
        ))}
      </div>
      <Footer className="light-theme" />
    </div>
  );
}

export default SpringCollection;
