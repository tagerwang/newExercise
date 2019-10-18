import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var arr=['<h1>菜鸟教程</h1>','<h2>学的不仅是技术，更是梦想！</h2>']
class Tager extends Component {
  render() {
    return (
      <div className="App">
      <hr/>
      <h1>{this.props.gettager}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to tager</h1>
        </header>
        <p className="App-intro" data-myattribute = "somevalue">
          Tos get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{arr}</div>
        <h1 className='test'> {this.props.nametest}</h1>
      </div>
    );
  }
}

export default Tager;
