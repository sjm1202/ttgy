import './index.scss'
import React,{ Component } from 'react'
class Header extends Component {
    render(){
        return (
            <div className='header'>
                <div className="left">
                    <img src="/images/ci_20171025_1.png" alt=""/>
                    <a className="map">
                        <span>啤酒小院</span>
                        <i className='fa fa-caret-down'></i>
                    </a>
                </div>
                <div className="right">
                    <i className='fa fa-search'></i>
                </div>
            </div>
        )
    }
}
export default Header