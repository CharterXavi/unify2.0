import React from 'react';

const ColorsIcon = () => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62" fill="none" className='icon'>
        <g filter="url(#colors)">
            <path d="M29 0.7375C43.5044 0.7375 55.2625 12.4956 55.2625 27C55.2625 28.8297 53.6639 30.2625 51.6913 30.2625H44.0002C41.0965 30.2625 38.5909 30.4826 36.6168 30.9802C34.6645 31.4723 33.1015 32.2685 32.2615 33.5284C31.3863 34.8411 31.4204 36.4559 32.2159 38.2587C33.0044 40.0453 34.5785 42.1215 36.9785 44.5215C37.4943 45.0373 37.9451 45.532 38.337 46.006C39.3435 47.223 39.4179 48.5972 38.8734 49.7861C38.318 50.999 37.0986 52.0467 35.4773 52.4579C33.4062 52.9832 31.2362 53.2625 29 53.2625C14.4956 53.2625 2.7375 41.5044 2.7375 27C2.7375 12.4956 14.4956 0.7375 29 0.7375ZM29 13.7375C31.6164 13.7375 33.7375 11.6164 33.7375 9C33.7375 6.38355 31.6164 4.2625 29 4.2625C26.3836 4.2625 24.2625 6.38355 24.2625 9C24.2625 11.6164 26.3836 13.7375 29 13.7375ZM43 19.7375C45.6165 19.7375 47.7375 17.6164 47.7375 15C47.7375 12.3836 45.6165 10.2625 43 10.2625C40.3835 10.2625 38.2625 12.3836 38.2625 15C38.2625 17.6164 40.3835 19.7375 43 19.7375ZM15 19.7375C17.6164 19.7375 19.7375 17.6164 19.7375 15C19.7375 12.3836 17.6164 10.2625 15 10.2625C12.3836 10.2625 10.2625 12.3836 10.2625 15C10.2625 17.6164 12.3836 19.7375 15 19.7375ZM6.2625 29C6.2625 31.6164 8.38355 33.7375 11 33.7375C13.6164 33.7375 15.7375 31.6164 15.7375 29C15.7375 26.3836 13.6164 24.2625 11 24.2625C8.38355 24.2625 6.2625 26.3836 6.2625 29Z" fill="url(#colors1)" stroke="#363F55" strokeWidth="1.475"/>
            <path d="M30.5 46L31.9999 47.4999C31.9999 47.4999 31.5003 47.5 31.0003 51.5C30.5003 55.5 21.0004 59.5 23.5004 56.5C26.0004 53.5 25.5004 50.5001 27.0003 49.5C28.5001 48.4999 29.2571 46.1349 30.5 46Z" fill="white"/>
            <path d="M58 8L31 47" stroke="#363F55" strokeWidth="4" strokeLinecap="round"/>
        </g>
        <defs>
            <filter id="colors" x="0" y="0" width="62.0004" height="61.5474" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="colors1" x1="4.89286" y1="54" x2="67.6194" y2="26.61" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    )
}

export default ColorsIcon;