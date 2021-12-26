import React, { useState } from 'react';
import '../../App.css';
import FormSignup from './FormLogin';

export default function SignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
          <FormSignup submitForm={submitForm} />
      </div>
    </>
  );
}