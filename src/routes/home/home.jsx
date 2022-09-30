import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import './home.scss';
const Home = () => {
  const divStyle = {
    paddingInline: '3rem',
    paddingBlock: '1rem',
  };
  return (
    <main>
      <section className='section gastropub overlay-60'>
        <div className='container'>
          <div className='section-box'>
            <h2 className='heading'>GastroPub</h2>
            <p className='bodytxt'>Uanset om du skal have en forretningsfrokost, en romantisk middag ved levende lys eller bare en drink efter en travl dag, vil GastroPub altid imødekomme dine behov.</p>
            <Link to={'omos'}>
              <Button style={divStyle}>Om Os</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className='section fantastisk-mad overlay-60'>
        <div className='container'>
          <div className='section-box'>
            <h2 className='heading'>Fantastisk Mad</h2>
            <p className='bodytxt'>Vores retter er tilberedt med friske råvarer fra danske økologiske gårde og egen køkkenhave. Der er kærlighed i hver ret fra kokkens hjerte.</p>
            <Link to={'menu'}>
              <Button style={divStyle}>Menu</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className='section luksuriost-interior overlay-60'>
        <div className='container'>
          <div className='section-box'>
            <h2 className='heading'>Luksuriøst Interiør</h2>
            <p className='bodytxt'>Vores lokaler er indrettet fra det romantiske møde, til det luksuriøse selskab. Hyggelige om givelser til enhver lejlighed.</p>
            <Link to={'galleri'}>
              <Button style={divStyle}>Galleri</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
