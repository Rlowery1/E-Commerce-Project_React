import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./blogPost.css";

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/blog-posts/${postId}`)
      .then(response => {
        setPost(response.data.data);
      })
      .catch(error => console.error("An error occurred while fetching the blog post:", error));
  }, [postId]);

  if (!post || !post.attributes) return <div className="loading">Loading...</div>;

  return (
    <div className="blog-post-container">
      <Header />
      <div className="blog-header">
        <h1>{post.attributes.Title}</h1>
        <p className="author">By {post.attributes.Author}</p>
      </div>
      <div className="blog-content">
        <div className="blog-image-container">
          <img src={post.attributes.image?.url} alt={post.attributes.Title} className="blog-image" />
        </div>
        <div className="markdown-container">
          <ReactMarkdown className="markdown-content">{post.attributes.Body}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
