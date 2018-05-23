
import './index.scss'
import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actionCreator from '../../../../store/user/actionCreator';
import { Toast } from 'antd-mobile'
class LoginForm extends Component {
	constructor(props) {
		super (props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		e.preventDefault();
		let { login } = this.props;
		login({
			username : this.username.value,
			password : this.password.value,
			success : () => {
				Toast.success('登录成功！',1);
			},
			fail : () => {
				Toast.success('登录失败！',1);
			}
		})
	}
	render () {
		return (
			<div className = "login-form">
					<form 
						className = "login-form-box"
						onSubmit = {this.handleSubmit}>
						<div> 
							<i className='fa fa-user-o'></i>
							<input type='text' 
								placeholder="输入用户名"
							 	ref={el => this.username = el}/>
						</div>
						<div> 
							<i className='fa fa-key'></i>
							<input type='text' 
								placeholder="输入密码"
								ref={el => this.password = el}/>
						</div>
						<button type = "submit" className = "btn">登陆</button>
						<button type = "reset" className = "btn">重置</button>
                    </form>

            </div>
		)
	}
	
}

export default connect(state => state, 
	dispatch => bindActionCreators(actionCreator, dispatch)
)(LoginForm)
