import ProfileHeader from './profileHeader.jsx'
import './Profile.css'
import { useState, useEffect } from "react";
import { fireStoreDB } from '../firebase.js';
import {doc, getDoc} from 'firebase/firestore'

export default function Profile({props}){
    const [watchLists, setWatchLists] = useState([{name: "asd"}])

    useEffect(() => {
        
        fetchWatchlists();
        
      }, [props.user]);
    
      async function fetchWatchlists() {
        if (props.user) {
          const docRef = doc(fireStoreDB, "UserWatchLists", props.user.uid + "WL");
          try {
              const docSnapshot = await getDoc(docRef); // Await the document snapshot
              const docData = docSnapshot.data(); // Access the data from the snapshot
              setWatchLists(docData);
            } catch (error) {
              alert("Error getting document:", error);
            }
        }
      }

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
                            
                        {watchLists.length > 0 &&
                            watchLists.map(watchlist=> (
                                <h1>{watchlist[0]}ge</h1>
                            ))}
                    </div>

                </div>
            
            }
            
        </div>
    )
}
