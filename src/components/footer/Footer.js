import { socials } from '../../linkData';
import './footer.css';
const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='date'>
        <h3>{date}</h3>
      </div>
      <ul className='social-icons'>
        {socials.map((social) => {
          return (
            <li key={social.id}>
              <a target={'_blank'} href={social.url}>
                {social.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
