import React, {Component} from 'react'
import './index.scss'
import Swiper from 'swiper'
class Banner extends Component{
    componentDidUpdate(){
        let { templatePhoto } = this.props.info;
        if(this.swiper || !templatePhoto) {
            return
        }
        this.swiper = new Swiper(this.el,{
            pagination: {
                el: this.el2
            },
            autoplay: true,
            loop: true
        })
    }
    render (){
        let { templatePhoto } = this.props.info;
        if(!templatePhoto){
            return null
        }
        return (
            <div className="Goods_Banner">
                <div className="swiper-container" ref={el => this.el = el}>
                    <div className="swiper-wrapper">
                        {templatePhoto.map(item=>{
                            return (
                                <div className="swiper-slide" key={item.id}>
                                    <img src={item.image} alt=""/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination" ref={el => this.el2 = el}></div>
                </div>

            </div>
        )
    }
}
export default Banner