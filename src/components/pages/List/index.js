
import './index.scss';
import React, {Component} from 'react';
import ContentBox from './ContentBox';

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
			</div>
		)
	}

}

export default List;
