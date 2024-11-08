import React from 'react'
import './App.css'
import HomePage from "./Pages/Home/HomePage"
// import {AboutPage} from "./Pages/About/AboutPage"
// import {ContactPage} from "./Pages/Contact/ContactPage"
// import {PortfolioPage} from "./Pages/Portfolio/PortfolioPage"
import  NavBar  from './NavBar/NavBar'


function App() {

  return (
    <div>
      <NavBar/>
      <HomePage/>
    </div>
  );
}

export default App

