import React from 'react';
import './slideshow.scss';

const SlideShow = () => {
  const galleriArr = [
    { desc: 'table', url: '/assets/galleri/galleri01.jpg' },
    { desc: 'table', url: '/assets/galleri/galleri02.jpg' },
    { desc: 'table', url: '/assets/galleri/galleri03.jpg' },
    { desc: 'table', url: '/assets/galleri/galleri04.jpg' },
    { desc: 'table', url: '/assets/galleri/galleri05.jpg' },
    { desc: 'table', url: '/assets/galleri/galleri06.jpg' },
    { desc: 'table', url: '/assets/galleri/galleri07.jpg' },
  ];

  return (
    <div className='slideshow'>
      <h2>Thumbnail</h2>
      <div className='main-picture'></div>
      <div className='other-pictures'></div>
    </div>
  );
};

export default SlideShow;
