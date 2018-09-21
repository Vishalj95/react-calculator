import React, { Component } from 'react';
import './App.css';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import { DeleteButton } from './components/DeleteButton';

import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    }
  }

  handleDelete = () => {
    this.setState({
      input: this.state.input.slice(0, -1)
    })
  }

  handleAns = () => {
    this.setState({
      input: math.eval(this.state.input).toString(),
    })
  };

  handleClear = () => {
    this.setState({
      input: "",
    })
  };

  assignInput = val => {
    this.setState({
      input: this.state.input + val
    })
  };


  render() {

    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.assignInput} >7</Button>
            <Button handleClick={this.assignInput} >8</Button>
            <Button handleClick={this.assignInput} >9</Button>
            <DeleteButton handleClick={this.handleDelete}>DEL</DeleteButton>
          </div>
          <div className="row">
            <Button handleClick={this.assignInput} >4</Button>
            <Button handleClick={this.assignInput} >5</Button>
            <Button handleClick={this.assignInput} >6</Button>
            <Button handleClick={this.assignInput} >/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.assignInput} >1</Button>
            <Button handleClick={this.assignInput} >2</Button>
            <Button handleClick={this.assignInput} >3</Button>
            <Button handleClick={this.assignInput} >*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.assignInput} >.</Button>
            <Button handleClick={this.assignInput} >0</Button>
            <Button handleClick={() => this.handleAns()} >=</Button>
            <Button handleClick={this.assignInput} >+</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
            <Button handleClick={this.assignInput} >-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
