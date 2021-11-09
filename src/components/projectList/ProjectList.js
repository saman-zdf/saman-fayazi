import Project from '../proj/Project';
import './projectList.css';
import { projects } from '../../data';
import Tools from '../my-tools/Tools';

const ProjectList = () => {
  return (
    <>
      <div className='pl'>
        <div className='pl-text'>
          <h2 className='pl-title'>Projects</h2>
        </div>
        <div className='pl-list'>
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </div>
      <Tools />
    </>
  );
};

export default ProjectList;
