import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
   render() {
     return (
       <div>
         <div className='header-links' > <Link to='/'> Inicio </Link> </div>
         <div className='header-links' > <Link to='/jugar'> Jugar </Link> </div>
         <div className='header-links'> <Link to='/tutorial'> Tutorial </Link> </div>
         <div className='header-links' > <Link to='/ranking'> Ranking </Link> </div>
       </div>
     );
   }
}

export default Header;