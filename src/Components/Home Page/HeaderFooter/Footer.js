import React from "react"
import "./headfoot.css"
import footerLogo from '../../Assests/footer_logo.png'
const Footer = ()=>
{
    return(
        <>
            <hr className="footerLine"></hr>
                <img src={footerLogo} alt="" loading="lazy" className="fLogo"></img>
                <pre className="fcontent">TERMS OF USE      LEGAL NOTICE      PRIVACY POLICY      STAR WARS HELPDESK      STAR WARS AT DISNEY STORE</pre>
                <pre className="fcontent2">TM & CO Lucasfilms.Ltd . All Rights Reserved</pre>
        </>
    )
}
export default Footer