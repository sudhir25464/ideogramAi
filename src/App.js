
import './App.css';
import ButtomNavbar from './component/ButtomNavbar';
import GeneratedImageMain from './component/GeneratedImageMain';
import Navbar from './component/Navbar';
import TopHeader from './component/TopHeader';
import Login from "./component/Login"
import TopSearchBar from './component/TopSearchBar';
import TougleInput from './component/TougleInput';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PopSmallInput from './component/PopSmallInput';
function App() {



      
  return (
<>

  <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/genimg" exact element={<GeneratedImageMain/>} />
    <Route path="/sminput" exact element={<PopSmallInput />} />
  </Routes>
  
  </BrowserRouter>

    

    </>
  );
}

export default App;
