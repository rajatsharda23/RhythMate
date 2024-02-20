import axios from "axios";
import { useState, useEffect } from "react";

const MatchDisplay = ({ matches }) => {

    const [matchedProfiles, setMatchedProfiles] = useState(null)

    const matchedUserIds = matches.map(( {user_id} ) => user_id)
    const getMatches = async () => {
        try{
            const resposne = await axios.get('http://localhost:8000/users', {
                params: {userIds : JSON.stringify(matchedUserIds)}
            })
            setMatchedProfiles(resposne.data)
        } catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getMatches()
    },[])

    return (
        <div className="m-2 p-2"> </div>
    )
    
  }
  
  export default MatchDisplay