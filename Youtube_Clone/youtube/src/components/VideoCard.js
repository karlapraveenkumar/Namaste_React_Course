import React from 'react'

const VideoCard = ({info}) => {


  //console.log(info);
  const{snippet, statistics} = info;
  const{channelTitle, title,thumbnails} = snippet;


  return (
    <div className='p-2 m-2 w-72 md:w-96  cursor-pointer'>

      <img className='rounded-lg' alt='thumbnail' src= {thumbnails.medium.url} />
      <ul className='flex'>
        <div className='py-2 mr-2'>
          <img alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            className='h-9'
          />
        </div>

        <div>
          <li className='font-medium py-2 w-[280px] flex'>
            {title.length>40 ? title.slice(0,60) + "..." : title}
          </li>
          <li className='text-sm'>{channelTitle}</li>
          <li className='text-sm'>{statistics.viewCount>1000000 ? Math.round(statistics.viewCount/1000000)+'M' :  Math.round(statistics.viewCount/1000)+'K'} views</li>
        </div>

      </ul>
    </div>
  )
}

export const AddVideoCard = ({info})=>{
  return (
    <div className=''>
      
      <VideoCard info={info} />
      <label className='absolute bg-black text-white font-bold rounded-lg p-2 m-2 -mt-[55px] ml-[200px] w-20 flex justify-center items-center -z-50 '>HOC</label>
    </div>
  )
}

export default VideoCard