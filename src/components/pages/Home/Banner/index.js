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
        this.unMountFlag = false;
    }
    //https://wap.fruitday.com/v3/ad/homepage?connect_id=&type=2&lonlat=116.252423%2C40.11634&ad_code=110114&tab_id=
    getBaners () {
        axios.get('/sjm/v3/ad/homepage',{
            params:{type:2,lonlat:'116.252423%2C40.11634',ad_code:'110114'}
        }).then((res)=>{
            if( this.unMountFlag ){
                return;
            }
            this.setState({
                banners: res.data.data.banner.mainBanners[0].content
            })

        })
    }
    componentDidMount(){
        this.getBaners();
    }
    componentDidUpdate(){
        let{el,el2} = this;
        this.swiper = new Swiper(el,{
            pagination: {
                el: el2
            },
            autoplay: true,
            loop: true
            })
    }
    componentWillUnmount () {
        this.unMountFlag = true;
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
                <div className="swiper-pagination" ref={el => this.el2 = el}></div>
            </div>
        )
    }
}
export default Banner