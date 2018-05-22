import React, { Component } from 'react'
import './index.scss'
function ContentItem (props) {
    return (
        <div class="contentItem">
            <div className="contentTitel"></div>
            <div className="banner"></div>
            <lu className="good_list">
                <li>
                    <div className="imgBox"></div>
                    <p className="title">ddd</p>
                    <span className="price">dd</span>
                    <i className="fa fa-home"></i>
                </li>
                <li>
                    <div className="imgBox"></div>
                    <p className="title">ddd</p>
                    <span className="price">dd</span>
                    <i className="fa fa-home"></i>
                </li>
                <li>
                    <div className="imgBox"></div>
                    <p className="title">ddd</p>
                    <span className="price">dd</span>
                    <i className="fa fa-home"></i>
                </li>
                <li>
                    <div className="imgBox"></div>
                    <p className="title">ddd</p>
                    <span className="price">dd</span>
                    <i className="fa fa-home"></i>
                </li>
                <li>
                    <div className="imgBox"></div>
                    <p className="title">ddd</p>
                    <span className="price">dd</span>
                    <i className="fa fa-home"></i>
                </li>
                <li>
                    <div className="imgBox"></div>
                    <p className="title">ddd</p>
                    <span className="price">dd</span>
                    <i className="fa fa-home"></i>
                </li>

            </lu>
        </div>
    )

}
class ContentList extends Component {

    render () {
        return (
            <div className='contentList'>
                <ContentItem></ContentItem>
            </div>
        )
    }
}
export default ContentList