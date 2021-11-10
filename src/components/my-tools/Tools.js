import { ThemeContext } from '../../context';
import './tools.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { tools } from '../../linkData';

import { useState, useEffect, useContext } from 'react';

const Tools = () => {
  const [slide, setSlide] = useState(0);
  const background = useContext(ThemeContext);
  const dark = background.state.darkMode;
  console.log(dark);

  useEffect(() => {
    const timeout = setTimeout(
      () => setSlide((slide + 1 + tools.length) % tools.length),
      5000
    );
    return () => clearTimeout(timeout);
  }, [slide]);

  function handleClick(posititon) {
    posititon === 'left'
      ? setSlide(slide > 0 ? slide - 1 : 4)
      : setSlide(slide < tools.length - 1 ? slide + 1 : 0);
  }

  return (
    <div
      className='tools'
      id='tools'
      style={{
        backgroundColor: dark ? '#777' : '#2f87fa',
        color: dark ? '#333' : '#333',
      }}
    >
      <h2>Tools I use</h2>
      <FaChevronLeft
        className='arrow-left'
        onClick={() => handleClick('left')}
      />
      <FaChevronRight
        className='arrow-right'
        onClick={() => handleClick('right')}
      />
      <div
        className='slider'
        style={{ transform: `translateX(-${slide * 100}vw)` }}
      >
        {tools.map((tool) => {
          return (
            <div className='container'>
              <div className='item'>
                <div className='left'>
                  <div className='left-container'>
                    <div
                      className='icon-container'
                      style={{ color: tool.color }}
                    >
                      {tool.icon}
                    </div>
                    <h3>{tool.title}</h3>
                    <p>{tool.desc}</p>
                  </div>
                </div>
                <div className='right'>
                  <img src={tool.image} alt='React app' className='img-right' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
