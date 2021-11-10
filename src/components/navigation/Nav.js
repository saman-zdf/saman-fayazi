import { NavLink } from 'react-router-dom';
import './nav.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useContext, useState } from 'react';
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
            <NavLink to='/' style={{ color: '#333' }}>
              Home
            </NavLink>

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
            <li>
              <NavLink style={{ color: '#333' }} to='/project'>
                Project
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
