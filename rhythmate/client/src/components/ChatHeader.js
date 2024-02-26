import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons';
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
// import dotenv from 'dotenv';

// dotenv.config();


const ChatHeader = ({ user }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [token, setToken] = useState(null)

    const client_id = '5a39f461d53f4c47bd0408d875f5d668'
    const redirect_uri = 'http://localhost:3000/dashboard'
    const auth_endPoint = 'https://accounts.spotify.com/authorize'
    const response_type = "token"

    const spotifyCall = () =>{ 
        
        window.location=`${auth_endPoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`
    }

    useEffect(()=>{
        const hash = window.location.hash
        let token = cookies.token

        if(!token && hash){
            token = hash.substring(1).split('&').find(elem => elem.startsWith("access_token")).split('=')[1]
            setCookie("Token",token)
        }

        console.log(token)

    },[])

    const logout = () =>{
        removeCookie('UserId',cookies.userId)
        removeCookie('AuthToken',cookies.AuthToken)
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
                        <button className='font-readex p-2 bg-green-500 text-green-100 rounded-full' onClick={spotifyCall}>Spotify</button>
                    </div>
                </div>
                
                <i className='pt-3 pr-3 pl-3 mr-2 float-right text-white' onClick={logout}><CIcon className='w-6 h-5' icon={cilAccountLogout} size="sm" /></i>
                <h3 className='pt-3 pr-3 pl-3 font-readex  text-white'>{user.first_name}</h3>  
                      
            </div>
            
        </div>
    )
    
  }
  
  export default ChatHeader