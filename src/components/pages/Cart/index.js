import React, { Component } from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import TabBar from '../../commons/TabBar'
class Cart extends Component{
    render () {
        return (
            <div className='cart'>
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
}
export default Cart