import React, { Component } from 'react';
import './App.css';
import routes from './config/routes.json';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div >
        <Header></Header>
        <Main></Main>
      </div>
    );
  }

  componentDidMount(){
    console.log(routes);
  }
}

export default App;
