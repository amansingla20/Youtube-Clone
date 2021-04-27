import React from 'react'
import './VideoRow.css';

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className='videoRow'>
            <img src={image} alt=""/>
        </div>
    )
}

export default VideoRow
