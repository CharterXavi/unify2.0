import './card.css'

import ButtonPrimaryAlt from '../buttons/button-primary-alt'
import React from 'react'

const Card = (props) => {

    return (
        <div class="Card">
            {props.icon}
            <h4 className='detail-title'>{props.title}</h4>
            <p className='detail-text'>{props.desc}</p>
            <ButtonPrimaryAlt link={props.link} content='Read more' />
        </div>
    )
}

export default Card