import React from 'react';

const RulerIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 60" fill="none" className='icon'>
            <g filter="url(#ruler)">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.122 0C20.8494 0 21.439 0.589674 21.439 1.31707V34.2439C21.439 34.2934 21.4418 34.3422 21.4471 34.3902L3.00803 52.8292C3.00273 52.7812 3 52.7324 3 52.6829V35.561V1.31707C3 0.589673 3.58967 0 4.31707 0H20.122ZM3.8037 53.8962C3.96146 53.963 4.13495 54 4.31707 54H54.3659C55.0933 54 55.6829 53.4103 55.6829 52.6829V36.8781C55.6829 36.1507 55.0933 35.561 54.3659 35.561H22.7561C22.574 35.561 22.4005 35.524 22.2427 35.4572L3.8037 53.8962Z" fill="url(#ruler1)"/>
            </g>
            <path d="M12.2195 9.21942C12.2195 8.49202 12.8091 7.90234 13.5365 7.90234H21.439V10.5365H13.5365C12.8091 10.5365 12.2195 9.94682 12.2195 9.21942Z" fill="white"/>
            <path d="M12.2192 18.439C12.2192 17.7116 12.8089 17.122 13.5363 17.122H21.4388V19.7561H13.5363C12.8089 19.7561 12.2192 19.1664 12.2192 18.439Z" fill="white"/>
            <path d="M12.2192 27.6585C12.2192 26.9311 12.8089 26.3415 13.5363 26.3415H21.4388V28.9756H13.5363C12.8089 28.9756 12.2192 28.3859 12.2192 27.6585Z" fill="white"/>
            <path d="M28.0241 44.7805C27.2967 44.7805 26.707 44.1908 26.707 43.4634V35.561H29.3412V43.4634C29.3412 44.1908 28.7515 44.7805 28.0241 44.7805Z" fill="white"/>
            <path d="M37.2434 44.7805C36.516 44.7805 35.9264 44.1908 35.9264 43.4634V35.5609H38.5605V43.4634C38.5605 44.1908 37.9708 44.7805 37.2434 44.7805Z" fill="white"/>
            <path d="M46.4629 44.7805C45.7355 44.7805 45.1459 44.1908 45.1459 43.4634V35.5609H47.78V43.4634C47.78 44.1908 47.1903 44.7805 46.4629 44.7805Z" fill="white"/>
            <defs>
                <filter id="ruler" x="0.365854" y="0" width="57.9512" height="59.2683" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2.63415"/>
                <feGaussianBlur stdDeviation="1.31707"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="ruler1" x1="5.8223" y1="54" x2="67.4949" y2="27.727" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default RulerIcon;