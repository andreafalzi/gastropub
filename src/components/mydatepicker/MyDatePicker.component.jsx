import React from 'react';
import './MyDatePicker.style.scss';
import DatePicker from 'react-date-picker';

const MyDatePicker = ({ value, required, name, handle }) => {
  return (
    <div className='picker-container'>
      <DatePicker required={required} name={name} value={value} onChange={handle} />
    </div>
  );
};

export default MyDatePicker;
