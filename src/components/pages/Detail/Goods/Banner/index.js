import React, {Component} from 'react'
import './index.scss'
import Swiper from 'swiper'
class Banner extends Component{
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        }

    }
    render (){
        return (
            <div className="Goods_Banner">
                <div className="swiper-container" ref={el => this.el = el}>
                   {/* <div className="swiper-wrapper loading">
                        {this.state.banners.map(item=>{
                            return (
                                <SwiperSlide info={item} key={item.banner_ad_id} ></SwiperSlide>
                            )
                        })}
                    </div>*/}
                    <div className="swiper-slide">111</div>
                    <div className="swiper-slide">111</div>
                    <div className="swiper-slide">111</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default Banner