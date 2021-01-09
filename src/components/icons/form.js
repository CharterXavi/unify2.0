import React from 'react';

const FormIcon = () => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 43" fill="none" className='icon'>
        <g filter="url(#form)">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9121 0C15.6451 0 14.618 1.02711 14.618 2.29412C14.618 3.56112 15.6451 4.58823 16.9121 4.58823H42.9121C44.1791 4.58823 45.2062 3.56112 45.2062 2.29412C45.2062 1.02711 44.1791 0 42.9121 0H16.9121ZM4.29412 6.88248C3.02711 6.88248 2 7.90959 2 9.1766C2 10.4436 3.02711 11.4707 4.29412 11.4707H43.2941C44.5611 11.4707 45.5882 10.4436 45.5882 9.1766C45.5882 7.90959 44.5611 6.88248 43.2941 6.88248H4.29412Z" fill="#363F55"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29412 13.7649C3.02711 13.7649 2 14.792 2 16.059C2 17.326 3.02711 18.3531 4.29412 18.3531H43.2941C44.5611 18.3531 45.5882 17.326 45.5882 16.059C45.5882 14.792 44.5611 13.7649 43.2941 13.7649H4.29412ZM17.2943 20.6474C16.0273 20.6474 15.0001 21.6745 15.0001 22.9415C15.0001 24.2085 16.0273 25.2356 17.2943 25.2356H43.2943C44.5613 25.2356 45.5884 24.2085 45.5884 22.9415C45.5884 21.6745 44.5613 20.6474 43.2943 20.6474H17.2943Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29412 27.5293C3.02711 27.5293 2 28.5564 2 29.8234C2 31.0904 3.02711 32.1175 4.29412 32.1175H43.2941C44.5611 32.1175 45.5882 31.0904 45.5882 29.8234C45.5882 28.5564 44.5611 27.5293 43.2941 27.5293H4.29412ZM22.6471 34.4118C21.3801 34.4118 20.353 35.4389 20.353 36.7059C20.353 37.9729 21.3801 39 22.6471 39H43.2942C44.5612 39 45.5883 37.9729 45.5883 36.7059C45.5883 35.4389 44.5612 34.4118 43.2942 34.4118H22.6471Z" fill="url(#form1)"/>
        </g>
        <defs>
            <filter id="form" x="0.470588" y="0" width="46.6472" height="42.0588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1.52941"/>
                <feGaussianBlur stdDeviation="0.764706"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="form1" x1="4.33509" y1="39" x2="20.3977" y2="12.3477" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    );
}

export default FormIcon;