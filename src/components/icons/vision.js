import React from 'react';

const VisionIcon = () => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 62" fill="none" className='icon'>
        <g filter="url(#vision)">
        <path d="M63 31C63 34.542 60.001 38.0373 54.4847 40.7064C49.0381 43.3419 41.4433 45 33 45C24.5567 45 16.9619 43.3419 11.5153 40.7064C5.99901 38.0373 3 34.542 3 31C3 27.458 5.99901 23.9627 11.5153 21.2936C16.9619 18.6581 24.5567 17 33 17C41.4433 17 49.0381 18.6581 54.4847 21.2936C60.001 23.9627 63 27.458 63 31Z" fill="white" stroke="#363F55" strokeWidth="2"/>
        <circle cx="33" cy="31" r="13" fill="url(#vision1)"/>
        <circle cx="33" cy="31" r="5" fill="#363F55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20.9051 3.0949L20 0L19.0949 3.0949L16 4L19.0949 4.9051L20 8L20.9051 4.9051L24 4L20.9051 3.0949ZM10.9051 11.0949L10 8L9.0949 11.0949L6 12L9.0949 12.9051L10 16L10.9051 12.9051L14 12L10.9051 11.0949ZM43 52L43.6788 54.3212L46 55L43.6788 55.6788L43 58L42.3212 55.6788L40 55L42.3212 54.3212L43 52ZM56.7445 50.2555L55.5 46L54.2555 50.2555L50 51.5L54.2555 52.7445L55.5 57L56.7445 52.7445L61 51.5L56.7445 50.2555Z" fill="url(#vision2)"/>
        </g>
        <defs>
            <filter id="vision" x="0" y="0" width="66" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="vision1" x1="21.3929" y1="44" x2="51.5945" y2="30.8122" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            <linearGradient id="vision2" x1="8.94643" y1="58" x2="73.8825" y2="31.1118" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    );
}

export default VisionIcon;