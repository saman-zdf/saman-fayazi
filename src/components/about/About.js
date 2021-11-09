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
        <p className='about-sub'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut expedita
          dolorum, libero soluta perferendis molestias.
        </p>
        <p className='about-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ut, culpa ex provident eos velit voluptatem possimus rerum vero aut
          nisi nulla sequi dicta earum facere consequuntur. Eaque, eos tenetur.
        </p>
      </div>
    </div>
  );
};

export default About;
