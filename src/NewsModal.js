import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Stories } from './NewsStories';

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


class NewModel extends Component {
		constructor() {
		super();
		this.state = {
			content: 1
		};
	}


	nextStory = () => {
		this.setState({ content: this.state.content + 1 });
	}

	backStory = () => {
		this.setState({ content: this.state.content - 1});
	}

	render() {
		return (
			<ReactModal
				style={customStyles}
				isOpen={this.props.showModal}
				contentLabel="Minimal Modal Example"
				ariaHideApp={false}
			>
			
            <div>{Stories[this.state.content]}</div>
			<button onClick={this.backStory}>Back</button>
			<button onClick={this.nextStory}>Next</button>
	        <button onClick={this.props.handleCloseModal}>close</button>

			</ReactModal>
		)
	}
}

export default NewModel;

