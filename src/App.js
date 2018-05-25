import React, { Component } from 'react';
import './stylesheets/App.scss';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import userActionCreator from './store/user/actionCreator';
import cartActionCreator from './store/cart/actionCreator'
import Home from './components/pages/Home'
import Mine from './components/pages/Mine'
import List from './components/pages/List'
import Cart from './components/pages/Cart'
import TabBar from './components/commons/TabBar'
import Detail from './components/pages/Detail'
import NotFound from './components/pages/NotFound'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
class App extends Component {
    componentWillMount(){
        this.props.hasUser();
        this.props.syncCart();
    }
  renderRoutes(){
      let { routes } = this.props
      return routes.map( item => {
          return (<Route
            exact = {item.isExact}
            path = {item.path}
            key = {item.id}
            component = {item.component}
          />)
      } )
  }
  renderFooter(){
      let {pathname} = this.props.location;
      let reg = /^\/detail/g
      if(reg.test(pathname) || pathname === '/mine/login'){
          return ;
      }else{
          return  <TabBar></TabBar>
      }
  }
  render() {
    return (
        <div className='app'>
            <Switch>
                {this.renderRoutes()}

                <Redirect from = '**' to = {{pathname: '/'}}></Redirect>
            </Switch>

            {this.renderFooter()}

        </div>
    );
  }
}
App.defaultProps = {
    routes: [
        {id: '0001', path: '/', component: Home, isExact: true},
        {id: '0002', path: '/list', component: List, isExact: false},
        {id: '0003', path: '/cart', component: Cart, isExact: false},
        {id: '0004', path: '/mine', component: Mine, isExact: false},
        {id: '0005', path: '/detail', component: Detail, isExact: false},
        {id: '0006', path: '/not-found', component: NotFound}
    ]
}
let actionCreator = {
    hasUser: userActionCreator.hasUser,
    syncCart: cartActionCreator.syncCart
}
export default withRouter(connect(state => state, 
    dispatch => bindActionCreators(actionCreator, dispatch)
)(App));
