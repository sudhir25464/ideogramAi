import React from 'react'
import Navbar from '../component/Navbar'
import ButtomNavbar from '../component/ButtomNavbar'
import TopHeader from '../component/TopHeader'
import TopSearchBar from '../component/TopSearchBar'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>


<div className="app-conatiner">

{/* side-navbar */}

<div className="side-nav-section">
  <Navbar />

</div>

<ButtomNavbar/>

{/*  main-container section */}
<div className="main-app-container">
  <TopHeader/>

{/* <Link to="/login">login</Link> */}

  

  <TopSearchBar/>
  {/* <GeneratedImageMain/> */}

</div>
</div>
        
      
    </div>
  )
}

export default HomePage
