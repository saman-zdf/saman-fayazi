import './contact.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useRef, useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
  const initialState = {
    username: '',
    user_subject: '',
    user_email: '',
    message: '',
  };
  const [inputValues, setInputValues] = useState(initialState);
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const background = useContext(ThemeContext);
  const dark = background.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_1eqpy59',
        'template_f0ix81j',
        formRef.current,
        'user_RwohyLLZo0S9A8RvJxvx7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInputValues(initialState);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  console.log(inputValues);

  return (
    <>
      <hr />
      <div className='contact'>
        <div className='contact-bg'></div>
        <div className='contact-wrapper'>
          <div className='contact-left'>
            <h2 className='contact-title'>Contact Me</h2>
            <div className='contact-info'>
              <div className='contact-info-item'>
                <FaPhoneAlt className='contact-icon' />
                +61431157370
              </div>
              <div className='contact-info-item'>
                <MdOutlineMailOutline className='contact-icon' />
                samanfyz68@gmail.com
              </div>
              <div className='contact-info-item'>
                <FiMapPin className='contact-icon' />
                Yongah Hill, Perth WA, Australia
              </div>
            </div>
          </div>
          <div className='contact-right'>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Name'
                name='username'
                onChange={handleChange}
                value={inputValues.username}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
              />
              <input
                type='text'
                placeholder='Subject'
                name='user_subject'
                onChange={handleChange}
                value={inputValues.user_subject}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
              />
              <input
                type='email'
                placeholder='
            Email'
                name='user_email'
                onChange={handleChange}
                value={inputValues.user_email}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
              />
              <textarea
                name='message'
                id=''
                cols='30'
                rows='5'
                placeholder='Message'
                onChange={handleChange}
                value={inputValues.message}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
              ></textarea>
              <button type='submit'>Submit</button>
              {message && (
                <p>Thanks for your email, I'll get back to you soon!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
