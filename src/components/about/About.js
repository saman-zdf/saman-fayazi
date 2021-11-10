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
          My name is Sam, and I enjoy meeting new people. I have a passion to
          help others specially when they stuggling with their projects. I have
          a routine to code on daily basis which it can help me to become a
          better skilled programmer. I studied prgramming at Coder Academy
          bootcamp and it was an awesome exprience for me and learned a lot. I
          love to read, do workouts, create apps and write poems if I get
          inspired.
        </p>
      </div>
    </div>
  );
};

export default About;
