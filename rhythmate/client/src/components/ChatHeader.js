import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons';
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();


const ChatHeader = ({ user }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const spotifyCall = async () => {
        window.location='http://localhost:8000/authenticate'
    }
 
    useEffect(() => {
        const hash = window.location.search
        let code = cookies.Code
        let error = ""

        if(!error && hash){
            error = hash.substring(1).split('?').find(elem => elem.startsWith("error"))?.split('=')[1]
            if(error) return
        }

        if(!code && hash){
            code = hash.substring(1).split('?').find(elem => elem.startsWith("code"))?.split('=')[1]
        }
        if(code) setCookie("Code",code)

    }, []);

    const logout = () =>{
        removeCookie('UserId',cookies.userId)
        removeCookie('AuthToken',cookies.AuthToken)
        removeCookie('Code',cookies.Code)
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
                        <button className='font-readex p-2 bg-green-500 text-green-100 rounded-full disabled:text-gray-500' onClick={spotifyCall} disabled={cookies.Code} >{cookies.Code?'Logged In':'Spotify'}</button>
                    </div>
                </div>
                
                <i className='pt-3 pr-3 pl-3 mr-2 float-right text-white' onClick={logout}><CIcon className='w-6 h-5' icon={cilAccountLogout} size="sm" /></i>
                <h3 className='pt-3 pr-3 pl-3 font-readex  text-white'>{user.first_name}</h3>  
                      
            </div>
            
        </div>
    )
    
  }
  
  export default ChatHeader