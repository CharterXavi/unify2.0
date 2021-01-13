import React from 'react'

const DesignDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Spacing - ✨ Design</h3>
                <p>
                    Our digital color palette is directly derived from our existing brand color scheme.
                    Previously, Charter utilized pink shades with earthy-brown tones as background colors, occasionally drawing on white backgrounds as well.
                    This color scheme will focus on black, dark navy, and white, with pink primary accents and blue secondary accents. 
                    This color palette change should serve to better modernize our digital products and tie them into a more common healthcare experience.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Background Colors</h5>
                    <p>
                    Background colors should not only be aesthetically pleasing - they should provide proper contrast with their child elements and text content.
                    Black serves as a powerful high-contrast background, and white will provide this same effect as a light background.
                    For interesting stylistic changes, a dark navy can be used as an alternative dark background.
                    Blues are overwhelmingly common in the healthcare space, so this may provide a break from the black/white background styles while providing
                    the user with familiarity in their healthcare experience.
                    </p>
                    <h5>Text Colors</h5>
                    <p>
                    Text's primary purpose is to be readable. All text should properly contrast with its background, so black and white text makes the most sense.
                    Occasionally, dark navy may be used as a secondary heading color. A vibrant pink may be used as a stylistic heading color as long as it maintains a proper contrast ratio.
                    </p>
                    <h5>Button Colors</h5>
                    <p>
                    Button colors should utilize vibrancy to attract the users attention, but this vibrancy should also maintain proper contrast ratios with its background for visibility.
                    Buttons should draw the user's attention to important site links and pages while adding stylistic flair to the page.
                    </p>
                </div>
                <div className="right">
                    <h5>Gradients</h5>
                    <p>
                    Gradients allow for stylistic nuances that can be leveraged to increase the UX with a more immersive color experience.
                    Pink gradients with varying warmth can be used to draw user attention to different aspects of the digital product in a way that is stytlistically rooted in the brand
                    color palette. Having a blue gradient offers us a way to utilize secondary colors that are familiar to the user in the healthcare sphere.
                    The gradients may be used as alternative styles in buttons, text, element backgrounds, and more. Like other color use, be sure to use gradients responsibly with
                    proper contrast ratios for user accessibility.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DesignDocs