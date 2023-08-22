import React from "react";
import loginImage from './images/login.png'
import './header.css'

function Header() {
    return(
        <div className="HeaderMain">
            <h1 id="HeaderName">Quick Ticker Checker</h1>
            <img src={loginImage} alt="" id ="login-icon"/>
        </div>
    )
}
export default Header;