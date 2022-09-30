import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import Button from '../button/button.component';
import { MdArrowDropDown, MdMenu, MdClose } from 'react-icons/md';
import './navigation.style.scss';
import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  const defaultForm = {
    name: '',
    phone: '',
    date: '',
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
    setIsModalOpen(false);
    setFormValue(defaultForm);
    setIsAppear(true);
    setTimeout(() => {
      setIsAppear(false);
    }, 4000);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  const { name, phone, date, message } = formValue;

  return (
    <nav className={navbar ? 'scroll' : ''}>
      <span className={`message ${isAppear ? 'appear' : ''}`}>Din besked er blevet sendt. Tak og god dag 😊</span>
      <div className={`backdrop ${isModalOpen ? 'show' : ''}`} />
      <div className={`modal ${isModalOpen ? 'show' : ''}`}>
        <h3>
          Bestil Bord
          <MdClose onClick={() => setIsModalOpen(false)} />
        </h3>
        <form onSubmit={handleSubmit}>
          <Input type='text' placeholder='Navn *' required name='name' value={name} onChange={handleChange} />
          <Input type='tel' placeholder='Telefon *' required name='phone' value={phone} onChange={handleChange} />
          <Input type='date' placeholder='Bestillings Dato *' required name='date' value={date} onChange={handleChange} />
          <TextArea type='text' placeholder='Besked *' required name='message' value={message} onChange={handleChange} />
          <Button type='submit'>Send</Button>
        </form>
      </div>
      <div className='container'>
        <div className='navbar'>
          <Link to={'/'} onClick={() => setIsDropdownOpen(false)}>
            <Logo className='logo' />
          </Link>
          <ul className={`${isOpen ? 'show' : ''} links`}>
            <li className='menu-link'>
              <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Om Os <MdArrowDropDown className={isDropdownOpen ? 'rotate' : ''} />
              </span>
              <ul className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                <Link className='dropdown__link' to={'omos'} onClick={handleMenu}>
                  Om GastroPub
                </Link>
                <Link className='dropdown__link' to={'team'} onClick={handleMenu}>
                  Vores Team
                </Link>
              </ul>
            </li>
            <li className='menu-link'>
              <Link to={'menu'} onClick={handleMenu}>
                Menu
              </Link>
            </li>
            <li className='menu-link' onClick={handleMenu}>
              <Link to={'galleri'}>Galleri</Link>
            </li>
            <li className='menu-link' onClick={handleMenu}>
              <Link to={'nyheder'}>Nyheder</Link>
            </li>
            <li className='menu-link' onClick={handleMenu}>
              <Link to={'kontakt'}>Kontakt</Link>
            </li>
          </ul>
          <Button onClick={() => setIsModalOpen(true)}>Bestil Bord</Button>
          {isOpen ? <MdClose className='hamburger-menu' onClick={handleMenu} /> : <MdMenu className='hamburger-menu' onClick={handleMenu} />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
