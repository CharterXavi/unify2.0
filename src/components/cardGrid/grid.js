import './grid.css'

import CCMIcon from '../icons/ccm'
import Card from './card'
import ColorsIcon from '../icons/colors'
import FlowerIcon from '../icons/flower'
import FormIcon from '../icons/form'
import NetworkIcon from '../icons/network'
import React from 'react'
import RulerIcon from '../icons/ruler'
import ShapesIcon from '../icons/shapes'
import TypographyIcon from '../icons/typography'
import VisionIcon from '../icons/vision'

const Grid = () => {

    const cardList = [
        {
            icon: <CCMIcon />,
            title: 'Guidelines',
            desc: 'Learn more about how to approach this system.',
            link: '/guidelines'
        },
        {
            icon: <VisionIcon />,
            title: 'Purpose & Vision',
            desc: 'Learn more about how to approach this system.',
            link: '/purpose'
        },
        {
            icon: <ColorsIcon />,
            title: 'Colors',
            desc: 'Learn more about how to approach this system.',
            link: '/colors'
        },
        {
            icon: <TypographyIcon />,
            title: 'Typography',
            desc: 'Learn more about how to approach this system.',
            link: '/typography'
        },
        {
            icon: <RulerIcon />,
            title: 'Spacing',
            desc: 'Learn more about how to approach this system.',
            link: '/spacing'
        },
        {
            icon: <ShapesIcon />,
            title: 'Buttons',
            desc: 'Learn more about how to approach this system.',
            link: '/buttons'
        },
        {
            icon: <NetworkIcon />,
            title: 'Iconography',
            desc: 'Learn more about how to approach this system.',
            link: '/iconography'
        },
        {
            icon: <FormIcon />,
            title: 'Forms',
            desc: 'Learn more about how to approach this system.',
            link: '/forms'
        },
        {
            icon: <FlowerIcon />,
            title: 'Logos',
            desc: 'Learn more about how to approach this system.',
            link: '/logos'
        },
    ]

    return (
        <div class="Grid">
        {cardList.map(card => {
            return <Card
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                link={card.link}
            />
        })}
        </div>
    )
}

export default Grid
