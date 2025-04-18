import React from 'react';
import Menu from './Menu';

export default function More() {
  
  return (
    <>

      <div style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container"  style={{ width: "20%" }}>
          <Menu />
        </div>
        {/* Main content */}
        <div className="content-container">
 
        </div>
      </div>  
    </>
  )
}
