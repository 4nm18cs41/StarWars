import {React,useEffect,useState} from "react"
import Options from "./Options"


function Characters() {
  const [pagechange,setpageChange]=useState(false)

  const setState = ()=>
  {
    if(pagechange===false)
      setpageChange(true);

  }
  useEffect(()=>{
      setState()
  })
      return (
        <div className='highlight'>
          <Options/>
        </div>
      );
    }
export default Characters