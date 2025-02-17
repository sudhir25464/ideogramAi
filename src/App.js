
import './App.css';
import ButtomNavbar from './component/ButtomNavbar';
import GeneratedImageMain from './component/GeneratedImageMain';
import Navbar from './component/Navbar';
import TopHeader from './component/TopHeader';
import TopSearchBar from './component/TopSearchBar';
import TougleInput from './component/TougleInput';
function App() {
  return (



    <div className="app-conatiner">

      {/* side-navbar */}

      <div className="side-nav-section">
        <Navbar />
      
      </div>

      <ButtomNavbar/>

      {/*  main-container section */}
      <div className="main-app-container">
        <TopHeader/>
      
        <TopSearchBar/>
        {/* <GeneratedImageMain/> */}

      </div>
    </div>
  );
}

export default App;
