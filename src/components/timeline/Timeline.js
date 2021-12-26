import React from 'react'
import './Timeline.css';
import timelineData from "./data";
import TimelineItem from "./timelineitem";


const  Timeline = () => timelineData.length > 0 && (
  <>
     <h1>
        Road that take's you to the Next level
    </h1>
    <div className="timeline-container">
   
        {timelineData.map((data, idx) =>
            <TimelineItem data={data} key={idx}/>
        )}
    </div>
</>
);

export default Timeline;