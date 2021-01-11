import './header.css'

import React from 'react'

const Header = (props) => {

    return (
        <div className='Header'>
            <div className="wrapper">
                <h1>{props.content}</h1>
                {props.icon}
            </div>
        </div>
    );
};

export default Header;