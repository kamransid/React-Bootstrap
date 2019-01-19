import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Grid, Col, Row, Alert } from 'react-bootstrap'
class App extends Component {

  

  componentWillReceiveProps(){
    console.log('commented-code will recive prposp caled')
  }

  handleDismiss(){
    console.log('Hi i am here')
  }


  render() {
    return (
      <Alert bsStyle="info" >
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
      good.
      </Alert>
    )
  }
}

export default App;
