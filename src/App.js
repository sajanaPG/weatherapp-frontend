//import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import CityDetails from './pages/CityDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/cityDetails' element={<CityDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
