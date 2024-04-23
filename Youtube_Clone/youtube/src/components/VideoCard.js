import React from 'react'

const VideoCard = ({info}) => {


  //console.log(info);
  const{snippet, statistics} = info;
  const{channelTitle, title,thumbnails} = snippet;


  return (
    <div className='p-2 m-2 w-80  cursor-pointer'>
      <img className='rounded-lg' alt='thumbnail' src= {thumbnails.medium.url} />
      <ul>
        <li className='font-medium py-2'>
          {title.length>40 ? title.slice(0,60) + "..." : title}
        </li>
        <li className='text-sm'>{channelTitle}</li>
        <li className='text-sm'>{statistics.viewCount>1000000 ? Math.round(statistics.viewCount/1000000)+'M' :  Math.round(statistics.viewCount/1000)+'K'} views</li>
      </ul>
    </div>
  )
}

export const AddVideoCard = ({info})=>{
  return (
    <div className='border border-red-500 p-1 m-1'>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard