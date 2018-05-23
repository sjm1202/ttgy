import React, { Component } from 'react'
import {connect} from 'react-redux'

import './index.scss'
import {
    Route, Switch
} from 'react-router-dom';

import Login from './Login';
import User from './User'
class Mine extends Component {
    componentWillReceiveProps (props) {
		
		if( props.userInfo !== this.props.userInfo || props.location.pathname !== this.props.location.pathname) {
			this.checkLogin(props)
		}
	}
    componentWillMount (){
        this.checkLogin();
    }
    checkLogin (props){
        
        let _props = props || this.props;
        if( !_props.userInfo ) {
            _props.history.replace( '/mine/login');
        } else {
            _props.history.replace('/mine/user');
        }
    }
    
    render () {
        return (
            <div className="mine">
                <Switch>
                    <Route path = {'/mine/login'} component={Login}/>
                    <Route path = {'/mine/user'} component={User}/>
                </Switch>              
            </div>
        )
    }
}
export default connect( state => state.user)(Mine)