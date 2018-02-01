import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import App from './components/App';
import './styles/index.scss';
import AppRouter from './routes';

render(
	<AppRouter />,
	document.getElementById('root')
);
