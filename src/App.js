import React from 'react';
import  Home  from './pages/Home';
import  Bar  from './pages/Bar';
import About from './pages/About';
import Services from './pages/Services';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './container/Footer/Footer'
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Routes>
      <Route path='/gericht' element={<Home />} />
      <Route path='/Bar' element={<Bar />} />
      <Route path='/About' element={<About/>} />
      <Route path='/services' element={<Services/>} />
    </Routes>
    <Footer />
  </div>
);

export default App;
