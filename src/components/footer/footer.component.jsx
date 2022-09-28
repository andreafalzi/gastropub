import React, { useContext } from 'react';
import './footer.style.scss';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { DataContext } from '../../context/data.contenxt';

const Footer = () => {
  const [textData] = useContext(DataContext);
  console.log(textData);

  return (
    <footer>
      <div className='container'>
        <div className='footer-row'>
          <div className='infomation'>
            <h3 className='header'>Information</h3>
            <p className='footer-txt'>En gastropub er en hybrid pub, bar og restaurant, der er kendt for servering af alkoholiske drikkevarer og mad.</p>
          </div>
          <div className='kontakt'>
            <h3 className='header'>Kontakt</h3>
            <div className='kontakt-box'>
              <span className='footer-txt'>
                <FaMapMarkerAlt />
                {/* {textData[9].description} */}
              </span>
              <span className='footer-txt'>
                <FaPhoneAlt />
                {/* {textData[10].description} */}
              </span>
            </div>
          </div>
          <div className='social-media'>
            <h3 className='header'>Social Media</h3>
            <a href='https://facebook.com' target='_blank' rel='noreferrer' className='facebook'>
              <FaFacebookF />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer' className='instagram'>
              <FaInstagram />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer' className='twitter'>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;