import React from "react";

interface Props {
  className: string;
}

const ForwardArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`forward-arrow ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M14.2827 5L20.9998 12L14.2827 19" stroke="#14142B" />
      <line className="line" stroke="#14142B" x1="20.6279" x2="2.89487" y1="12.1089" y2="12.1089" />
    </svg>
  );
};

export default ForwardArrow;
