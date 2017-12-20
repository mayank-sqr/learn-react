import React, { Component } from 'react';
import Callouts from './containers/Callouts';
import './home.css';

class Home extends Component {

	render() {
		return(
			<div id="home" className="container">
				<Callouts />
			</div>
			);
	}
}

export default Home;