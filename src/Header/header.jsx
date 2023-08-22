import React from "react";
import loginImage from './images/login.png'
import './header.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase'


function Header() {

    async function login(e){
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    
    return(
        <div className="HeaderMain">
            <h1 id="HeaderName">Quick Ticker Checker</h1>
            <img src={loginImage} alt="" id ="login-icon" onClick={login}/>
        </div>
    )
}
export default Header;