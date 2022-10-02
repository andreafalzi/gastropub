import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../../routes/about/about';
import Galleri from '../../routes/galleri/galleri';
import Home from '../../routes/home/home';
import Kontakt from '../../routes/kontakt/kontakt';
import Menu from '../../routes/menu/menu';
import Nyheder from '../../routes/nyheder/nyheder';
import Team from '../../routes/team/team';

import { AnimatePresence } from 'framer-motion';
import Error404 from '../../routes/404Error/404Error';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='omos' element={<About initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='team' element={<Team initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='menu' element={<Menu initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='galleri' element={<Galleri initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='nyheder' element={<Nyheder initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='kontakt' element={<Kontakt initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
        <Route path='*' element={<Error404 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
