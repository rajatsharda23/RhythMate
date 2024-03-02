import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import TopArtists from "./TopArtists"
import TopSongs from "./TopSongs"

const Wrapped = (user_id) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [buttonChoice,setButtonChoice] = useState('Artists')
    const [topArtistsList, setTopArtistsList] = useState([])
    const accessToken = cookies.AccessToken

    const topArtists = async () => {
        try {
            const response = await axios.get('http://localhost:8000/tracks', {
                params: { accessToken: cookies.AccessToken }
            })
            setTopArtistsList(response.data.slice(0, 5) )
            
        } catch (err) {
            console.log(err);
        }
    }

    const tracksToDB = async () => {
        // console.log('Hello: ', topArtistsList)
        try{
            const response = await axios.post('http://localhost:8000/top-tracks', {
                user_id: user_id.userId, 
                TopArtistList: topArtistsList
            })
            // console.log(response)
            console.log('SuccessFully added tracks!')
        } catch(err){
            console.log('Error: ', err)
        }
    }

    // console.log(topArtistsList)

    useEffect(()=>{
        console.log("user id: ", user_id.userId)
        if(user_id.userId===cookies.UserId){
            topArtists();
            tracksToDB()
        }
    },[])
 
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
                        <TopArtists user_id={user_id}/>
                    </div>}

                    {buttonChoice==='Songs' && <div>
                        <TopSongs user_id={cookies.MatchedUserId}/>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Wrapped 