import { useEffect } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"

const TopSongs = (user_id) => {
    
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    
    const userId = cookies.UserId
    const matchedUserId = cookies.MatchedUserId
    

    return(
        <div> 
            
            <div>
            {user_id.userId===userId && 
                <div>
                    
                    Song 1
                    {/* {topTracks?.slice(0, 5).map((artist, index) => (
                        <div key={index}>
                            {artist.name}
                        </div>
                    ))} */}
                </div>
            }

            
            {user_id.userId===matchedUserId && 
                <div>
                    Song 2
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