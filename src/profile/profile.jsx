import ProfileHeader from './profileHeader.jsx'
import './Profile.css'
import Watchlist from './components/Watchlist.jsx'
import { useState, useEffect } from "react";
import { fireStoreDB } from '../firebase.js';
import {doc, getDoc} from 'firebase/firestore'

export default function Profile({props}){
    const [watchLists, setWatchLists] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetchWatchlists();
        
      }, [props.user]);
    
    async function fetchWatchlists() {
        if (props.user) {
            const docRef = doc(fireStoreDB, "UserWatchLists", props.user.uid + "WL");
            try {
                const docSnapshot = await getDoc(docRef) // Await the document snapshot
                const docData = docSnapshot.data() // Access the data from the snapshot
                setWatchLists(Object.values(docData))
                setLoading(false)
            } catch (error) {
                alert("Error getting document:", error)
            }
        }
    }

    return(
        <div>
            <ProfileHeader setUser = {props.setUser} pageName = {"Profile"}/>

            {!props.user &&
                <div className = "NoProfile">
                    <h1>Please login to continue</h1>
                    <button id = "loginBTN" 
                        onClick={async ()=>{ await props.login()}}>Login Here
                    </button>
                </div>
            }

            {props.user &&
                <div className ='profileMain'>
                    <div id = "stockLists">
                        <div id = "watchlistContainer">
                        <h1>Current Watchlists</h1>

                            {(!loading) &&
                                watchLists.map((watchlist, index)=> (
                                    <Watchlist watchlistData = {watchlist} index = {index}/>
                                ))
                                }
                        </div>
                    </div>

                </div>
            
            }
            
        </div>
    )
}
