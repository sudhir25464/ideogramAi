
import './App.css';
import ButtomNavbar from './component/ButtomNavbar';
import Navbar from './component/Navbar';
import TopHeader from './component/TopHeader';
import TopSearchBar from './component/TopSearchBar';
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

      </div>
    </div>
  );
}

export default App;
