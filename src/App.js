import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./component/Login";
import GeneratedImageMain from "./component/GeneratedImageMain";
import PopSmallInput from "./component/PopSmallInput";
import axios from "axios";

function App() {



  const [isAuthenticated, setIsAuthenticated] = useState(false);

 const [sesionData, setSessionData] =useState(null)

 useEffect(()=>{

  axios.get("http://127.0.0.1:5000/session-data", {
    withCredentials:true,
  })
  .then((response)=>{
    setSessionData(response.data);

    if(sesionData){
      isAuthenticated = true;
    }
  })
  .catch((error)=>{

    console.error("erroe fetching data", error)
  })

 },[])



  
//   const userSession = async () => {
//     try {
//         const response = await axios.get("http://127.0.0.1:5000/session-data" , {widthCredentials: true});



//         const sessiondata = response

//         console.log("Session Data:",sessiondata)

//         setsesion(sessiondata)
//         if(sessiondata){
//           setIsAuthenticated(true)
//         }




//     } catch (error) {
    
//         console.log("Session data is null or error occurred");
//     }
// }


// useEffect(()=>{


//   userSession()
// },[])

  // useEffect(() => {

  //   const user = localStorage.getItem("user");


  //   console.log("user app data", user);
  //   if (user) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* If user is not authenticated, redirect to login */}
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/genimg" element={isAuthenticated ? <GeneratedImageMain /> : <Navigate to="/login" />} />
        <Route path="/sminput" element={isAuthenticated ? <PopSmallInput /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
