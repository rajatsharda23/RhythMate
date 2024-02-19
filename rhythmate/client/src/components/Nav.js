import whitelogo from '../images/RhythMate-logos_white.png'
import colourlogo from '../images/RhythMate-logos_transparent.png'

const Nav = ({minimal, setShowModal, showModal, setisSignup}) => {
    console.log('Nav component rendered');  

    const handleClick = () =>{
        setShowModal(true)
        setisSignup(false)
    }

    const authToken = false
    return (
      <nav className='w-screen h-16 flex'>
        <div className='m-15 h-16 mr-auto'>
            <img className='h-16' src={minimal? colourlogo : whitelogo}/>     
        </div>
        {!authToken && !minimal && 
        <button
        className={`text-pink-400 bg-slate-50 p-2 m-2 font-readex rounded ${showModal ? 'bg-gray-300 text-pink-600 cursor-not-allowed' : ''}`}
        onClick={handleClick} disabled={showModal}>
        Login
      </button>
}
      </nav>
    )
  }
  
  export default Nav