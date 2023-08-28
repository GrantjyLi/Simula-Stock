import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QTC from './QTC/QTC.jsx';
import Profile from './Profile/Profile.jsx';
import { useState } from 'react';

export default function PageRouter(){
    
  const [user, setUser] = useState(null)
    return(
        <div>
        <BrowserRouter> 
            <Routes>
                
                <Route index element = {<QTC setUser = {setUser} user = {user}/>}/>
                <Route path="/profile" element = {<Profile setUser = {setUser} user = {user}/>}/>

            </Routes>
        </BrowserRouter>
      </div>
    )
}