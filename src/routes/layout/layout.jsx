import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';
import ToTopButton from '../../components/toTopButton/toTopButton.component';

const Layout = () => {
  //navbar scroll when active state
  const [toTop, setToTop] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div>
      <Navigation />
      {toTop && <ToTopButton />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
