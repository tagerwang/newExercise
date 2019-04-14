import React from 'react';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import Game from './game';
import store from './store';
import {addCount} from "./store/actions";
class Home extends React.Component {

    constructor(){
        super();
        // this.state={
        //     squares:Array(9).fill(null),
        //     xIsNext:true,
        // }
        store.dispatch(addCount(store.getState().count+1))
    }
    render() {
      return (
        <Game name="Runoob" tager='my name is tager'/>
      );
    }
  }

export default Home;
  //registerServiceWorker();

