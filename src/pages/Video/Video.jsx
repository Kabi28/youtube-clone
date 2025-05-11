import React, { useEffect, useState } from 'react';
import './Video.css';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import Recommended from '../../Components/Recommented/Recommended';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../data';

const Video = () => {
  const { videoId, categoryId } = useParams();
  const [categoryIdChecked, setCategoryIdChecked] = useState('');

  useEffect(() => {
    const fetchCategoryId = async () => {
      if (categoryId === 'search') {
        try {
          const categoryUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;
          const response = await fetch(categoryUrl);
          const data = await response.json();
          if (data.items && data.items.length > 0) {
            setCategoryIdChecked(data.items[0].snippet.categoryId);
          } else {
            console.warn('No video found');
            setCategoryIdChecked('');
          }
        } catch (error) {
          console.error('Failed to fetch video category:', error);
        }
      } else {
        setCategoryIdChecked(categoryId);
      }
    };

    fetchCategoryId();
  }, [videoId, categoryId]);

  return (
    <div className="video-container">
      <VideoPlayer videoId={videoId} />
      {categoryIdChecked && <Recommended categoryId={categoryIdChecked} />}
    </div>
  );
};

export default Video;
