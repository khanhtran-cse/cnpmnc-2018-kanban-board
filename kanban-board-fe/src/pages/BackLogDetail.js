import React from 'react';
import { LocalStorageService } from '../services/LocalStorageService';
import { connect } from 'react-redux';
import HomeHeader from '../components/HomeHeader';
// import { sendRequest } from '../services/Http.services'

import swal from 'sweetalert2'

class BackLogDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: {
				id: -1,
				project: '',
				name: '',
				description: '',
				status: 0,
				start_date: "29/09/2018",
				end_date: "30/09/2018",
				assignTo: '',
				phase: ''
			}
		}
	}
	componentWillMount() {
		const id = parseInt(this.props.match.params.id, 10)	;
		const cloneTask = LocalStorageService.get('tasks') || [];

		const task = cloneTask.filter((item)=> item.id === id);
		if(task.length !== 0) {
			console.log(task[0]);
			this.setState({
				task: task[0]
			})
		} else {
			window.location.href = '/'
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		try {
			const cloneTask = LocalStorageService.get('tasks') || [];
			if(cloneTask.length !== 0) {
				let taskUpdate = cloneTask.map(item => {
					var data = item;
					if(data.id == this.state.task.id) {
						console.log("item before", item);
						data = this.state.task;
					}
					console.log("data after", data);
					return data
				});
				console.log(taskUpdate);
				LocalStorageService.set('tasks', taskUpdate);
				swal('Success!', 'Chỉnh sửa thành công', 'success');
			}
		} catch (error) {
			swal('Error!', 'Chỉnh sửa không thành công!', 'error')
		}
	}
	onChangeTitle = (e) => {
		console.log(this.state);
		this.setState({ 
			task:  {
				...this.state.task,
				name: e.target.value
			}
		})
	}
	onChangeDescription = (e) => {
		console.log(this.state);
		this.setState({ 
			task:  {
				...this.state.task,
				description: e.target.value
			}
		})
	}
	onChangeNameProject = (e) => {
		console.log(this.state);
		this.setState({ 
			task:  {
				...this.state.task,
				project: e.target.value
			}
		})
	}
	onChangeStart = (e) => {
		this.setState({ 
			task:  {
				...this.state.task,
				start_date: e.target.value
			}
		})
	}
	onChangeEnd = (e) => {
		this.setState({ 
			task:  {
				...this.state.task,
				end_date: e.target.value
			}
		})
	}
	onChangeStatus = (e) => {
		console.log(e.target.value);
		this.setState({ 
			task:  {
				...this.state.task,
				status: e.target.value
			}
		})
	}
	onChangePhase = (e) => {
		console.log(e.target.value);
		this.setState({ 
			task:  {
				...this.state.task,
				phase: e.target.value
			}
		})
	}
	onChangeAssign = (e) => {
		console.log(e.target.value);
		this.setState({ 
			task:  {
				...this.state.task,
				assignTo: e.target.value
			}
		})
	}
	
	render() {
		const {
			id,
			project,
			name,
			description,
			status,
			start_date,
			end_date,
		} = this.state.task
		return(
			<div>
				<HomeHeader />
				<div className="container">
					{/* Main content */}
					<div className="main-content">
						<div className="page-title">
							<span>Backlog Item #{id}</span>
						</div>
						<div className="create-board">
							<div className="row">
								<div className="col-xs-12 input-group">
									<label>Title</label>
									<input onChange={this.onChangeTitle} value={name} type="text" className="form-control" />
								</div>
								<div className="col-xs-12 input-group">
									<label>Description</label>
									<textarea  onChange={this.onChangeDescription} value={description} type="text" className="form-control"></textarea>
								</div>
								<div className="col-xs-12 input-group">
									<label>Name Project</label>
									<input onChange={this.onChangeNameProject} value={project} type="text" className="form-control" />
								</div>
								<div className="col-xs-6 input-group">
									<label>Start Time</label>
									<input onChange={this.onChangeStart} value={start_date} type="date" className="form-control" />
								</div>
								<div className="col-xs-6 input-group">
									<label>End Time</label>
									<input onChange={this.onChangeEnd} value={end_date}type="date" className="form-control" />
								</div>
								<div className="col-xs-6 input-group">
									<label>Status</label>
									<select value={status} onChange={this.onChangeStatus} className="input-group input-select">
										<option value="0" >Todo</option>
										<option value="1" >In process</option>
										<option value="2" >To verify</option>
										<option value="3" >Done</option>
										<option value="4" >Product Backlog</option>
										<option value="5" >Sprint Backlog</option>
									</select>
								</div>
								<div className="col-xs-6 input-group">
									<label>Priority</label>
									<select className="input-group input-select">
										<option value="0" >Normal</option>
										<option value="1">Low</option>
										<option value="2">Urgent</option>
										<option value="3">Important</option>
									</select>
								</div>
								<div className="col-xs-6 input-group">
									<label>Phase</label>
									<select onChange={this.onChangePhase} className="input-group input-select">
										<option value="FrontEnd" >Front End</option>
										<option value="BackEnd">Back End</option>
										<option value="Design">Design</option>
									</select>
								</div>
								<div className="col-xs-6 input-group">
									<label>Assign</label>
									<select onChange={this.onChangeAssign} className="input-group input-select">
										<option value="luctc">@luctc</option>
										<option value="khang">@khang</option>
										<option value="nam">@nam</option>
										<option value="tam">@tam</option>
									</select>
								</div>
								<div className="col-xs-12 btn-submit-create">
									<button className="btn btn-success" type="submit" onClick={(e) => {this.handleSubmit(e)}} >Update</button>
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

const mapStateToProps = state => {
	return { tasks: state.tasks };
};

export default connect(mapStateToProps)(BackLogDetail);

