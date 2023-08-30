import React from 'react';
import ProfileHeader from './profileHeader.jsx'
import './Profile.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from '../firebase.js'

export default function page({props}){

    return(
        <div className= 'profileMain'>
            <ProfileHeader setUser = {props.setUser} pageName = {"Profile"}/>

            {!props.user &&
                <div id = "NoProfile">
                    <h1>Please login to continue</h1>
                    <button id = "loginBTN" onClick={()=>{props.login()}}>Login Here</button>
                </div>
            }
            {!props.user &&
                <div className='profileMain'>


                </div>
            
            }
            
            
        </div>
    )
}
