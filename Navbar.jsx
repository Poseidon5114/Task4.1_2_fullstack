import React from 'react';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="company-name">Deakin UNV</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <button className="post-button">Post</button>
            <button className="login-button">Login</button>
        </nav>
    );
}

export default Navbar;
