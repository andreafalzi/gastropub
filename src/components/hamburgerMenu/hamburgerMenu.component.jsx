import React from 'react';
import './hamburgerMenu.style.scss';

const HamburgerMenu = ({ ...props }) => {
  return (
    <>
      <input type='checkbox' id='check' className='checkbox' hidden />
      <div {...props} className='hamburger-menu'>
        <label htmlFor='check' className='menu'>
          <span className='menu-line menu-line-1'></span>
          <span className='menu-line menu-line-2'></span>
          <span className='menu-line menu-line-3'></span>
        </label>
      </div>
    </>
  );
};

export default HamburgerMenu;
