
import './index.scss'
import React, {Component} from 'react'
import { NavBar } from 'antd-mobile'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

class Login extends Component {
	
	
	render () {
		return (
			<div className='login'>
				<NavBar
               		mode="dark"
                	icon={<Link to = "/"><i className='fa fa-angle-left'></i></Link>}
                >手机号快捷登录</NavBar> 
				<LoginForm></LoginForm>
			</div>
		)
	}
	
}

export default Login
