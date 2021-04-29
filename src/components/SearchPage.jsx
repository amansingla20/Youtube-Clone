import React,{useState,useEffect} from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import {useHistory} from 'react-router-dom';

function SearchPage() {
    //const [data, setData]= useState([]);
    const history = useHistory();
    let searchData= (history.location.pathname.split('/').pop());
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchData}&key=AIzaSyAzeB-Yu3vJHW3MezGRqi3EQLHKZFUGTOI`,  {
    //     crossDomain:true,
    //     method: 'GET',
    //     headers: {'Content-Type':'application/json'},
    // })
    //     .then((response)=>
    //         response.json())
    //      .then((xyz)=>{
    //          console.log(xyz);
    //     })
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
