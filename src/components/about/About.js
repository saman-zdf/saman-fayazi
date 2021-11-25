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
          My name is Sam, and I enjoy meeting new people. I am passionate about
          helping others specially when they have conflict in with their
          project. I have a routine whereby I code on daily basis which helps me
          to become a better skill programmer. I have studied prgramming at
          Coder Academy bootcamp and it was an awesome exprience for me. I love
          to read,workout, create apps and write poems if I am inspired.
        </p>
      </div>
    </div>
  );
};

export default About;
