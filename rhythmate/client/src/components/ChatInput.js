import { useState } from "react";

const ChatInput = () => {

    const[textArea, setTextArea] = useState(null)

    return (
        <div class='chat-input' className='p-5 bg-slate-200 flex flex-col'> 
            <textarea className='border border-gray-600 rounded-sm' value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="mt-5 m-3 rounded-full bg-slate-200 border border-zinc-400 ml-14 mr-16 ">Submit</button>
        </div>
    )
    
  }
  
  export default ChatInput