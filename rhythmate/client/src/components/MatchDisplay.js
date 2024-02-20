import axios from "axios";
import { useState, useEffect } from "react";

const MatchDisplay = ({ matches, setClickedUser }) => {

    const [matchedProfiles, setMatchedProfiles] = useState(null)

    const matchedUserIds = matches.map(( {user_id} ) => user_id)
    const getMatches = async () => {
        // console.log("Fetching matches..."); // Add this line
        try{
            const resposne = await axios.get('http://localhost:8000/users', {
                params: {userIds : JSON.stringify(matchedUserIds)}
            })
            setMatchedProfiles(resposne.data)
        } catch (err){
            console.log(err)
        }
    }

    // console.log(matchedProfiles)

    useEffect(()=>{
        console.log('1')
        getMatches() 
    },[matches])

    return (
        <div className="m-2 p-2"> 
            {matchedProfiles?.map((match,index)=>(
                <div key={ {index} } className="match-card" onClick={() => setClickedUser(match)}>
                    <div className="img-container">
                        <img src={match?.url} alt={match?.first_name + 'profile'}/>
                    </div>
                    <h3>{match?.first_name}</h3>
                </div>
            ))}
        </div>
    )
    
  }
  
  export default MatchDisplay