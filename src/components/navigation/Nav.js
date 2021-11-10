import { NavLink } from 'react-router-dom';
import './nav.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { links } from '../../linkData';
import { FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../../context';
const Nav = () => {
  const background = useContext(ThemeContext);
  const dark = background.state.darkMode;
  const [showNav, setShowNav] = useState(true);
  const handleNavbar = () => {
    setShowNav(!showNav);
  };
  console.log(links);
  return (
    <nav
      style={{
        backgroundColor: dark ? '#888' : '#fff',
        color: dark ? '#fff' : '#333',
      }}
    >
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
                <NavLink
                  style={{
                    color: dark ? '#fff' : '#333',
                  }}
                  key={link.id}
                  to={link.url}
                >
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
