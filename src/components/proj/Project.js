// import Tools from '../my-tools/Tools';
import './project.css';

const Project = ({ link, img }) => {
  return (
    <div className='project'>
      <div className='project-browser'>
        <div className='project-circle red'></div>
        <div className='project-circle yellow'></div>
        <div className='project-circle green'></div>
      </div>
      <a href={link} target={'_blank'} rel='noreferrer'>
        <img src={img} alt='Latham food' className='project-img' />
        <p>View</p>
      </a>
    </div>
  );
};

export default Project;
