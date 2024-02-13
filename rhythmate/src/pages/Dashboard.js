import ChatContainer from "../components/ChatContainer";
import TinderCard from 'react-tinder-card'
import { useState } from "react";
import backgroundImage from '../images/bg-1.png'

const Dashboard = () => {
    console.log('Dashboard component rendered');

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
        <div className= "flex justify-between">
          <ChatContainer />
          <div class='swiper' className = "w-[70%] flex flex-col justify-center items-center">
            <div class='card' className = "">

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

            <div className="swiped-direction text-center"> 
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
            </div>

            </div>
          </div>
        </div>
      )
    }
    
    export default Dashboard