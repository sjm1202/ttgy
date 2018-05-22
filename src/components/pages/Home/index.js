import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import Banner from './Banner'
import Activity from './Activity'
import ContentItem from './ContentList'
import './index.scss'
class Home extends Component{
   
    render(){
        console.log(this.props)
        return (
            <div className='home'>
                <Header></Header>
                <Banner></Banner>
                <Activity></Activity>
                <ContentItem></ContentItem>
            </div>
        )
    }
}
export default connect(state=> state.carst)(Home)