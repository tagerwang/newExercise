import React from 'react';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';
// class Square extends React.Component {
//     // constructor(){
//     //     super();
//     //     this.state={
//     //         value:null,
//     //     }
//     // }
    
//     render() {
//       return (
//         <button className="square" onClick={()=>this.props.onClick()}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }
function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
}

export default Square;
  //registerServiceWorker();

