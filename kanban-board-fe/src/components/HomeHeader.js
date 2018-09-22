import React, { Component } from 'react';

class HomeHeader extends Component {
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
							<li>Logged in as <a href="/">congluc19297@gmail.com</a></li>
							<li><a href="/">Logout</a></li>
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