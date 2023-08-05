import React from "react";

interface Props {
  className: string;
}

const ShoppingBag: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`shopping-bag ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M3.49594 23.28L4.31166 6.7207H20.659L21.4747 23.28H3.49594Z" stroke="#14142B" />
      <path
        className="path"
        d="M8.1604 10.1491L8.1604 5.55139C8.1604 4.40438 8.61605 3.30434 9.42711 2.49328C10.2382 1.68221 11.3382 1.22656 12.4852 1.22656C13.6322 1.22656 14.7323 1.68221 15.5433 2.49328C16.3544 3.30434 16.8101 4.40438 16.8101 5.55139V10.1491"
        stroke="#14142B"
      />
    </svg>
  );
};

export default ShoppingBag;
