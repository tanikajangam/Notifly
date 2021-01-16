import React from 'react'
import './App.css';
function Navbar() {
    return (
        <div className = "nav-wrapper">
        <div className = "nav padding">
            <div className = "logo">
              Notifly
            </div>
            <div className = "nav-section">
              <ul className = "nav-2">
                <li><a href = "/">Home</a></li>
                <li><a href = "">About</a></li>

                <li><a href = "">Your Files</a></li>
              </ul>
            </div>
        </div>  
    </div>
    )
}

export default Navbar
