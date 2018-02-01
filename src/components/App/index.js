import React from 'react';
import { observer } from 'mobx-react';


import AccountList from '../AccountList';
import Header from '../Header';
import Spinner from '../Spinner';
import store from '../../store';


const App = () => {
	return (
		<div className='wrapper'>
			<Header store={ store } />
			<AccountList store={ store } />
		</div>
	);
};

export default App;
