// src/pages/Blog/Blog.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./blog.css";

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  // Function to extract a short description
  const getShortDescription = (body: string) => {
    return body.split('\n')[0];
  };

  useEffect(() => {
    axios
      .get("https://whale-app-i5fy4.ondigitalocean.app/api/blog-posts") // Update this URL
      .then((response) => {
        setBlogPosts(response.data.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching blog posts:", error);
      });
  }, []);


  return (
    <div>
      <Header />
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Discover the latest in men's fashion, trends, and style tips.</p>
      </div>
      <div className="blog-content">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.attributes.image?.url} alt={post.attributes.Title} className="blog-image" />
            <h2>{post.attributes.Title}</h2>
            <p>{getShortDescription(post.attributes.Body)}</p> {/* Short description */}
            <a href={`/blog/${post.id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
