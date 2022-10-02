import React from 'react';
import './team.scss';
import { motion } from 'framer-motion';

const Team = ({ ...props }) => {
  const divStyle = {
    backgroundImage: 'url(/assets/images/StaffHeaderFood.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <motion.main {...props}>
      <div style={divStyle} className='team-hero overlay-60'>
        <h1>Vores Team</h1>
      </div>
      <section className='chef-section'>
        <div className='container'>
          <div className='chef-container'>
            <div className='chef-text'>
              <h2>Chefkok - Bob Vestermark</h2>
              <p>Jeg startede mit madeventyr hos Buggeda l Kro og efter 10 år, besluttede jeg at tage et stort skridt videre i min karriere, da jeg mente, at det var tid til at skabe min egen succes. Min store passion for mad og lysten til at skabe mit eget sted blev d. 2 . juni til virkelighed, da jeg åbnede dør ene op for Viborgs nyeste Gastropub.</p>
            </div>
            <img src='/assets/images/MasterChef.jpg' alt='master chef' />
          </div>
        </div>
      </section>
      <section className='crew-section'>
        <div className='container'>
          <div className='crew-container'>
            <div className='crew-card'>
              <img src='/assets/images/DeputyChef.jpg' alt='deputy chef' />
              <h3>John Smith</h3>
              <span>Deputy Chef</span>
              <p>John er uddannet hos Restaurant Vesterhavet i 2001. John har speciale i retter med chili og det sydamerikanske køkken.</p>
            </div>
            <div className='crew-card'>
              <img src='/assets/images/PastryAssistant.jpg' alt='pastry assistant' />
              <h3>Gert Hansen</h3>
              <span>Pastry Chef</span>
              <p>Gert er uddannet Kok, og senere konditor. Gert har specialiseret sig i dessertens univers, med en dyb kærlighed til havtorn.</p>
            </div>
            <div className='crew-card'>
              <img src='/assets/images/Assistant.jpg' alt='assistant' />
              <h3>Søren Aalstrup</h3>
              <span>Assistent</span>
              <p>Søren uddanner sig til kandidat i filosofi, og supplerer sine studier med at kræse for vores kunder.</p>
            </div>
            <div className='crew-card'>
              <img src='/assets/images/HeadWaiter.jpg' alt='head waiter' />
              <h3>Pernille Hank</h3>
              <span>Over Tjener</span>
              <p>Pernille er uddannet tjener fra Gamle Gislev Kro i 2008, Pernille har rejst verden rundt og studeret vin. Nu bruger hun sin viden til glæde for din gane.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Team;
