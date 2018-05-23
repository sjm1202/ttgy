import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import 'antd-mobile/dist/antd-mobile.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store"
import { Provider } from 'react-redux'
import './module/rem'
import '../node_modules/swiper/dist/css/swiper.min.css'
import  { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
