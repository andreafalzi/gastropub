import React from 'react';
import './toTopButton.style.scss';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ToTopButton = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='top-arrow' onClick={goToTop}>
      <MdKeyboardArrowUp />
    </div>
  );
};

export default ToTopButton;
