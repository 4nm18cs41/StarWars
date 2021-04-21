import {React} from "react"
import Logo from "../../Assests/logo.png"
import './characterNavBar.css'
const CharacterNavBar = ()=>
{

    return(
            <>
            <img src={Logo} alt="Logo" className="NavLogo" loading="lazy"></img>
            <hr className="topLine"></hr>
            <hr className="bottomLine"></hr>
            </>
    )
}
export default CharacterNavBar