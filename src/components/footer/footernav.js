import './footernav.css';

import ButtonPrimaryAlt from '../buttons/button-primary-alt'
import ButtonSecondary from '../buttons/button-secondary'
import React from 'react';

const FooterNav = (props) => {
  return (
    <div className="FooterNav">
        <div className="button-wrapper">
            <ButtonSecondary link={props.prevLink} content={props.prevPage} />
            <ButtonPrimaryAlt link={props.nextLink} content={props.nextPage} />
        </div>
    </div>
  )
}

export default FooterNav