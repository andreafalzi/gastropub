import React from 'react';
import './menu.scss';

const Menu = () => {
  const divStyle = {
    backgroundImage: 'url(/assets/images/menuHeader.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <main>
      <div style={divStyle} className='menu-hero overlay-60'>
        <h1>Menu</h1>
      </div>
      <section className='menu-section'>
        <div className='container'>
          <div className='menu-list'>
            <img src='/assets/images/soups.png' alt='supper' />
            <div className='menu-list-text'>
              <h2>Supper</h2>
              <div className='menu-item'>
                <h3>
                  Kyllinge Nudel Suppe <span>kr. 109, -</span>
                </h3>
                <p>Gulerødder, selleri, hvidløg, løg, Kylling, saffron, ingefær.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Russisk Borscht <span>kr. 98, -</span>
                </h3>
                <p>Rødbede, tomater, løg, kalvefond, cremefraiche.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Minestrone <span>kr. 98, -</span>
                </h3>
                <p>Bønner, løg, selleri, gulerødder, tomat, oregano, timian, kalvefond.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Bouillabaisse <span>kr. 126, -</span>
                </h3>
                <p>fisk og skaldyr, løg, hvidløg, persille, timian, fennikel, laurbærblade, appelsinskal.</p>
              </div>
            </div>
          </div>
          <div className='menu-list'>
            <img src='/assets/images/salads.png' alt='salater' />
            <div className='menu-list-text'>
              <h2>Salater</h2>
              <div className='menu-item'>
                <h3>
                  Vilde ris salat <span>kr. 78, -</span>
                </h3>
                <p>Vilde ris, citron, romainesalat, haricots verts, løg , oliven, tomater.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Grillet squash & couscous salat <span>kr. 109, -</span>
                </h3>
                <p>Gulerødder, selleri, hvidløg, løg, Kylling, saffron, ingefær.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Asparges & Halloumi Salat <span>kr. 78, -</span>
                </h3>
                <p>asparges, halloumi, fennikel, rødløg, appelsin.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Fennikel, krabbe og appelsinsalat <span>kr. 112, -</span>
                </h3>
                <p>Fennikel, appelsin, mint, avocado, grøn chili, krappekød, oliven.</p>
              </div>
            </div>
          </div>
          <div className='menu-list'>
            <img src='/assets/images/main.png' alt='hovedretter' />
            <div className='menu-list-text'>
              <h2>Hovedretter</h2>
              <div className='menu-item'>
                <h3>
                  Kylling Milanese med spaghetti <span>kr. 156, -</span>
                </h3>
                <p>Frisk pasta , kyllingebryst, cherrytomater, basilikum, hvidløg, parmesan.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Lam og kikærter i karry <span>kr. 195, -</span>
                </h3>
                <p>Lammebov, gurkemeje, skalotteløg, kikærter, tomater, hønsebouillon, koriander.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Spaghetti carbonara <span>kr. 145, -</span>
                </h3>
                <p>linguine, bacon, parmesan, piskefløde.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Peruviansk laks med quinoa <span>kr. 210, -</span>
                </h3>
                <p>Avocado, laksefilet, Peruvian Chili, rød quinoa, cherrytomater, forårsløg, koriander.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;