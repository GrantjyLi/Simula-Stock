import { useState } from "react"
import defaultProfilePic from './defaultPic.png'
import './Header.css'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from '../../firebase.js'

function Header(props) {
    const [openMenu, setOpen] = useState(false)
    const [profilePic, setprofilePic] = useState(defaultProfilePic)
    const Menu = ["Profile", "Login", "Logout"]

    async function menu(option){
        switch(option){
            case "Login":
                const provider = await new GoogleAuthProvider()
                try{
                    let result = await signInWithPopup(auth, provider)
                    props.setUser(result)
                    setprofilePic(result.user.photoURL)
                }catch(error) {alert("Couldn't log in: ", error)}
                break
            
                case "Logout":
                try{
                    await signOut(auth)
                    props.setUser(null)
                    setprofilePic(defaultProfilePic)
                }catch(error){alert("Couldn't log out: ", error)}
                break
        }
    }
    
    return(
        <div className="Header">
            <div className="HeaderMain">
                <h1 id ="headerName">SimulaStock</h1>
                <div>
                    <img src={profilePic} alt= "" 
                    id ="login-icon" 
                    onClick={()=>{setOpen(!openMenu)}}/>
                    
                </div>
            </div>
            
            <h1 id ="pageName">{props.pageName}</h1>

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