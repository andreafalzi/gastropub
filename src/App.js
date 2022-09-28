import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './routes/layout/layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path='omos' element={<About />} /> */}
        {/* <Route path='team' element={<Team />} /> */}
        {/* <Route path='menu' element={<Menu />} /> */}
        {/* <Route path='galleri' element={<Galleri />} /> */}
        {/* <Route path='nyheder' element={<Nyheder />} /> */}
        {/* <Route path='kontakt' element={<Kontakt />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
