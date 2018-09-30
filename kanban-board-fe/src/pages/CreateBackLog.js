import React from 'react';
import HomeHeader from '../components/HomeHeader';

export default class CreateBackLog extends React.Component {
	render() {
		return(
			<div>
				<HomeHeader />
				<div className="container">
					{/* Main content */}
					<div className="main-content">
						<div className="page-title">
							<span>Create New Backlog Item</span>
						</div>
						<div className="create-board">
							<div className="row">
								<div className="col-xs-12">
									<div className="col-xs-3">
										<span>Title</span>
									</div>
									<div className="col-xs-9">
										<div className="form-control">
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					{/* End Main Content */}


					<div className="side-bar"></div>
				</div>
			</div>
		)
	}
}