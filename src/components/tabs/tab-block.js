import './tab-block.css'

import React, {useEffect, useState} from 'react'

import Prism from 'prismjs'

const TabBlock = (props) => {

    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll()
    })

    const [ leftTabActive, setLeftTabActive ] = useState(true);
    const [ rightTabActive, setRightTabActive ] = useState(false);

    const handleLeftClick = () => {
        setLeftTabActive(true);
        if(rightTabActive == true) {
            setRightTabActive(!rightTabActive);
        }
    }
    const handleRightClick = () => {
        setRightTabActive(true);
        if(leftTabActive == true) {
            setLeftTabActive(!leftTabActive);
        }
    }

    return (
        <div className='TabBlock'>
            <div className='tab-bar'>
                <div className={`tab ${leftTabActive ? 'active' : ''}`} onClick={handleLeftClick}>Design</div>
                <div className={`tab ${rightTabActive ? 'active' : ''}`}  onClick={handleRightClick}>Code</div>
            </div>
            <div className='interface'>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src={props.figmaLink} allowfullscreen="" className={`design ${leftTabActive ? 'active-design' : ''}`}></iframe>
                <pre className={`code ${rightTabActive ? 'active-code' : ''}`}>
                    <code className='language-jsx'>
                        {props.code}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default TabBlock;