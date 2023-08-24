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
  const [loading, setLoading  ] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://whale-app-i5fy4.ondigitalocean.app/api/blog-posts/${postId}`)
      .then(response => {
        const postBody = response.data.data.attributes.Body;
        const updatedBody = postBody.replace(
          /!\[([^\]]*)\]\((\/uploads\/[^)]*)\)/g,
          (match: string, altText: string, relativePath: string) => `![${altText}](https://whale-app-i5fy4.ondigitalocean.app${relativePath})`
        );
        setPost({ ...response.data.data, attributes: { ...response.data.data.attributes, Body: updatedBody } });
      })
      .catch(error => console.error("An error occurred while fetching the blog post:", error))
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading || !post || !post.attributes) return <div className="loading">Loading...</div>;

  return (
    <div className="blog-post-container">
      <Header />
      <div className="blog-header">
        <h1>{post.attributes.Title}</h1>
        <p className="author">By {post.attributes.Author}</p>
        <div className="post-meta">
          <span className="date">Posted on {post.attributes.Date}</span>
          <span className="category">Category: {post.attributes.Category}</span>
        </div>
      </div>
      <div className="blog-content">
        <div className="markdown-container">
          <ReactMarkdown className="markdown-content">{post.attributes.Body}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
