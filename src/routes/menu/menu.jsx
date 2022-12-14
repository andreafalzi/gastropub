import React, { useEffect, useState } from 'react';
import './menu.scss';
import { motion } from 'framer-motion';
import Footer from '../../components/footer/footer.component';

const Menu = ({ ...props }) => {
  const [menuData, setMenuData] = useState([]);
  // const [imgData, setImgData] = useState([]);

  useEffect(() => {
    const url = 'https://gastropub.webexam-mcdm.dk/api/menus';
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setMenuData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const url = 'https://gastropub.webexam-mcdm.dk/api/images';
  //   const options = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const json = await response.json();
  //       setImgData(json);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // `url(${imgData[9].url})`;
  const divStyle = {
    backgroundImage: 'url(/assets/images/menuHeader.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <>
      <motion.main {...props}>
        <div style={divStyle} className='menu-hero overlay-60'>
          <h1>Menu</h1>
        </div>
        <section className='menu-section'>
          <div className='container'>
            <div className='menu-list'>
              <img src='/assets/images/soups.png' alt='supper' />
              <div className='menu-list-text'>
                <h2>Supper</h2>
                {menuData.slice(0, 3).map((text) => (
                  <div className='menu-item' key={text.id}>
                    <h3>
                      {text.name} <span>{text.price}</span>
                    </h3>
                    <p>{text.ingredients}</p>
                  </div>
                ))}
                {/* <div className='menu-item'>
                <h3>
                  Kyllinge Nudel Suppe <span>kr. 109, -</span>
                </h3>
                <p>Guler??dder, selleri, hvidl??g, l??g, Kylling, saffron, ingef??r.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Russisk Borscht <span>kr. 98, -</span>
                </h3>
                <p>R??dbede, tomater, l??g, kalvefond, cremefraiche.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Minestrone <span>kr. 98, -</span>
                </h3>
                <p>B??nner, l??g, selleri, guler??dder, tomat, oregano, timian, kalvefond.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Bouillabaisse <span>kr. 126, -</span>
                </h3>
                <p>fisk og skaldyr, l??g, hvidl??g, persille, timian, fennikel, laurb??rblade, appelsinskal.</p>
              </div> */}
              </div>
            </div>
            <div className='menu-list'>
              <img src='/assets/images/salads.png' alt='salater' />
              <div className='menu-list-text'>
                <h2>Salater</h2>
                {menuData.slice(4, 7).map((text) => (
                  <div className='menu-item' key={text.id}>
                    <h3>
                      {text.name} <span>{text.price}</span>
                    </h3>
                    <p>{text.ingredients}</p>
                  </div>
                ))}
                {/* <div className='menu-item'>
                <h3>
                  Vilde ris salat <span>kr. 78, -</span>
                </h3>
                <p>Vilde ris, citron, romainesalat, haricots verts, l??g , oliven, tomater.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Grillet squash & couscous salat <span>kr. 109, -</span>
                </h3>
                <p>Guler??dder, selleri, hvidl??g, l??g, Kylling, saffron, ingef??r.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Asparges & Halloumi Salat <span>kr. 78, -</span>
                </h3>
                <p>asparges, halloumi, fennikel, r??dl??g, appelsin.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Fennikel, krabbe og appelsinsalat <span>kr. 112, -</span>
                </h3>
                <p>Fennikel, appelsin, mint, avocado, gr??n chili, krappek??d, oliven.</p>
              </div> */}
              </div>
            </div>
            <div className='menu-list'>
              <img src='/assets/images/main.png' alt='hovedretter' />
              <div className='menu-list-text'>
                <h2>Hovedretter</h2>
                {menuData.slice(8, 11).map((text) => (
                  <div className='menu-item' key={text.id}>
                    <h3>
                      {text.name} <span>{text.price}</span>
                    </h3>
                    <p>{text.ingredients}</p>
                  </div>
                ))}
                {/* <div className='menu-item'>
                <h3>
                  Kylling Milanese med spaghetti <span>kr. 156, -</span>
                </h3>
                <p>Frisk pasta , kyllingebryst, cherrytomater, basilikum, hvidl??g, parmesan.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Lam og kik??rter i karry <span>kr. 195, -</span>
                </h3>
                <p>Lammebov, gurkemeje, skalottel??g, kik??rter, tomater, h??nsebouillon, koriander.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Spaghetti carbonara <span>kr. 145, -</span>
                </h3>
                <p>linguine, bacon, parmesan, piskefl??de.</p>
              </div>
              <div className='menu-item'>
                <h3>
                  Peruviansk laks med quinoa <span>kr. 210, -</span>
                </h3>
                <p>Avocado, laksefilet, Peruvian Chili, r??d quinoa, cherrytomater, for??rsl??g, koriander.</p>
              </div> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </motion.main>
    </>
  );
};

export default Menu;
