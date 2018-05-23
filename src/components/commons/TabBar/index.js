import React, { Component } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
function NavItem (props) {
    let {item} = props;
    return (
        <li>
            <NavLink to={item.path} exact={item.isExact}>
                <i className={'fa fa-'+item.faClass}></i>
                <span>{item.title}</span>
            </NavLink>
        </li>
    )
}
class TabBar extends Component {
    render () {
        let { tabBarItems } = this.props;

        return (
            <ul className='tabBar'>
                {tabBarItems.map((item)=> <NavItem item={item} key={item.id}/> )}
            </ul>
        )
    }
}
TabBar.defaultProps = {
    tabBarItems: [
        {id:'0001',faClass:'home',title:'首页',path:'/',isExact:true},
        {id:'0002',faClass:'list',title:'分类',path:'/list',isExact:false},
        {id:'0003',faClass:'shopping-cart',title:'购物车',path:'/cart',isExact:false},
        {id:'0004',faClass:'user',title:'我的果园',path:'/mine',isExact:false},
    ]
}
export default TabBar