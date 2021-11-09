import { NavLink } from 'react-router-dom';
import './nav.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { links } from '../../linkData';
import { FaTimes } from 'react-icons/fa';
const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const handleNavbar = () => {
    setShowNav(!showNav);
  };
  console.log(links);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2 className='logo'>S.Fayazi</h2>
          <button className='nav-toggle' onClick={handleNavbar}>
            {showNav ? <HiOutlineMenuAlt3 /> : <FaTimes />}
          </button>
        </div>
        <div
          className={
            showNav ? 'links-container' : 'links-container show-container'
          }
        >
          <ul className='links'>
            {links.map((link) => {
              return (
                <NavLink key={link.id} to={link.url}>
                  {link.text}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
