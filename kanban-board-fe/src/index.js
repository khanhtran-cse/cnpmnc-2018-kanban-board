import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<BrowserRouter>
		<Provider store={createStore(reducers)}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
