import ChatContainer from "../components/ChatContainer";
import TinderCard from 'react-tinder-card'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import backgroundImage from '../images/bg-1.png'

const Dashboard = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [user, setUser] = useState(null)
    const [genderedUser, setGenderedUser] = useState(null)
    const [lastDirection, setLastDirection] = useState()
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
    
    const getGenderedUser = async () => {
      const gender = user?.gender_interest
      try{
        const response = await axios.get('http://localhost:8000/gendered-users', {
          params: { gender : user?.gender_interest }
        })
        setGenderedUser(response.data)
      } catch(err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getUser()

  }, [])

  useEffect(() => {
      if (user) {
          getGenderedUser()
      }
  }, [user])

    
    // console.log('gendered-user ->', genderedUser)

    const updateMatches = async (matchedUserId) => {
      try{
        await axios.put('http://localhost:8000/addmatch', {
          userId, 
          matchedUserId
        })
        getUser()
        // console.log('hello')
      } catch(err) {
        console.log(err)
      }
    }

    // console.log('user ->', user)
      
    const swiped = (direction, swipedUserId) => {
      
      if(direction==='right'){
        updateMatches(swipedUserId)
      }

      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }

    const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId) 
    const filteredGenderedUsers = genderedUser?.filter(
      genderedUser => !matchedUserIds.includes(genderedUser.user_id)
    )

    
      return (
      <>
        {user && genderedUser &&  <div className= "relative flex justify-between ">
          <ChatContainer user={user}/>
          <div className = "w-screen flex  justify-center items-center"> {/*swiper*/} 
            <div className = "mr-[40%] mb-[60%] inset-x-0 top-0">

              {filteredGenderedUsers.map((genderedUser) =>
              <TinderCard className='swipe' 
                key={genderedUser.user_id} 
                onSwipe={(dir) => swiped(dir, genderedUser.user_id)} 
                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                <div style={{ backgroundImage: 'url(' + genderedUser.url + ')' }} className='card'>
                  <h3>{genderedUser.first_name}</h3>
                </div>
              </TinderCard>  
            )}
  
            
            <div className= "absolute text-center justify mt-[44%] ml-32 p-10"> {/*swiped-directionr*/} 
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
            </div>

            </div>
          </div>
        </div>}
      </>  
      )
    }
    
    export default Dashboard