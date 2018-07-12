import React, { Component } from 'react';
import './App.css';
import NewsModal from './NewsModal.js';
import Navbar from './Navbar';
import Description from './Description';
import 'tachyons';


class App extends Component {	
  constructor() {
  	super();
  	this.state = {
  		showModal: false
  	};

  }

  	handleOpenModal = () => {
		this.setState({ showModal: true });
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

  render() {
    return (
      <div className="background">
      	<Navbar handleOpenModal={this.handleOpenModal}/>
      	<NewsModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
      	<Description />
      </div>
    );
  }
}


export default App;


      	// <Homepage />
// style={{backgroundImage: 'url(' + imgURL + ')'}} 

		// this.handleOpenModal = this.handleOpenModal.bind(this)
		// this.handleCloseModal = this.handleCloseModal.bind(this)