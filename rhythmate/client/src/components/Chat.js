const Chat = ({descendingOrderMessages}) => {

    return (
        
        <div className=' mt-40 p-5 h-60vh overflow-y-auto border-zinc-800'>
            <div className="p-1 border top-0 h-screen shadow">
                {descendingOrderMessages.map((message, _index) => (
                    <div key={_index} className="p-3 flex">
                        <div className="chat-msg-header w-auto items-center flex flex-col ">
                            <div className="pt-2 pl-2 h-10 w-10 truncate rounded-full">
                                <img src={message.img} alt={message.first_name + 'profile'} className="h-[100%] w-[100%] object-cover rounded-full shadow shadow-black"/>
                            </div>
                            {/* <p className="bg--200">{message.name}</p> */}
                        </div>
                        <p className="ml-2 border pt-2 p-2 rounded-lg ">{message.message}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
    
  }
  
  export default Chat