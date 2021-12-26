import React from 'react'
import ReactPlayer from 'react-player';
import './Lvlone.css'

 function Lvlone() {
  return (
       <>
       <div className='lvl-cont'>
            <ReactPlayer width='1020px' height='550px' controls url='https://youtu.be/vbi2WeLTGxk'/>
       </div>
       <a className='next-lvl' href='/Lvl2'>Next</a>
       </>
  );
}


export default Lvlone;