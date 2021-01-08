import './grid.css'

import CCMIcon from '../icons/ccm'
import Card from './card'
import React from 'react'

const Grid = () => {

    const cardList = [
        {
            icon: CCMIcon,
            title: 'Guidelines',
            desc: 'Learn more about how to approach this system.',
            link: '/guidelines'
        },
        {
            icon: CCMIcon,
            title: 'Purpose',
            desc: 'Learn more about how to approach this system.',
            link: '/purpose'
        },
        {
            icon: CCMIcon,
            title: 'Vision',
            desc: 'Learn more about how to approach this system.',
            link: '/vision'
        },
        {
            icon: CCMIcon,
            title: 'Colors',
            desc: 'Learn more about how to approach this system.',
            link: '/colors'
        },
        {
            icon: CCMIcon,
            title: 'Typography',
            desc: 'Learn more about how to approach this system.',
            link: '/typography'
        },
        {
            icon: CCMIcon,
            title: 'Spacing',
            desc: 'Learn more about how to approach this system.',
            link: '/spacing'
        },
        {
            icon: CCMIcon,
            title: 'Buttons',
            desc: 'Learn more about how to approach this system.',
            link: '/buttons'
        },
        {
            icon: CCMIcon,
            title: 'Iconography',
            desc: 'Learn more about how to approach this system.',
            link: '/iconography'
        },
        {
            icon: CCMIcon,
            title: 'Logos',
            desc: 'Learn more about how to approach this system.',
            link: '/logos'
        },
    ]

    return (
        <div class="Grid">
        {cardList.map(card => {
            return <Card 
                title={card.title}
                desc={card.desc}
                link={card.link}
            />
        })}
        </div>
    )
}

export default Grid
