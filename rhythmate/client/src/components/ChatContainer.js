import { useState } from "react"
import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"
import MatchDisplay from "./MatchDisplay"

const ChatContainer = ({ user }) => {

    const [clickedUser, setClickedUser] = useState(null)

    return (
        <div className=" bg-white shadow shadow-gray-600 h-screen w-[25%] text-left z-1 diabled:border-gray-500"> 
            <ChatHeader user = {user}/>
    
            <div className=""> 
                <button className="p-3 m-3 mx-14 rounded-lg bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 hover:from-red-400 hover:via-pink-300 hover:to-purple-400 peer/match" onClick={()=> setClickedUser(null)}>Matches</button>  
                <button  className="p-3 m-3 mx-14 rounded-lg bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 hover:from-red-400 hover:via-pink-300 hover:to-purple-400 peer/chat" disabled={!clickedUser}>Chats</button>  
            </div>

            {!clickedUser && <MatchDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
            {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}

        </div>
    )
    
  }
  
  export default ChatContainer