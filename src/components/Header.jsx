import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import {useState } from 'react';
import {Link} from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className='header-left'>
                <MenuIcon />
                <Link to='/'>
                <img
                className='header-logo' 
                src="https://static.toiimg.com/photo/58623495.cms" 
                alt=""/>
                </Link>
            </div>

            <div className="header-input">
                <input type='text' 
                placeholder='Search' value={inputSearch}
                onChange={(event)=> setInputSearch(event.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header-inputButton'/>
                </Link>
            </div>
            <div className='mic-icon'>
            <MicIcon/>
            </div>

            <div className="headerRight">
                <VideoCallIcon className='header-icon'/>
                <AppsIcon className='header-icon'/>
                <NotificationsIcon className='header-icon'/>
                <Avatar src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' />
            </div>
        </div>
    )
}

export default Header
