import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import TopArtists from "./TopArtists"
import TopSongs from "./TopSongs"

const Wrapped = (user_id) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [buttonChoice,setButtonChoice] = useState('Artists')
    const [topArtistsList, setTopArtistsList] = useState([])
    const [topSongsList, setTopSongsList] = useState([])
    const accessToken = cookies.AccessToken

    const topArtists = async () => {
        try {
            const response = await axios.get('http://localhost:8000/artists', {
                params: { accessToken: cookies.AccessToken }
            })
            setTopArtistsList(response.data.slice(0, 5) )
            
        } catch (err) {
            console.log(err);
        }
    }

    const artistsToDB = async () => {
        // console.log('Hello: ', topArtistsList)
        try{
            const response = await axios.post('http://localhost:8000/top-artists', {
                user_id: user_id.userId, 
                TopArtistList: topArtistsList
            })
            // console.log(response)
            console.log('SuccessFully added tracks!')
        } catch(err){
            console.log('Error: ', err)
        }
    }

    useEffect(() => {
        if (user_id.userId === cookies.UserId) {
            const fetchData = async () => {
                await topArtists()
                artistsToDB()
            }
            fetchData()
        }
    }, [])
 
    useEffect(() => {
        console.log(buttonChoice)
    }, [buttonChoice])


    const topSongs = async () => {
        try {
            const response = await axios.get('http://localhost:8000/songs', {
                params: { accessToken: cookies.AccessToken }
            })
            // console.log(response.data)
            setTopSongsList(response.data.slice(0, 5))
        } catch (err) {
            console.log(err);
        }
    }

    const songsToDB = async () => {
    
        try{
            const response = await axios.post('http://localhost:8000/top-songs', {
                user_id: user_id.userId, 
                TopSongsList: topSongsList
            })
            console.log(response)
            console.log('SuccessFully added tracks !')
        } catch(err){
            console.log('Error: ', err)
        }
    }

    useEffect(() => {
        if (user_id.userId === cookies.UserId) {
            const fetchData = async () => {
                await topSongs()
                songsToDB()
            }
            fetchData()
        }
    }, [])

    // useEffect(()=>{
    //     console.log('hi: ', topSongsList)
    // },[])

    return(
        <div className="flex flex-col items-center h-full"> 
            <h1 className=" mt-3 top-0 p-2 font-readex text-xl">Spotify Stats</h1>
            <div className="m-5 p-5  h-[80%] w-[65%] bg-green-200 shadow shadow-green-500 border-green-200 border rounded-lg">
                <div className="flex justify-center">
                    <button className="p-2" onClick={()=>setButtonChoice('Artists')}>Artists</button>
                    <button className="p-2" onClick={()=>setButtonChoice('Songs')}>Songs</button>
                </div>
                <div className="flex flex-col h-[90%] bg-green-100 rounded-lg border border-green-300">
                    
                    {buttonChoice==='Artists' && <div>
                        <TopArtists user_id={user_id}/>
                    </div>}

                    {buttonChoice==='Songs' && <div>
                        <TopSongs {...user_id}/>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Wrapped 