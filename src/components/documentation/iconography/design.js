import React from 'react'

const DesignDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Iconography - ✨ Design</h3>
                <p>
                    Icons are an essential piece of the design puzzle. Icons should serve to communicate a concept or a message to our users,
                    with as little cognitive load as possible. In other words: they should help users identify a component's purpose at a glance.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>A visual hint</h5>
                    <p>
                        These phone icons, for example, allow users to quickly identify where they may be able to access a phone number to call in.
                        This is how icons should be used - to help users very easily navigate to important things in our digital spaces. Care should
                        be taken not to use obscure icons with potentially ambiguous significance. Note as well that our icon designs follow our color
                        scheme in a similar fashion to our buttons and other important visual components.                    
                    </p>
                    <p>
                        Finally, if using an icon as a button or link, accompanying text or explanation may be necessary to make sure the intent is
                        clear for the user. Generally, this practice should be avoided however.
                    </p>
                </div>
                <div className="right">
                    <h5>Custom Icons vs. 3rd Party Icons</h5>
                    <p>
                        There are vast 3rd party libraries available for icons, and most of them are completely free to use commercially. For
                        this reason, we may not want to reinvent the wheel. That being said, having our own icon library could help increaes our
                        brand signature, as they will be specific to our software designs. In either case, icon styles should adhere as closely as
                        possible to our color palette and purpose.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DesignDocs