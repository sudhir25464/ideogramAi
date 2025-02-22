import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./component/Login";
import GeneratedImageMain from "./component/GeneratedImageMain";
import PopSmallInput from "./component/PopSmallInput";
import axios from "axios";
import AuthUser from "./pages/AuthUser";

function App() {



  const [isAuthenticated, setIsAuthenticated] = useState(false);

//  const [sesionData, setSessionData] =useState(null)




  // useEffect(() => {

  //   const user = localStorage.getItem("user");


  //   console.log("user app data", user);
  //   if (user) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  return (
    <BrowserRouter>

    <AuthUser/>
      <Routes>
        {/* If user is not authenticated, redirect to login */}


        <Route path="/login" element={<Login />} />
        <Route path="/" element={ <HomePage /> } />

        
      
        <Route path="/genimg" element={<GeneratedImageMain />} />
        <Route path="/sminput" element={ <PopSmallInput /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
