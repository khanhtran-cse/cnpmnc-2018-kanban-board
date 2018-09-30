import React from 'react';
import HomeHeader from '../components/HomeHeader';

export default class CreateBackLog extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		// this.props.history.push({
		// 	pathname: '/',
		// });
		window.location.href = '/'
	}
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
								<div className="col-xs-12 input-group">
									<label>Title</label>
									<input type="text" className="form-control" />
								</div>
								<div className="col-xs-12 input-group">
									<label>Description</label>
									<textarea type="text" className="form-control"></textarea>
								</div>
								<div className="col-xs-12 input-group">
									<label>Name Project</label>
									<input type="text" className="form-control" />
								</div>
								<div className="col-xs-6 input-group">
									<label>Start Time</label>
									<input type="date" className="form-control" />
								</div>
								<div className="col-xs-6 input-group">
									<label>Start Time</label>
									<input type="date" className="form-control" />
								</div>
								<div className="col-xs-6 input-group">
									<label>Status</label>
									<select className="input-group input-select">
										<option value="0">Todo</option>
										<option value="1">In process</option>
										<option value="2">To verify</option>
										<option value="3">Done</option>
									</select>
								</div>
								<div className="col-xs-6 input-group">
									<label>Priority</label>
									<select className="input-group input-select">
										<option>Normal</option>
										<option>Low</option>
										<option>Urgent</option>
										<option>Important</option>
									</select>
								</div>
								<div className="col-xs-6 input-group">
									<label>Phase</label>
									<select className="input-group input-select">
										<option>Front End</option>
										<option>Back End</option>
										<option>Design</option>
									</select>
								</div>
								<div className="col-xs-6 input-group">
									<label>Assign</label>
									<select className="input-group input-select">
										<option>@luctc</option>
										<option>@khang</option>
										<option>@nam</option>
										<option>@tam</option>
									</select>
								</div>
								<div className="col-xs-12 btn-submit-create">
									<button className="btn btn-success" type="submit" onClick={(e) => {this.handleSubmit(e)}} >Create</button>
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