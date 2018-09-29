import React, { Component } from 'react';
import { LocalStorageService } from '../services/LocalStorageService'
import { AuthenticateService  } from '../services/AuthenticateService'

class HomeHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: LocalStorageService.get('username')
		}
		console.log(this.state);
	}
	handleClick(event) {
		event.preventDefault();
		AuthenticateService.removeAuthenticate();
	}
	render() {
		return(
			<React.Fragment>
				<header>
					<div className="container">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/">Projects</a></li>
						</ul>
						<ul className="right">
							<li>Logged in as <a href="/">{this.state.username || '	'}</a></li>
							<li><a href="/" onClick={(e) => {this.handleClick(e)}}>Logout</a></li>
						</ul>
					</div>
				</header>
				<div className="main-header">
					<div className="container">
						<h3 className="site-title">Zero 08</h3>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default HomeHeader;