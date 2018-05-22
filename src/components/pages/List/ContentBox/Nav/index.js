
import './index.scss'
import React, {Component} from 'react'


class Nav extends Component {
	
	render () {
		let { navs, getLists, n } = this.props;
		return (
			<div className="nav-box">
				<ul>					
					{
						navs.map( (item,index) => {
							return <li key={item.id}
							onClick = {getLists.bind(this,item.id)}
							className = {item.id === n ? "active" : ''}
							>
							{item.name}
							</li>
						})
					}					
				</ul>
			</div>
		)
	}	
}

export default Nav
