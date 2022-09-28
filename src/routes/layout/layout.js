import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
