import React from "react";
import LogoImage from "../../../assets/images/logo.svg";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return <img className={`logo ${className}`} alt="Logo" src={LogoImage} />;
};

export default Logo;
