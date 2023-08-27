import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App/App.jsx';
import Profile from './profile/profile.jsx';

export default function PageRouter(){
    return(
        <div>
        <BrowserRouter> 
            <Routes>
                
                <Route index element = {<App />}/>
                
                <Route path="/profile" element = {<Profile />}/>

            </Routes>
        </BrowserRouter>
      </div>
    )
}