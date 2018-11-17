import React, { Component } from 'react';

import { Link } from 'react-router-dom';


import './style.css';

class Header extends Component {
   render() {
     return (
       <div className="header-main">
         <Link to='/'> Inicio</Link>
         <Link to='/temas'>  Temas </Link>
         <Link to='/jugar'>  Jugar  </Link>
         <Link to='/tutorial'>  Tutorial   </Link>
         <Link to='/ranking'>  Ranking  </Link>
         <div className="left-nav">
           <Link to='/auth'> Login </Link>
         </div>
       </div>
     );
   }
}

export default Header;