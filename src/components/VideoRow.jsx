import React from 'react'
import './VideoRow.css';
//import {useState} from 'react';

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
    /*const [videos, setVideos] = useState([]);
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=abcd&key=YOUR_API KEY').then((response)=>{
                response.json();
                console.log(response);
        })*/
    return (
        <div className='videoRow'>
            <img src={image} alt=""/>
            <div className="videoRow-text">
                <h3>{title}</h3>
                <p className='videoRow-headline'>{channel} • 
                <span className='videoRow-sub'>
                <span className='videoRow-subs'> {subs} </span> Subscribers
                </span>
                {views} • {timestamp}
                </p>
                <p className='videoRow-description'>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
