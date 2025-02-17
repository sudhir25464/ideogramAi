import React from "react";
import "../CSS/header.css";
import "../CSS/filterMenuContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/pop.css";
import TougleInput from "./TougleInput";

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
  const [imagestore, setimageStore] = useState();

  const [imageUrl, setImageUrl] = useState([]);

  const [LoadingState, setloadingState] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const [tougleInput, setTougleinput] = useState(false);

  const [userinput, setUserInput] = useState({
    prompt: "",
    magic_prompt: true,
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
      );


      console.log("whole object", response.data);

        const backendresponse = response.data
        console.log("backend response:", backendresponse)
      // setUserInput(response);
      setImageUrl(response.data);
      console.log("Data sent successfully:",  imageUrl );

      // alert("Form submitted successfully!");

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
      );
      // seTimage(response.data);
      setimageStore(response.data.images);

      console.log("response success", response.data.images);
      console.log("success");
    } catch (error) {
      console.log(error.error);
    }
  };

  useEffect(() => {
    getAllimage();
  }, []);



  //calling Top APi


  const [TopStrore, setTopStore] = useState([])

  const Top = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/get_images_by_category/top"
      );
      // seTimage(response.data)      setimageStore(response.data.images);
        setTopStore(response.data.images)

        console.log("topstore", TopStrore);
      console.log("response success", response.data);
      console.log("success");
    } catch (error) {
      console.log(error.error);
    }
  };



  const loading = () => {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <>
      {/* {
  LoadingState?
<button >Loading...</button>
:
<button >Genetrate</button>
} */}

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

      {/* {
        imageUrl?
        <img src={imageUrl} />
        :""
      } */}

      {/* bottom-section    filter-menu*/}

      <div className="filter-menu-container">
        <div className="inner-menu-container">
          <button className="menu-btn">Explore</button>
          <button className="menu-btn">Following</button>

          <button className="menu-btn"  onClick={Top}>Top</button>

          <button className="menu-btn">People</button>
          <button className="menu-btn">Product</button>

          <button className="menu-btn">Nature</button>
          <button className="menu-btn">Poster</button>
          <button className="menu-btn">Logo</button>
          <button className="menu-btn">T-shirt</button>
        </div>

        {/* imagelist -container */}

        <div className="map-image-container">
          {imagestore &&
            imagestore.map((image, index) => (
              <div key={index} className="genered-image">
                <img src={image.image_url} alt="image" />
              </div>
            ))}
        </div>

        {/* {Array.isArray(imageUrl) && imageUrl.length > 0 &&
            imagestore.map((image, index) => (
              <div key={index} className="genered-image">
                <img src={image.image_url} alt="image" />
              </div>
            ))} */}


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


          {Array.isArray(imageUrl) && imageUrl.length > 0 &&
            imageUrl.map((image, index) => (
              <div key={index} className="genered-image">
                <img src={image.image_url} alt="image" />
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
