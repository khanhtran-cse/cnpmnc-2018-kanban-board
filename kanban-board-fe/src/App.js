import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import KangBanBoard from './pages/KangBanBoard';
import CreateBackLog from './pages/CreateBackLog';
import BackLogDetail from './pages/BackLogDetail';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthenticateService } from './services/AuthenticateService'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: AuthenticateService.isAuthenticate(),
    }
  }
  render() {
    const { isAuth } = this.state
    return (
      <React.Fragment>
        {
          !isAuth &&
          <div className="app">
						<Switch>
							<Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
							<Route render={() => (<Redirect to="/login"/>)}/>
						</Switch>
					</div>
        }
        {
          isAuth &&
          <div className="app">
            <Switch>
              
              <Route exact path='/' component={KangBanBoard} />
              <Route exact path='/create-backlog' component={CreateBackLog} />
              <Route exact path='/backlog/:id' component={BackLogDetail} />
              
              <Route render={() => (<Redirect to="/"/>)}/>
            </Switch>
          </div>
        }
      </React.Fragment>
    );
  }
}

// export default App;
const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);