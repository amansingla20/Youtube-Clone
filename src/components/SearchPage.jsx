import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage-filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
            image='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj'
            Channel='Clever Programmer'
            subs='930K'
            noOfVideos={382}
            description ='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.'
            verified />

            <hr/>

            <VideoRow 
            views='1.4K'
            subs='650K' 
            description='Do you want free one hour training..'
            timestamp='35 seconds ago'
            channel='Clever Programmer'
            title="Let's Build a Clone"
            image='https://i.ytimg.com/vi/XtMThy8QKqU/maxresdefault.jpg'
            />
        </div>
    )
}

export default SearchPage
