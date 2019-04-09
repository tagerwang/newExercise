import React from 'react';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
import { Button } from 'antd';
class About extends React.Component {

    // constructor(){
    //     super();
    //     this.state={
    //         squares:Array(9).fill(null),
    //         xIsNext:true,
    //     }
    // }

    render() {
      return (
        <div>
          <Button type="primary">Primary</Button>
          This is about page router !
        </div>
      );
    }
  }

export default About;
  //registerServiceWorker();

