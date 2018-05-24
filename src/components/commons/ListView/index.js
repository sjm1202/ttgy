import React, { Component } from 'react'
import './index.scss'
class ListView extends Component{
    constructor(props){
        super(props)
        this.listenScroll = this.listenScroll.bind(this)
        this.distanceEnd = 50
    }
    listenScroll (e) {
        let alreadyScroll = document.documentElement.scrollTop;
        if( !this.hasMore ) return false
        let distance = this.htmlHeight - alreadyScroll - this.clientHeight
        if(distance < this.distanceEnd){
            if(!this.loading){
                this.onReachEnd()
            }

        }

    }
    componentWillReceiveProps(props){
        this.loading = props.loading;
    }
    componentDidMount (){
        this.hasMore = this.props.hasMore
        this.loading = this.props.loading
        this.onReachEnd = this.props.onReachEnd
        this.distanceEnd = this.distanceEnd
        this.clientHeight = document.documentElement.clientHeight//整个页面的高度
        this.htmlHeight = document.documentElement.offsetHeight
        window.addEventListener('scroll', this.listenScroll)
    }
    componentDidUpdate(){
        this.clientHeight = document.documentElement.clientHeight//整个页面的高度
        console.log(this.htmlHeight,11111111111111)
    }
    renderRow () {
        let { dataList, row: Row } = this.props
        if( !dataList) return '';
        return dataList.map(item => {
            return <Row item={item} key = {item.id}/>
        })
    }
    render(){
        let { contentClassName = 'content' } = this.props
        return(
            <ul className={'listView '+contentClassName}>
                {this.renderRow()}
                <div className="loadingMessage"><i className="fa fa-spinner fa-pulse"></i></div>
            </ul>

        )
    }
    componentDidUpdate () {
        this.htmlHeight = document.documentElement.offsetHeight
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.listenScroll)
    }
}
export default ListView