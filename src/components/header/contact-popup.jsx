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
      <div className='name'>Chesta Hukwani</div>
      <div className='row'>
        <div className='label'>Email:</div>
        <a href='mailto:chestahukwani@gmail.com' className='value'>
          chestahukwani@gmail.com
        </a>
      </div>
      <div className='row'>
        <div className='label'>Phone:</div>
        <a href='tel:6266340208' className='value'>
          6266340208
        </a>
      </div>
    </div>
  );
};

export default ContactPopup;
