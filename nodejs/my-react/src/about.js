import React from 'react';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import { Button } from 'antd';
import store from "./store";
class About extends React.Component {
    constructor(){
        super();
        // this.state={
        //     squares:Array(9).fill(null),
        //     xIsNext:true,
        // }
        this.state={
          count: 0
        }
        this.unsubscribe = store.subscribe(()=>{
          console.log(store.getState(), '====================')
          this.setState.count = store.getState().count
          debugger
      })
      
    }
    componentWillUnmount () {
      // console.log(this.unsubscribe)
      // this.unsubscribe();    
    }
    render() {
      return (
        <div>
          <Button type="primary">Primary</Button>
          This is about page router !
          <div>count: {this.state.count}</div>
          <div>store-count: {store.getState().count}</div>
        </div>
      );
    }
  }

export default About;
  //registerServiceWorker();

