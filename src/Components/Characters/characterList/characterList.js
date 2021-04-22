import React from 'react';
import './characterList.css';
import {Link} from "react-router-dom";

function List({data,id}) {
  
    return (
      < >
          <nav className='list-nav'>
           {data.map((element,index)=>{
               return(
                <Link to={`/${id}/${index}/${element.title}`}  style={{ textDecoration: 'none' }}>
                <li className='list-li' key={index} >{element.title||element.name}</li>
                </Link>)
           })} 
           </nav>
      </>
    );
}
export default List