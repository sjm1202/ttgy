import React, {Component} from 'react'
import './index.scss'
class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="goods_Footer">
                <div className="cart">
                    <i className='fa fa-shopping-cart'></i>
                </div>
                <div className="add">
                    <span>明日到达</span>
                    <em>加入购物车</em>
                </div>
            </div>
        )
    }
}
export default Footer