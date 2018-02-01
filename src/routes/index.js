import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import App from '../components/App';
import AccountList from '../components/AccountList';
import NotFound from '../components/NotFound';
import store from '../store';
import history from './history.js';


const appRouter = () => (
	<Router history={ history }>
		<div>
			<Switch>
				<Route path='/' exact component={ App } />
				<Route path='/:id/accounts' component={ App } />
				<Route component={ NotFound } />
			</Switch>
		</div>
	</Router>
);

export default appRouter;
