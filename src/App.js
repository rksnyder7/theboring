import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js';
import Navbar from './Navbar.js';
import 'tachyons';


class App extends Component {	
  render() {
    return (
      <div>
      	
      	<Homepage/>
      </div>
    );
  }
}

export default App;

// style={{backgroundImage: 'url(' + imgURL + ')'}} 