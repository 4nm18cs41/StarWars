import './App.css';
import React from 'react';
import Footer from "./Components/Home Page/HeaderFooter/Footer.js"
import Categories from './Components/Home Page/Content/Categories'
import {Route} from 'react-router-dom'
import Characters from "./Components/Characters/Charcters"

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Categories}/>
      <Route  path='/:id' component={Characters}/> 
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
export default App;
