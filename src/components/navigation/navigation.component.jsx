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

  const handleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  return (
    <nav className={navbar ? 'scroll' : ''}>
      <div className='modal'>
        <MdClose />
        <h3>Bestil Bord</h3>
        <form>
          <Input type='text' placeholder='Navn *' required />
          <Input type='tel' placeholder='Telefon *' required />
          <Input type='date' placeholder='Bestillings Dato *' required />
          <TextArea type='text' placeholder='Besked *' required />
          <Button>Send</Button>
        </form>
      </div>
      <div className='backdrop' />
      <div className='container'>
        <div className='navbar'>
          <Link to={'/'}>
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
          <Button onClick={() => alert('bestil')}>Bestil Bord</Button>
          {isOpen ? <MdClose className='hamburger-menu' onClick={handleMenu} /> : <MdMenu className='hamburger-menu' onClick={handleMenu} />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
