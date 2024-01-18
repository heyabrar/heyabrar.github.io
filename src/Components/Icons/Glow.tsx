type Props = {
  className?: string;
};

const Glow = ({ className }: Props) => {
  return (
    <div>
      <svg
        width="1556"
        height="813"
        viewBox="0 0 1556 813"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g opacity="0.3" filter="url(#filter0_bdi_42_3)">
          <path
            d="M28 443.902V152.896C28 24.6561 176.42 -46.3696 276.219 34.0646L688.187 366.095C744.433 411.427 824.734 411.074 880.58 365.25L1278.74 38.5381C1378.31 -43.1661 1528 27.6592 1528 156.524V443.902C1528 747.698 784.727 747.698 784.727 747.698C784.727 747.698 28 747.698 28 443.902Z"
            fill="url(#paint0_linear_42_3)"
          />
        </g>
        <defs>
          <filter
            id="filter0_bdi_42_3"
            x="-64.3077"
            y="-92.3077"
            width="1684.62"
            height="932.313"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="46.1539" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_42_3"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="36.9231" />
            <feGaussianBlur stdDeviation="13.8462" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_42_3"
              result="effect2_dropShadow_42_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_42_3"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.923077" />
            <feGaussianBlur stdDeviation="0.461538" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_42_3"
            />
          </filter>
          <linearGradient
            id="paint0_linear_42_3"
            x1="778"
            y1="747.698"
            x2="778"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor" />
            <stop offset="0.260417" stop-color="currentColor" />
            <stop offset="0.515625" stop-color="currentColor" />
            <stop offset="0.75" stop-color="currentColor" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Glow;
