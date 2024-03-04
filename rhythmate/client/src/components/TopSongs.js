import { useState,useEffect } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import SongDisplay from "./SongDisplay"

const TopSongs = (user_id) => {

    const BASE_API_ADD = process.env.REACT_APP_BASE_CALL

    // console.log('check-', user_id.userId)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [isLoading, setIsLoading] = useState(true)
    const [topSong, setTopSong] = useState({
        user_id: user_id.userId,
        tracks_name: [],
        tracks_artists: [],
        tracks_urls: [],
        tracks_preview_url: [],
        tracks_img: []
    })
    
    const userId = cookies.UserId
    const matchedUserId = cookies.MatchedUserId

    const getTracks = async () => {
        // console.log('mai hu GIAN')
        setIsLoading(true)
        try{
            const response = await axios.get(`${BASE_API_ADD}/get-songs`, {
                params: {
                    user_id: user_id.userId
                }
            })
            const data = await response.data
            // console.log('DATA->XXX', data)
            setTopSong(prevState => ({ 
                ...prevState,
                tracks_name: data.tracks_name,
                tracks_artists: data.track_artists,
                tracks_urls: data.track_urls,
                tracks_preview_url: data.track_preview_url,
                tracks_img: data.track_img
            }))
            setIsLoading(false) 
        } catch(err){
            setIsLoading(false)
            console.log('Error: ',  err)
        }
    }

    useEffect(() => {
            const fetchData = async () => {
                await getTracks()
            }
            fetchData()
            // console.log('TopSongs: ', topSong)
    }, [])

    useEffect(()=>{
        // console.log('url-> dede bhai' , topSong)
    },[])
    

    return( 
        isLoading? <div>Loading...</div>:
        <div> 
            
            <div>
            {user_id.userId===userId &&
                <div>
        
                    <SongDisplay topSong={topSong} />
                    {/* {topTracks?.slice(0, 5).map((artist, index) => (
                        <div key={index}>
                            {artist.name}
                        </div>
                    ))} */}
                </div>
            }

            
            {user_id.userId===matchedUserId && 
                <div>
                    <SongDisplay topSong={topSong} />
                    {/* {topTracks?.slice(0, 5).map((artist, index) => (
                        <div key={index}>
                            {artist.name}
                        </div>
                    ))} */}
                </div>
            }
        </div>
        </div>
    )
}

export default TopSongs 