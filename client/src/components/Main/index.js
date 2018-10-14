import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Inicio from '../Inicio';
import Temas from '../Temas';
import Jugar from '../Jugar';
import Ranking from '../Ranking';
import Tutorial from '../Tutorial';
import Error404 from '../Page404';
import Singnin from '../Signin';
import NoAuth from '../NoAuth';


class Main extends Component {
   render() {
     return (      
        <Switch>
          <Route exact path='/' component= { Inicio }/>
          <Route path='/temas' component= { Temas } />
          <Route path='/jugar' component={ Jugar }/>
          <Route path='/tutorial' component={ Tutorial }/>
          <Route path='/ranking' component={ Ranking }/>
          <Route path='/login' component={ Singnin }/>
          <Route  component={ Error404 }/>
        </Switch>
     );
   }
}

export default Main;