import React from 'react'
import './Video.css'
import VideoPlayer from '../../VideoPlayer/VideoPlayer'
import Recommended from '../../Components/Recommented/Recommended'
import { useParams } from 'react-router-dom'


const Video = () => {
  const {videoId,categoryId} = useParams();
  
  return (
    <div className='video-container'>
        <VideoPlayer videoId={videoId}/>
        <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
