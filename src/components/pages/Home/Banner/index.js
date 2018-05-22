import React,{ Component } from 'react'
import axios from 'axios'
import './index.scss'
import Swiper from 'swiper'
function SwiperSlide (props) {
    return (
        <div className="swiper-slide"><img src={props.info.image} alt=""/></div>
    )
}
class Banner extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        }
    }
    //https://wap.fruitday.com/v3/ad/homepage?connect_id=&type=2&lonlat=116.252423%2C40.11634&ad_code=110114&tab_id=
    getBaners () {
        axios.get('/sjm/v3/ad/homepage',{
            params:{type:2,lonlat:'116.252423%2C40.11634',ad_code:'110114'}
        }).then((res)=>{
            this.setState({
                banners: res.data.data.banner.mainBanners[0].content
            })

        })
    }
    componentDidMount(){
        this.getBaners();
    }
    componentDidUpdate(){
        this.swiper = new Swiper(this.el,{
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: true,
            loop: true
            })
    }
    render () {

        return (
            <div className="swiper-container" ref={el => this.el = el}>
                <div className="swiper-wrapper loading">
                    {this.state.banners.map(item=>{
                        return (
                            <SwiperSlide info={item} key={item.banner_ad_id} ></SwiperSlide>
                        )
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default Banner