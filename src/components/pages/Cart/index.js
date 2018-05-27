import React, { Component } from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import TabBar from '../../commons/TabBar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreater from '../../../store/cart/actionCreator'
class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            foodList: [],
            total:{num:0,money:0,weight:0}
        }
        this.changeCartInfo.bind(this)
    }
    changeCartInfo(food,isAdd,e){
        e.preventDefault()
        let {addFoodToCart,delFoodFromCart} = this.props
        if(isAdd){
            addFoodToCart(food)
        }else{
            delFoodFromCart(food)
        }
    }
    checkFood(){

    }
    renderKinds(){
        return(
            <div className='cart-one'>
                <header>
                    <div>
                        购物车
                    </div>
                </header>
                <div className='car-box'>
                    <div className='car-img'>
                        <img src='/images/car-bg.png' alt=''/>
                    </div>
                    <div className='go'>
                        <p>还没有找到心仪的商品吧？</p>
                        <Link to =  '/'>去逛逛吧</Link>
                    </div>
                </div>
                <TabBar/>
            </div>                
        )     
    }
    componentWillReceiveProps(props){
        let {cart} = props
        this.setState({foodList:cart.foodList,total:cart.total})
    }
    componentDidMount(){
        let {cart} = this.props
        this.setState({foodList:cart.foodList,total:cart.total})
    }
    render () {

        let {foodList,total} = this.state
        if(foodList.length === 0){
            return this.renderKinds()
        }else{


            return(
                <div className= 'cart-two'>
                    <header>
                        <div>
                            <i className='fa fa-angle-left'></i>
                            <span>购物车</span>
                            <b>编辑</b>
                        </div>
                    </header>
                    <div className='border'></div>
                    <div className='banner'>
                        <span><i className='fa fa-map-marker spe'></i>添加地址</span>
                        <span><i className='fa fa-angle-right'></i></span>
                    </div>
                    <div className='border'></div>
                    <div className='black'></div>
                    <div className="good-box">
                        <div className='good-header'>
                            <p>商品清单</p>
                            <p>总重约<span>3.55kg</span></p>
                        </div>
                        <div className='good-item'>
                            <ul>
                                {
                                    foodList.map(item=> {
                                        return (
                                            <li className='item' key={item.target_id}>
                                                <div className='check'>
                                                    {/*<i className='fa fa-circle-o'></i>*/}
                                                    <i className='fa fa-check-circle'></i>
                                                </div>
                                                <div className='img-box'>
                                                    <img src={item.image} alt=''/>
                                                </div>
                                                <div className='item-info'>
                                                    <h3>{item.title}</h3>
                                                    <p className='num'><span>{item.volume}</span></p>
                                                    <div className='price-box'>
                                                        <p className='price'>￥<b>{item.price}</b></p>
                                                        <p className='small-logo'>明日达</p>
                                                        <p className='num2'>
                                                            <span onClick={this.changeCartInfo.bind(this,item,false)}><i className='del fa fa-minus'></i></span>
                                                            {item.num}
                                                            <span onClick={this.changeCartInfo.bind(this,item,true)}><i className='add fa fa-plus'></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                    <div className='footer'>
                        <p className='check'><input type='checkbox'/><span>全选</span></p>
                        <p className='total'>合计：<span>￥</span><b>{parseFloat(total.money).toFixed(2)}</b></p>
                        <p className='pay'>结算(<span>{total.num}</span>)</p>
                    </div>
                </div>
            );
        }

    }
}
export default connect(state=>state,dispatch=>bindActionCreators(actionCreater,dispatch))(Cart)