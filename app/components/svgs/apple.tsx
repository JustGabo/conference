import * as React from "react";

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="200"
    // height="200"
    fill="#b9b9b9"
    className="h-14 w-14 z-10"
    viewBox="0 0 820 950"
    {...props}
  >
    <path
      d="M404.345 229.846q78.7 0 138.08-61.465c59.38-61.465 59.38-88.626 59.38-142.947q0-8.949-1.414-25.434-10.368 1.413-15.552 2.355-72.575 10.362-127.713 71.12t-55.137 129.996q0 8.006 2.356 26.375M592.379 950q56.08 0 123.943-76.772c67.863-76.772 79.8-111.313 103.678-180.392q-133.368-68.765-133.368-197.348 0-107.386 107.92-183.688-74.931-93.729-197.931-93.729-51.84 0-94.724 15.543l-17.908 6.594-24.035 9.42q-23.563 8.95-42.885 8.95-15.081 0-39.586-10.363l-18.38-7.536-17.436-7.065q-38.173-16.014-82-16.014-117.345 0-188.506 79.128Q0 375.855 0 505.379q0 182.276 114.046 336.763Q193.219 950 258.724 950q27.805 0 55.138-10.833l23.092-9.42 18.38-6.594q38.643-13.659 71.16-13.659 34.403 0 79.173 17.427l14.609 5.652Q565.988 950 592.379 950"
      // fill="#999999"
      stroke="#888888" 
      strokeWidth="10" 
    ></path>
  </svg>
);

export default AppleIcon;
