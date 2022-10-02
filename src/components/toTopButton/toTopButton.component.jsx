import React, { useEffect, useState } from 'react';
import './toTopButton.style.scss';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ToTopButton = () => {
  //navbar scroll when active state
  const [toTop, setToTop] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {toTop && (
        <div className='top-arrow' onClick={goToTop}>
          <MdKeyboardArrowUp />
        </div>
      )}
    </>
  );
};

export default ToTopButton;
