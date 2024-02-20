import { useState } from "react"
import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"
import MatchDisplay from "./MatchDisplay"

const ChatContainer = ({ user }) => {

    return (
        <div className=" bg-white shadow shadow-gray-600 h-screen w-[25%] text-left z-1 diabled:border-gray-500"> 
            <ChatHeader user = {user}/>
    
            <div className=""> 
                <button class='option' className="p-3 m-3 mx-14 rounded-lg bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 hover:from-red-400 hover:via-pink-300 hover:to-purple-400 peer/match">Matches</button>  
                <button class='option' className="p-3 m-3 mx-14 rounded-lg bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 hover:from-red-400 hover:via-pink-300 hover:to-purple-400 peer/chat">Chats</button>  
            </div>

            <MatchDisplay matches={user.matches}/>
            <ChatDisplay />

        </div>
    )
    
  }
  
  export default ChatContainer