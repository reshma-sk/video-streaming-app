import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {
  const[liveMessage,setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages)
    console.log(chatMessages);
    
    useEffect(()=>{
        const i = setInterval(() => {
            //API Polling
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(10),
            }));
        }, 1500);
        return ()=>clearInterval(i);
    },[])
  return (
    <>
      <div className=" ml-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form 
      className='w-full ml-2 p-2 border border-black' 
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
          name:"Reshma Shaik",
          message:liveMessage,
        }))
        setLiveMessage("");
      }
        
      }>
        <input type="text" className='w-70 px-1' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className='px-2 mx-1 bg-green-100'>Send</button>
      </form>
    </>
  );
}

export default LiveChat;