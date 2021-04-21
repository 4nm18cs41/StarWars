import {React} from "react"

import NavLink from "./NavLinks/NavLink"
import CharacterNavBar from "./CharacterNavBar/CharacternavBar"
function Characters() {

      return (
        <>
        <header className="head">
          <CharacterNavBar/>
        </header>
          <div className='highlight'>
            <NavLink/>
            
          </div>
        </>
      )
    }
export default Characters