import React from 'react';
import HomeScreen from './container/HomeScreen'
import FavouriteScreen from './container/FavouriteScreen'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style/home.css'

function App() {
  return (
    <div>
      <div>
      <Router>
        <div className="navBar">
          <div className="navBarHomeOption">
            <Link to="/home" className="homeButton" >  home  </Link>
          </div>
          <div className="navBarFavOption">
            <Link to="/favourite" className="favButton">  favourite  </Link>
          </div>
        </div>
        
        <Route path="/home" component={HomeScreen} exact strict />
        <Route path="/favourite" component={FavouriteScreen} exact strict />
      </Router>
      </div>
      <footer className="footer">
         Copyright@2019, Weather Application
        </footer>
    </div>
  );
}

export default App;
