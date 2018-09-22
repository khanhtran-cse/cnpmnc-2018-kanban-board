import React, { Component } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import KangBanBoard from './pages/KangBanBoard';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
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
              <Route render={() => (<Redirect to="/"/>)}/>
            </Switch>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default App;
