
import './index.scss'
import React, {Component} from 'react'
import TabBar from '../../../commons/TabBar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../../../store/user/actionCreator';


class User extends Component {
	
	
	render () {
		let {userInfo} = this.props;
		if(!userInfo){
			return null;
		}
		return (
			<div className="user">
				<header>
					<div className="user-info">
						<div className='user-img'>
							<i className="fa fa-user-circle-o"></i>
						</div>
						<div className='user-name'>
							<p>{userInfo.username}
								<button type='button' 
								onClick = {this.props.exit}>退出</button> 
							</p>
							<p>{userInfo.signature}</p>
						</div>	
						<div className='erweima'>
							<i className='fa fa-qrcode'></i>
							<p>会员码</p>
						</div>
					</div>
				</header>
				<div className='banner'>
					<div>
						<span>积分</span>
						<i>0</i>
					</div>
					<div>
						<span>余额</span>
						<i>0</i>
					</div>
					<div>
						<span>优惠券</span>
						<i>0</i>
					</div>
					<div>
						<span>礼品</span>
						<i>0</i>
					</div>
				</div>
				<div className='order'>
					<div>
						<i className='fa fa-file-text-o first'></i>
						<span>我的订单</span>
					</div>
					<div>
						<span>全部订单</span>
						<i className='fa fa-chevron-right last'></i>
					</div>
				</div>
				<div className='classify'>
					<ul>
						<li>
							<i className='fa fa-money'></i>
							<span>代付款</span>
						</li>
						<li>
							<i className='fa fa-calendar-minus-o'></i>
							<span>代发货</span>
						</li>
						<li>
							<i className='fa fa-truck'></i>
							<span>代收货</span>
						</li>
						<li>
							<i className='fa fa-commenting-o'></i>
							<span>待评价</span>
						</li>
						<li>
							<i className='fa fa-refresh'></i>
							<span>退换货</span>
						</li>
					</ul>
				</div>
				<div className='item-box'>
					<div className='item'>
						<div>
							<i className='fa fa-diamond first'></i>
							<span>会员中心</span>
						</div>
						<div>
							<span>享等级特权</span>
							<i className='fa fa-chevron-right last'></i>
						</div>
					</div>
					<div className='item'>
						<div>
							<i className='fa fa-universal-access first'></i>
							<span>企业购</span>
						</div>
						<div>
							<span></span>
							<i className='fa fa-chevron-right last'></i>
						</div>
					</div>
					<div className='item'>
						<div>
							<i className='fa fa-headphones first'></i>
							<span>在线客服</span>
						</div>
						<div>
							<span></span>
							<i className='fa fa-chevron-right last'></i>
						</div>
					</div>
				</div>
				<TabBar/>
			</div>
			
				
			
		)
	}
	
}

export default connect(state => state.user,
	 dispatch => bindActionCreators(actionCreator, dispatch))(User);
