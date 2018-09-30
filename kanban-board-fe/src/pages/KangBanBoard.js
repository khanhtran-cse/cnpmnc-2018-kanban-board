import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader';
const tasks = require('./backlog.json');

class KangBanBoard extends Component {
	render() {
		const todoTask = tasks.filter((item)=>item.status ==0);
		const inProcess = tasks.filter((item)=>item.status == 1);
		const review = tasks.filter((item)=>item.status == 2);
		const done = tasks.filter(item=>item.status == 3);

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

export default KangBanBoard