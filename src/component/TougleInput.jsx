import React, { useState } from "react";
import "../CSS/tougleInput.css";

const TougleInput = ( {userinput,HandleSubmit, setUserInput,clearUserInput, LoadingState, setToggleInput}) => {
  const [description, setDescription] = useState("");
  const [magicPrompt, setMagicPrompt] = useState(true);
  const [aspectRatio, setAspectRatio] = useState("16:10");
  const [visibility, setVisibility] = useState("Public");
  const [model, setModel] = useState("2.0");

  return (
    <div className="main-input-container">
      <div className="container">
        <div className="left-side-input-container">
          <form>
          <textarea
            className="input-section"
            
            placeholder="Describe what you want to see"
            value={userinput.prompt}
              onChange={(e) => setUserInput({ ...userinput, prompt: e.target.value })}
              required
          
          />
          </form>

          <div className="tougle-input-group">
            <button className="input-group-btn" type="button">
              Auto{" "}
            </button>

            <button className="input-group-btn" type="button">
              General{" "}
            </button>

            <button className="input-group-btn" type="button">
              Realistic{" "}
            </button>

            <button className="input-group-btn" type="button">
              Design{" "}
            </button>
            <button className="input-group-btn" type="button">
              3D{" "}
            </button>
            <button className="input-group-btn" type="button">
              Animation{" "}
            </button>
          </div>
        </div>

        {/* side icon */}
        <div className="clear-text-btn">
          <button  onClick={clearUserInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#3F3F46"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3F3F46"
                d="M15.87 2.669l4.968 4.968a2.25 2.25 0 010 3.182l-8.681 8.68 6.098.001a.75.75 0 01.743.648l.006.102a.75.75 0 01-.648.743l-.102.007-8.41.001a2.244 2.244 0 01-1.714-.655l-4.968-4.969a2.25 2.25 0 010-3.182l9.526-9.526a2.25 2.25 0 013.182 0zM5.709 11.768l-1.487 1.488a.75.75 0 000 1.06l4.969 4.969c.146.146.338.22.53.22l.029-.005.039.002a.747.747 0 00.463-.217l1.486-1.487-6.03-6.03zm8.04-8.039l-6.98 6.978 6.03 6.03 6.979-6.978a.75.75 0 000-1.061l-4.969-4.969a.75.75 0 00-1.06 0z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="right-side-input-container">
          <div className="right-input-top-icon-section">
            <div className="right-top-icon">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#3F3F46"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#3F3F46"
                    d="M17.46 2.54a2.98 2.98 0 0 0-4.218 0L3.284 12.5a2.6 2.6 0 0 0-.687 1.23l-.913 3.835a.625.625 0 0 0 .752.752l3.835-.913c.466-.11.892-.349 1.23-.687l9.959-9.96a2.98 2.98 0 0 0 0-4.217m-3.334.884a1.732 1.732 0 0 1 2.45 2.45l-.743.742-2.45-2.45zM12.5 5.051l2.45 2.45-8.332 8.332a1.34 1.34 0 0 1-.637.356l-2.846.677.678-2.846c.057-.241.18-.461.355-.636z"
                  ></path>
                </svg>
              </button>
              <button className="top-right-btn-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3F3F46"
                    d="M18.25 3.509a.75.75 0 100-1.5l-13-.004a.75.75 0 100 1.5l13 .004zm-6.602 18.488l.102.007a.75.75 0 00.743-.649l.007-.101-.001-13.685 3.722 3.72a.75.75 0 00.976.073l.085-.073a.75.75 0 00.072-.977l-.073-.084-4.997-4.996a.75.75 0 00-.976-.073l-.085.072-5.003 4.997a.75.75 0 00.976 1.134l.084-.073 3.719-3.713L11 21.254c0 .38.282.693.648.743z"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="right-top-icon">
              <button  onClick={()=>setToggleInput(false)}>
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
          </div>

          <div className="options-section">
            <div className="toggle-group">
              <label>Magic Prompt:</label>
              <button
                className="toggle-button"
                onClick={() => setMagicPrompt(!magicPrompt)}
              >
                {magicPrompt ? "On" : "Off"}
              </button>
            </div>

            <div className="aspect-ratio">
              <label>Aspect Ratio:</label>
              {["10:16", "1:1", "16:10"].map((ratio) => (
                <button
                  key={ratio}
                  className={`aspect-btn ${
                    aspectRatio === ratio ? "active" : ""
                  }`}
                  onClick={() => setAspectRatio(ratio)}
                >
                  {ratio}
                </button>
              ))}
            </div>

            <div className="model-section">
              <label>Model:</label>
              <span>{model}</span>
            </div>

            <div className="color-section">
              <label>Color Palette:</label>
              <div className="color-box"></div>
            </div>

            <div className="color-section">
              <label>Color Palette:</label>
              <div className="color-box"></div>
            </div>
          </div>
          <div className="right-input-bottom-section">
            {
              LoadingState ? 
              <button className="generate-input-btn1" >loading..</button>

              :
              <button className="generate-input-btn1" onClick={HandleSubmit}>Generate</button>

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TougleInput;
