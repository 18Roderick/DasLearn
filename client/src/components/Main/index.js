import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Inicio from '../Inicio';
import Jugar from '../Jugar';
import Ranking from '../Ranking';
import Tutorial from '../Tutorial';

class Main extends Component {
   render() {
     return (      
        <Switch>
          <Route exact path='/' component={ Inicio }/>
          <Route path='/jugar' component={ Jugar }/>
          <Route path='/tutorial' component={ Tutorial }/>
          <Route path='/ranking' component={ Ranking }/>
        </Switch>
     );
   }
}

export default Main;