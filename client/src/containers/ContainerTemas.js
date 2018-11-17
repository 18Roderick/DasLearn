import React, {Component} from 'react';
import { connect } from 'react-redux'
import { loadModulos } from '../actions';

class ContainerTemas extends Component{

  componentDidMount(){
    this.props.loadModulos()
  }
  render(){
    //console.log(this.props.modulos)
    return(
      <div className="containerTemas">

      </div>
    )
  }
}

const mapStateToProps = state => ({
  modulos: state.modulos.data
})

const mapDispatchToProps = dispatch => ({
  loadModulos: state => (dispatch(loadModulos()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTemas)

