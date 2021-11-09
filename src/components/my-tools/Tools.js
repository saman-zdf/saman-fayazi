import './tools.css';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3, FaReact, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { tools } from '../../linkData';

import image from '../../images/react-image.png';
import { useState } from 'react';

const Tools = () => {
  const [slide, setSlide] = useState(0);
  const [color, setColor] = useState('');

  function handleClick(posititon) {
    posititon === 'left'
      ? setSlide(slide > 0 ? slide - 1 : 4)
      : setSlide(slide < tools.length - 1 ? slide + 1 : 0);
  }

  return (
    <div className='tools' id='tools'>
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
                  <img src={image} alt='React app' className='img-right' />
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
