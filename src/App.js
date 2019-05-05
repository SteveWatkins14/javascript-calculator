import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "",
      input: "",
      result: ""
    }

    this.addNumber = this.addNumber.bind(this);
    this.addSymbol = this.addSymbol.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.sumEquation = this.sumEquation.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  addNumber() {

  }

  addSymbol() {

  }

  addDecimal() {
    
  }

  sumEquation() {

  }

  clearInput() {

  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
