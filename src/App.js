import React from 'react';
import About from './components/about/About';
import Intro from './components/hero/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Project from './components/pro/Project';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
