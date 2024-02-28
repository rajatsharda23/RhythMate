import { useEffect } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"

const Wrapped = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const callback = async () => {
        
    }

    useEffect(() => {
        callback()
    }, [])

    return(
        <div className="flex flex-col  items-center h-full"> 
            <h1 className=" mt-3 top-0 p-2 font-readex text-xl">Spotify Stats</h1>
            <div className="m-5 p-5  h-[80%] w-[65%] bg-green-100 shadow shadow-green-500 border-green-200 border rounded-lg">
                <button className="p-2">Artists </button>
                <button className="p-2">Songs</button>
                <button className="p-2">Genre</button>
            </div>
        </div>
    )
}

export default Wrapped 