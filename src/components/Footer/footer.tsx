import React from "react";
import Icon from "../../components/Common/Icon/icon";
import "./footer.styles.css";

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

      <div className="about">About</div>
      <div className="contact">Contact</div>
      <div className="blog">Blog</div>
      <div className="overlap">
        <p className="copyright">
          Copyright© 2023 Ryan Lowery. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
