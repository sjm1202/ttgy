import React, { Component } from 'react';
import './stylesheets/App.scss';
import Home from './components/pages/Home'
import Mine from './components/pages/Mine'
import List from './components/pages/List'
import Cart from './components/pages/Cart'
import TabBar from './components/commons/TabBar'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
class App extends Component {
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
  render() {

    return (
        <div className='app'>
            <Switch>
                {this.renderRoutes()}
                <Route exact={true} path='/' component={Home}/>
                <Route path='/list' component={List}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/mine' component={Mine}/>
                <Redirect from = '**' to = {{pathname: '/'}}></Redirect>
            </Switch>

            <TabBar></TabBar>
        </div>
    );
  }
}
App.defaultProps = {
    routes: [
        {id: '0001', path: '/', component: Home, isExact: true},
        {id: '0002', path: '/', component: List, isExact: true},
        {id: '0003', path: '/', component: Cart, isExact: true},
        {id: '0004', path: '/', component: Mine, isExact: true}
    ]
}
export default App;
