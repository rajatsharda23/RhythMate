import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'
import { CCloseButton } from '@coreui/react'
import {useState} from 'react'

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignup, setisSignup] = useState(true)

    const authToken = false

    const handleClick = () => {
        setShowModal(true);
        setisSignup(true)
    }

    return (
        <div className=' w-screen h-full fixed bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300'>
        <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal} setisSignup={setisSignup} />
            <div className= "m-0 p-2 text-center">
                <h1 className='text-6xl font-readex p-8'>Swipe Right®</h1>
                <CCloseButton className='bg-black' />
                <button className='p-3 px-7 font-readex text-slate-50 bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-400 rounded-full focus:shadow-outline uppercase' onClick={handleClick}>
                    {authToken? 'Sign Out' : 'Create New Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignup={isSignup}/>
                )
                }

            </div>
        </div>
        
    )
  }
  
  export default Home
  