
import './index.scss'
import React, {Component} from 'react'
import Nav from './Nav'
import ItemBox from './ItemBox'

import axios from 'axios'
class ContentBox extends Component {
	constructor (props) {
		super(props)
		this.state = {
			navs : [],
			list : [],
			title : '',
			n : ''
		}
		this.getLists = this.getLists.bind(this)
	}
	getLists (id){
		id = id ? id :'303'
		axios.get('/sjm/v3/product/category_list?store_id_list=1', {
			params:{ 'class_id': id }
		}).then(res => {
			this.setState({
				navs : res.data.data.classOneGroup,
				list : res.data.data.childrenList[0].class3Group,
				title : res.data.data.childrenList[0].class2Name.name,
				n : id
			})
		})
	}
	componentWillMount (){
		this.getLists();
	}
	render () {
		return (
			<div>
				<Nav navs = { this.state.navs} getLists={this.getLists} n = {this.state.n}/>
				<ItemBox list = {this.state.list} title = { this.state.title}/>
			</div>
		)
	}
	
}

export default ContentBox
