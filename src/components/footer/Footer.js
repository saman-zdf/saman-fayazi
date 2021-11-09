import { socials } from '../../linkData';
import './footer.css';
const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <div className='date'>
          <p>{date}</p>
        </div>
        <ul className='social-icons'>
          {socials.map((social) => {
            return (
              <li key={social.id}>
                <a target={'_blank'} rel='noreferrer' href={social.url}>
                  {social.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
