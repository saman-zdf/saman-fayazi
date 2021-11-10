import './toggle.css';
import Sun from '../../images/sun.png';
import Moon from '../../images/moon.png';
import { ThemeContext } from '../../context';
import { useContext } from 'react';
const Toggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state, dispatch);
  const handleClick = () => {
    dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className='toggle'>
      <img src={Sun} alt='sun' className='toggle-icon' />
      <img src={Moon} alt='moon' className='toggle-icon' />
      <div
        className='toggle-button'
        onClick={handleClick}
        style={{ left: state.darkMode ? '0' : '25px' }}
      ></div>
    </div>
  );
};

export default Toggle;
