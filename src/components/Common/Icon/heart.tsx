import React from "react";

interface Props {
  className: string;
}

const Heart: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`heart ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z"
        stroke="#14142B"
      />
    </svg>
  );
};

export default Heart;
