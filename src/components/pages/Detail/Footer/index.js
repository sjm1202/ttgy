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
            food: null
        }
    }
    componentWillReceiveProps(props){
        let food = {...this.state.food}
        let id = props.location.pathname.split('/')[3];
        if(id && props.location.food && id != food.target_id){
            food.target_id = id;
            food.price = props.location.food.price;
            food.volume = props.location.food.volume;
            this.setState({food})
        }
    }
    componentDidMount(){
        let {food} = this.props.location;
        let {history} = this.props;
        if(!food){
            food = JSON.parse(localStorage.food || '{}');
        }else{
            localStorage.food = JSON.stringify(food);
        }
        if(food.target_id){
            this.setState({food});
        }else{
            history.replace('/');
        }
    }
    addFood(food,e){
        e.preventDefault();
        let {addFoodToCart} = this.props;
        if(food){
            addFoodToCart(food);
        }
    }
    render(){
        let {food} = this.state;
        if(!food) return null;
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