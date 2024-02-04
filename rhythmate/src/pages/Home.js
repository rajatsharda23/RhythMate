import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'
import {useState} from 'react'

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    const authToken = false

    const handleClick = () => {
        setShowModal(true);
    }

    return (
        <div className=' w-screen h-full fixed bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300'>
        <Nav minimal={false} authToken={authToken}/>
            <div className= "m-0 p-2 text-center">
                <h1 className='text-6xl font-readex p-8'>Swipe Right®</h1>
                <button className='p-3 px-7 font-readex text-slate-50 bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-400 rounded-full focus:shadow-outline uppercase' onClick={handleClick}>
                    {authToken? 'Sign Out' : 'Create New Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal}/>
                )
                }

            </div>
        </div>
        
    )
  }
  
  export default Home
  