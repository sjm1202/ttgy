import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store"
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App />
        </Router>      
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
