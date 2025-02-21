import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./component/Login";
import GeneratedImageMain from "./component/GeneratedImageMain";
import PopSmallInput from "./component/PopSmallInput";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (from localStorage or API)
    const user = localStorage.getItem("user");


    console.log("user app data", user);
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

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
