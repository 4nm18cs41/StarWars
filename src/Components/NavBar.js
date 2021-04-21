import React from 'react'
import './component.css';
import img from'./Assests/logo.png';
const Navbar = ()=>
(
    <div>
        <nav>
            <img src={img} alt="" loading="lazy" className="Logo"></img>
            <hr className="line"></hr>
        </nav>
    </div>
)
export default Navbar;