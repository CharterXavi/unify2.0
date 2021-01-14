import React from 'react'

const CodeDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Iconography - 🔨 Code</h3>
                <p>
                    Our icons are custom SVGs designed in Figma. From there, they are outfitted into simple, reusable React components that can be imported
                    into any parent component or page. This makes for a highly flexible and scalable custom icon set that we can change and improve upon
                    with ease.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>SVGs as React Components</h5>
                    <p>
                        There are many different ways to implement a custom icon set. Choosing to implement them as SVG-based React components was an effort to strike
                        a balance between design and development efficiency. It's important to note as well that all of the SVG componenets use filter and paint-linear IDs 
                        containing the name of the SVG icon. This is important as default Figma SVG exports use paint-linear and filter attribute ID names that would 
                        otherwise overlap and cause issues in the rendering of the SVGs as many are rendered on a single page.              
                    </p>
                </div>
                <div className="right">
                    <h5>Coming soon</h5>
                    <p>
                        Soon, the full icon set will be available for download in a few different file formats (.svg, .png, etc.) all from this page in UNIFY. We recommend
                        the implementation outlined in these docs (SVG icons as React components) until further notice, but for other use cases these icons will soon be available.
                        Stay tuned!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CodeDocs