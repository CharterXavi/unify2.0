import React from 'react';

const Arrow = () => {

return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 550" fill="none" className='Arrow'>
        <path d="M52.7449 5.61881C61.3519 -1.66357 73.8929 -1.89069 82.7577 5.07523L130.497 42.5868C140.81 50.6906 142.601 65.6206 134.497 75.9335C126.393 86.2467 111.463 88.0378 101.15 79.9341L91.8332 72.613C91.8331 84.8181 91.8331 98.7378 91.8331 113.693L91.8334 549.5H44.3359L44.3356 113.693C44.3356 99.6846 44.3357 86.5846 44.3357 74.9513L39.089 79.3905C29.0759 87.8623 14.091 86.6131 5.61921 76.6002C-2.8526 66.5871 -1.60336 51.6022 8.4095 43.1304L52.7449 5.61881Z" fill="url(#arrow)"/>
        <defs>
            <linearGradient id="arrow" x1="7.47713" y1="549.5" x2="198.173" y2="528.35" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
  );
}

export default Arrow;