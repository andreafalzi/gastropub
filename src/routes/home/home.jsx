import React from 'react';
import Button from '../../components/button/button.component';
import './home.scss';
const Home = () => {
  return (
    <main>
      <section className='section gastropub overlay-60'>
        <div className='container'>
          <div className='section-box'>
            <h2 className='heading'>GastroPub</h2>
            <p className='bodytxt'>Uanset om du skal have en forretningsfrokost, en romantisk middag ved levende lys eller bare en drink efter en travl dag, vil GastroPub altid imødekomme dine behov.</p>
            <Button>Om Os</Button>
          </div>
        </div>
      </section>
      <section className='section fantastisk-mad overlay-60'>
        <div className='container'>
          <div className='section-box'>
            <h2 className='heading'>Fantastisk Mad</h2>
            <p className='bodytxt'>Vores retter er tilberedt med friske råvarer fra danske økologiske gårde og egen køkkenhave. Der er kærlighed i hver ret fra kokkens hjerte.</p>
            <Button>Menu</Button>
          </div>
        </div>
      </section>
      <section className='section luksuriost-interior overlay-60'>
        <div className='container'>
          <div className='section-box'>
            <h2 className='heading'>Luksuriøst Interiør</h2>
            <p className='bodytxt'>Vores lokaler er indrettet fra det romantiske møde, til det luksuriøse selskab. Hyggelige om givelser til enhver lejlighed.</p>
            <Button>Galleri</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
