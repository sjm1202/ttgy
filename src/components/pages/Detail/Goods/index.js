import React, {Component} from 'react'
import './index.scss'
import Banner from './Banner'
import {withRouter, NavLink} from 'react-router-dom'
import axios from "axios/index";
function Info(props) {
    console.log(props,1111111111111111111111111)
    let {productInfo,productItem,sendTimeMsg} = props.info;
    if(!productInfo){
        return null;
    }

    return(
        <div className='goods_info'>
            <h5 className="title">{productInfo.product_name}</h5>
            <p className="sbutitle">{productInfo.product_desc}</p>
            <div className="price">￥<span>{parseInt(productInfo.price)}</span>{productInfo.price.substring(productInfo.price.indexOf("."))}</div>
            <div className="option">
                {
                    productItem.map(item => {
                        return(
                            <NavLink to={{
                                pathname:'/detail/goods',
                                params:{
                                    store_id_list: 3,
                                    product_id: item.id,
                                    store_id: item.store_id,
                                    delivery_code: 3
                                }}} key={item.id}>
                                {item.volume}
                                <span>明日达</span>

                            </NavLink>
                        )
                    })
                }

            </div>
            <p className="note">{sendTimeMsg}</p>
        </div>
    )
}
function Address (props) {
    return (
        <div className='goods_address'>
            <span className="title">送至</span>
            <span className="info">
                <i className='fa fa-map-marker'></i>
                ddd
            </span>
        </div>
    )
}
function Tips(){
    return (
        <div className='tips'>
            <i className='fa fa-check-circle-o'></i>
            <span>48小时退换货</span>
            <i className='fa fa-check-circle-o'></i>
            <span>全程冷链</span>
            <i className='fa fa-check-circle-o'></i>
            <span>果园标准</span>
            <i className='fa fa-check-circle-o'></i>
            <span>全球直采</span>
        </div>
    )
}
function Evaluate(props) {
    return (
        <div className='goods_evalute'>
            <div className="title">
                <div className="left">
                    评价(7580)
                </div>
                <div className="right">
                    <span></span>
                    好评
                    <i className='fa fa-chevron-right'></i>
                </div>
            </div>
            <ul className='contents'>
                <li className='item'>
                    <div className="contentInfo">
                        <div className="left">
                            <div className="imgBox"></div>
                            <div className="user">1111111</div>
                            <i></i>
                        </div>
                        <div className="time">
                            2222
                        </div>
                    </div>
                    <div className="contentLevel">
                        <span>口感5</span>
                        <span>颜值5</span>
                    </div>
                    <div className="contentMsg">
                        ddddd
                    </div>
                </li>
            </ul>
            <div className="moreEvalue">
                <span>查看全部评价</span>
            </div>
        </div>
    )
}
class Goods extends Component{
    constructor(props){
        super(props)
        this.state = {
            info:{}
        }
    }
    componentDidMount(){
        let { params } = this.props.location;
        if(params){
            axios.get('/sjm/v3/product/detail',{
                params:{
                    store_id_list: params.store_id_list,
                    product_id: params.product_id,
                    store_id: params.store_id,
                    delivery_code: params.delivery_code
                }
            }).then(res => {
                let { data } = res.data;
                this.setState({
                    info: data
                })
            })
        }
    }
    render(){
        let {info} = this.state
        console.log(info);
        if(!info){
            return null;
        }
        return (
            <div className="detail_goods">
                <Banner ></Banner>
                <Info info={info}></Info>
                <Address></Address>
                <Tips></Tips>
                <Evaluate></Evaluate>

            </div>
        )
    }
}
export default withRouter(Goods)