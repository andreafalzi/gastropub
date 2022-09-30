import React from 'react';
import './footer.style.scss';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // const [useData, setUseData] = useState([]);
  // const [filteredUseData, setFilteredUseData] = useState(useData);

  // useEffect(() => {
  //   const url = 'https://gastropub.webexam-mcdm.dk/api/texts';
  //   const options = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const json = await response.json();
  //       setUseData(json);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const newSortedData = useData.slice(9, 11);
  //   setFilteredUseData(newSortedData);
  // }, [useData]);

  // const footerData = [];

  // const footerArray = (data) => {
  //   filteredUseData.forEach((el) => {
  //     data.push({ description: el.description });
  //   });
  // };

  // footerArray(footerData);

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
                Valhallavej 23, 8800 Viborg
                {/* {footerData[0].description} */}
              </span>
              <span className='footer-txt'>
                <FaPhoneAlt />
                +45 123 456
                {/* {footerData[1].description} */}
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
