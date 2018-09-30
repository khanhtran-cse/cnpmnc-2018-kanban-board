import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader';
import { AuthenticateService } from '../services/AuthenticateService'

class KangBanBoard extends Component {
	constructor(props) {
    super(props);
    this.state = {
      isAuth: AuthenticateService.isAuthenticate(),
		}
	}
	componentWillMount() {
		if(!this.state.isAuth) {
			AuthenticateService.removeAuthenticate();
		}
	}
	render() {
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
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
									</div>

									{/* Column 2 */}
									<div className="item">
									<div className="col-title">In Process</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
									</div>

									{/* Columne 3 */}

									<div className="item">
										<div className="col-title">Bugs</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
									</div>

									{/* Column 4 */}
									<div className="item">
										<div className="col-title">Done</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
										<div className="backlogs-item">
											<div className="project">01. Project Axon</div>
											<div className="title">Component Login</div>
											<div className="due-date">Due date: <span>22/09/2018</span></div>
											<div className="phase">Phase: <span>Front-End</span></div>
											<div className="assign">@luctc - </div>
										</div>
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