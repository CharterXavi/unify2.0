import React from 'react'

const DesignDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Spacing - ✨ Design</h3>
                <p>
                    Spacing is an important and challenging aspect of digital design. Much like other elements of a design system,
                    the way you utilize space can have a big impact on readability. It's crucial to space elements out on a page in a systematic way.
                    If a user visits one page where different components are spaced quite generously, and then they visit another page with tighter
                    margins and padding between elements, it can increase the cognitive load required to comfortably navigate the site, if even on a
                    subconscious level. Or even worse - maybe similar elements on the same page have inconsistent spacing altogether, cheapening the
                    overall design and hindering the user experience. For these reasons, we'll implement a more methodical approach to space on our
                    pages to create organization that's reproducable.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Inset Spacing</h5>
                    <p>
                        This describes spacing inside of a given element and/or a container that may encapsulate many other elements.
                        It pertains to the space from the boundaries to the content within. A good example might be a card or contact form.
                        To ensure consistent inner boundaries, we may want to apply inset spacing on the parent element so the contents inside are aligned properly.
                        The space inside of an element or element container can vary, and providing a selection of inset spacing to choose from helps
                        diversify the design while keeping it consistent. Not all elements require the same inset spacing, so these options are needed.
                        To simplify these options, we're classifying them in a familiar way: Extra Small (XS), Small (S), Medium (M), Large (L), and
                        Extra Large (XL). By mimicking standard T-shirt sizes, we create an easily memorizable set of inset spacing options.
                        In fact, it's so efficient we'll apply it to each spacing rule!
                    </p>
                    <h5>Inset Squish Spacing</h5>
                    <p>
                        What we're calling 'Inset Squish Spacing' is just a fancy name for a similar concept. Now we're talking about the spacing within
                        what is usually going to be a single element on a page. This spacing style is best suited for rectangular, horizontal elements on
                        a page, like form inputs, buttons, etc. The options here will simply include Small (S), Medium (M), and Large (L), as this is a
                        more minute type of spacing.
                    </p>
                </div>
                <div className="right">
                    <h5>Stacked Element Spacing</h5>
                    <p>
                        Stacked elements are just that: elements stacked on top of each other consecutively in a block. Since this usually concerns
                        larger elements on a page (like content blocks and whatnot) we're going to bring back our XS- XL sizing options. It's important to note
                        that our spacing in this instance doesn't include left and right side spacing, but rather top and bottom spacing. This is because the 
                        lateral spacing is usually addressed by the parent container of these stacked elements, per the Inset Spacing rules. Neat!
                    </p>
                    <h5>Inline Element Spacing</h5>
                    <p>
                        Finally, we have our last type of spacing: inline spacing. This applies when two elements are right next to each other consecutively.
                        We'll want to make sure elements don't just line up nice vertically, but horizontally as well. We're essentially applying the same
                        rules as the Stacked Elements but in the horizontal plane, with the same XS - XL options. This reinforces the system we're implementing
                        and keeps it simple! Notice here that we don't define top and bottom spacing for these elements. That is because the container of
                        these inline elements will have its own spacing on each edge, and if these elements are part of a vertical stack the vertical spacing
                        rules will cover it. It all works together if used properly.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DesignDocs