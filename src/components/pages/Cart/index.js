import React, { Component } from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import TabBar from '../../commons/TabBar'
class Cart extends Component{
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
    render () {   
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
                                <li className='item'>
                                    <div className='check'><i className='fa fa-check'></i></div>
                                    <div className='img-box'>
                                        <img src='' alt=''/>
                                    </div>
                                    <div className='item-info'>
                                        <h3>鲜摘蓝莓</h3>
                                        <p className='num'><span>2</span>盒</p>
                                        <div className='price-box'>
                                            <p className='price'>￥<b>29.9</b></p>
                                            <p className='small-logo'>明日达</p>
                                            <p className='num2'>
                                                <span><i className='del fa fa-minus'></i></span>1
                                                <span><i className='add fa fa-plus'></i></span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer'>
                        <p className='check'><input type='checkbox'/>全选</p>
                        <p className='total'>合计：<span>￥</span><b>69.9</b></p>
                        <p className='pay'>结算(<span>2</span>)</p>
                    </div>
                </div>           
            );
    }
}
export default Cart