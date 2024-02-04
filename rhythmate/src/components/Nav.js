import whitelogo from '../images/RhythMate-logos_white.png'
import colourlogo from '../images/RhythMate-logos.jpeg'

const Nav = ({minimal, authToken}) => {
    console.log('Nav component rendered');

    return (
      <nav className='w-screen h-16 flex'>
        <div className='m-15 h-16 mr-auto'>
            <img className='h-16' src={minimal? colourlogo : whitelogo}/>     
        </div>
        {!authToken && !minimal && <button className='text-pink-400 bg-slate-50 p-2 m-2 font-readex rounded'>Login</button>}
      </nav>
    )
  }
  
  export default Nav