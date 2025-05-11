import React, { useEffect, useState } from 'react'
import './VideoPlayer.css'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import { API_KEY, value_converter } from '../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const VideoPlayer = () => {
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const [subscribe,setSubscribe] = useState(false)
    

    const fetchVideoData = () => {
        const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        fetch(videoUrl).then(res => res.json()).then(data => setApiData(data.items[0]))

        
    }


    const fetchChannelData = () => {
        const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData ? apiData.snippet.channelId : ''}&key=${API_KEY}`
        fetch(channelUrl).then(res => res.json()).then(data => setChannelData(data.items[0]));
       
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${API_KEY}`
        fetch(commentUrl).then(res => res.json()).then(data => setCommentData(data.items));  
    }

    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    useEffect(() => {
        fetchChannelData()
    }, [apiData])

    return (
        <div className='VideoPlayer'>
            <div className="player">
                {/* <video src={video1} controls autoPlay muted></video> */}
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3>{apiData ? apiData.snippet.title : 'Title Loading...'}</h3>
            </div>
            <div className='video-info'>
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : 'Loading'} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'Loading'}</p>
                <div className="actions">
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 0}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>

            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : jack} alt="" />
                <div className="pub-info">
                    <h4>{apiData ? apiData.snippet.channelTitle : 'Loading...'}</h4>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "200K"} Subscribers</span>
                </div>
                <button className={subscribe?'subscribed':''} onClick={()=>setSubscribe(pre=>!pre)}>{subscribe?'Subscribed':'Subscribe'}</button>
            </div>
            <div className="video-desc">
                <p>{apiData ? apiData.snippet.description.slice(0, 400) : 'Description Loading'}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : '1200'} comments</h4>
                {
                    commentData.map((item,index)=>{
                        return (
                        <div className="comments" key={index}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span> &bull; {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                                
                            </div>
                        </div>
                </div>
                        )
                    })
                }
                
                
            </div>
        </div>

    )
}

export default VideoPlayer
