import React, { Component } from 'react';
import './App.css';
import Logo from './Icons/Logo.svg';
import LoginForm from './Components/LoginForm.js';
import Jobs from './Components/Jobs.js'
import UserStore from './Stores/UserStore.js'

class App extends Component {

  // state here for if logged in 
  render () {
    return (
      <div className='Main'>
  
        {/* show this before login */}
        <div className='Header'>
          <img src={Logo} alt='Rapid Courier Logo' className='Logo'/>
          <span>Rapid Courier</span>
        </div>
  
        <LoginForm/>
  
        {/* show this after login */}
        <div className='HeaderBar'>
          <img src={Logo} alt='Rapid Courier Logo' className='Logo'/>
          <span>Rapid Courier</span>
        </div>
  
        <Jobs/>
  
  
      </div>
      
    );
  }
  
}

export default App;