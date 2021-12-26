import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <div className='box'>
        <div className='img-box'>
          <img
          src='images/typ-1.jpg' alt='Typping'></img>
        </div>
        <div className='content'>
        <h1>Why touch typing?</h1>
        <p>
        These days, typing can seem like it is not such an important skill as it once was. For example, we are becoming increasingly used to talking to our machines with the advances being made by Google Home, Alexa, Cortana, and Siri.

But typing remains a fundamental skill, and it is still one of the most important computer skills you can learn. Learning to type fast and accurately will help you in many ways in life, and it should be considered an essential skill for anyone who sees themselves working with a computer in some capacity (which is most people!)
        </p>
        </div>
      </div>
      <div className='box'>
        <div className='img-box'>
          <img
          src='images/typ-2.jpg' alt='Typping'></img>
        </div>
        <div className='content'>
        <h1>Be More Productive</h1>
        <p>
        Everyone is looking for ways to be more productive both in the workplace and at home, and typing faster is a simple way to get more done.

If you learn to double the speed you type, you can essentially get twice as much done in the same space of time.

Employers might even want to ensure their employees are trained up in touch-typing due to the productivity boost it could lead to.

And if you are an employee, you could learn how to increase your typing speed to impress your boss, or you can simply give yourself more time to spend on other things.
        </p>
        </div>
      </div>
      <br>
      </br>
      <div className='btnp'>
      <a
          className='btns3'
          href='/services'
        >
          GET STARTED
        </a>
      </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      <Footer />
    </>
  );
}

export default Home;
