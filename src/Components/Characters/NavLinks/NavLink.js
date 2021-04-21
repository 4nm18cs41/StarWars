import React,{ useState} from 'react';
import {Link,useParams} from "react-router-dom";
import "./NavLink.css"

const NavOptions = ['films','species','planets','characters','starships','vehicles']
const Options = ()=>
{
    const {id}=useParams()
    const[selected,setSelected]=useState(id);

    const sel=(event)=>{
        setSelected(event.target.innerText.toLowerCase())
    }
        return(
        <div className='options' >
          <nav className='options-nav'>
          {
            NavOptions.map((ele,index)=>{
              return (ele===selected?
                <li  className='options-sli' key={index}> {ele.toUpperCase()}</li>:
                <Link style={{ textDecoration: 'none' }} to={`/${ele}`}> 
                <li onClick={sel} className='options-li' key={index}> {ele.toUpperCase()}</li>
                </Link>)
            })
          }         
          </nav>
        </div>
        )
}
export default Options