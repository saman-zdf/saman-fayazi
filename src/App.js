import React from 'react';
import About from './components/about/About';
import Intro from './components/hero/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Project from './components/pro/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
