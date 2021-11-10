import { NavLink } from 'react-router-dom';
import './nav.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { links } from '../../linkData';
import { FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../../context';
import { Link } from 'react-scroll';

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
                  key={link.id}
                  style={{
                    color: dark ? '#fff' : '#333',
                  }}
                  to={link.url}
                >
                  {link.text}
                </NavLink>
              );
            })}
            <NavLink to='/project'></NavLink>

            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              About
            </Link>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </Link>
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/project'>Projects</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
