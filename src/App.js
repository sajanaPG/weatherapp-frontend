import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import CityDetails from './pages/CityDetails';

function App() {
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem("selectedCity") ?
    JSON.parse(localStorage.getItem("selectedCity")) : []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home setSelectedCity={setSelectedCity}/>}/>
          <Route path='/cityDetails' element={<CityDetails selectedCity={selectedCity}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
