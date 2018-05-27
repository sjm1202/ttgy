import './index.scss'
import React, {Component} from 'react'
import { NavLink, withRouter, Link } from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: ''
        }
    }
    componentWillMount(){
        let id = this.props.location.pathname.split('/')[3];
        let { history } = this.props;
        if( id ){
            this.setState({
                id: id
            })
        }
    }
    componentWillReceiveProps(props){
        let id = props.location.pathname.split('/')[3];
        let { history } = this.props;
        if( id ){
            this.setState({
                id: id
            })
        }
    }
    componentDidMount(){
    }
    render(){
        let { id } = this.state
        return (
            <div className='detail_header'>
                <Link to='/'>
                    <div className="back">
                        <i className="fa fa-chevron-left"></i>
                    </div>
                </Link>
                <ul className="nav">
                    <li><NavLink to={{pathname:'/detail/goods/'+id}}>商品</NavLink></li>
                    <li><NavLink to={{pathname:'/detail/det/'+id}}>详情</NavLink></li>
                    <li><NavLink to={{pathname:'/detail/comment/'+id}}>评价</NavLink></li>
                </ul>
                <div className="more">
                    <i className="fa fa-reorder"></i>
                </div>
            </div>
        )
    }

}
export default withRouter(Header)