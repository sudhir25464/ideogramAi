import React from 'react'
import { useEffect , useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


axios.defaults.withCredentials = true;


function AuthUser() {


    const [isUser, setUser] = useState(null);

    const navigate = useNavigate()

    const path = window.location.pathname;
    console.log("path is :",path)

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/session-data")
        .then((response) => {

            const authresponse =response.data

            console.log("Auth user Details", authresponse)
            setUser(authresponse)

        //   console.log("Fetched session dataaaaa:", response.data);
        //   setSessionData(response.data);

        if(path === "/login"){
          navigate("/")

        }
        
        
     
        })
        .catch((error) => {
          console.error("Error fetching session data", error);
          navigate("/login")
        
        });
    }, []);
  





  return (
    <div></div>
  )
}

export default AuthUser