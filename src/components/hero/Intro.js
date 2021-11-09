import './intro.css';

import About from '../about/About';
const Intro = () => {
  return (
    <>
      <div className='intro'>
        <div className='intro-left'>
          <div className='intro-left-wrapper'>
            <h2 className='intro-msg'>Hello, My name is</h2>
            <h1 className='intro-name'>Saman Fayazi</h1>
            <div className='intro-title'>
              <div className='intro-title-wrapper'>
                <div className='intro-title-item'>Web Developer</div>
                <div className='intro-title-item'>Back-end Developer</div>
                <div className='intro-title-item'>Front-end Developer</div>
                <div className='intro-title-item'>UI/UX Designer</div>
              </div>
            </div>
            <div className='intro-desc'>
              <p>
                I create a modern web applications and transform your idea and
                dreams into reality.
              </p>
            </div>
          </div>
        </div>
        <div className='intro-right'>
          <div className='intro-right-bg'></div>
          <div className='intro-shape'></div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Intro;
