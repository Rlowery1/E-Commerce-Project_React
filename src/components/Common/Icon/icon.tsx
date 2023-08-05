import React from "react";
import "./style.css";

import twitterIcon from "../../../assets/images/twitter.svg";
import instagramIcon from "../../../assets/images/instagram.svg";
import youtubeIcon from "../../../assets/images/youTube.svg";

interface Props {
  className?: string;
  src: string;
  alt: string;
}

const Icon: React.FC<Props> = ({ className, src, alt }) => {
  let iconSrc;
  switch (src) {
    case "twitter":
      iconSrc = twitterIcon;
      break;
    case "instagram":
      iconSrc = instagramIcon;
      break;
    case "youtube":
      iconSrc = youtubeIcon;
      break;
    default:
      iconSrc = "";
  }

  return (
    <div className={`icon-wrapper ${className}`}>
      <img className="icon" alt={alt} src={iconSrc} />
    </div>
  );
};

export default Icon;
