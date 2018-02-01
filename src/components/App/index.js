import React from 'react';
import { observer } from 'mobx-react';
import AccountList from '../AccountList';
import Header from '../Header';
import store from '../../store';

const App = props => {
	return (
		<div className='wrapper'>
			<Header store={ store } {...props } />
			<AccountList store={ store } {...props } />
		</div>
	);
};

export default App;
