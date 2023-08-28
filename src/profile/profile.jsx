import React from 'react';
import ProfileHeader from './profileHeader.jsx'
import './Profile.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from '../firebase.js'

export default function page(props){
    async function login(){
        const provider = await new GoogleAuthProvider()
        try{
            let result = await signInWithPopup(auth, provider)
            props.setUser(result)
        }catch(error) {alert("Couldn't log in: ", error)}
    }

    return(
        <div className= 'profileMain'>
            <ProfileHeader setUser = {props.setUser} pageName = {"Profile"}/>

            {!props.user &&
                <div id = "NoProfile">
                    <h1>Please login to continue</h1>
                    <button id = "loginBTN" onClick={()=>{login()}}>Login Here</button>
                </div>
            }
            {!props.user &&
                <div className='profileMain'>


                </div>
            
            }
            
            
        </div>
    )
}
