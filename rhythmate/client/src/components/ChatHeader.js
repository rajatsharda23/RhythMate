import CIcon from '@coreui/icons-react'
import { cilAccountLogout } from '@coreui/icons';
import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const logout = () =>{
        removeCookie('UserId',cookies.userId)
        removeCookie('AuthToken',cookies.AuthToken)
        window.location.reload()
    }


    return (
        <div className="w-auto font-readex bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 h-24">
            <div className='profile'>
                <div className='pt-2 pl-2 h-14 w-14 truncate rounded-full'>
                    <img src={user.url} alt={'Photo of' + user.first_name} className='h-[100%] w-[100%] object-cover rounded-full shadow shadow-black'/>
                </div>
                <i className='pt-3 pr-3 pl-3  float-right text-white' onClick={logout}><CIcon className='w-6 h-5' icon={cilAccountLogout} size="sm" /></i>
                <h3 className='pt-3 pr-3 pl-3 font-readex  text-white'>{user.first_name}</h3>  
                      
            </div>
            
        </div>
    )
    
  }
  
  export default ChatHeader