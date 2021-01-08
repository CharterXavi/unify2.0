import './hero.css'

import ButtonPrimary from '../buttons/button-primary'
import Logo from '../icons/logo'
import React from 'react'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="content">
                <Logo />
                <h1>Design System by Charter Healthcare Group</h1>
                <ButtonPrimary link='#home' content='Dive in!'/>
            </div>
        </div>
    )
}

export default Hero