import { Avatar } from '@material-ui/core';
import React from 'react'
import './Video.css';

function Video({image , title , channel, views , timestamp , channelImage}) {
    return (
        <div className='video'>
            <img  className='video-thumbnail' src={image} alt=""/>
            <div className="video-info">
                <Avatar className='video-avatar' alt={channel} src={channelImage}/>
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
