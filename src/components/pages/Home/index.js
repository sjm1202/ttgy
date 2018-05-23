import React, { Component } from 'react'
import {connect} from 'react-redux'
import TabBar from '../../commons/TabBar'

import Header from './Header'
import Banner from './Banner'
import Activity from './Activity'
import ContentItem from './ContentList'
import './index.scss'
class Home extends Component{
   
    render(){
        return (
            <div className='home'>
                <Header></Header>
                <Banner></Banner>
                <Activity></Activity>
                <ContentItem></ContentItem>
                <TabBar/>
            </div>
        )
    }
}
export default connect(state => state.cart)(Home)