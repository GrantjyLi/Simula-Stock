import { useState } from "react";
import loginImage from './images/login.png'
import './Header.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';

function Header({setUser}) {
    const [openMenu, setOpen] = useState(false)
    const Menu = ["Profile", "Login", "Logout"]

    async function menu(option){
        switch(option){
            case "Login":
                const provider = await new GoogleAuthProvider()
                try{
                    let result = await signInWithPopup(auth, provider)
                    setUser(result)
                }catch(error) {alert("Couldn't log in: ", error)}
                break
            case "Logout":
                try{
                    await signOut(auth)
                    setUser(null)
                }catch(error){alert("Couldn't log out: ", error)}
                break
        }
    }
    
    return(
        <div className="Header">
            <div className="HeaderMain">
                <h1 id="HeaderName">Quick Ticker Checker</h1>
                <div>
                    <img src={loginImage} alt="" 
                    id ="login-icon" 
                    onClick={()=>{setOpen(!openMenu)}}/>
                    
                </div>
            </div>

            {openMenu &&
                <ul id = "Drop_down" 
                onClick={()=>{setOpen(!openMenu)}}>

                {Menu.map((option)=>(
                    <li id = "dropDownItem">
                        <button 
                        id = "dropDownButton"
                        onClick={()=>{menu(option)}}>{option}
                        </button>
                        </li>
                    ))
                }
            </ul>
            }

        </div>
    )
}
export default Header;