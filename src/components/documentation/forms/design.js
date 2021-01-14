import React from 'react'

const DesignDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Forms - ✨ Design</h3>
                <p>
                    Form elements are tricky. Each input field requires its own style rules, and they must all also work together in the big picture to create a usable,
                    understandable, and beautiful form experience for the user. They're also an extremely important functional piece of a website, as they often serve as
                    the primary way users can reach out directly to us!
                </p>
                <p>
                    Above are three different possible form designs, each including a design for each type of form input / input state (like when there might be an error
                    in the user's information, a forgotten field, a disabled input, a dropdown selection, etc.). Having the option to put the form against a dark or
                    light background offers us more versatility in our front end software design.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Breaking down the form</h5>
                    <p>
                        For this example, let's consider the Alt Light Theme in the above design:
                    </p>
                    <ul>
                        <li>The heading is a <span className='code-span'>h2</span> in our <span className='code-span'>--primary-accent</span> color . This grabs the users' attention with our signature color.</li>
                        <li>The text beneath is in our Introductory Text Typography, sporting the <span className='code-span'>--heading-color</span> color.</li>
                        <li>
                            The first input is a default state input. This is what each input should look like in most cases, ready to accept user input.
                            This text is in a special Placeholder Text style, as are all the other inputs for consistency.
                        </li>
                        <li>
                            Next up is a disabled input. Disabled inputs may be fields in which the user should not be allowed to edit its value, but it should be
                            readable and viewable nonetheless. For example, if a user enters their birthdate, maybe a field automatically calculates their age.
                            This field may be a good use case for a disabled field, in which the info should be available but not directly editable.
                        </li>
                        <li>Error state inputs should be attention-grabbing so users can be directed to information in need of correction with a minimal cognitive load.</li>
                        <li>The text area should be large enough for the user to be able to enter and view a message with adequate length.</li>
                        <li>Finally, the submit button is a Primary Button component from our system, designed to be highly visible and clickable.</li>
                    </ul>
                </div>
                <div className="right">
                    <h5>Form summary</h5>
                    <p>
                        All in all, the form design and its many pieces should serve to give users the easiest, most pleasant experience in reaching out to us. Note that all of the form elements come together per our spacing guidelines, color guidelines, font guidelines, and more. This demonstrates the power of this design system!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DesignDocs