
import './index.scss'
import React, {Component} from 'react'


class Item extends Component {

	componentWillReceiveProps(props){
		this.setState({})
	}
	render () {
		let { list , title} = this.props;
	
		return (
			<div className='item-box'>
				<div className="title-box">
					<h3>{title}</h3>
					<div><span>全部</span>
					<i className="fa fa-angle-right"></i>
					</div>
				</div>
				<div className="content">
					{
						list.map(item => {
							return (
								<div className='item' key = {item.id}>
									<div className='img-box'>
										<img src={item.class_photo} alt=""/>
									</div>
									<p>{item.name}</p>
								</div>
							)
						})
					}	
				</div>
			</div>
		)
	}
	
}

export default Item
// v3/product/category_list?store_id_list=1&class_id=