import React from "react";
import "../CSS/header.css";
import "../CSS/filterMenuContainer.css";

function TopSearchBar() {


  

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
                placeholder="Describe what you want to see. Your prompt cannot be empty."
              />
              <div>
                <button className="generate-btn">Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        <div className="image-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            neque.
          </p>
        </div>
      </div>
    </>
  );
}

export default TopSearchBar;
