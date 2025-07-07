import React from 'react';

import './contact-popup.styles.scss';

const ContactPopup = ({ open }) => {
  return (
    <div
      className='container'
      style={{
        display: open ? 'block' : 'none'
      }}
    >
      <div className='name'>Prateek Goyal</div>
      <div className='row'>
        <div className='label'>Email:</div>
        <a href='mailto:gprateek316@gmail.com' className='value'>
          gprateek3@gmail.com
        </a>
      </div>
      <div className='row'>
        <div className='label'>Phone:</div>
        <a href='tel:7999956584' className='value'>
        7999956584
        </a>
      </div>
    </div>
  );
};

export default ContactPopup;
