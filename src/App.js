import React from 'react';
import  Home  from './pages/Home';
import  Bar  from './pages/Bar';
import { Routes, Route, Link } from "react-router-dom";
// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import Footer from './container/Footer/Footer'
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Routes>
      <Route path='/gericht' element={<Home />} />
      <Route path='/Bar' element={<Bar />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
