import React, { Component } from 'react'
import './index.scss'
import 'axios'
import axios from "axios/index";
import {NavLink} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actionCreate from '../../../../store/cart/actionCreator'
import {connect} from 'react-redux'
function ContentTitel( props) {
    let { content } = props
    return(
        <div className="contentTitel"><img src={content.image} alt=""/></div>
        )
}
function Banner( props) {
    let { content } = props
    return(
        <div className="banner"><img src={content.image} alt=""/></div>
    )
}
function GoodList(props) {
    let { content, addFood} = props;

    return (
        <ul className="good_list">
            {
                content.map((item) => {
                    let food = {
                        target_id: item.target_id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        volume: item.volume,
                    }
                    return (
                        <li key={item.banner_ad_id}>
                            <NavLink to={{
                                pathname:'/detail/goods/'+item.target_id,
                                food
                                }}>
                                <div className="imgBox">
                                    <img src={item.image} alt=""/>
                                </div>
                                <p className="title">{item.title}</p>
                                <span className="price">￥{item.price}/<em>{item.volume}</em></span>
                                <i className="fa fa-plus-circle" onClick={addFood.bind(this,food)}></i>
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>

    )
}
function ColList(props) {
    let { content, addFood } = props;
    return (
        <ul className="colList">
            {content.map(item => {
                let food = {
                    target_id: item.target_id,
                        titel: item.title,
                        image: item.image,
                        price: item.price,
                        volume: item.volume,
                }
                return (
                    <li key={item.banner_ad_id}>
                        <NavLink to={{
                            pathname:'/detail/goods/'+item.target_id,
                            food
                        }}>
                        <div className="imgBox">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="info">
                            <h5 className='title'>{item.title}</h5>
                            <p className="describe">{item.subtitle}</p>
                            <span className='price'>￥{item.price}/<em>{item.volume}</em></span>
                            <i className="fa fa-plus-circle" onClick={addFood.bind(this,food)}></i>
                        </div>
                        </NavLink>
                    </li>

                )
            })}
        </ul>
    )
}
function Activity(props){
    let {content} = props
    return (
        <div className="activity">
            {content.map(( item ) => {
                return (
                    <a className="imgBox" key={item.banner_ad_id}>
                        <img src={item.image} alt=""/>
                    </a>

                )
            })}

        </div>
    )
}
class ContentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentItems: []
        }
        this.unMountFlag = false;
        this.addFood = this.addFood.bind(this)
    }
    addFood(food,e){
        e.preventDefault()
        let {addFoodToCart} = this.props;
        addFoodToCart(food)
    }
    getData(){
        axios.get('/sjm/v3/ad/homepage',{
            params:{type:2,lonlat:'116.252423%2C40.11634',ad_code:'110114'}
        }).then((res)=>{
            if( this.unMountFlag ){
                return;
            }
            let items = res.data.data.banner.mainBanners;
            this.setState({
                contentItems:items
            })
        })
    }
    componentDidMount(){
        this.getData();
    }
    componentWillUnmount () {
        this.unMountFlag = true;
    }
    render () {
        let { contentItems } = this.state;

        if(!contentItems){
            return null;
        }
        return (
            <div className='contentList'>
                {contentItems.map((item => {
                    switch (item.group_type) {
                        case 'imageTitleBanner':
                            return <ContentTitel content = {item.content[0]} key={item.group_id}/>
                        break;
                        case 'bigImageBanner':
                            return <Banner content = {item.content[0]} key={item.group_id}/>
                        break;
                        case '3perLineBanner':
                            return <GoodList content = {item.content} key={item.group_id} addFood={this.addFood}/>
                        break;
                        case 'bigImageBannerLow':
                            return <ContentTitel content = {item.content[0]} key={item.group_id}/>
                        break;
                        case 'normalBanner_v51':
                            return <ColList content = {item.content} key={item.group_id} addFood={this.addFood}/>
                            break;
                        case '2nBanner_v51':
                            return <Activity content = {item.content} key={item.group_id}></Activity>
                        default:
                            return null;
                        break;
                    }
                }))}
            </div>
        )
    }
}
export default connect(state => state,dispatch=>bindActionCreators(actionCreate,dispatch))(ContentList)