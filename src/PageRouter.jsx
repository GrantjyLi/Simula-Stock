import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QTC from './QTC/QTC.jsx';
import Profile from './Profile/Profile.jsx';
import { useState } from 'react';
import { fireStoreDB, auth } from './firebase.js';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function PageRouter(){
    
  const [user, setUser] = useState(null)

  const userExist = async ()=>{
    const userRef = doc(fireStoreDB, "Users", user.user.uid);
    const docRef = await getDoc(userRef);
    if(!docRef.exists()){
        try {
            await setDoc(userRef, {})
        } catch (e) {console.error("Error creating user profile: ", e); return -1}
        try {
            await setDoc(doc(fireStoreDB, "UserStockLists", user.user.uid + "LN"), {numLists: 1})
        } catch (e) {console.error("Error creating user list data: ", e); return -1}
        try {
          await setDoc(doc(fireStoreDB, "UserStockLists", user.user.uid + "LD"), {})
      } catch (e) {console.error("Error creating user list data: ", e); return -1}
    }

    const numListDocRef = doc(fireStoreDB, "UserStockLists", user.user.uid + "LN")
    try {
      const numListData = await getDoc(numListDocRef);
      return numListData.data().numLists;
    } catch (e) {
        console.error("Error getting numLists: ", e);
        return -1;
    }
  }
    const login = async (updatePic)=>{
      const provider = await new GoogleAuthProvider()
      try{
          let result = await signInWithPopup(auth, provider)
          setUser(result.user)
          updatePic(result.user.photoURL)
        
      }catch(error) {alert("Couldn't log in: ", error)}
    }

    const props = {
      setUser : setUser,
      user : user,
      userExist : userExist,
      login : login
    }

    return(
        <div>
        <BrowserRouter> 
            <Routes>
                
                <Route index element = {<QTC props = {props}/>}/>

                <Route path="/profile" element = {<Profile props = {props}/>}/>

            </Routes>
        </BrowserRouter>
      </div>
    )
}