export const PlayOnRepeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#75A5FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 6.63h.25a6 6 0 1 1 0 12h-5.25m-4.66 0H7.5a6 6 0 0 1 0-12H13m-3.5-4 4 4-4 4m6 12-4-4 4-4"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.63h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
