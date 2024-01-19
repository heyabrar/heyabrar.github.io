import React from "react";

type Props = {
  className?: string;
};

const Swipe = ({ className }: Props) => {
  return (
    <div>
      <svg
        width="210"
        height="137"
        viewBox="0 0 210 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_2543_1073)">
          <path
            d="M-296 156.385C-270.057 119.81 -174.498 -59.7403 -140.34 -63.0653C-106.181 -66.3903 -125.638 136.91 -91.0471 136.435C-56.4559 135.96 36.0754 -61.6402 67.2075 -65.9152C98.3396 -70.1902 64.6132 121.235 95.7453 110.785C126.877 100.335 227.624 -88.7152 254 -128.615"
            stroke="url(#paint0_linear_2543_1073)"
            strokeWidth="50"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2543_1073"
            x1="-296"
            y1="-128.615"
            x2="254"
            y2="-128.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#719ba0" />
            <stop offset="1" stopColor="#719ba0" />
          </linearGradient>
          <clipPath id="clip0_2543_1073">
            <rect width="210" height="137" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Swipe;
