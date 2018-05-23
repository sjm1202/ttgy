import React, { Component } from 'react'
import './index.scss'
import 'axios'
import axios from "axios/index";
import {Route, NavLink} from 'react-router-dom'
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
    let { content } = props;

    return (
        <ul className="good_list">
            {
                content.map((item) => {
                    return (
                        <li key={item.banner_ad_id}>
                            <NavLink to={{
                                pathname:'/detail/goods',
                                params:{
                                    store_id_list: 3,
                                    product_id: item.target_id,
                                    store_id: item.store_id,
                                    delivery_code: 3
                                    }
                                }}>
                                <div className="imgBox">
                                    <img src={item.image} alt=""/>
                                </div>
                                <p className="title">{item.title}</p>
                                <span className="price">￥{item.price}/<em>{item.volume}</em></span>
                                <i className="fa fa-plus-circle"></i>
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>

    )
}
function ColList(props) {
    let { content } = props;
    return (
        <ul className="colList">
            {content.map(item => {
                return (
                    <li key={item.banner_ad_id}>
                        <NavLink to={{
                            pathname:'/detail/goods',
                            params:{
                                store_id_list: 3,
                                product_id: item.target_id,
                                store_id: item.store_id,
                                delivery_code: 3
                            }
                        }}>
                        <div className="imgBox">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="info">
                            <h5 className='title'>{item.title}</h5>
                            <p className="describe">{item.subtitle}</p>
                            <span className='price'>￥{item.price}/<em>{item.volume}</em></span>
                            <i className="fa fa-plus-circle"></i>
                        </div>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
class ContentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentItems: []
        }
        this.unMountFlag = false;
    }
    getData(){
        axios.get('/sjm/v3/ad/homepage',{
            params:{type:2,lonlat:'116.252423%2C40.11634',ad_code:'110114'}
        }).then((res)=>{
            if( this.unMountFlag ){
                return;
            }
            let items = res.data.data.banner.mainBanners.slice(3);
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
        console.log(contentItems);
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
                            return <GoodList content = {item.content} key={item.group_id}/>
                        break;
                        case 'bigImageBannerLow':
                            return <ContentTitel content = {item.content[0]} key={item.group_id}/>
                        break;
                        case 'normalBanner_v51':
                            return <ColList content = {item.content} key={item.group_id}/>
                            break;
                        default:
                            return null;
                        break
                    }
                }))}
            </div>
        )
    }
}
export default ContentList