import ChatContainer from "../components/ChatContainer";
import TinderCard from 'react-tinder-card'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import backgroundImage from '../images/bg-1.png'

const Dashboard = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [user, setUser] = useState(null)
    const userId = cookies.UserId    

    const getUser = async () => {
      try{
          const response = await axios.get('http://localhost:8000/user', {
          params: {userId}
        })
        setUser(response.data)
      } catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      getUser()
    }, [])
    
    console.log('user ->', user)

    const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://i.imgur.com/iUVrzJQ.jpeg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://i.imgur.com/iUVrzJQ.jpeg'
  },
  {
    name: 'Monica Hall',
    url: 'https://i.imgur.com/iUVrzJQ.jpeg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://i.imgur.com/iUVrzJQ.jpeg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://i.imgur.com/iUVrzJQ.jpeg'
  }
]

    const characters = db
    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }

    
      return (
      <>
        {user && <div class='master' className= "fixed flex justify-between">
          <ChatContainer user={user}/>
          <div class='swiper' className = "w-screen flex  justify-center items-center">
            <div class='' className = "mr-[40%] mb-[60%] inset-x-0 top-0">

              {characters.map((character) =>
              <TinderCard className='swipe' 
                key={character.name} 
                onSwipe={(dir) => swiped(dir, character.name)} 
                onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            )}
            
            <div class='swiped-direction' className= "absolute text-center justify mt-[44%] ml-32 p-10"> 
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
            </div>

            </div>
          </div>
        </div>}
      </>  
      )
    }
    
    export default Dashboard