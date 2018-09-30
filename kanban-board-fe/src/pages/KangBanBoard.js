import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import { AuthenticateService } from '../services/AuthenticateService'
import { LocalStorageService } from '../services/LocalStorageService';

import { sendRequest } from '../services/Http.services'

import swal from 'sweetalert2';

// const tasks = require('./backlog.json');

class KangBanBoard extends Component {
	constructor(props) {
    super(props);
    this.state = {
			isAuth: AuthenticateService.isAuthenticate(),
			backlogs:[],
		}
		this.userId = AuthenticateService.getUserId();
	}
	componentWillMount() {
		if(!this.state.isAuth) {
			AuthenticateService.removeAuthenticate();
		}
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
		console.log(this.userId);
		sendRequest('GET',`items/backlogs?userId=${this.userId}`,{}).then(data=>{
			console.log(data);
			data = data.data;
			if(data.code == 0){
				this.setState({ backlogs: data.data });
			} else{
				swal('Error!', 'Đã xảy ra lỗi.', 'error')
			}
		});
	}

	render() {
		const tasks = this.state.backlogs;
		const todoTask = tasks.filter((item)=>item.status ==0);
		const inProcess = tasks.filter((item)=>item.status == 1);
		const review = tasks.filter((item)=>item.status == 2);
		const done = tasks.filter(item=>item.status == 3);
		const productBL = tasks.filter(item=>item.status == 4);
		const sprintBL = tasks.filter(item=>item.status == 5);

		const todoView = [];
		const inProcessView = [];
		const reviewView = [];
		const doneView = [];
		const productBLView = [];
		const sprintBLView = [];

		todoTask.forEach(item=>{
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">
					<a href={`/backlog/${item.id}`}>{item.project}</a>
				</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			todoView.push(view);
		});

		inProcess.forEach(item => {
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">
					<a href={`/backlog/${item.id}`}>{item.project}</a>
				</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			inProcessView.push(view);
		});

		review.forEach(item => {
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">
					<a href={`/backlog/${item.id}`}>{item.project}</a>
				</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			reviewView.push(view);
		});

		done.forEach(item => {
			const view = <div className="backlogs-item" key={item.id}>
				<div className="project">
					<a href={`/backlog/${item.id}`}>{item.project}</a>
				</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			doneView.push(view);
		});

		productBL.forEach(item => {
			const product = <div className="backlogs-item" key={item.id}>
				<div className="project">
					<a href={`/backlog/${item.id}`}>{item.project}</a>
				</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			productBLView.push(product);
		});

		sprintBL.forEach(item => {
			const sprint = <div className="backlogs-item" key={item.id}>
				<div className="project">
					<a href={`/backlog/${item.id}`}>{item.project}</a>
				</div>
				<div className="title">{item.name}</div>
				<div className="due-date">Due date: <span>{item.start_date}</span></div>
				<div className="phase">Phase: <span>{item.phase}</span></div>
				<div className="assign">@{item.assignTo} - </div>
			</div>

			sprintBLView.push(sprint);
		});
		
		return (
			<React.Fragment>
				<HomeHeader />
					<div className="container-fuild">
						<div className="main-content board">
							<div className="page-title">
								<span>Kangban Board</span>
								<a href="/create-backlog" className="create-new-item">Create New Item</a>
							</div>
							<div className="wrapper-board">
								<div className="row">
									<div className="item">
										<div className="col-title">Product BL</div>
										{productBLView}
									</div>
									<div className="item">
										<div className="col-title">Sprint BL</div>
										{sprintBLView}
									</div>
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
						{/* <div className="side-bar"></div> */}
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