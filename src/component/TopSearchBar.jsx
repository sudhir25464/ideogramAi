import React from "react";
import "../CSS/header.css";
import "../CSS/filterMenuContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/pop.css";



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
  const [imagestore, setimageStore] = useState("");

  const [imageUrl, setImageUrl] = useState(null);

  const [LoadingState, setloadingState] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const imageData = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200?text=Image+1"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=Image+2"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=Image+3"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200?text=Image+4"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x200?text=Image+5"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x200?text=Image+6"
    },
    {
      id: 7,
      image: "https://via.placeholder.com/300x200?text=Image+7"
    },
    
  ];
  



  const [userinput, setUserInput] = useState({
    prompt: "",
    magic_prompt: true,
  });

  const HandleSubmit = async (e) => {

    e.preventDefault()

    console.log("User input:", userinput)

    try {
      setloadingState(true);
      const response = await axios.post(
        "http://127.0.0.1:5000/gen-post",
        userinput
      );
      // setUserInput(response);
      setImageUrl(response.data.image_url);
      console.log("Data sent successfully:", response.data);

      // alert("Form submitted successfully!");
      setloadingState(false);
      setShowPopup(true);

      setUserInput({ prompt: "" });
    } catch (error) {
      console.log("error is:", error);
    }
  };

  const [image, seTimage] = useState([]);

  const getAllimage = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/get_images_by_category/Explore");
      // seTimage(response.data);
      setimageStore(response.data);


      console.log("response success", imagestore)
      console.log("success");
    } catch (error) {
      console.log(error.error);
    }
  };

  useEffect(() => {
    getAllimage();
  }, []);

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
          <div className="search-inner-container">
            <div className="search-input">
              <input
                type="text"
                value={userinput.userRequest}
                onChange={(e) =>
                  setUserInput({ ...userinput, prompt: e.target.value })
                }
                placeholder="Describe what you want to see. Your prompt cannot be empty."
                required
              />
              <div>
                <button
                  type="submit"
                  onClick={HandleSubmit}
                  className="generate-btn"
                >
                  Generate
                </button>
              </div>

              {/* new component */}

              {LoadingState ? (
                <div>
                  <p>loading..</p>
                  {/* <LoadingComponent/> */}
                </div>
              ) : (
                <div>
                  {
                    showPopup ?(
                      <ShowPopComponent imageUrl={imageUrl} />
                    ):(
                    <p></p>
                    )
                  }
                 
                </div>
              )}
            </div>
          </div>
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

          <button className="menu-btn">Top</button>

          <button className="menu-btn">People</button>
          <button className="menu-btn">Product</button>

          <button className="menu-btn">Nature</button>
          <button className="menu-btn">Poster</button>
          <button className="menu-btn">Logo</button>
          <button className="menu-btn">T-shirt</button>
        </div>

        {/* imagelist -container */}

        <div className="map-image-container">
          {/* {imagestore.map((image, index) => (
          
            <div key={index}   className="genered-image">
              <img src={image.image.imageUrl} alt="image" />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default TopSearchBar;


const ShowPopComponent = ({ imageUrl }) => {
  return (
    <div className="show-container">
      <div className="popup">
        <img src={imageUrl} alt="Popup" className="popup-image" />
      </div>
    </div>
  );
};