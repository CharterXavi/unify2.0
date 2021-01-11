import './footer.css';

import ContactForm from '../form';
import {Link} from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <footer className='Footer'>
        <hr/>
        <div className='content-wrapper'>
            <div className='left'>
                <ContactForm />
            </div>
            <div className='right'>
                <div className='helpful-links'>
                    <h6>Helpful Links</h6>
                    <ul>
                        <li className='detail-text'><Link to='/about'>About Charter</Link></li>
                        <li className='detail-text'><Link to='/careers'>Careers</Link></li>
                        <li className='detail-text'><Link to='/footer/terms-and-conditions'>Terms & Conditions</Link></li>
                        <li className='detail-text'><Link to='/footer/privacy-policy'>Privacy Policy</Link></li>
                        <li className='detail-text'><a href="http://charterhcg.training.reliaslearning.com/" target="_blank" rel="noopener noreferrer">Learning Center</a></li>
                        <li className='detail-text'><a href="https://workforcenow.adp.com/" target="_blank" rel="noopener noreferrer">IT Helpdesk</a></li>
                    </ul>
                </div>
                <div className='headquarters'>
                    <h6>Charter Headquarters</h6>
                    <ul>
                        <li className='detail-text'>9660 Haven Ave, Rancho Cucamonga, CA 91730</li>
                        <li className='detail-text'>P: <a href='tel: 909-644-4965'>909-644-4965</a></li>
                        <li className='detail-text'>F: <a href='fax: 909-503-1138'>909-503-1138</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <p>© {new Date().getFullYear()}, Built with ❤️ by Charter Healthcare Group</p>
        </div>
    </footer>
  )
}

export default Footer