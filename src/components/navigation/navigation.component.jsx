import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import Button from '../button/button.component';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu.component';
import { MdArrowDropDown } from 'react-icons/md';
import './navigation.style.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  return (
    <nav>
      <div className='container'>
        <div className='navbar'>
          <Link to={'/'}>
            <Logo />
          </Link>
          <ul className={`${isOpen ? 'show' : ''} links`}>
            <li className='menu-link'>
              <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Om Os <MdArrowDropDown className={isDropdownOpen ? 'rotate' : ''} />
              </span>
              <ul className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                <Link className='dropdown__link' to={'omos'}>
                  Om GastroPub
                </Link>
                <Link className='dropdown__link' to={'team'}>
                  Vores Team
                </Link>
              </ul>
            </li>
            <li className='menu-link'>
              <Link to={'menu'}>Menu</Link>
            </li>
            <li className='menu-link'>
              <Link to={'galleri'}>Galleri</Link>
            </li>
            <li className='menu-link'>
              <Link to={'nyheder'}>Nyheder</Link>
            </li>
            <li className='menu-link'>
              <Link to={'kontakt'}>Kontakt</Link>
            </li>
          </ul>
          <Button onClick={() => alert('bestil')}>Bestil Bord</Button>
          <HamburgerMenu onClick={handleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
