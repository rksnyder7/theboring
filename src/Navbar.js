import React, { Component } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			content: "story1"
		};

		this.handleOpenModal = this.handleOpenModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
	}

	handleOpenModal = () => {
		this.setState({ showModal: true });
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}

	nextStory = () => {
		this.setState({ content: "story2"});
	}
	
	render() {
		const { open } = this.state;
		return (
			<div>
				<nav class="dt w-100 border-box pa3 ph5-ns">
				  <a class="dtc v-mid w-50 tl" href="#" title="Home">
				    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="http://www.espn.com" title="About">Home</a>
				    <a onClick={this.handleOpenModal} class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Test</a>
				  </a>
				  <ReactModal
				  style={customStyles}
			           isOpen={this.state.showModal}
			           contentLabel="Minimal Modal Example"
			        >
          <div>{this.state.content}</div>

          <button onClick={this.handleCloseModal}>close</button>
			<button onClick={this.nextStory}>Next</button>
				  </ReactModal>
				  <div class="dtc v-mid w-50 tr">
				    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Login</a>
				    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Sign Up</a>
				  </div>
				</nav>
			</div>
		)
	}

}


export default Navbar; 