import React from "react";
import "../CSS/popsmallinput.css";
function PopSmallInput() {

  
  return (
    <div className="popsmallinput-container">
      <div className="inner-popsmallinput-container">
        <div className="pop-top-input-icon-bar">
          <div className="pop-top-left-con">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#3F3F46"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3F3F46"
                  d="M10.733 19.79a.75.75 0 101.034-1.085L5.516 12.75H20.25a.75.75 0 000-1.5H5.516l6.251-5.955a.75.75 0 00-1.034-1.086l-7.42 7.067a.995.995 0 00-.3.58.753.753 0 00.001.289.995.995 0 00.3.579l7.419 7.067z"
                ></path>
              </svg>
            </button>
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
            <button>
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
            <button>
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
          <div className="pop-right-icon-bar">
            {/* <span>10</span> */}
            <buttion className="popsm-generate">Generate</buttion>
          </div>
        </div>

        <div className="pop-input-text-container">
          <div>
            <textarea
              className="pop-input-section"
              placeholder="Describe what you want to see"
              required
            />
          </div>
          <div>
            <div className="pop-tougle-input-group">
              <button className="pop-input-group-btn" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="inherit"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    fill="inherit"
                    d="M8.664 15.735c.245.173.537.265.836.264v-.004a1.442 1.442 0 001.327-.872l.613-1.864a2.872 2.872 0 011.817-1.812l1.778-.578a1.443 1.443 0 00-.052-2.74l-1.755-.57a2.876 2.876 0 01-1.822-1.823l-.578-1.777a1.446 1.446 0 00-2.732.022l-.583 1.792a2.877 2.877 0 01-1.77 1.786l-1.777.571a1.444 1.444 0 00.017 2.734l1.754.569a2.887 2.887 0 011.822 1.826l.578 1.775c.099.283.283.528.527.7zm-.374-4.25a4.054 4.054 0 00-.363-.413h.003a4.394 4.394 0 00-1.72-1.063l-1.6-.508 1.611-.524a4.4 4.4 0 001.69-1.065 4.448 4.448 0 001.041-1.708l.515-1.582.516 1.587a4.374 4.374 0 002.781 2.773l1.62.522-1.59.515a4.379 4.379 0 00-2.774 2.775l-.515 1.582-.515-1.585a4.368 4.368 0 00-.7-1.306zm8.041 9.297a1.123 1.123 0 01-.41-.549l-.328-1.007a1.293 1.293 0 00-.821-.823l-.991-.323A1.148 1.148 0 0113 16.997a1.143 1.143 0 01.771-1.08l1.006-.326a1.3 1.3 0 00.8-.819l.324-.992a1.143 1.143 0 012.157-.021l.329 1.014a1.3 1.3 0 00.82.816l.992.323a1.141 1.141 0 01.039 2.165l-1.014.329a1.3 1.3 0 00-.818.822l-.322.989c-.078.23-.226.43-.425.57a1.14 1.14 0 01-1.328-.005zm-1.03-3.783A2.789 2.789 0 0117 18.708a2.794 2.794 0 011.7-1.7 2.813 2.813 0 01-1.718-1.708A2.806 2.806 0 0115.3 17z"
                  ></path>
                </svg>{" "}
                Auto{" "}
              </button>

              <button className="pop-input-group-btn" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="inherit"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    fill="inherit"
                    d="M6.75 2a4.75 4.75 0 000 9.5h4a.75.75 0 00.75-.75v-4A4.75 4.75 0 006.75 2zM3.5 6.75a3.25 3.25 0 116.5 0V10H6.75A3.25 3.25 0 013.5 6.75zM6.75 22a4.75 4.75 0 110-9.5h4a.75.75 0 01.75.75v4A4.75 4.75 0 016.75 22zM3.5 17.25a3.25 3.25 0 006.5 0V14H6.75a3.25 3.25 0 00-3.25 3.25zM22 6.75a4.75 4.75 0 10-9.5 0v4c0 .414.336.75.75.75h4A4.75 4.75 0 0022 6.75zM17.25 3.5a3.25 3.25 0 010 6.5H14V6.75a3.25 3.25 0 013.25-3.25zm0 18.5a4.75 4.75 0 100-9.5h-4a.75.75 0 00-.75.75v4A4.75 4.75 0 0017.25 22zm3.25-4.75a3.25 3.25 0 01-6.5 0V14h3.25a3.25 3.25 0 013.25 3.25z"
                  ></path>
                </svg>{" "}
                General{" "}
              </button>

              <button className="pop-input-group-btn" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="inherit"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <g clip-path="url(#clip0_296_7631)">
                    <g
                      fill="inherit"
                      fill-rule="evenodd"
                      clip-path="url(#clip1_296_7631)"
                      clip-rule="evenodd"
                    >
                      <path d="M3.871 16.614l-.199 1.13a2 2 0 00.737 1.922l-.538-3.052zM10.625 21l5.502.97a2 2 0 002.317-1.622l.19-1.08a1.99 1.99 0 01-1.006.498l-.624.11-.037.212a.5.5 0 01-.58.405l-1.443-.254-4.319.761zm7.716-8.705l1.056-5.991a.5.5 0 00-.405-.58l-1.867-.329-.278-1.572 2.405.424a2 2 0 011.623 2.317l-1.772 10.05-.762-4.32zm-7.716-9.569L8.42 2.337A2 2 0 006.242 3.5l4.383-.773z"></path>
                      <path d="M17.5 13.67l1.098-6.223a1 1 0 00-.812-1.158L16.148 6l1.352 7.67z"></path>
                      <path d="M14.763 3.52L3.93 5.43a.5.5 0 00-.406.58l2.43 13.783a.5.5 0 00.58.405l10.833-1.91a.5.5 0 00.406-.579l-2.43-13.784a.5.5 0 00-.58-.405zM3.67 3.953A2 2 0 002.047 6.27l2.43 13.783a2 2 0 002.318 1.623l10.833-1.91a2 2 0 001.622-2.317L16.82 3.665a2 2 0 00-2.318-1.622L3.67 3.953z"></path>
                      <path d="M5.838 7.217l1.354 7.68 7.679-1.355-1.354-7.68-7.68 1.355zm-.753-1.39a1 1 0 00-.811 1.158L5.8 15.649a1 1 0 001.159.811l8.664-1.528a1 1 0 00.811-1.158L14.907 5.11a1 1 0 00-1.158-.811L5.085 5.826z"></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_296_7631">
                      <path fill="#fff" d="M0 0H24V24H0z"></path>
                    </clipPath>
                    <clipPath id="clip1_296_7631">
                      <path
                        fill="#fff"
                        d="M0 0H21.89V22.591H0z"
                        transform="translate(1.7 2)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>{" "}
                Realistic{" "}
              </button>

              <button className="pop-input-group-btn" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="inherit"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="inherit"
                    fill-rule="evenodd"
                    d="M17.5 14.5a3 3 0 100 6 3 3 0 000-6zm0-1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="inherit"
                    d="M16.113 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  ></path>
                  <path
                    fill="inherit"
                    fill-rule="evenodd"
                    d="M2.431 10.932a.75.75 0 01-.32-1.011l1.681-3.239a1.75 1.75 0 012.495-.668L8.44 7.389a.25.25 0 00.357-.096l1.177-2.267a1.75 1.75 0 012.495-.669l2.153 1.375a.25.25 0 00.357-.095l1.68-3.238a.75.75 0 011.332.69L16.31 6.33a1.75 1.75 0 01-2.495.668l-2.153-1.375a.25.25 0 00-.357.095l-1.177 2.268a1.75 1.75 0 01-2.495.668L5.48 7.278a.25.25 0 00-.357.095l-1.68 3.239a.75.75 0 01-1.012.32zM12.892 10.27a.75.75 0 01.206.721l-2.423 9.702a.75.75 0 01-1.249.358l-7.194-6.949a.75.75 0 01.315-1.26l9.617-2.754a.75.75 0 01.728.182zm-3.358 8.8l1.794-7.182-7.12 2.038 5.326 5.144z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Design{" "}
              </button>
              <button className="pop-input-group-btn" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="14"
                  fill="inherit"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    fill="inherit"
                    fill-rule="evenodd"
                    d="M11.91 2.102a.75.75 0 01.756 0l8.539 4.98a.75.75 0 01.372.649v8.538a.75.75 0 01-.372.648l-8.539 4.98a.75.75 0 01-.755 0l-8.539-4.98A.75.75 0 013 16.27V7.731a.75.75 0 01.372-.648l8.539-4.98zM4.5 9.037v6.801l7.039 4.106v-6.802L4.5 9.037zm8.539 4.105v6.802l7.038-4.105V9.037l-7.039 4.105zm6.3-5.411l-7.05 4.112-7.05-4.112 7.05-4.113 7.05 4.113z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                3D{" "}
              </button>
              <button className="pop-input-group-btn" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="14"
                  fill="inherit"
                  stroke="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="inherit"
                    fill-rule="evenodd"
                    d="M10.5 14.5a.75.75 0 01.75.75c0 .063.03.16.158.263.13.103.336.187.592.187a.955.955 0 00.592-.187c.128-.103.158-.2.158-.263a.75.75 0 011.5 0c0 1.224-1.172 1.95-2.25 1.95s-2.25-.726-2.25-1.95a.75.75 0 01.75-.75z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="inherit"
                    fill-rule="evenodd"
                    d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="inherit"
                    d="M7.082 14.864a.703.703 0 01-.256-.343l-.205-.63a.82.82 0 00-.513-.515l-.62-.202A.718.718 0 015 12.497a.715.715 0 01.482-.676l.629-.204a.812.812 0 00.5-.512l.202-.62a.715.715 0 011.348-.013l.206.634a.814.814 0 00.513.51l.62.202a.713.713 0 01.024 1.354l-.634.206a.823.823 0 00-.511.514l-.201.619a.716.716 0 01-1.096.353zM16.082 14.864a.702.702 0 01-.256-.343l-.205-.63a.82.82 0 00-.513-.515l-.62-.202a.717.717 0 01-.488-.677.715.715 0 01.482-.676l.629-.204a.812.812 0 00.5-.512l.202-.62a.715.715 0 011.348-.013l.206.634a.814.814 0 00.513.51l.62.202a.712.712 0 01.024 1.354l-.634.206a.823.823 0 00-.511.514l-.201.619a.716.716 0 01-1.096.353z"
                  ></path>
                </svg>{" "}
                Animation{" "}
              </button>
            </div>
          </div>
        </div>


{/* bottom input -container */}
        <div>

        <div className="options-section">
            <div className="toggle-group">
              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Magic Prompt:</div>

                <div className="magic-promt-input-container">
                  <button>auto</button>
                  <button>on</button>

                  <button>off</button>
                </div>
              </div>

              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Aspect ratio</div>

                <div className="magic-promt-input-container">
                  <button>9:16</button>
                  <button>1:1</button>
                  <button>16:9</button>
                </div>
              </div>

              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Visibility</div>

                <div className="visiblity-input-container">
                  <button>public</button>
                  <button>private</button>
                </div>
              </div>

              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Model</div>

                <div className="model-input-container">
                  <button>2.0</button>
                </div>
              </div>

              {/* <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Color pattern</div>

                <div className="colorpatter-input-container">
                  <button className="btn-auto">auto</button>
                  <button className="btn-color-picker">
                    <input type="color"></input>
                  </button>

                  <button className="btn-color-tougle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27272A" viewBox="0 0 20 20" ><g><path fill="#27272A" d="M4.147 12.354a.5.5 0 01-.001-.707L9.61 6.163a.55.55 0 01.779 0l5.465 5.484a.5.5 0 01-.708.706L10 7.188l-5.146 5.165a.5.5 0 01-.707.001z"></path></g></svg></button>
                </div>
              </div> */}

              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Magic Prompt:</div>

                <div className="magic-promt-input-container">
                  <button>Turbo</button>
                  <button>Default</button>

                  <button>Quality</button>
                </div>
              </div>

              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Seed number</div>

                <div className="model-input-container">
                  <button>auto</button>
                </div>
              </div>

              <div className="pop-magic-promt-container">
                <div className="magic-prompt-text">Nigative prompt</div>

                <div className="model-input-container">
                  <button>Things to avoid</button>
                </div>
              </div>
            </div>





          </div>
        </div>
      </div>
    </div>
  );
}

export default PopSmallInput;
