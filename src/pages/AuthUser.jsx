import React from 'react'
import { useEffect , useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function AuthUser() {


    const [isUser, setUser] = useState(null);

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/session-data")
        .then((response) => {

            const authresponse =response.data

            console.log("Auth user Details", authresponse)
            setUser(authresponse)

        //   console.log("Fetched session dataaaaa:", response.data);
        //   setSessionData(response.data);
     
        })
        .catch((error) => {
          console.error("Error fetching session data", error);
        
        });
    }, []);
  


    if(!isUser){


        return  <Navigate to="login" />
    }


  return (
    <div></div>
  )
}

export default AuthUser