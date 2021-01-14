import React from 'react'

const CodeDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Typography - 🔨 Code</h3>
                <p>
                    Our typography system is currently implemented using <span className='code-span'>em</span> units, which is a relative <span className='code-span'>font-size</span> property. These 'em' units are relative to the base font-size, so in our case we've
                    declared a base font-size of 17px in the <span className='code-span'>body</span>, so each different font stye/type (headings, paragraphs, etc.) in our system is a multiple of this base font size.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Heading Sizes</h5>
                    <p>
                        We've leveraged Google's <a href='https://material.io/design/typography/the-type-system.html#type-scale' target='_blank' rel='noopenner noreferrer'>type scale generator</a> to
                        produce a typographical hierarchy that adheres to UX/UI best practices. From there, typography was tweaked a bit further for our specific components' use cases. 
                    </p>
                </div>

            </div>
        </div>
    )
}


export default CodeDocs