import React, { useEffect, useState } from 'react'
import { hamImg } from '../utils/constants';
import { youTubeLogo } from '../utils/constants';
import { userIcon } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlics';


const Head = () => {
  const[searchQuery,setSearchQuery] = useState("");
  const[suggestions,setsuggestions] = useState([]);
  const[showSuggestions,setShowSuggesions] = useState(false);
  const searchCache = useSelector((store)=>store.search) 
  
  useEffect(()=>{
    //API call
  
    //Make an api call for each key press
    //but if the the diff between two API calls is <200 ms
    //decline the API call
    const timer =  setTimeout(() => {
      if(searchCache[searchQuery]){
        setShowSuggesions(searchCache[searchQuery])  
      }
      else{
        geSearchSuggestions();
      }  
    }, 200);
    
    return()=>{
      clearTimeout(timer);
    };

  },[searchQuery])
  /** 
  * key i -
  *  - render the component
  *  - useEffect() 
  *  -  start timer =>make api call after 200ms
  * key ip -
  *  - destroy previous component(useEffect return() method)
  *  - render the component
  *  - useEffect() 
  *  -  start timer =>make api call after 200ms
  *  - setimeout(200) - make an API call
  */

  const geSearchSuggestions = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setsuggestions(json[1])
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }
  const dispatch = useDispatch()
  
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          src={hamImg}
          className="h-8 cursor-pointer"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img src={youTubeLogo} className="h-9 ml-2" alt="youtube-logo" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 p-2 px-5 border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggesions(true)}
            onBlur={()=>setShowSuggesions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full px-3">
            search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[33rem] py-2 px-2 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className=" py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img src={userIcon} className="h-8" alt="user-icon" />
      </div>
    </div>
  );
}

export default Head;