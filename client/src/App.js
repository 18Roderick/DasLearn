import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main authorization={this.props.authorization}></Main>
      </div>
    );
  }

  componentDidMount(){
    
  }
}

const mapSateToProps = state => ({
  authorization: state.authorization,
})

export default withRouter(connect(mapSateToProps,null)(App));
