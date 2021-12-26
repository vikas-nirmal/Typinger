import React from 'react'


const TimelineItem = ({data}) =>(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <h5>{data.label}</h5>
            <p>{data.text}</p>
            <a href={data.link.url}>
                {data.link.text}    
            </a>
            <span className="circle"></span>
        </div>

    </div>
);

export default TimelineItem;