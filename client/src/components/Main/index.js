import React, { Component } from 'react';
import { Route, Switch} from  'react-router-dom';
import Inicio from '../Inicio';
//import Temas from '../Temas';
import Jugar from '../Jugar';
import Ranking from '../Ranking';
import Tutorial from '../Tutorial';
import Error404 from '../Page404';
import Auth from '../Auth';
//import NoAuth from '../NoAuth';
import PrivateRoute from './PrivateRoute';
import ContainerTemas from '../../containers/ContainerTemas'

const appRoutes = [
  {
    path: '/jugar',
    component: Jugar,
  },
  {
    path: '/tutorial',
    component: Tutorial,
  },
  {
    path: '/ranking',
    component: Ranking,
  },

]
class Main extends Component {
   render() {
     const {authorization} = this.props
     return (      
        <Switch>
          <Route exact path='/' component= { Inicio }/>
          <Route path='/temas' component= { ContainerTemas } />
          <Route path='/auth' component={ Auth } authorization={authorization}/>
          {
            appRoutes.map( (datos, key) => <PrivateRoute 
                {...datos} key={key}
                authorization={authorization}
                />)
          }
          <Route  component={ Error404 }/>
        </Switch>
     );
   }
}

export default Main;