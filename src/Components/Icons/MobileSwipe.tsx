import React from "react";

type Props = {
  className?: string;
};

const MobileSwipe = ({ className }: Props) => {
  return (
    <div>
      <svg
        width="132"
        height="86"
        viewBox="0 0 132 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_2543_974)">
          <path
            d="M-183 103C-166.632 80.0283 -106.344 -32.7417 -84.7925 -34.83C-63.2413 -36.9184 -75.5173 90.7683 -53.6934 90.47C-31.8695 90.1717 26.5094 -33.935 46.1509 -36.62C65.7924 -39.305 44.5141 80.9233 64.1557 74.36C83.7972 67.7967 147.359 -50.94 164 -76"
            stroke="url(#paint0_linear_2543_974)"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2543_974"
            x1="-183"
            y1="-76"
            x2="164"
            y2="-76"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#719ba0" />
            <stop offset="1" stopColor="#719ba0" />
          </linearGradient>
          <clipPath id="clip0_2543_974">
            <rect width="132" height="86" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default MobileSwipe;
