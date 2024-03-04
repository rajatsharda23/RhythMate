import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import TopArtists from "./TopArtists"
import TopSongs from "./TopSongs"

const Wrapped = (user_id) => {
    // console.log('mewTOOOTO',user_id)

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [buttonChoice,setButtonChoice] = useState('Artists')
    const [topArtistsList, setTopArtistsList] = useState([])
    const [topSongsList, setTopSongsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const accessToken = cookies.AccessToken

    const topArtists = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('http://localhost:8000/artists', {
                params: { accessToken: cookies.AccessToken }
            })
            console.log('getting info->', response.data.slice(0, 5))
            setTopArtistsList( await response.data.slice(0, 5))
            await new Promise(resolve => setTimeout(resolve, 3000));
            // console.log('checking',topArtistsList)
            setIsLoading(false)
            
        } catch (err) {
            console.log(err);
            setIsLoading(false)
        }
    }

    const artistsToDB = async () => {
        console.log('Hello',topArtistsList)
        setIsLoading(true)
        try{
            const response = await axios.post('http://localhost:8000/top-artists', {
                user_id: user_id.userId, 
                TopArtistList: topArtistsList
            })
            // console.log(response)
            console.log('SuccessFully added artists!')
            await new Promise(resolve => setTimeout(resolve, 3000));
            setIsLoading(false)
        } catch(err){
            console.log('Error: ', err)
            setIsLoading(false)
        }
    }

    const topSongs = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('http://localhost:8000/songs', {
                params: { accessToken: cookies.AccessToken }
            })
            // console.log(response.data)
            setTopSongsList(response.data.slice(0, 5))
            await new Promise(resolve => setTimeout(resolve, 3000));
            setIsLoading(false)
        } catch (err) {
            console.log(err);
            setIsLoading(false)
        }
    }

    const songsToDB = async () => {
        // console.log(setTimeout('Timerrrr',5000))
        setIsLoading(true)
        try{
            const response = await axios.post('http://localhost:8000/top-songs', {
                user_id: user_id.userId, 
                TopSongsList: topSongsList
            })

            console.log('SuccessFully added songss !')
            await new Promise(resolve => setTimeout(resolve, 3000));
            setIsLoading(false)
        } catch(err){
            console.log('Error: ', err)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
            const fetchData = async () => {
                await topArtists()
            }
            fetchData()
    },[])

    useEffect(()=>{
        artistsToDB()
        
    },[topArtistsList])

    useEffect(()=>{
        songsToDB()
        
    },[topSongsList])

    useEffect(()=>{
        
            const fetchData = async () => {
                await topSongs()
            }
            fetchData()
        
    },[])

    const handleClickArtist =  () =>{
        setButtonChoice('Artists')
        // if (user_id.userId === cookies.UserId) {
        //     const fetchData = async () => {
        //          topArtists()
        //         artistsToDB()
        //     }
        //     fetchData()
        // }
    }

    const handleClickSong =  () =>{
        setButtonChoice('Songs')
        // if (user_id.userId === cookies.UserId) {
        //     const fetchData = async () => {
        //          topSongs()
        //         songsToDB()
        //     }
        //     fetchData()
        // }
    }

    return( isLoading?<div>LOADING...</div>:
        <div className="flex flex-col items-center h-full"> 
            <h1 className=" mt-3 top-0 p-2 font-readex text-xl">Spotify Stats</h1>
            <div className="m-5 p-5  h-full w-[80%] bg-green-200 shadow shadow-green-500 border-green-200 border rounded-lg">
                <div className="flex justify-center pb-[5%]">
                    <button className="p-2 m-2 bg-green-400 border border-green-200 shadow shadow-green-400 rounded-lg" onClick={handleClickArtist}>Artists</button>
                    <button className="p-2 m-2 bg-green-400 border border-green-200 shadow shadow-green-400 rounded-lg" onClick={handleClickSong}>Songs</button>
                </div>
                <div className="flex flex-col items-center justify-center h-[90%] bg-green-100 rounded-lg border border-green-300">
                    
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