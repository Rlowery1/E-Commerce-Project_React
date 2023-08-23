import React from "react";
import Icon from "../../components/Common/Icon/icon";
import "./footer.styles.css";
import {Link} from "react-router-dom";

interface Props {
  className?: string;
  theme?: 'light' | 'dark';
}

const Footer: React.FC<Props> = ({ className, theme = 'light' }) => {
  return (
    <div className={`footer ${className} ${theme}-theme`}>

      <div className="overlap-group">
      </div>
      <div className="group">
        <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer">
          <Icon src="instagram" alt="instagram" />
        </a>
        <a href="https://twitter.com/youraccount" target="_blank" rel="noopener noreferrer">
          <Icon src="twitter" alt="twitter" />
        </a>
        <a href="https://www.youtube.com/youraccount" target="_blank" rel="noopener noreferrer">
          <Icon src="youtube" alt="youtube" />
        </a>
      </div>

      <Link to="/about" className="about-link">About</Link>
      <Link to="/contact" className="contact">Contact</Link>
      <Link to="/blog" className="blog">Blog</Link>
      <div className="overlap">
        <p className="copyright">
          Copyright© 2023 Ryan Lowery. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
