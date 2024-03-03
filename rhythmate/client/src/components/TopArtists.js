import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import ArtistDisplay from "./ArtistDisplay"

const TopArtists = (user_id) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [isLoading, setIsLoading] = useState(true)
    const [topArtist, setTopArtist] = useState({
        user_id: user_id.user_id.userId,
        artist_name: [],
        artist_images: [],
        artist_url: []
    })

    const userId = cookies.UserId
    const matchedUserId = cookies.MatchedUserId
 

    const getTracks = async () => {
    
        try{
            const response = await axios.get('http://localhost:8000/get-artists', {
                params: {
                    user_id: user_id.user_id.userId
                }
            })
            const data = await response.data
            console.log('DATA->', data)
            setTopArtist(prevState => ({
                ...prevState,
                artist_name: data.artist_name,
                artist_images: data.artist_images,
                artist_urls: data.artist_urls
            }))
            setIsLoading(false)
        } catch(err){
            setIsLoading(false)
            console.log('Error:  ', err)
        }
    }

    useEffect(() => {
        getTracks()
    }, [])
    
    // useEffect(() => {
    //     // console.log('FROM DB: ',topArtist);
    // }, [topArtist]);
    
    return (
        isLoading? <div>Loading...</div>:
        <div>
            {user_id.user_id.userId===userId && 
                <div>
                    <ArtistDisplay {...topArtist}/>
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
                    <ArtistDisplay {...topArtist}/>
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