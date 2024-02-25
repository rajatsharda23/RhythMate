import { useState } from "react"
import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"
import MatchDisplay from "./MatchDisplay"

const ChatContainer = ({ user }) => {

    const [clickedUser, setClickedUser] = useState(null)

    return (
        <div className="relative w-[40%] bg-white">
            <div className="overflow-y-auto bg-white shadow shadow-gray-600 h-screen text-left z-1 diabled:border-gray-500"> 
                <div className="absolute w-full">
                    <ChatHeader user = {user}/>
                    <div className="flex flex-row justify-center items-center right-0 left-0 text-slate-800 bg-white"> 
                        <button className=" mt-3 m-2 p-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 hover:from-red-400 hover:via-pink-300 hover:to-purple-400 peer/match" onClick={()=> setClickedUser(null)}>Matches</button>  
                        <button  className=" mt-3 m-2 p-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 hover:from-red-400 hover:via-pink-300 hover:to-purple-400 peer/chat" disabled={!clickedUser}>Chats</button>  
                    </div>
                </div>

                {!clickedUser && <MatchDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
                {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}

            </div>
        </div>    
    )
    
  }
  
  export default ChatContainer