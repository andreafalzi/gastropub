import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './galleri.scss';

const Galleri = () => {
  // const [imgData, setImgData] = useState([]);
  // const [filteredImgData, setFilteredImgData] = useState(imgData);

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

  // useEffect(() => {
  //   const newSortedData = imgData.slice(14, 21);
  //   setFilteredImgData(newSortedData);
  // }, [imgData]);

  // // console.log(filteredImgData);

  // const galleriArr2 = [];

  // const slideshowArray = (images) => {
  //   filteredImgData.forEach((el) => {
  //     images.push({ caption: el.name, image: el.url });
  //   });
  // };

  // slideshowArray(galleriArr2);

  const galleriArr = [
    { caption: 'table', image: '/assets/galleri/galleri01.jpg' },
    { caption: 'table', image: '/assets/galleri/galleri02.jpg' },
    { caption: 'table', image: '/assets/galleri/galleri03.jpg' },
    { caption: 'table', image: '/assets/galleri/galleri04.jpg' },
    { caption: 'table', image: '/assets/galleri/galleri05.jpg' },
    { caption: 'table', image: '/assets/galleri/galleri06.jpg' },
    { caption: 'table', image: '/assets/galleri/galleri07.jpg' },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  const divStyle = {
    backgroundImage: 'url(/assets/images/GalleriHeader.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <main>
      <div style={divStyle} className='galleri-hero overlay-60'>
        <h1>Galleri</h1>
      </div>
      <section className='galleri-section'>
        <div className='container'>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '0 20px',
              }}
            >
              <Carousel
                data={galleriArr}
                time={4000}
                width='850px'
                height='500px'
                captionStyle={captionStyle}
                radius='0'
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition='bottom'
                automatic={true}
                dots={true}
                pauseIconColor='white'
                pauseIconSize='40px'
                slideBackgroundColor='darkgrey'
                slideImageFit='cover'
                thumbnails={true}
                thumbnailWidth='100px'
                style={{
                  textAlign: 'center',
                  maxWidth: '850px',
                  maxHeight: '500px',
                  margin: '40px auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Galleri;
