const Chat = ({descendingOrderMessages}) => {

    return (
        
        <div className='p-20 h-60vh overflow-y-auto'>
            {descendingOrderMessages.map((message, _index) => (
                <div key={_index}>
                    <div className="chat-msg-header">
                        <div className="img-container">
                            <img src={message.img} alt={message.first_name + 'profile'}/>
                        </div>
                        <p>{message.name}</p>
                    </div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
    
  }
  
  export default Chat