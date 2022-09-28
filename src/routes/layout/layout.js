import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.component';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
