import React, { useEffect, useState } from 'react';
import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import TextArea from '../../components/textarea/textarea.component';
import { FaRegClock } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import './nyheder.scss';
import { motion } from 'framer-motion';

const Nyheder = ({ ...props }) => {
  const defaultForm = {
    name: '',
    message: '',
  };
  const [formValue, setFormValue] = useState(defaultForm);
  const [reviewsData, setReviewsData] = useState([]);
  const [sortedReviewsData, setSortedReviewsData] = useState(reviewsData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    fetch('https://gastropub.webexam-mcdm.dk/api/surveys', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formValue.name,
        message: formValue.message,
      }),
    });

    setFormValue(defaultForm);
  };

  useEffect(() => {
    const url = 'https://gastropub.webexam-mcdm.dk/api/surveys';
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setReviewsData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newSortedData = reviewsData.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.created_at) - new Date(a.created_at);
    });
    setSortedReviewsData(newSortedData);
  }, [reviewsData]);

  // Date test

  // const obj = {
  //   date: '2022-09-30T12:16:23.000000Z',
  // };

  // const current = new Date(obj.date);
  // console.log(current);
  // const options = { day: 'numeric', month: 'long', year: 'numeric' };
  // const dateDA = current.toLocaleDateString('da-DA', options);
  // console.log(dateDA);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const divStyle = {
    backgroundImage: 'url(/assets/images/newsHeader.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const { name, message } = formValue;
  return (
    <motion.main {...props}>
      <div style={divStyle} className='news-hero overlay-60'>
        <h1>Nyheder</h1>
      </div>
      <section className='menu-news-section'>
        <div className='container'>
          <h2>Nyheder på menuen</h2>
          <div className='menu-news-item'>
            <img src='/assets/images/dessert01.jpg' alt='dessert' />
            <div className='menu-item-text'>
              <h3>Royal Belgisk Vaffel & mascarpone is med lime</h3>
              <p>Denne udsøgte vaffel af ultralet luftig dej med større firkanter, dybe lommer og bagt med syrnet gær. Vaffelen ligger godt sammen med den florlette is, rørt med mascarpone fra det sydlige italien. Den frugtholdige syrlige smag af lime afrunder desserten, hvor sødmen Holdes på plads af friske skovbær og sauce karamel.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='news-section'>
        <div className='container'>
          <h2>Vores kunders mening</h2>
          <div className='news-list'>
            {sortedReviewsData.map((text) => (
              <div className='news-item' key={text.id}>
                <h3>{text.name}</h3>
                <span>
                  <FaRegClock /> {new Date(text.created_at).toLocaleDateString('da-DA', options)}
                </span>
                <div className='news-item-text'>
                  <IoMdChatbubbles />
                  <p>{text.message}</p>
                </div>
              </div>
            ))}
            {/* <div className='news-item'>
              <h3>Susanne Larsen</h3>
              <span>
                <FaRegClock /> 23. Januar 2019
              </span>
              <div className='news-item-text'>
                <IoMdChatbubbles />
                <p>Vi var 4 veninder til frokost, og vi havde en fantastisk 1.5 time. Maden var virkelig god, og Pernille fandt en super vin til os.</p>
              </div>
            </div>
            <div className='news-item'>
              <h3>Susanne Larsen</h3>
              <span>
                <FaRegClock /> 23. Januar 2019
              </span>
              <div className='news-item-text'>
                <IoMdChatbubbles />
                <p>Vi var 4 veninder til frokost, og vi havde en fantastisk 1.5 time. Maden var virkelig god, og Pernille fandt en super vin til os.</p>
              </div>
            </div>
            <div className='news-item'>
              <h3>Susanne Larsen</h3>
              <span>
                <FaRegClock /> 23. Januar 2019
              </span>
              <div className='news-item-text'>
                <IoMdChatbubbles />
                <p>Vi var 4 veninder til frokost, og vi havde en fantastisk 1.5 time. Maden var virkelig god, og Pernille fandt en super vin til os.</p>
              </div>
            </div>
            <div className='news-item'>
              <h3>Susanne Larsen</h3>
              <span>
                <FaRegClock /> 23. Januar 2019
              </span>
              <div className='news-item-text'>
                <IoMdChatbubbles />
                <p>Vi var 4 veninder til frokost, og vi havde en fantastisk 1.5 time. Maden var virkelig god, og Pernille fandt en super vin til os.</p>
              </div>
            </div> */}
          </div>
          <div className='comment-box'>
            <h3>Fortæl os om dit besøg</h3>
            <form onSubmit={handleSubmit}>
              <Input type='text' placeholder='Navn *' required name='name' value={name} onChange={handleChange} />
              <TextArea type='text' placeholder='Besked *' required name='message' value={message} onChange={handleChange} />
              <Button type='submit'>Send</Button>
            </form>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Nyheder;
