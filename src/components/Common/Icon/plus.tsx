import React from "react";

interface Props {
  className: string;
}

const Plus: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`plus ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M12 3V21" stroke="black" />
      <path className="path" d="M3 12L21 12" stroke="black" />
    </svg>
  );
};

export default Plus;
