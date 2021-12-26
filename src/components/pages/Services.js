import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Services() { 
  

  return (
    <>
    <div className='cards'>
      <h1> All Courses </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="That isn't writing at all, it's typing."
              label='Touch Typing'
              path='./timeline/Timeline.js'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}
export default Services;