import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="dt w-100 border-box pa3 ph5-ns">
				  <div className="dtc v-mid w-50 tl" href="#" title="Home">
				    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="http://www.espn.com" title="About">Home</a>
				    <a onClick={this.props.handleOpenModal} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">News</a>
				  </div>
				  <div className="dtc v-mid w-50 tr">
				    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Login</a>
				    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Sign Up</a>
				  </div>
				</nav>
			</div>
		)
	}

}


export default Navbar; 