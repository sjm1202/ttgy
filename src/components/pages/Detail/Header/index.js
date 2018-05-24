import './index.scss'
import React, {Component} from 'react'
import { NavLink, withRouter, Link } from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            params: {}
        }
    }
    componentWillMount(){
        let { params}  = this.props.location;
        let { history } = this.props;
        if(params){
            this.setState({
                params: params
            })
        }else{
            history.replace('/')
        }
    }
    componentWillReceiveProps(){
        let { params }  = this.props.location;
        let { history } = this.props;
        if(params){
            this.setState({
                params: params
            })
        }else{
            history.replace('/')
        }
    }
    componentDidMount(){
    }
    render(){
        let { params } = this.state
        return (
            <div className='detail_header'>
                <Link to='/'>
                    <div className="back">
                        <i className="fa fa-chevron-left"></i>
                    </div>
                </Link>
                <ul className="nav">
                    <li><NavLink to={{pathname:'/detail/goods',params:params}}>商品</NavLink></li>
                    <li><NavLink to={{pathname:'/detail/det',params:params}}>详情</NavLink></li>
                    <li><NavLink to={{pathname:'/detail/comment',params:params}}>评价</NavLink></li>
                </ul>
                <div className="more">
                    <i className="fa fa-reorder"></i>
                </div>
            </div>
        )
    }

}
export default withRouter(Header)