import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import CityDetails from './pages/CityDetails';
import { CityProvider } from './services/CityContext';

function App() {
  return (
    <BrowserRouter>
      <CityProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/cityDetails' element={<CityDetails />} />
          </Route>
        </Routes>
      </CityProvider>
    </BrowserRouter>
  );
}

export default App;
