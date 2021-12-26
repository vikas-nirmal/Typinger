import React from 'react';
import './Products.css';
import Footer from '../Footer';

export default function Products() {
  return (
    <>
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Touch Typing</h1>
      <p>Why is it important to touch type?</p>
    </div>
      <h1 className='pro-header'>The 6 Benefits of Touch Typing:</h1>
      <div className='cont-pro'>
      <div className='pro1'>
      <span className='span1'>
      1. Speed - This is going to be the first and most obvious benefit of learning to touch type. A touch typist can easily reach typing speeds above 75-80 words per minute, while a non-trained individual is around 10. This is increased by the fact that an accomplished touch typist doesn’t have to look at the keyboard. Not only will you become more efficient, but you will also be able to direct focus where required.
      </span>
      </div>
      <div className='pro2'>
      <span className='span2'>
      2. Accuracy - One of the most important things to learn no matter how hard you type is to type accurately. This increase yours or your staff’s confidence in their document production as they will know what they are writing is spelt correctly and grammatically accurate.
      </span>
     </div>
     <div className='pro1'>
      <span className='span1'>
      3. Time - If you increase your typing speed for example, from say 30 words per minute to 60, you have effectively halved the time it would take you to do the same amount of work. An average two finger typist, typing at a speed of 10 words per minute, will type a 170-word section in about 17 minutes. A touch typist, on the other hand, typing at an average 60 words per minute, can type the same section in around 4 minutes. It has been proven that a trained touch typist can save around 20 – 35% of their time used on a computer through learning this skill.
      </span>
      </div>
      <div className='pro2'>
      <span className='span2'>
      4. Decrease Fatigue - Typing is both psychologically and physically exhausting when done for long periods of time. Learning to touch type properly reduces mental and physical fatigue. Mentally, it keeps you from having to focus on two things at once. All you have to worry about is your output, not finding the individual keys. Physically, it keeps you from constantly having to bend your head over the keyboard to find your next couple of keystrokes.
      </span>
     </div>
     <div className='pro1'>
      <span className='span1'>
      5. Health - Overall, touch typing is better for your health. You’re not hunched over looking at the keys, and using all of your fingers actually reduces the risk for repetitive stress injuries (RSI).
      </span>
      </div>
      <div className='pro2'>
      <span className='span2'>
      6. Productivity - By learning touch typing, you shall become more productive and even increase your own or your staff’s confidence. Time is nearly halved and errors will become near enough non-existent. Touch typing is a skill to be proud of and is desired within most industries.
      </span>
      <br></br>
      <br></br>
    
     </div>
     <a
          className='btns2'
          href='/services'
        >
          GET STARTED
        </a>
        <br></br>
      <br></br>
      </div>
     <Footer />
    </>
  );
}
