import React, { useContext } from 'react';

import Intro from './components/hero/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import ProjectList from './components/projectList/ProjectList';
import Footer from './components/footer/Footer';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

const App = () => {
  const background = useContext(ThemeContext);
  const dark = background.state.darkMode;
  return (
    <BrowserRouter>
      <div
        style={{
          background: dark ? '#333' : '#fff',
          color: dark ? '#fff' : '#333',
        }}
      >
        <Nav />
        <Toggle />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/project' element={<ProjectList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
