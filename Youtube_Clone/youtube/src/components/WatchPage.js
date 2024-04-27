import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchparams] = useSearchParams();
    //console.log(searchparams.get("v"));



    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu())
    },[])


  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex-row md:flex'>
        <div>
          <iframe
              className='rounded-lg w-full h-[250px] md:w-[1000px] md:h-[500px]'

              src={"https://www.youtube.com/embed/"+searchparams.get("v")}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>

          </iframe>
        </div>

        <div>
          <LiveChat/>
        </div>

      </div>

      <CommentsContainer/>

    </div>
  )
}

export default WatchPage