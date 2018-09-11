import React, { Component } from 'react';
import { fetchModulos } from '../../utils/fetch';

class Jugar extends Component{

    constructor(props){
      super(props);
      this.state = { data: [] }
    }

    componentDidMount(){
      fetchModulos()
        .then( data => this.setState(data))
    }

    render() {
      let data = this.state.data

      if(data.length < 0){
        return <div className="jugarErrorItem"> no hay modulos disponibles</div>;
      }else{

        return (
          <div className="jugarTemas">
            {
              data.map( item => {
                return <div className="jugarItems" key={ item.id }>
                    <h2> { item.titulo }</h2>
                    <p> { item.descripcion }</p>
                </div>
              })
            }
        </div>
      );

      }

    }
}

export default Jugar;