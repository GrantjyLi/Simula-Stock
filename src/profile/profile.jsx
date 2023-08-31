import React from 'react';
import ProfileHeader from './profileHeader.jsx'
import './Profile.css'
import { useState } from "react";
import { fireStoreDB } from '../firebase.js';
import {doc, getDoc} from 'firebase/firestore'

export default function page({props}){
    //const [watchLists, setWatchLists] = useState([])

    //const docRef = doc(FireStoreDB, props.user.uid + "")
    //setWatchLists = 

    return(
        <div>
            <ProfileHeader setUser = {props.setUser} pageName = {"Profile"}/>

            {!props.user &&
                <div id = "NoProfile">
                    <h1>Please login to continue</h1>
                    <button id = "loginBTN" 
                        onClick={async ()=>{ await props.login()}}>Login Here
                    </button>
                </div>
            }
            {props.user &&
                <div id ='profileMain'>
                    <div id = "stockLists">
                        <h1>Current Watchlists</h1>
                        <div>

                        </div>
                    </div>

                </div>
            
            }
            
        </div>
    )
}
