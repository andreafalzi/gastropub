import React, { useState } from 'react';
import Button from '../../components/button/button.component';
import './kontakt.scss';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import Input from '../../components/input/input.component';
import TextArea from '../../components/textarea/textarea.component';
import { motion } from 'framer-motion';

const Kontakt = ({ ...props }) => {
  const defaultForm = {
    name: '',
    phone: '',
    message: '',
  };
  const [formValue, setFormValue] = useState(defaultForm);
  const [isAppear, setIsAppear] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://gastropub.webexam-mcdm.dk/api/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formValue.name,
        phone: formValue.phone,
        message: formValue.message,
      }),
    });

    setFormValue(defaultForm);
    setIsAppear(true);
    setTimeout(() => {
      setIsAppear(false);
    }, 4000);
  };

  const divStyle = {
    backgroundImage: 'url(/assets/images/about-interior02.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const { name, phone, message } = formValue;
  return (
    <motion.main {...props}>
      <div style={divStyle} className='kontakt-hero overlay-60'>
        <h1>Kontakt</h1>
      </div>
      <section className='kontakt-section'>
        <div className='container'>
          <span className={`message ${isAppear ? 'appear' : ''}`}>Din besked er blevet sendt. Tak og god dag 😊</span>
          <div className='kontakt-container'>
            <div className='kontakt-left'>
              <h3>Kære kunde</h3>
              <p>Du er altid velkommen til at kontakte os For spørgsmål angående Deklarations indhold, allegener, eller økologiske forhold. Andre spørgsmål til Gastropub er også velkomne her.</p>
              <form onSubmit={handleSubmit}>
                <Input type='text' required placeholder='Navn *' name='name' value={name} onChange={handleChange} pattern='([A-Za-z ])+' title='Kun bogstaver' />
                <Input type='tel' required placeholder='Telefon *' name='phone' value={phone} onChange={handleChange} pattern='[0-9]{8,11}' title='Kun numre og det skal være et gyldigt dansk telefonnummer' />
                <TextArea type='tel' required placeholder='Besked *' name='message' value={message} onChange={handleChange} />
                <Button type='submit'>Send</Button>
              </form>
            </div>
            <div className='kontakt-right'>
              <p>
                <FaMapMarkerAlt />
                Valhallavej 23, 8800 Viborg
              </p>
              <p>
                <FaPhoneAlt />
                +45 123 456
              </p>
              <p>
                <FaRegClock />
                <span className='span-flex'>
                  <span>Man - Søn, fra 10:00 - 23:00</span>
                  <span className='small'>Frokost servering - 12:00 - 15:00</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Kontakt;
