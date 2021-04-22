import {React,useState} from "react"
import {Route,useParams} from 'react-router-dom'
import NavLink from "./NavLinks/NavLink"
import CharacterNavBar from "./CharacterNavBar/CharacternavBar"
import FetchCharacterData from "../Characters/fetchCharaacterdata/fetchCharacterData"
function Characters() {
  const [collectdata,setCollectData]=useState({});
  const {id} = useParams()


  const getCollectedData=(data)=>{
    setCollectData(data);
  }
  return (
    <>
      <header className="head">
        <CharacterNavBar/>
      </header>
      <div className='highlight'>
        <NavLink/>    
        {console.log(id)}
        <Route exact path='/:id' ><FetchCharacterData getCollectedData={getCollectedData} id={id}/> </Route>
        <Route  path={`/:id/:id2/:id3`} > </Route>
      </div>
    </>
  )
}
export default Characters