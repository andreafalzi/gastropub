import React from 'react';
import './404Error.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { motion } from 'framer-motion';

const Error404 = ({ ...props }) => {
  const divStyle = {
    paddingInline: '2rem',
    paddingBlock: '1rem',
    fontSize: '1.2rem',
  };
  return (
    <motion.main {...props}>
      <div className='container'>
        <div className='error404'>
          <h1>Error 404</h1>
          <h3>Det er jeg ked af!</h3>
          <Link to='/'>
            <Button style={divStyle}>Back Home</Button>
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default Error404;
