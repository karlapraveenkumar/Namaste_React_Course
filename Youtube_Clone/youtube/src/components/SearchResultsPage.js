import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useSearchQuery from './useSearchQuery';
import SearchPageShimmer from './SearchPageShimmer';

const SearchResultsPage = () => {


    const [searchParams] = useSearchParams();

    useSearchQuery({searchParams});

    const videos = useSelector(store=> store?.search?.searchResultVideos);
    

    const differenceInTime = (v)=>{
      const prevTime = new Date(v?.snippet?.publishedAt);
      const currentTime = new Date();
      const diff = (Math.abs(currentTime - prevTime)/(60*60*24*1000)).toFixed(0);
      if(diff > 30 && diff < 366) {return (diff/30).toFixed(0) + " months ago"}
      else if (diff > 366) {return (diff/360).toFixed(0) + " years ago"}
      else return diff + " days ago";
    }

  
  return videos == null ? <SearchPageShimmer/> :  (
    <div className='w-72 md:w-[520%] md:ml-5'>
      {videos.map(v => (
        <Link to={"/watch?v="+v.id.videoId} key={v.id.videoId}>
          <div className='flex flex-wrap' >
            <div className='md:flex'>
              <div className='p-2 m-2 md:w-[500px] cursor-pointer'>
                <img className='w-72 md:w-[500px] h-[250px] rounded-lg' alt='thumbnailimg' src={v?.snippet?.thumbnails?.high?.url} />
              </div>

              <div className='p-2 m-2 flex flex-col w-72 md:w-[700px]'>
                <h3 className='font-semibold p-1 m-1 cursor-pointer'>{v?.snippet?.title}</h3>
                <span className='text-sm p-1 m-1 cursor-pointer'>{differenceInTime(v)}</span>
                <div className='text-sm p-1 m-1 flex items-center cursor-pointer'>
                  <img alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                    className='h-8 mr-3'
                  />
                  {v?.snippet?.channelTitle}
                </div>
                <p className=' text-sm p-1 m-1 cursor-pointer'>{v?.snippet?.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    
    </div>

  )
}

export default SearchResultsPage