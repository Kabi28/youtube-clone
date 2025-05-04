import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import { Link } from 'react-router-dom'
const Recommended = ({categoryId}) => {
  const [recData,setRecData] = useState([]);

  const fetchRecData= () =>{
      const recUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
      fetch(recUrl).then(res=>res.json()).then(data=>setRecData(data.items))
  }
  console.log(recData)
  useEffect(()=>{
    fetchRecData()
  },[])

  
      return(
        <div className='recommended'>
          {
            recData.map((item,index)=>{
              return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="video-side" key={index}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="vid-info">
                  <h4>{item.snippet.title.slice(0,30)}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{value_converter(item.statistics.viewCount)} views</p>
                </div>
              </Link>
              )
            })
          }
      </div>
      )
    }
  
  
    


export default Recommended
