import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes';
import 'normalize.css/normalize.css';
import './styles/index.scss';

render(<AppRoutes />, document.getElementById('app'));
