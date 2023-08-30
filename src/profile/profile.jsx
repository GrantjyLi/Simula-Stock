import React from 'react';
import ProfileHeader from './profileHeader.jsx'
import './Profile.css'

export default function page({props}){

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
                    </div>

                </div>
            
            }
            
        </div>
    )
}
