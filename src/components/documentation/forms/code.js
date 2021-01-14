import React from 'react'

const CodeDocs = () => {
    return (
        <div className="CodeDocs two-column">
            <div className="title">
                <h3>Forms - 🔨 Code</h3>
                <p>
                    Our form component currently implements a mix of the Alt Light theme and the Dark theme (see <a href='https://charter-official-prototype.netlify.app/' target='_blank' rel='noopenner noreferrer'>charterhcg.com</a>).
                    It currently takes the form of a class component as the basis of the component was imported from FormSpree.io, the email handling service API that this form utilizes.
                </p>
                <hr/>
            </div>
            <div className="content">
                <div className="left">
                    <h5>Hidden 'gotcha' field</h5>
                    <p>
                        The last input on the form is a hidden field named <span className="code-span">_gotcha</span>. This input is a special spam-fitlering configuration. When FormSpree.io receives
                        a submission through this form in their API, it checks for this field. If this field is filled out the API will know it was a web-scraping bot and it wll filter the submissionm,
                        since no end-user can see that input and thus no humans are filling it out.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CodeDocs