import React from "react";
import "../CSS/header.css";
import "../CSS/filterMenuContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/pop.css";
import TougleInput from "./TougleInput";
import { NavLink, useNavigate } from "react-router-dom";


const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="loading-popup">
        {/* <img src={imageUrl} alt="Popup" className="popup-image" /> */}
      </div>
    </div>
  );
};

function TopSearchBar() {


  const navigate = useNavigate();

  const [filterOption, setFilterOption] = useState("Explore")
  
  
  const [isOpen, setIsOpen] = useState(false);
  const [imagestore, setimageStore] = useState();

  const [filterCategory, setFiltercategory] = useState()

  const [imageUrl, setImageUrl] = useState();

  const [LoadingState, setloadingState] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const [tougleInput, setTougleinput] = useState(false);

  const [userinput, setUserInput] = useState({
    prompt: "",
    magic_prompt: true,


    // "prompt": "A futuristic cityscape",
    // "magic_prompt": true,
    aspect_ratio: "1:1",
    ai_prompt: "on",
    // "num_images": 1

    
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setloadingState(true);
    setTougleinput(false)
    console.log("User input:", userinput);


    try {
     
      const response = await axios.post(
        "http://127.0.0.1:5000/gen-post",
        userinput
      )
      

      console.log(userinput)


      console.log("gn-poat-reaponse", response)
      console.log("whole object", response.data);

        const backendresponse = response.data
        console.log("backend response:", backendresponse)
      // setUserInput(response);
      setImageUrl(backendresponse);

      // store data for filter
    

      console.log("Data sent successfully:",  imageUrl );

      

      setShowPopup(true);

      setUserInput({ prompt: "" });
    } catch (error) {
      console.log("error is:", error);
    }
    setloadingState(false);
  };


  


  const clearUserInput = () => {
    setUserInput({ prompt: "" });
  };

  const [image, seTimage] = useState([]);

  const getAllimage = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/get_images_by_category/explore"
        // http://127.0.0.1:5000/get_images_by_category/explore
      );
      // seTimage(response.data);


      console.log("get response",response.data);

      console.log("response success", response.data);


      const getalllimagsdata = response.data


      console.log("All data", getalllimagsdata)
      setimageStore(getalllimagsdata.images_data);

    

      // setimageStore(response.data.images_data);



      // const allliamgeResponse = response.data.images;
    
      // console.log("category", response.data.images.category);
      // console.log("user prompt", response.data.images.user_prompt);
      // setFiltercategory(allliamgeResponse);

      // console.log(filterCategory);


      console.log("success");
    } catch (error) {
      console.log(error.error);
    }
  };

  useEffect(() => {
    getAllimage();
   
  }, []);

  
  

  console.log("My-app store",imagestore)

  //calling Top APi



  const [TopStrore, setTopStore] = useState()

  const Top = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/get_images_by_category/"
      );
      // seTimage(response.data)      setimageStore(response.data.images);
        setTopStore(response.data.images)
        console.log("people", TopStrore)
      console.log("response success", response.data);
      console.log("success");
    } catch (error) {
      console.log(error.error);
    }
  };

  
    // for filter  
  //   const filterfunction= (cat) => {
  //     if (!TopStrore) {
  //       console.error("TopStrore is undefined");
  //       return;
  //   }
  //     const updatedData = TopStrore.filter((x) => x.category === cat);
  //     setFiltercategory(updatedData);
  
  //     console.log("  filterd  image store data",filterCategory);
  
  // }


  const catgData = imagestore&&imagestore.filter( e=> {
    return e.categories.find( e => e === filterOption) ;

  }
  )

  console.log("catgData is ", catgData)
  



  const loading = () => {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <>
   

      <div className="top-search-bar">
        <div className="top-search-bar-text">
          <p>What will you create ?</p>
        </div>

        <div className="Buttom-seach-bar-input">
          {tougleInput ? (
            <TougleInput
              userinput={userinput}
              setUserInput={setUserInput}
              setToggleInput={setTougleinput}
              HandleSubmit={HandleSubmit}
              clearUserInput={clearUserInput}
              LoadingState={LoadingState}
            />
          ) : (
            <div className="search-inner-container">
              <div className="search-input">
                <input
                  type="text"
                  value={userinput.prompt}
                  onChange={(e) =>
                    setUserInput({ ...userinput, prompt: e.target.value })
                  }
                  placeholder="Describe what you want to see. Your prompt cannot be empty."
                  required
                  onClick={() => setTougleinput(true)}
                />
                <div>

                  {

                        LoadingState ?
                        <button className="generate-btn-loading" >loading..</button>
                        :
                        <button
                        type="submit"
                        onClick={HandleSubmit}
                        className="generate-btn"
                      >
                        Generate
                      </button>
                  }
                
                </div>

               {/* 
               
               
               
               
                 {
              LoadingState ? 
              <button className="loading-input-btn1" >loading..</button>

              :
              <button className="generate-input-btn1" onClick={HandleSubmit}>Generate</button>

            }
               */}
              </div>
            </div>
          )}

          {LoadingState ? (
            <div>{/* <p>loading..</p> */}</div>
          ) : (
            <div>
              {showPopup ? (
                <ShowPopComponent
                  setShowPopup={setShowPopup}
                  imageUrl={imageUrl}
                />
              ) : (
                <p></p>
              )}
            </div>
          )}

          {/* <TougleInput /> */}
        </div>
      </div>

  

      {/* bottom-section    filter-menu*/}

      <div className="filter-menu-container">
        <div className="inner-menu-container">


          {/* serch bar icon */}
          <div className={`searching-container ${isOpen ? "open" : ""}`}>
      <input
        type="text"
        className="searching-input"
        placeholder="Search..."
      />
      <div className="searching-icon" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="inherit"
          viewBox="0 0 24 24"
        >
          <path
            fill="inherit"
            d="M4.5 10a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM10 3a7 7 0 104.391 12.452l5.329 5.328a.75.75 0 101.06-1.06l-5.328-5.329A7 7 0 0010 3z"
          ></path>
        </svg>
      </div>
    </div>



          <button onClick={ () => setFilterOption("Explore")} className="menu-btn">Explore</button>
          <button onClick={ () => setFilterOption("Following")} className="menu-btn">Following</button>
          <button onClick={ () => setFilterOption("Top")} className="menu-btn"   >Top</button>
          <button onClick={ () => setFilterOption("People")} className="menu-btn" >People</button>
          <button onClick={ () => setFilterOption("Product")} className="menu-btn">Product</button>
          <button onClick={ () => setFilterOption("Nature")} className="menu-btn">Nature</button>
          <button onClick={ () => setFilterOption("Poster")} className="menu-btn">Poster</button>
          <button onClick={ () => setFilterOption("Logos")} className="menu-btn">Logos</button>
          <button onClick={ () => setFilterOption("T-shirt")} className="menu-btn">T-shirt</button>

        </div>

        {/* imagelist - for hoame page  main - container */}

        <div className="map-image-container">
          {catgData && catgData.length>0 ?
            catgData.map((image, index) => (
              <div key={index} className="genered-image"  >

                {/* <NavLink  className="navlink" to={`/genimg/${image.id}`}> */}
                <img src={image.image_urls} alt="loading"  />
                {/* </NavLink> */}
               

              </div>
             
            ))
            :<div className="data-not-found-container">
              
              
              <div>Data Not Found</div>
              
              
              
              </div>
          }
        </div>

     


      </div>
    </>
  );
}

export default TopSearchBar;

const ShowPopComponent = ({ imageUrl, setShowPopup }) => {
  return (
    <div className="show-container">
      <div className="popup">
        <div className="popup-tougle-icon">
          <button onClick={() => setShowPopup(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#3F3F46"
              viewBox="0 0 20 20"
            >
              <g>
                <path
                  fill="#3F3F46"
                  d="M4.089 4.216l.057-.07a.5.5 0 01.638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07L9.293 10 4.146 4.854a.5.5 0 01-.057-.638l.057-.07-.057.07z"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="show-pop-image-container">
{/* 
          { imageUrl &&
            imageUrl.map((popimage,index)=>{

              <div className="pop-inner-image"  key={index} >
              <img src={popimage.images.image_url} alt="Popup" className="popup-image" />
              </div>
            })
          } */}



        {/*  show-pop  conatainer ,  for  maping  */}

          { imageUrl &&
            imageUrl.data.image_urls.map((image, index) => (
              <div key={index} className="genered-image">
                <img src={image} alt="Loading" />
              </div>
            ))}

          {/* <img src={imageUrl} alt="Popup" className="popup-image" />
          <img src={imageUrl} alt="Popup" className="popup-image" />
          <img src={imageUrl} alt="Popup" className="popup-image" />
       */}
        </div>
      

      </div>
    </div>
  );
};