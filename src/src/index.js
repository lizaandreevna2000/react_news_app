import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css';
import { routing } from './router';

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
