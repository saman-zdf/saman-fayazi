import './about.css';
import image from '../../images/my-img.jpg';
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src={image} alt='S.Fayazi' className='about-image' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-desc'>
          My name is Sam. I love to code everyday and also like to create apps.
          I live currently at Perth. I will soon be graduate from Coder Academy
          bootcamp. My hobbies are coding, reading, workouts and also I love to
          write poems if I get inspired.
        </p>
      </div>
    </div>
  );
};

export default About;
