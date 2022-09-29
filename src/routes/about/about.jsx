import React from 'react';
import './about.scss';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  // const [imgData, setImgData] = useState([]);
  // const [textData, setTextData] = useState([]);

  // const urlImg = 'https://gastropub.webexam-mcdm.dk/api/images';
  // const urlText = 'https://gastropub.webexam-mcdm.dk/api/texts';
  // // Function to collect data

  // useEffect(() => {
  //   const options = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   };
  //   fetch(urlImg, options)
  //     .then((response) => response.json())
  //     .then((response) => setImgData(response))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   const options = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   };
  //   fetch(urlText, options)
  //     .then((response) => response.json())
  //     .then((response) => setTextData(response))
  //     .catch((err) => console.error(err));
  // }, []);

  const divStyle = {
    backgroundImage: 'url(/assets/images/about-interior01.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <main>
      <div style={divStyle} className='about-hero overlay-60'>
        <h1>Om GastroPub</h1>
      </div>
      <section className='about'>
        <div className='container'>
          <div className='about-container'>
            <p className='about-txt'>
              Hos Gastropub lægger vi stor vægt på frisk mad komponeret fra bunden med sæsonens råvarer. I restauranten serveres der krogmodnet kød. I køkkenet bruger vi den moderne inspiration i en sammenblanding med det klassiske køkken, når vi anretter tallerknerne.
              <br />
              <br />
              <br />
              På vores restaurant vil du opleve, at alle råvarer kommer til udtryk i retterne. Din oplevelse på Gastropub skabes af maden, stemningen, omgivelserne og hyggen. Vi håber derfor, at dette er med til at skabe en fantastisk smagsoplevelse for vores gæster.
              <br />
              <br />
              <br />
              2 Menu kortet består af få, men gode retter. Disse retter er velovervejet og nøje udvalgt, for at imødekomme gæsterne, da der er tænkt over hver en detalje på tallerknerne. A la carte menuen består af 3 retter. Disse retter bliver skiftet ud hver tredje måned, sa mt er der hver måned en særlig månedsmenu med sæsonens råvarer.
              <br />
              <br />
              <br />
              <br />
              <br />
              <FaQuoteLeft />
              <em>
                At skabe et sted for dig og dine venner at bruge kvalitetstid sammen er et primært formål. <br />
                <br />
                <span style={{ float: 'right' }}>Bob Vestermark – Ejer'</span>
              </em>
            </p>
            <div className='about-images'>
              <img src='/assets/images/about-interior02.jpg' alt='room tables' />
              <img src='/assets/images/about-interior03.jpg' alt='room tables' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
