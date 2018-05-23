
import './index.scss';
import React, {Component} from 'react';
import ContentBox from './ContentBox';
import TabBar from '../../commons/TabBar'

class List extends Component {
	render () {
		return (
			<div className="list">
				<header>
					<div className="search">
						<i className="fa fa-search"></i><span>奇异果</span>
					</div>
				</header>
				<ContentBox></ContentBox>
				<TabBar/>
			</div>
		)
	}

}

export default List;
