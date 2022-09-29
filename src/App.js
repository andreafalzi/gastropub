import { Routes, Route } from 'react-router-dom';
import './App.scss';
import DataProvider from './context/data.contenxt';
import About from './routes/about/about';
import Home from './routes/home/home';
import Kontakt from './routes/kontakt/kontakt';
import Layout from './routes/layout/layout';
import Menu from './routes/menu/menu';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='omos' element={<About />} />
          {/* <Route path='team' element={<Team />} /> */}
          <Route path='menu' element={<Menu />} />
          {/* <Route path='galleri' element={<Galleri />} /> */}
          {/* <Route path='nyheder' element={<Nyheder />} /> */}
          <Route path='kontakt' element={<Kontakt />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
