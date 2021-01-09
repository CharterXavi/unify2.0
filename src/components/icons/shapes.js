import React from 'react';

const ShapesIcon = () => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 61" fill="none" className='icon'>
        <g filter="url(#shapes)">
            <path d="M32.5356 36.1131C32.5356 34.739 33.6496 33.625 35.0237 33.625H52.4404C53.8145 33.625 54.9285 34.739 54.9285 36.1131V53.5298C54.9285 54.9039 53.8145 56.0179 52.4404 56.0179H35.0237C33.6496 56.0179 32.5356 54.9039 32.5356 53.5298V36.1131Z" fill="url(#shapes1)"/>
            <path d="M36.2923 2.0715C37.337 0.261974 39.9489 0.261975 40.9936 2.0715L53.9221 24.4644C54.9668 26.2739 53.6609 28.5358 51.5715 28.5358H25.7144C23.625 28.5358 22.3191 26.2739 23.3638 24.4644L36.2923 2.0715Z" fill="#363F55"/>
            <path d="M26.4286 43.8034C26.4286 50.5492 20.96 56.0177 14.2143 56.0177C7.46852 56.0177 2 50.5492 2 43.8034C2 37.0576 7.46852 31.5891 14.2143 31.5891C20.96 31.5891 26.4286 37.0576 26.4286 43.8034Z" fill="white"/>
        </g>
        <defs>
            <filter id="shapes" x="0" y="0.714355" width="56.9285" height="59.3035" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="shapes1" x1="33.7353" y1="56.0179" x2="59.7469" y2="44.6597" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    );
}

export default ShapesIcon;