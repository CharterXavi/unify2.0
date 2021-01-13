import React from 'react'

const CodeDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Logo - 🔨 Code</h3>
                <p>
                    Our digital color palette is meant to be implemented at the highest level stylesheet. In our React/Gatsby software, this would be the layout.css file in the src/components directory.
                    CSS Variables are currently used to store the color hex codes, linear gradients, or box shadows so they can easily be recalled using 'color: var(--color-name);' syntax. 
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Color Variables</h5>
                    <p>
                        The color variables currently store color hex codes. These variables can be used as text colors, background colors, etc. since hex codes are supported for various CSS properties.
                    </p>
                    <h5>Gradient Variables</h5>
                    <p>
                        The gradient variables are stored as linear-gradient properties which can be used as backgrounds but not as text-colors. Clip-path properties can be used to 
                        implement gradients as text (see the source code for the heading on this very page), but browser support should be considered. 
                    </p>
                </div>
                <div className="right">
                    <h5>Box Shadow Variables</h5>
                    <p>
                        The box shadow variables are stored per usual syntax, but with rgba() values for the shadow color and opacity vs. other color coding conventions. Using any of these variables
                        with the box-shadow CSS property should render nice, clean shadows for any specified element.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CodeDocs