export const formCode = `
//FORM COMPONENT
    import './form.css'
    import React from 'react'
    
    export default class MyForm extends React.Component {
      constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }

      render() {
        const { status } = this.state;
        return (
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mbjzqojd"
            method="POST"
          >
            <div className="headings">
                <h4>Contact Us</h4>
                <p>We would love to hear from you!</p>
            </div>
            <div className="name">
                <div className="first">
                    <label htmlFor="first-name">
                      First Name
                      <input type="text" name='first-name' id='first-name' placeholder='First Name' required />
                    </label>
                </div>
                <div className="last">
                    <label htmlFor="last-name">
                      Last Name
                      <input type="text" name='last-name' id='last-name' placeholder='Last Name' required />
                    </label>
                </div>
            </div>
            <div className='info'>
                <div className="email">
                    <label htmlFor="email">
                      Email
                      <input type="email" name='email' id='email' placeholder='Email Address' required />
                    </label>
                </div>
                <div className="phone">
                    <label htmlFor="phone">
                      Phone Number
                      <input type="tel" name='phone' id='phone' placeholder='Phone Number' required />
                    </label>
                </div>
            </div>
            <div className="message">
                <label htmlFor="message">
                  Message
                  <textarea name="message" id='message' placeholder='Leave us a message' required></textarea>
                </label>
            </div>
            <input type="text" name="_gotcha" style={{display: 'none'}} />
            <div className="submit">
                {status === "SUCCESS" ? <p style={{backgroundColor: '#7E9772', color: 'white', fontSize: '18px', width: 'auto', padding: '8px', borderRadius: '10px'}}>Thanks for reaching out! We'll contact you as soon as possible.</p> : <button className='btn-primary' type='submit' aria-label='Submit Form'>Submit</button>}
                {status === "ERROR" && <p style={{backgroundColor: '#D45E60', color: 'white', fontSize: '18px', width: 'auto', padding: '8px', borderRadius: '10px'}}>Ooops! There was an error.</p>}
            </div>
          </form>
        );
      }

      submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
    }

//CSS Module - form.css
    form {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    form label {
        color: var(--scrubs-blue);
        font-size: 0rem;
    }
    .headings h2 {
        color: #f05f73;
        text-align: left;
        padding: 8px 0 4px 0;
    }
    .headings p {
        font-size: 18px;
        color: var(--detail-grey);
        padding: 4px 0 8px 0;
    }
    .name, .info, .submit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .message, .message label {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
    }
    .name .first, .name .last {
        width: 48%;
    }
    .info .email, .info .phone {
        width: 48%;
    }
    input, textarea {
        margin: 8px 0 8px 0;
        border-radius: 10px;
        border: none;
        outline: none;
        background: white;
        color: var(--detail-grey);
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        padding: 0 0 0 0;
    }
    input {
        width: 100%;
        height: 50px;
        padding: 16px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;  
    }
    input::placeholder, textarea::placeholder {
        font-family: 'Nunito', sans-serif;
        color: var(--clinic-blue);
        font-size: 14px;
        font-weight: normal;
    }
    input:focus, textarea:focus {
        box-shadow: 0 0 3px var(--light-clinic-blue);
    }
    textarea {
        width: 100%;
        height: 100px;
        padding: 16px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;  
    }
    form .btn-primary {
        outline: none;
        border: none;
        color: white;
        /* Rose */
        background: var(--primary-accent);
        box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.22);
        border-radius: 30px;
        margin: 8px 16px 0 0;
        width: 150px;
        height: 45px;
        transition: 0.4s ease all;
        overflow: hidden;
        position: relative;
        z-index: 1;
        font-weight: normal;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 1.25px;
    }
    form .btn-primary:hover {
        box-shadow: none;
        transform: translateY(2px);
        cursor: pointer;
        color: white;
    }
    form .btn-primary::before {
        content: '';
        width: 100%;
        height: 100%;
        background: var(--super-gradient);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        transition: 0.4s ease all;
        opacity: 0;
    }
    form .btn-primary:hover::before {
        opacity: 1;
    }

    @media only screen and (max-width: 800px) {
        form .name, form .info {
            flex-direction: column;
            align-items: flex-start;
        }
        .name .first, .name .last, .info .email, .info .phone {
            width: 100%;
        }
        .name input, .info input {
            margin: 8px 0;
        }
    
    }
  `.trim();