import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import DataProvider from './context/data.contenxt';
import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';
import ToTopButton from './components/toTopButton/toTopButton.component';
import AnimatedRoutes from './components/animatedRoutes/AnimatedRoutes';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navigation />
        <AnimatedRoutes />
        <ToTopButton />
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
