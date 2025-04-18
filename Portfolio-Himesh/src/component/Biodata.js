import React from 'react'
import Menu from './Menu';

export default function Biodata({profileImage, intervalforpp }) {


  return (
    <>

      <div style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container"  style={{ width: "20%" }}>
        <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        {/* Main content */}
        <div className="content-container">
 
        </div>
      </div>  
    </>
  )
}
