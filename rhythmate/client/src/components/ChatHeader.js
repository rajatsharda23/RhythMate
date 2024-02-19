import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons';

const ChatHeader = () => {

    return (
        <div className=" justify-center items-center font-readex bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 h-24">
            <div class='profile'>
                <div class='profile-img' className='pt-2 pl-2 h-14 w-14 truncate rounded-full'>
                    <img src="https://i.imgur.com/iUVrzJQ.jpeg" className='h-[100%] w-[100%] object-cover rounded-full shadow shadow-black'/>
                </div>
                <i class='log-out-icon' className='p-3 float-right text-white'><CIcon className='w-6 h-5' icon={cilAccountLogout} size="sm" /></i>
                <h3 className='p-3 font-readex  text-white'>UserName</h3>  
                      
            </div>
            
        </div>
    )
    
  }
  
  export default ChatHeader