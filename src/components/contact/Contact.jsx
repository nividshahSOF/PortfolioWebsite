import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z3ye43m', 'template_r070vkj', form.current, 'zsOVm78OQA0Q8rz3g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        {/* first column */}
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nividshah@gmail.com</h5>
            <a href='mailto:nividshah@gmail.com' target={'_blank'} rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsTelephoneOutbound className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>(778)-245-2008</h5>
            <a href='tel:+17782452008'>Call Me</a>
          </article>

          <article className='contact__option'>
            <IoLogoLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Nivid Shah</h5>
            <a href='https://www.linkedin.com/in/nividshah/' target={'_blank'} rel="noreferrer">Connect</a>
          </article>
        </div>
        {/* second column */}
        <form ref={form} onSubmit={sendEmail}>
          <input type={'text'} name='name' placeholder='Your Full name' required />
          <input type={'email'} name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact