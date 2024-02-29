import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"

const TopArtists = (user_Id) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [topArtistsList, setTopArtistsList] = useState([])
    const userId = cookies.UserId
    //top-tracks

    const topArtists = async () => {
        try {
            const response = await axios.get('http://localhost:8000/tracks', {
                params: { accessToken: cookies.AccessToken }
            })
            setTopArtistsList(response.data.slice(0, 5))
            // console.log('Response:', response.data.slice(0, 5));
        } catch (err) {
            console.log(err);
        }
    }

    const tracksToDB = async () => {
        try{
            const response = await axios.post('http://localhost:8000/top-tracks', {
                userId: userId, 
                TopArtistList: topArtistsList
            })
            console.log('SuccessFully added tracks!')
        } catch(err){
            console.log('Error: ', err)
        }
    }



    useEffect(()=>{
        topArtists()
        tracksToDB()
    },[])

    // console.log(user_Id)
    return (
        <div>
            {user_Id.userId.userId===userId &&
                <div>
                    hi
                    {topArtistsList?.slice(0, 5).map((artist, index) => (
                        <div key={index}>
                            {artist.name}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default TopArtists