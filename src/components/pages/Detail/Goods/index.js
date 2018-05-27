import React, {Component} from 'react'
import './index.scss'
import Banner from './Banner'
import {withRouter, Link} from 'react-router-dom'
import axios from "axios";
function Info(props) {
    let {productInfo,productItem,sendTimeMsg,product_id} = props.info;
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
                            <Link to={{
                                pathname:'/detail/goods/'+item.id,
                                food:{
                                    target_id: item.id,
                                    price: item.price,
                                    volume:item.volume
                                }}} key={item.id} className={item.id === product_id ? 'active' : ''} >
                                {item.volume}
                                <span>明日达</span>

                            </Link>
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
                啤酒小院
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
    let {comment} = props;
    if(!comment){
        return null;
    }
    return (
        <div className='goods_evalute'>
            <div className="title">
                <div className="left">
                    评价({comment.num.total})
                </div>
                <div className="right">
                    <span>{comment.good}%</span>
                    好评
                    <i className='fa fa-chevron-right'></i>
                </div>
            </div>
            <ul className='contents'>
                {
                    comment.data.map(item =>{
                        return(
                            <li className='item' key={item.id}>
                                <div className="contentInfo">
                                    <div className="left">
                                        <div className="imgBox">
                                            <img src={item.userface} alt=""/>
                                        </div>
                                        <div className="user_name">{item.user_name}</div>
                                        <i></i>
                                    </div>
                                    <div className="time">
                                        {item.time}
                                    </div>
                                </div>
                                <div className="contentLevel">
                                    <span>口感{item.star_eat}</span>
                                    <span>颜值{item.star_show}</span>
                                </div>
                                <div className="contentMsg">
                                    {item.content}
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
            <div className="moreEvalue">
                <Link to={{pathname:'/detail/comment/'+props.id}} >查看全部评价</Link>
            </div>
        </div>
    )
}
class Goods extends Component{
    constructor(props){
        super(props)
        this.state = {
            info:{},
            comment:null
        }
    }
    componentWillReceiveProps(props){
        this.getData(props);
    }
    componentDidMount(){
        this.getData(this.props);
    }
    getData(props){
        // let { params} = props.location;
        let { params } = props.match;
        if(params.id){
            axios.get('/sjm/v3/product/detail',{
                params:{
                    store_id_list: 3,
                    store_id: 3,
                    delivery_code: 3,
                    product_id:params.id
                }
            }).then(res => {
                let { data } = res.data;
                data.product_id = params.id;

                this.setState({
                    info: data
                })
            })
            axios.get('/sjm/v3/comment/rate_and_comment',{
                params:{
                    product_id: params.id
                }
            }).then(res => {
                let { data } = res.data;
                this.setState({
                    comment: data
                })
            })
        }
    }
    render(){
        let {info,comment} = this.state
        let {params} =  this.props.location;

        return (
            <div className="detail_goods">
                <div className='detail_banner_wrap loading2'>
                    <Banner info={info}></Banner>
                </div>
                <div className='detail_info_wrap'>
                    <Info info={info}></Info>
                </div>
                <Address></Address>
                <Tips></Tips>
                <Evaluate comment={comment} id={info.product_id}></Evaluate>

            </div>
        )
    }
}
export default withRouter(Goods)