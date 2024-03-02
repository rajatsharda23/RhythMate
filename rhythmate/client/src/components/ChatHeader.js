import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons';
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();


const ChatHeader = ({ user }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
 
    useEffect(() => {
        // Check if the access_token query param exists in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get("access_token");
        const error = urlParams.get("error");
    
        if (accessToken) {
          // Save the access token to localStorage
          setCookie("AccessToken", accessToken);
    
          // Remove the access_token query param from the URL
          urlParams.delete("access_token");
          const newUrl = `${window.location.origin}${window.location.pathname}`;
          window.history.replaceState({}, document.title, newUrl);
          window.location.reload();
        } else if (error) {
          urlParams.delete("error");
          alert("Error deteced, Spotify rejected");
          const newUrl = `${window.location.origin}${window.location.pathname}`;
          window.history.replaceState({}, document.title, newUrl);
          window.location.reload();
        }
      }, []);

    const logout = () =>{
        removeCookie('UserId',cookies.userId)
        removeCookie('AuthToken',cookies.AuthToken)
        removeCookie('AccessToken',cookies.AccessToken)
        removeCookie("MatchedUserId", cookies.MatchedUserId)
        window.location.reload()
    }

    return (
        <div className="w-auto font-readex bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 h-24">
            <div className='profile'>
                <div className='flex justify-between items-center'>

                    <div className='pt-2 pl-2 h-14 w-14 truncate rounded-full'>
                        <img src={user.url} alt={'Photo of ' + user.first_name} className='h-full w-full object-cover rounded-full shadow shadow-black'/>
                    </div>

                    <div className='relative mt-3 mr-3'>
                        {/* <button className='font-readex p-2 bg-green-500 text-green-100 rounded-full disabled:text-gray-500' onClick={spotifyCall} disabled={cookies.Code} >{cookies.Code?'Logged In':'Spotify'}</button> */}
                        {!cookies.AccessToken && <a className="font-readex p-2 bg-green-500 text-green-100 rounded-full " href='http://localhost:8000/authenticate' >Spotify</a>}
                    </div>
                </div>
                
                <i className='pt-3 pr-3 pl-3 mr-2 float-right text-white' onClick={logout}><CIcon className='w-6 h-5' icon={cilAccountLogout} size="sm" /></i>
                <h3 className='pt-3 pr-3 pl-3 font-readex  text-white'>{user.first_name}</h3>  
                      
            </div>
            
        </div>
    )
    
  }
  
  export default ChatHeader