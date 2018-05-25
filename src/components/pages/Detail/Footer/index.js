import React, {Component} from 'react'
import './index.scss'
import {withRouter,Link} from 'react-router-dom'
import actionCreater from '../../../../store/cart/actionCreator'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            food:{}
        }
    }
    componentWillReceiveProps(props){
        let {params} = props.location
        let temp ={...this.state.food};
        temp.target_id = params.product_id
        temp.price = params.food.price
        temp.volume = params.food.volume
        this.setState({food:temp})
    }
    componentDidMount(){
        let {params} = this.props.location
        if(params){
            let food = params.food
            this.setState({food:food})
        }
    }
    addFood(food,e){
        e.preventDefault()
        let {addFoodToCart} = this.props
        if(food){
            addFoodToCart(food)
        }
    }
    render(){

        let {food} = this.state
        if(!food) return null
        console.log(food)
        return (
            <div className="goods_Footer">
                <Link to={'/cart'}>
                <div className="cart">
                    <i className='fa fa-shopping-cart'></i>
                </div>
                </Link>
                <div className="add" onClick={this.addFood.bind(this,this.state.food)}>
                    <span>明日到达</span>
                    <em>加入购物车</em>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(state => state,dispatch=>bindActionCreators(actionCreater,dispatch))(Footer))