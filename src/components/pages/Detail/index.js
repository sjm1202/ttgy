import './index.scss'
import React, {Component} from 'react'
import Header from "./Header"
import Goods from "./Goods"
import Det from './Det'
import Comment from './Comment'
import Footer from './Footer'
import {Route, Switch, withRouter} from 'react-router-dom'
class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            food:{}
        }
        this.changeInfo.bind(this)
    }
    changeInfo(food){
        this.setState({food:food})
    }
    render() {
        let {food} = this.state
        return (
            <div className='detail'>
                <Header></Header>
                <Switch>
                    <Route path='/detail/goods' component={Goods}></Route>
                    <Route path='/detail/det' component={Det} ></Route>
                    <Route path='/detail/comment' component={Comment} ></Route>
                </Switch>
                <Footer food={food}></Footer>
            </div>
        )
    }
}
export default withRouter(Detail)