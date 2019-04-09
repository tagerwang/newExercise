import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import About from './about';
import 'antd/dist/antd.css';
// 首先我们需要导入一些组件...
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

const App =  ReactDOM.render(
  <Router>
    <div><Link to="/home">Home</Link></div>
    <div><Link to="/about">About</Link></div>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </Router>
  , document.getElementById('root'));
  //registerServiceWorker();


  // 一下是老版本的用法
  // 最后，我们用一些 <Route> 来渲染 <Router>。 
// 这些就是路由提供的我们想要的东西。
// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//     </Route>
//   </Router>
// ), document.body)

