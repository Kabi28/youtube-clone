import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import {API_KEY, truncateTitle, value_converter} from '../../data.js'
import moment from 'moment'
const Feed = ({category,search}) => {
    const [data,setData] = useState([]);

    const fetchData = ()=>{
        const Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        fetch(Url).then(response=>response.json()).then(data=>setData(data.items))
    }
    useEffect(()=>{
        fetchData()
    },[category])

    const hasSearchValue = search.length > 0;
  return (
    <div className='feed-wrapper'>
        {
            hasSearchValue?(
                search.map((item, index) => (
                    <Link
                      to={`/video/${item.snippet.categoryId || 'search'}/${item.id.videoId || item.id}`}
                      className="feed-content"
                      key={index}
                    >
                      <img src={item.snippet.thumbnails.medium.url} alt="" />
                      <h2>{truncateTitle(item.snippet.title)}</h2>
                      <h3>{item.snippet.channelTitle}</h3>
                      <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                  ))
            ):(
                data.map((item,index)=>(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="feed-content" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{truncateTitle(item.snippet.title)}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                ))
            )
        }
        
    </div>
  )
}

export default Feed
