import React, { useEffect, useState } from 'react'
import VideoCard, {AddVideoCard} from "./VideoCard";
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      
      {videos?.map(video=> 
        <Link to={"/watch?v=" + video.id} key={video.id}> <VideoCard key={video.id} info={video} /> </Link>
      )}
      {videos[0] && <AddVideoCard info={videos[0]}/>}
    </div>
  )
}

export default VideoContainer