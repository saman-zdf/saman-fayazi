import './contact.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsChevronUp } from 'react-icons/bs';
import { useRef, useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';
import { Link } from 'react-scroll';
import { useForm } from 'react-hook-form';

const Contact = () => {
  // const initialState = {
  //   username: '',
  //   user_subject: '',
  //   user_email: '',
  //   message: '',
  // };
  // const [inputValues, setInputValues] = useState(initialState);
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const background = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dark = background.state.darkMode;
  const onSubmit = (data) => {
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

    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 5000);
    console.log(data);
  };

  return (
    <>
      <hr />
      <div className='contact' id='contact'>
        <Link
          activeClass='active'
          className='arrow-up'
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: 'pointer' }}
        >
          <BsChevronUp />
        </Link>
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
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <input
                type='text'
                placeholder='Name'
                name='username'
                // onChange={handleChange}
                // value={inputValues.username}
                {...register('username', { minLength: 3, required: true })}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
              />
              {errors.username && (
                <span>Username can't be blank, minimum of 3 characters</span>
              )}
              <input
                type='text'
                placeholder='Subject'
                name='user_subject'
                // onChange={handleChange}
                // value={inputValues.user_subject}
                {...register('user_subject', { minLength: 3, required: true })}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
              />
              {errors.user_subject && (
                <span>Subject can't be blank, minimum of 6 characters</span>
              )}
              <input
                type='email'
                placeholder='
            Email'
                name='user_email'
                // onChange={handleChange}
                // value={inputValues.user_email}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
                {...register('user_email', { required: true })}
              />
              {errors.user_email && <span>Email can't be blank</span>}
              <textarea
                name='message'
                id=''
                cols='30'
                rows='5'
                placeholder='Message'
                // onChange={handleChange}
                // value={inputValues.message}
                style={{
                  backgroundColor: dark ? '#444' : '#fff',
                  color: dark ? '#fff' : '#333',
                }}
                {...register('message', { minLength: 3, required: true })}
              ></textarea>
              {errors.message && <span>Message can't be blank</span>}
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
