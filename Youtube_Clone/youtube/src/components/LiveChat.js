import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
    const dispatch = useDispatch();

    const [inputComment, setInputComment] = useState('');

    const chatMessages = useSelector(store=> store.chat.messages)

    useEffect(()=>{
        const timer = setInterval(()=>{
            //console.log("hello there")
            
            dispatch(addMessage({
                name : generateRandomName(),
                message : makeRandomMessage(30)
            }))
            //handleLiveChat();
        },2000);
        return ()=>clearInterval(timer)
    },[])

    /*
    const handleLiveChat = async()=>{
        const data = await fetch(LIVE_CHAT_API);
        const json = await data.json();
        console.log(json);
        dispatch(addMessage(json));
    }
    */




  return (
    <>
        <div className='w-full h-[460px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {/** Don't use Index as Key */}
            {chatMessages?.map((c,index)=> 
                <ChatMessage key={index} name={c.name}  message={c.message}/>
            )}
        </div>
        <form
            className='w-full h-[40px] p-2 ml-2 border border-black rounded-lg' 
            onSubmit={(e)=> {
                e.preventDefault();
                dispatch(addMessage({
                    name : "My Name",
                    message : inputComment
                }));
                setInputComment('')

            }}
            
            >
            <input 
                value={inputComment} 
                onChange={(e)=> setInputComment(e.target.value)} 
                className='w-96 px-2' 
                type='text' 
                placeholder='Type your comment' 
            />
            <button
                className='px-2 mx-2 bg-green-100'>Enter</button>
        </form>
    </>
  )
}

export default LiveChat