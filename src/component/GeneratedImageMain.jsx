import  {useState, useEffect} from "react";

import "../CSS/generatedImagemain.css";
import genimgs from "../image/image-16.jpg";
import moreicon from "../image/icons8-more-24.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function GeneratedImageMain() {


  const { id } = useParams(); // URL se post ID le raha hai
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/get_images_by_id/${id}`);
      setPost(response.data.data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  // if (!post) return <p>Loading...</p>;


  return (
    <div className="generated-image-container">
      <div className="inner-generated-image-container">
        <div className="left-inner-generated-image">
          <div className="generated-big-image">
            <img src={genimgs}></img>

            {/* <img src={post.imageUrl} alt={post.title} width="400" /> */}
          </div>
        </div>

        <div className="right-inner-generated-image">
          <div className="inner-right-generated-prompt">
            <div className="gen-img-user-profile-top">
              <div className="userprofile-data od1">
                <div className="inner-userprofile-data">
                  <div className="main-user-profile-name">
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJ0b9DLfmkjoC-sO2EprSzEV8n6GswqUwNxuYIrTg5RHmL1oA=s96-c"></img>

                    <div className="user-profile-name">
                      <span>Sudhir_kumar</span>
                      <span>6 days ago</span>
                    </div>
                  </div>

                  <div className="user-profile-right-icon-container">
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
                          d="M7.75 12a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zm6 0a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM18 13.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
                        ></path>
                      </svg>
                    </button>

                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#FF3D59"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#FF3D59"
                          d="M12.82 5.58l-.82.822-.824-.823a5.375 5.375 0 00-7.601 7.601l7.895 7.896a.75.75 0 001.06 0l7.902-7.897a5.38 5.38 0 00-7.612-7.6z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="od2">
                <div className="edit-buttion-option ">
                  <div className="row1 ">
                    <button>Prompt</button>

                    <button>Remix</button>

                    <button>Upscale</button>
                  </div>
                  <div className="row2">
                    <button>Open in Canvas</button>
                    <button>Remove bg</button>
                  </div>
                </div>

                <div className="display-for-image od4">
                  <div className="for-image"></div>
                  <div className="for-image"></div>
                  <div className="for-image"></div>
                  <div className="for-image"></div>
                </div>
              </div>
              {/* <div className="display-for-image">
                  <div className="for-image"></div>
                  <div className="for-image"></div>
                  <div className="for-image"></div>
                  <div className="for-image"></div>
                </div> */}
            </div>

            <div className="Prompt-container">
              <div className="Prompt-row-1">
                <div className="Prompt">
                  <div>Prompt</div>
                  <div className="prompt-icon">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#3F3F46"
                        viewBox="0 0 22 22"
                      >
                        <g>
                          <path
                            fill="#3F3F46"
                            d="M10.77 2.75c.349 0 .636.259.682.594l.006.093.002 6.646h6.648a.687.687 0 01.093 1.37l-.093.005H11.46l.002 6.645a.688.688 0 01-1.368.094l-.007-.093-.002-6.646H3.44a.687.687 0 01-.094-1.368l.094-.007h6.645l-.002-6.645c0-.38.308-.688.688-.688z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#3F3F46"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#3F3F46"
                          d="m4.586 3.856-.003 1.769v8.754a2.71 2.71 0 0 0 2.709 2.708h7.18a1.88 1.88 0 0 1-1.768 1.25H7.292a3.96 3.96 0 0 1-3.959-3.958V5.625c0-.817.523-1.512 1.253-1.77m10.206-2.19c1.035 0 1.875.84 1.875 1.876v10.833c0 1.036-.84 1.875-1.875 1.875h-7.5a1.875 1.875 0 0 1-1.875-1.875V3.542c0-1.036.84-1.875 1.875-1.875zm0 1.25h-7.5a.625.625 0 0 0-.625.626v10.833c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V3.542a.625.625 0 0 0-.625-.625"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="prompt-data">
                  <p>
                    A striking adult dreamy and ethereal pop art 3D image of a
                    young female Kpop model. She has vibrant long gradient black
                    pink and slightly messy hair in a ponytail. She wears a cool
                    futuristic armour plates combined with a croptop with
                    intricate silver elements.
                  </p>
                </div>
                {/* magic prompt-container */}

                <div className="Prompt">
                  <div>Magic Prompt</div>
                  <div className="prompt-icon">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#3F3F46"
                        viewBox="0 0 22 22"
                      >
                        <g>
                          <path
                            fill="#3F3F46"
                            d="M10.77 2.75c.349 0 .636.259.682.594l.006.093.002 6.646h6.648a.687.687 0 01.093 1.37l-.093.005H11.46l.002 6.645a.688.688 0 01-1.368.094l-.007-.093-.002-6.646H3.44a.687.687 0 01-.094-1.368l.094-.007h6.645l-.002-6.645c0-.38.308-.688.688-.688z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#3F3F46"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#3F3F46"
                          d="m4.586 3.856-.003 1.769v8.754a2.71 2.71 0 0 0 2.709 2.708h7.18a1.88 1.88 0 0 1-1.768 1.25H7.292a3.96 3.96 0 0 1-3.959-3.958V5.625c0-.817.523-1.512 1.253-1.77m10.206-2.19c1.035 0 1.875.84 1.875 1.876v10.833c0 1.036-.84 1.875-1.875 1.875h-7.5a1.875 1.875 0 0 1-1.875-1.875V3.542c0-1.036.84-1.875 1.875-1.875zm0 1.25h-7.5a.625.625 0 0 0-.625.626v10.833c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V3.542a.625.625 0 0 0-.625-.625"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="prompt-data">
                  <p>
                    She wears a cool futuristic armour plates combined with a
                    croptop with intricate silver elements. She is controlling a
                    small dangerous drone, which is flying not so far from her,
                    trying to capture a small bird in the air.
                  </p>
                </div>
              </div>
              <div className="Prompt-row-2">
                <div className="parent-text">
                  <p>Parent</p>
                </div>

                <div className="parent-image-details">
                  <div className="parent-image"></div>
                  <div>{/* gen-images */}</div>
                </div>

                <div className="image-details">
                  <div className="inner-image-details">
                    <div className="wrapper-inner-image-details">
                      <div>
                        <div className="parent-text-text">Model</div>
                        <div className="parent-value-text">Ideogram</div>
                      </div>

                      <div>
                        <div className="parent-text-text">Style</div>
                        <div className="parent-value-text">Design</div>
                      </div>
                    </div>

                    <div className="wrapper-inner-image-details">
                      <div>
                        <div className="parent-text-text">Resolution</div>
                        <div className="parent-value-text">
                          9:16 (736 x 1312)
                        </div>
                      </div>

                      <div>
                        <div className="parent-text-text">Rendering</div>
                        <div className="parent-value-text">Default</div>
                      </div>
                    </div>

                    <div className="wrapper-inner-image-details">
                      <div>
                        <div className="parent-text-text">Seed</div>
                        <div className="parent-value-text">473557933</div>
                      </div>

                      <div>
                        <div className="parent-text-text">Date created</div>
                        <div className="parent-value-text">
                          Feb 19, 2025, 2:48 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratedImageMain;
