import React from 'react';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import Game from './game';
class Home extends React.Component {

    // constructor(){
    //     super();
    //     this.state={
    //         squares:Array(9).fill(null),
    //         xIsNext:true,
    //     }
    // }

    render() {
      return (
        <Game name="Runoob" tager='my name is tager'/>
      );
    }
  }

export default Home;
  //registerServiceWorker();

