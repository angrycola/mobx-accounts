import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import App from '../components/App';
import NotFound from '../components/NotFound';

const appRouter = () => (
	<Router>
		<div>
			<Switch>
				<Route path='/' exact component={ App } />
				<Route component={ NotFound } />
			</Switch>
		</div>
	</Router>
);

export default appRouter;
