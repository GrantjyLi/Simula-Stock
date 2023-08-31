import { useState } from "react"
import defaultProfilePic from './defaultPic.png'
import './Header.css'
import { signOut } from "firebase/auth"
import { auth } from '../../firebase.js'

function Header(props) {
    const [openMenu, setOpen] = useState(false)
    const [profilePic, setprofilePic] = useState(defaultProfilePic)
    const Menu = ["Profile", "Login", "Logout"]

    async function menu(option){
        switch(option){
            case "Login":
                await props.mainProps.login(setprofilePic)
                break
            
            case "Logout":
                try{
                    signOut(auth)
                    props.mainProps.setUser(null)
                    setprofilePic(defaultProfilePic)
                }catch(error){console.log("Couldn't log out: ", error)}
                break
            default:
                alert("Couldn't log out/in at this time: ")
        }
    }
    
    return(
        <div className="Header">
            <div className="HeaderMain">
                <h1 id ="headerName">SimulaStock</h1>
                <div>
                    <img src={profilePic} alt= "defaultProfilePic" 
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
            <h1 id ="pageName">{props.pageName}</h1>

        </div>
    )
}
export default Header;