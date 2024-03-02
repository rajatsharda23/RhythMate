import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"

const TopArtists = (user_id) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [topArtist, setTopArtist] = useState({
        user_id: user_id.user_id.userId,
        artist_name: [],
        artist_images: [],
        artist_url: []
    })

    const userId = cookies.UserId
    const matchedUserId = cookies.MatchedUserId
 

    const getTracks = async () => {
        // console.log('<>',user_id.user_id.userId)
        try{
            const response = await axios.get('http://localhost:8000/get-tracks', {
                params: {
                    user_id: user_id.user_id.userId
                }
            })
            const data = await response.data
            // console.log('DATA->', data)
            setTopArtist(prevState => ({
                ...prevState,
                artist_name: data.artist_name,
                artist_images: data.artist_images,
                artist_urls: data.artist_urls
            }))
            
            
        } catch(err){
            console.log('Error: ', err)
        }
    }

    useEffect(() => {
        getTracks();
    }, []); // This useEffect runs once when the component mounts to fetch tracks
    
    // useEffect(() => {
    //     console.log('FROM DB: ',topArtist);
    // }, [topArtist]);
    
    return (
        <div>
            {user_id.user_id.userId===userId && 
                <div>
                    hi
                    {/* {topTracks?.slice(0, 5).map((artist, index) => (
                        <div key={index}>
                            {artist.name}
                        </div>
                    ))} */}
                </div>
            }

            {user_id.user_id.userId===matchedUserId && 
                <div>
                    hello
                    {/* {topTracks?.slice(0, 5).map((artist, index) => (
                        <div key={index}>
                            {artist.name}
                        </div>
                    ))} */}
                </div>
            }
        </div>
    )
}

export default TopArtists