import React from "react";

interface Props {
  className: string;
  onClick?: () => void;
}

const Search: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      className={`search ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} // Add this line to handle the onClick event
    >
      <path
        className="path"
        d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
        stroke="#14142B"
      />
      <path className="path" d="M22 21.9999L18.7823 18.7822" stroke="#14142B" />
    </svg>
  );
};

export default Search;
