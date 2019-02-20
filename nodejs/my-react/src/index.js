import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
//import registerServiceWorker from './registerServiceWorker';
// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//           <hr/>
//           <Squire></Squire>
//         </div>
//       );
//     }
//   }

  ReactDOM.render(<Game name="Runoob" tager='my name is tager'/>, document.getElementById('root'));
  //registerServiceWorker();

