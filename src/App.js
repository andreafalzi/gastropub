import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import DataProvider from './context/data.contenxt';
import Navigation from './components/navigation/navigation.component';
import ToTopButton from './components/toTopButton/toTopButton.component';
import About from './routes/about/about';
import Galleri from './routes/galleri/galleri';
import Home from './routes/home/home';
import Kontakt from './routes/kontakt/kontakt';
import Menu from './routes/menu/menu';
import Nyheder from './routes/nyheder/nyheder';
import Team from './routes/team/team';
import Error404 from './routes/404Error/404Error';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
      scale: 1,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: '100vw',
      scale: 0.8,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
  };

  const pageStyle = {
    position: 'absolute',
    width: '100%',
  };

  return (
    <DataProvider>
      <Navigation />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='omos' element={<About initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='team' element={<Team initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='menu' element={<Menu initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='galleri' element={<Galleri initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='nyheder' element={<Nyheder initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='kontakt' element={<Kontakt initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
          <Route path='*' element={<Error404 initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} style={pageStyle} />} />
        </Routes>
      </AnimatePresence>
      <ToTopButton />
    </DataProvider>
  );
}

export default App;
