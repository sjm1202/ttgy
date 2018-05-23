import './index.scss'
import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            params: {}
        }
    }
    componentDidMount(){
        console.log(this.props,2222);
        let { params}  = this.props.location;
        console.log(params,444)
        if(params){
            console.log(params,555)
            this.setState({
                params: params
            })
        }

    }
    render(){
        console.log(this.props,2222);
        let { params } = this.state
        console.log(params,1111);
        return (

            <div className='detail_header'>
                <div className="back">
                    <i className="fa fa-chevron-left"></i>
                </div>
                <ul className="nav">
                    <li><NavLink to={{pathname:'/detail/goods',params:params}}>商品</NavLink></li>
                    <li><NavLink to="/detail/det">详情</NavLink></li>
                    <li><NavLink to="/detail/mark">评价</NavLink></li>
                </ul>
                <div className="more">
                    <i className="fa fa-reorder"></i>
                </div>
            </div>
        )
    }

}
export default withRouter(Header)