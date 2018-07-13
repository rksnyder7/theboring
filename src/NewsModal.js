import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Stories } from './NewsStories';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-45%',
    transform             : 'translate(-50%, -50%)'
  }
};


class NewModel extends Component {
		constructor() {
		super();
		this.state = {
			content: 0
		};
	}


	nextStory = () => {
		this.setState({ content: this.state.content + 1 });
	}

	backStory = () => {
		this.setState({ content: this.state.content - 1});
	}

            
	render() {

		let modalButtons = ['', <i className='fr fa fa-angle-double-right' onClick={this.nextStory}></i>, <i className='fl fa fa-angle-double-left' onClick={this.backStory}></i>,''];
		let buttonsVal = 1
		if (this.state.content >= Stories.length - 1 ) {
			buttonsVal = 2;
		} else if (this.state.content === 0) {
			buttonsVal = 0;
		}

		return (
			<ReactModal
				style={customStyles}
				isOpen={this.props.showModal}
				contentLabel="Minimal Modal Example"
				ariaHideApp={false}
			>
	            <i onClick={this.props.handleCloseModal} className='fa fa-close fr'></i>
	            <h2 className='fl w-100'>{Stories[this.state.content].Title}</h2>

	            <div class="fl w-100 w-50-m w-50-l pa2">
		            <p>{Stories[this.state.content].Description}</p>
	            </div>
	            <div class="fl w-100 w-50-m w-50-l pa2">
		            <img alt='hold' height='' width='' src={Stories[this.state.content].Picture} />
	            </div>

	         <div className='pb2 fl w-100'>
	            <a  target='_blank' href={Stories[this.state.content].Link}>Full Story</a>
	         </div>

	         <div>
	         	{modalButtons[buttonsVal]}
	         	{modalButtons[buttonsVal+1]}
	         </div>

			</ReactModal>
		)
	}
}

export default NewModel;

		        // <button className='fl' onClick={this.props.handleCloseModal}>close</button>

    //         <div className='modalButtons'>
				// <button className='fl' onClick={this.backStory}>Back</button>
				// <button className='fr' onClick={this.nextStory}>Next</button>
		  //   </div>