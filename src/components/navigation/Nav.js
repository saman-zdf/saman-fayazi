import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <h2 className='logo'>S.Fayazi</h2>
      </div>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Me</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
