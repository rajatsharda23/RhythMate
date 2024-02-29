import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import TopArtists from "./TopArtists"
import TopSongs from "./TopSongs"

const Wrapped = (userId) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [buttonChoice,setButtonChoice] = useState('Artists')
    const accessToken = cookies.accessToken
 
    useEffect(() => {
        console.log(buttonChoice);
    }, [buttonChoice]);
    return(
        <div className="flex flex-col items-center h-full"> 
            <h1 className=" mt-3 top-0 p-2 font-readex text-xl">Spotify Stats</h1>
            <div className="m-5 p-5  h-[80%] w-[65%] bg-green-100 shadow shadow-green-500 border-green-200 border rounded-lg">
                <div className="flex justify-center">
                    <button className="p-2" onClick={()=>setButtonChoice('Artists')}>Artists</button>
                    <button className="p-2" onClick={()=>setButtonChoice('Songs')}>Songs</button>
                </div>
                <div className="flex flex-col h-[90%] bg-red-200">
                    
                    {buttonChoice==='Artists' && <div>
                        <TopArtists userId={userId}/>
                    </div>}

                    {buttonChoice==='Songs' && <div>
                        <TopSongs userId={cookies.MatchedUserId}/>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Wrapped 