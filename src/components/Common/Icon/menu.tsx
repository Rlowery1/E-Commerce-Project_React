import React from "react";

interface Props {
  className: string;
}

const Menu: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`menu ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M0.306763 12H15.9824" stroke="#14142B" />
      <path className="path" d="M0.306641 5H23.6931" stroke="#14142B" />
      <path className="path" d="M0.306641 19H23.6931" stroke="#14142B" />
    </svg>
  );
};

export default Menu;
