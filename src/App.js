import './App.css';
import React from 'react';
import Navbar from './Components/NavBar'
import Footer from "./Components/Footer.js"
import Categories from './Components/Categories'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Characters from "./Components/Characters/Charcters"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Router>
      <Route exact path='/' component={Categories}/>
      <Route  path='/:id' component={Characters}/> 
      </Router>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
export default App;
