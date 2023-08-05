import React from "react";

interface Props {
  className: string;
}

const Backward: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`backward ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M9.61182 19L2.89474 12L9.61182 5" stroke="#14142B" />
      <line className="line" stroke="#14142B" x1="3.2666" x2="20.9997" y1="11.8911" y2="11.8911" />
    </svg>
  );
};

export default Backward;
