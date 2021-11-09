import React from 'react';

import Intro from './components/hero/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import ProjectList from './components/projectList/ProjectList';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/project' element={<ProjectList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
