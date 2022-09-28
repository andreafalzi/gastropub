import React from 'react';
import './button.style.scss';

const Button = ({ children, ...props }) => {
  return (
    <button className='btn__gold' {...props}>
      {children}
    </button>
  );
};

export default Button;
