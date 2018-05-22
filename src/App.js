import React, { Component } from 'react';
import {
  Home, List, Cars, Mine, NotFound
} from './components/pages/';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends Component {
  render() {
    let { routes } = this.props;
    return (
        <Switch>
          {
            routes.map(item => {
              return <Route exact = { item.exact } 
                      path={item.path} component={item.component} key={item.id}/>
            })
          }
          <Redirect to='/not-found'/>
        </Switch>
    );
  }
}
App.defaultProps = {
  routes : [
    {id : 1, path : '/', component : Home, exact : true},
    {id : 2, path : '/list', component : List},
    {id : 3, path : '/cars', component : Cars},
    {id : 4, path : '/mine', component : Mine},
    {id : 5, path : '/not-found', component : NotFound}
  ]
}
export default App;
