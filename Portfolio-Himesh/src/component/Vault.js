import React, { useState } from "react";
import Menu from "./Menu";
import Images from "./Images";

export default function Vault({ profileImage, intervalforpp }) {
 

  const [isUserAuth, setIsUserAuth] = useState(false); // To track if the user is auth
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const correctUsername = "yourUsername"; // Set your desired username
  const correctPassword = "OpenNow"; // Set your desired password  //put this on .env file

  // Event handler for form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUserAuth(true);
    } else {
      alert("Incorrect username or password");
    }
  };

  // Event handler for username input
  const handleUsernameFocus = () => {
    document.querySelector(".eyeball-l").style.cssText = `
      left: 0.75em;
      top: 1.12em;
    `;
    document.querySelector(".eyeball-r").style.cssText = `
      right: 0.75em;
      top: 1.12em;
    `;
    resetHandStyle();
  };

  // Event handler for password input
  const handlePasswordFocus = () => {
    document.querySelector(".hand-l").style.cssText = `
      height: 6.56em;
      top: 3.87em;
      left: 11.75em;
      transform: rotate(-155deg);
    `;
    document.querySelector(".hand-r").style.cssText = `
      height: 6.56em;
      top: 3.87em;
      right: 11.75em;
      transform: rotate(155deg);
    `;
    resetEyeStyle();
  };

  const resetEyeStyle = () => {
    document.querySelector(".eyeball-l").style.cssText = `
      left: 0.6em;
      top: 0.6em;
    `;
    document.querySelector(".eyeball-r").style.cssText = `
      right: 0.6em;
      top: 0.6em;
    `;
  };

  const resetHandStyle = () => {
    document.querySelector(".hand-l").style.cssText = `
      height: 2.81em;
      top: 8.4em;
      left: 7.5em;
      transform: rotate(0deg);
    `;
    document.querySelector(".hand-r").style.cssText = `
      height: 2.81em;
      top: 8.4em;
      right: 7.5em;
      transform: rotate(0deg);
    `;
  };

  if (!isUserAuth) {
    return (
      <div style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container">
          <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        <div className="content-container" style={{ display: 'flex', justifyContent:"center"}}>
  <div className="TextContainer">
  <p style={{ textAlign: 'center' }}>
      You cannot access this component until you enter the correct password. If you need access, please contact me. You can reach out through various methods; please refer to the contact component for details.
</p>

  </div>
          <div className="container-Auth" style={{ display: 'flex', alignItems:'center', justifyContent:"center"}}>
            <form className="form-panda" onSubmit={handleLogin}>
              <label htmlFor="username">Your Name:</label>
              <input
                type="text"
                id="username"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleUsernameFocus}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handlePasswordFocus}
              />
              <button type="submit">Login</button>
            </form>
            <div className="ear-l"></div>
            <div className="ear-r"></div>
            <div className="panda-face">
              <div className="blush-l"></div>
              <div className="blush-r"></div>
              <div className="eye-l">
                <div className="eyeball-l"></div>
              </div>
              <div className="eye-r">
                <div className="eyeball-r"></div>
              </div>
              <div className="nose"></div>
              <div className="mouth"></div>
            </div>
            <div className="hand-l"></div>
            <div className="hand-r"></div>
            <div className="paw-l"></div>
            <div className="paw-r"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="menu-container">
          <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        <div className="content-container">
          <Images profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
      </div>
    </>
  );
}
