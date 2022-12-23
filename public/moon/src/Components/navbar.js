import React from 'react';
import './navbar.css';
function Navbar() { //function for navbar
    return (
        <nav>
            <div className = "nav_box">
                <div className = "shoppingcart">
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>
                        1
                    </span>
                </div>
                <div className = "profile">
                    <span>
                        <i className="fas fa-solid fa-user"></i>
                    </span>
                </div>
            </div>

            <div className = "moon_icon">
                <span>
                    <img src = "moon-icon-navbar.png" alt = "" />
                </span>
            </div>

        </nav>
        
    );
}
//just added divs for each section of the navbar
//grouped everything into a "nav_box" to style in css
//got icons from fontawesome.com
//use react.fragment in app.js if you wanna add a file
//thats basically it im tired lol i love u doni


export default Navbar;