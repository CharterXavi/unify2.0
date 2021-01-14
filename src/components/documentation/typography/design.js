import React from 'react'

const DesignDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Typography - ✨ Design</h3>
                <p>
                Typography should be designed with two things in mind primarily:
                    <ul>
                        <li>Communicating Content (Readability)</li>
                        <li>Communicating the Brand (Style)</li>
                    </ul>
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Communicating content (Readability)</h5>
                    <p>
                        Font styles and typography should primarily serve to present content in the most readable way possible.
                        If the user cannot properly read the text on a page, it's virtually useless. Thus, a readable font that is designed
                        to be legible at a variety of different sizes (headings, body text, form placeholders, etc.) is imperative in our typography guide.
                        For our specific styles, a sans-serif font (Quicksand) has been applied, as its simple character structures have great readability
                        at many sizes. Heading sizes, along with the other font styles, are carefully selected to be readable on the desktop as well as on mobile devices.
                    </p>
                </div>
                <div className="right">
                    <h5>Communicating the brand (Style)</h5>
                    <p>
                        Secondary to readability, fonts should serve to communicate our brand as well. Many different styles exist,
                        from ornate cursive script fonts to simple sans-serif fonts. Some of these styles may work better to communicate
                        brand principles than others. For our font, Quicksand Regular was chosen not only for its aforementioned readability, but
                        also because its simplistic, rounded characters convey friendliness, sincerety, cleanliness, and modernity.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DesignDocs