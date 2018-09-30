import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import { AuthenticateService } from '../services/AuthenticateService'
import { LocalStorageService } from '../services/LocalStorageService';
// const tasks = require('./backlog.json');

class KangBanBoard extends Component {
	constructor(props) {
    super(props);
    this.state = {
			isAuth: AuthenticateService.isAuthenticate(),
			tasks: LocalStorageService.get('tasks')
		}
	}
	componentWillMount() {
		if(!this.state.isAuth) {
			AuthenticateService.removeAuthenticate();
		}
		// console.log("tasks local: ", this.state.tasks);
	}
	componentDidMount() {
		// this.props.dispatch({
		// 	type: 'UPDATE_TASK',
		// 	task: {
		// 		"id": 12,
		// 		"project": "Kanban Axon",
		// 		"name": "Test",
		// 		"description": "Test",
		// 		"status": 1,
		// 		"start_date": "29/09/2018",
		// 		"end_date": "30/09/2018",
		// 		"assignTo": "Luc",
		// 		"phase": "Backend"
		// 	}
		// })
	}
	render() {
		const todoTask = this.state.tasks.filter((item)=>item.status === 0);
		const inProcess = this.state.tasks.filter((item)=>item.status === 1);
		const review = this.state.tasks.filter((item)=>item.status === 2);
		const done = this.state.tasks.filter(item=>item.status === 3);

		const todoView = [];
		const inProcessView = [];
		const reviewView = [];
		const doneView = [];

		todoTask.forEach(item=>{
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">{item.project}</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			todoView.push(view);
		});

		inProcess.forEach(item => {
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">{item.project}</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			inProcessView.push(view);
		});

		review.forEach(item => {
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">{item.project}</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			reviewView.push(view);
		});

		done.forEach(item => {
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">{item.project}</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			doneView.push(view);
		});
		
		return (
			<React.Fragment>
				<HomeHeader />
					<div className="container">
						<div className="main-content">
							<div className="page-title">
								<span>Kangban Board</span>
								<a href="/create-backlog" className="create-new-item">Create New Item</a>
							</div>
							<div className="wrapper-board">
								<div className="row">
									<div className="item">
										<div className="col-title">Todo</div>
											{todoView}
									</div>

									{/* Column 2 */}
									<div className="item">
									<div className="col-title">In Process</div>
										{inProcessView}
									</div>

									{/* Columne 3 */}

									<div className="item">
										<div className="col-title">Bugs</div>
										{reviewView}
									</div>

									{/* Column 4 */}
									<div className="item">
										<div className="col-title">Done</div>
										{doneView}
									</div>
								</div>
							</div>
						</div>
						<div className="side-bar"></div>
						<div className="clearfix"></div>
					</div>
			</React.Fragment>
		)
	}
}

// export default KangBanBoard
const mapStateToProps = state => {
	console.log(state);
	return { tasks: state.tasks };
};

export default connect(mapStateToProps)(KangBanBoard);