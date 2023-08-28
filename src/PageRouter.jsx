import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QTC from './QTC/QTC.jsx';
import Profile from './Profile/Profile.jsx';

export default function PageRouter(){
    return(
        <div>
        <BrowserRouter> 
            <Routes>
                
                <Route index element = {<QTC />}/>
                
                <Route path="/profile" element = {<Profile />}/>

            </Routes>
        </BrowserRouter>
      </div>
    )
}