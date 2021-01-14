import React from 'react'

const CodeDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Buttons - 🔨 Code</h3>
                <p>
                    The code for our buttons differs by mere classNames. The structure of the button component is the same across each button while their design changes in CSS.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Button Props</h5>
                    <p>
                        All of the button components accept a handful of potential props. 
                    </p>
                    <ul>
                        <li><span className='code-span'>link</span> - this is the link or relative path to which a click of the button should send a user - in the form of a String.</li>
                        <li><span className='code-span'>content</span> - the name of the button, or rather what text appears within the button.</li>
                        <li><span className='code-span'>download</span> - include a download prop with the boolean value of 'true' to use a button as a download button. Be sure to include a relative path to the file you're allowing the user to download on click.</li>
                        <li><span className='code-span'>animation</span> - buttons are rigged up to accept AOS animations (on scroll). If you want an animation, simply add a valid Data-AOS animation attribute name as a String.</li>
                        <li><span className='code-span'>animationTime</span> - if you include an animation, you may also want to customize the animation duration. Include this prop with a Number as a String in miliseconds (where 3000ms = 3s).</li>
                    </ul>
                </div>
                <div className="right">
                    <h5>Button Styling</h5>
                    <p>
                        Primary Buttons utilize <span className='code-span'>::before</span> pseudoselectors and <span className='code-span'>opacity</span> properties to simulate a cool gradient on hover. The other buttons use pseudoselectors as well but have a much
                        more subtle background hover animation. 
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CodeDocs