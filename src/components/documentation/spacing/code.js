import React from 'react'

const CodeDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Spacing - 🔨 Code</h3>
                <p>
                    Our digital color palette is meant to be implemented at the highest level stylesheet. In our React/Gatsby software, this would be the layout.css file in the src/components directory.
                    CSS Variables are currently used to store the color hex codes, linear gradients, or box shadows so they can easily be recalled using 'color: var(--color-name);' syntax. 
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Inset Spacing</h5>
                    <p>
                        To implement XS, S, M, L, XL sizes of spacing, we can store those properties as variables which contain pixel values of 4, 8, 16, 32, and 64 respectively. These 5 variables 
                        can then be used on containers and other elements with CSS <span className='code-span'>padding</span> properties. 
                    </p>
                    <h5>Inset Squish Spacing</h5>
                    <p>
                        For inset squish spacing, we can repeat the process above for Inset Spacing, but assigning a variable that holds two pixel values instead of one: a top/bottom pixel value and a left/right pixel value.
                    </p>
                    <p>
                        For example, if we wanted to implement small (S) sized inset squish spacing, we'd declare a CSS variable as such: <span className='code-span'>--squish-small: 4px 8px;</span>
                        Using this variable and its stored value on a CSS <span className='code-span'>padding</span> property provides 4px padding on the top and bottom, with 8px padding on the left and right of a given element, to give us the S inset squish spacing.
                    </p>
                </div>
                <div className="right">
                    <h5>Element spacing</h5>
                    <p>
                        The beauty of CSS Variables shines through here as we implement these different spacing sizes. Since we've already declared CSS variables for the same pixel sizes, we can simply call these 
                        same variables on the CSS <span className='code-span'>margin</span> properties for a given element. This gives us space between elements vs within elements/containers using padding in the 'inset' examples.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CodeDocs