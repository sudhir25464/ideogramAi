import React from "react";
import "../CSS/login.css";
import loginimg from "../image/image-16.jpg";

import axios from "axios";
function Login() {

    



    const GoogleLogin = async () => {


      window.open("http://127.0.0.1:5000/auth/google", "_self")
      
      try {
        const backendURL = "http:127.0.0.1:5000/login"; // Replace with your backend URL  google  email
  
        // Send the Google token to the backend
        const res = await axios.post(backendURL ,{
          // token: response.credential,
        });
  
        console.log("Backend Response:", res.data); // Handle user data
  
        // Store user details (e.g., in local storage)
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (error) {
        console.error("Login Error:", error);
      }
    };

  


  
  return (
    <div className="main-login-container">

      <div className="inner-login-container">
        <div className="icon-style">

    
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 900"
            width="28"
            height="28"
          >
            <path d="M377.87 204.445H237.224M377.87 696.305H237.224M44.007 450.582h334.226M390.122 816.411H355.82zm0-244.024c67.386 0 122.013 54.627 122.013 122.012 0 67.386-54.627 122.012-122.013 122.012m0-732.922H355.82zm0 488.898H117.421m272.701-244.874H117.421m272.701 0c9.259 0 18.276 1.88 26.944 3.834 54.421 12.267 95.069 60.9 95.069 119.028 0 67.385-54.627 122.012-122.013 122.012m0-488.898c67.386 0 122.013 54.627 122.013 122.012 0 67.386-54.627 122.012-122.013 122.012"></path>
            <path d="M665.607 313.656c0-36.554-20.93-69.879-53.858-85.751a95.194 95.194 0 0 0-100.631 11.28m297.28-7.97a95.194 95.194 0 0 0-95.193 0 95.194 95.194 0 0 0-47.598 82.441M667.655 523.686a95.193 95.193 0 0 0-140.773-64.862l.046.02a95.03 95.03 0 0 0-16.274 11.72m157.001 53.122c8.904 42.224 45 72.918 87.63 75.374l-.017.11a95.154 95.154 0 0 0 26.509-2.166"></path>
            <path d="M474.213 798.357a95.597 95.597 0 0 1-4.59-10.63m306.374-567.765A210.825 210.825 0 0 0 673.055 76.897a210.824 210.824 0 0 0-222.857 9.3M760.802 408.85c38.502 0 73.214-23.193 87.948-58.766 14.734-35.571 6.588-76.516-20.637-103.741a95.194 95.194 0 0 0-52.116-26.38M651.123 730.766c22.06 33.771 63.01 49.972 102.204 40.435 39.194-9.537 68.122-42.74 72.199-82.872 3.713-36.594-13.99-72.054-45.469-91.08 46.652-9.636 78.999-52.274 75.71-99.796-3.462-49.897-44.948-88.605-94.965-88.604M474.526 798.955c22.257 43.26 73.552 62.778 118.936 45.253 45.385-17.524 70.253-66.45 57.661-113.441M450.198 86.197a210.67 210.67 0 0 0-8.922 6.704"></path>
          </svg>

       
          ideogram
        </div>
        <div className="login-image-container">
          <img src={loginimg}></img>
        </div>
        <button className="login-with-btn"  onClick={GoogleLogin}>

  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            ></path>
            <path
              fill="#FF3D00"
              d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            ></path>
          </svg>

     
          Continue with Google
        </button>
        <div className="login-with-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 50 50"
            fill="#ffffff"
          >
            <path d="M44.527 34.75c-1.078 2.395-1.597 3.465-2.984 5.578-1.941 2.953-4.68 6.64-8.063 6.664-3.011.028-3.789-1.965-7.878-1.93-4.086.02-4.938 1.97-7.954 1.938-3.386-.031-5.976-3.352-7.918-6.3-5.43-8.27-6.003-17.966-2.648-23.122 2.375-3.656 6.129-5.805 9.656-5.805 3.594 0 5.852 1.973 8.82 1.973 2.883 0 4.637-1.976 8.794-1.976 3.14 0 6.46 1.71 8.836 4.664-7.766 4.257-6.504 15.347 1.34 18.316zM31.195 8.469c1.512-1.942 2.66-4.68 2.242-7.469-2.464.168-5.347 1.742-7.03 3.781-1.528 1.86-2.794 4.617-2.302 7.285 2.692.086 5.477-1.52 7.09-3.597z"></path>
          </svg>
          Continue with Apple
        </div>

        <div className="login-read-more-text">
          <p>
            Introducing Ideogram Canvas.<a> Read more </a>
          </p>
        </div>
      </div>

       <div className="login-footer-links-container">
        <div className="footer-link-text">
        <span>Docs</span>

        <span>Pricing</span>
        <span>About</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Careers</span>
        </div>

        <div className="login-fooetr-icon-container">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#52525B"
              viewBox="0 0 16 16"
            >
              <g clip-path="url(#clip0_1458_37805)">
                <path
                  fill="#52525B"
                  d="M13.545 2.77a13.195 13.195 0 00-3.257-1.01.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.18 12.18 0 00-3.658 0 8.426 8.426 0 00-.412-.833.051.051 0 00-.052-.025 13.158 13.158 0 00-3.257 1.01.047.047 0 00-.021.019C.356 5.888-.213 8.91.066 11.896c.001.014.01.028.02.037a13.27 13.27 0 003.996 2.02.052.052 0 00.056-.019 9.48 9.48 0 00.818-1.33.05.05 0 00-.028-.07 8.735 8.735 0 01-1.248-.595.051.051 0 01-.005-.085c.084-.062.168-.128.248-.194a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 01.053.006c.08.067.164.133.248.195a.051.051 0 01-.004.086c-.399.232-.813.43-1.249.594a.051.051 0 00-.027.07c.24.466.514.91.817 1.33a.05.05 0 00.056.019 13.227 13.227 0 004.001-2.02.051.051 0 00.021-.037c.334-3.45-.559-6.449-2.365-9.107a.04.04 0 00-.021-.019zm-8.198 7.308c-.789 0-1.438-.724-1.438-1.613 0-.888.637-1.612 1.438-1.612.807 0 1.45.73 1.438 1.612 0 .89-.637 1.613-1.438 1.613zm5.316 0c-.788 0-1.438-.724-1.438-1.613 0-.888.637-1.612 1.438-1.612.807 0 1.45.73 1.438 1.612 0 .89-.63 1.613-1.438 1.613z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1458_37805">
                  <path fill="#52525B" d="M0 0H16V16H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#52525B"
              viewBox="0 0 16 14"
            >
              <g>
                <path
                  fill="#52525B"
                  d="M12.163.5h2.205L9.55 6.007l5.668 7.493H10.78L7.304 8.955 3.327 13.5H1.12l5.153-5.89L.836.5h4.55L8.53 4.654 12.163.5zm-.774 11.68h1.222L4.723 1.75H3.41l7.978 10.43z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#52525B"
              viewBox="0 0 20 20"
            >
              <g>
                <path
                  fill="#52525B"
                  d="M19.8 6s-.195-1.379-.796-1.984c-.762-.797-1.613-.801-2.004-.848-2.797-.203-6.996-.203-6.996-.203h-.008s-4.2 0-6.996.203c-.39.047-1.242.05-2.004.848C.395 4.62.203 6 .203 6S0 7.621 0 9.238v1.516c0 1.617.2 3.238.2 3.238s.195 1.38.792 1.985c.762.796 1.762.77 2.207.855 1.602.152 6.801.2 6.801.2s4.203-.009 7-.208c.39-.047 1.242-.05 2.004-.847.601-.606.797-1.985.797-1.985S20 12.375 20 10.754V9.238C20 7.621 19.8 6 19.8 6zM7.935 12.594V6.973l5.402 2.82-5.402 2.8z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="inherit"
              viewBox="0 0 48 48"
            >
              <g>
                <path
                  fill="#52525B"
                  d="M39.49 39.49h-6.52V29.28c0-2.435-.043-5.569-3.39-5.569-3.396 0-3.915 2.653-3.915 5.392v10.386h-6.52V18.494h6.259v2.869h.088a6.86 6.86 0 016.175-3.392c6.608 0 7.826 4.347 7.826 10.001L39.49 39.49zm-27.7-23.866a3.783 3.783 0 11-.003-7.566 3.783 3.783 0 01.002 7.566zm3.259 23.866H8.523V18.494h6.526V39.49zM42.74 2.003H5.247A3.21 3.21 0 002 5.174v37.65a3.213 3.213 0 003.247 3.174H42.74A3.22 3.22 0 0046 42.823V5.172A3.218 3.218 0 0042.74 2"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#52525B"
              viewBox="0 0 16 17"
            >
              <g>
                <path
                  fill="inherit"
                  d="M10.034 2.271a1.666 1.666 0 10-.01-.72 2.69 2.69 0 00-2.399 2.67v.01c-1.465.061-2.802.478-3.864 1.136a2.334 2.334 0 10-2.417 3.96c.077 2.71 3.03 4.89 6.661 4.89 3.632 0 6.589-2.182 6.662-4.894a2.334 2.334 0 10-2.422-3.959C11.174 4.701 9.82 4.284 8.34 4.23v-.006c0-.992.737-1.815 1.693-1.95V2.27zM3.667 8.695C3.706 7.85 4.268 7.2 4.922 7.2c.653 0 1.153.687 1.114 1.533-.039.847-.527 1.154-1.181 1.154-.655 0-1.227-.344-1.188-1.19zM11.09 7.2c.654 0 1.216.65 1.255 1.496.039.847-.534 1.191-1.188 1.191-.653 0-1.142-.307-1.181-1.154-.04-.846.46-1.533 1.114-1.533zm-.778 3.455c.123.012.2.14.153.254a2.665 2.665 0 01-4.92 0 .185.185 0 01.154-.254 23.042 23.042 0 012.306-.113c.812 0 1.588.04 2.307.113z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div> 


    </div>
  );
}

export default Login;
