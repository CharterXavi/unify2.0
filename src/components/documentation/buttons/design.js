import React from 'react'

const DesignDocs = () => {
    return (
        <div className="DesignDocs two-column">
            <div className="title">
                <h3>Buttons - ✨ Design</h3>
                <p>
                    Button components should effectively convey the hierarchy of important content wherever possible. With multiple button styles,
                    the user may interact with content in a way that follows this desired hierarchy.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Primary buttons</h5>
                    <p>
                        Primary buttons draw users to the most important information at the top of our content hierarchy. With brighter colors,
                        the user can be visually led to important links and pages of the site with minimal effort. It's important to maintain best-practice contrast
                        ratios between the button of choice and its background, so consider the placement of these buttons on a page. If the contrast
                        ratio is not high enough, feel free to use an alternative primary button. Vibrant button colors consistent with our palette help
                        tie in our brand experience in the process.
                    </p>
                    <h5>Alternative Primary Buttons</h5>
                    <p>
                        These buttons maintain the vibrant colors that tie in our palette and attract users' attention to access important site content, but
                        they utilize a white background to help increase contrast if the background is dark or low-contrast with the primary button options.                    
                    </p>
                </div>
                <div className="right">
                    <h5>Secondary Buttons</h5>
                    <p>
                        Secondary buttons provide access to content lower in the hierarchy of importance. They utilize secondary accent colors in a less vibrant
                        manner to make this suggestion to users, and to minimize the distraction from the primary buttons.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DesignDocs