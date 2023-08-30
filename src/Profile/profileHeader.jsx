import { useState } from "react"
import defaultProfilePic from './defaultPic.png'
import './profileHeader.css'
import { signOut } from "firebase/auth"
import { auth } from '../firebase.js'

function Header(props) {
    const [openMenu, setOpen] = useState(false)
    const [profilePic, setprofilePic] = useState(defaultProfilePic)
    const Menu = ["Profile", "Login", "Logout"]

    async function menu(option){
        switch(option){
            case "Login":
                    props.mainProps.login()
                break
            
            case "Logout":
                try{
                    await signOut(auth)
                    props.mainProps.setUser(null)
                    setprofilePic(defaultProfilePic)
                }catch(error){alert("Couldn't log out: ", error)}
                break
            default:
                alert("Couldn't log out/in at this time: ")
        }
    }
    
    return(
        <div className="profileHeader">
            <div className="profileHeaderMain">
                <h1 id ="profileheaderName">SimulaStock</h1>
                <div>
                    <img src={profilePic} alt= "" 
                    id ="login-icon" 
                    onClick={()=>{setOpen(!openMenu)}}/>
                    
                </div>
            </div>

            {openMenu &&
                <ul id = "profileDrop_down" 
                onClick={()=>{setOpen(!openMenu)}}>

                {Menu.map((option)=>(
                    <li id = "profiledropDownItem">
                        <button 
                            id = "profiledropDownButton"
                            onClick={()=>{menu(option)}}>{option}
                        </button>
                    </li>
                    ))
                }
            </ul>
            }
            <h1 id ="profilepageName">{props.pageName}</h1>

        </div>
    )
}
export default Header;