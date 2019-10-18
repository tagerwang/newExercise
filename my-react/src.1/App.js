import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tager from './tager';
var arr=['<h1>菜鸟教程</h1>','<h2>学的不仅是技术，更是梦想！</h2>']
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" data-myattribute = "somevalue">
          Tos get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{arr}</div>
        <h1 className='test'> {this.props.nametest}</h1>
        <Tager gettager={this.props.tager}/>
      </div>
    );
  }
}

export default App;
