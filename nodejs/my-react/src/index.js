import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import About from './about';
import Account from './component/account';
import 'antd/dist/antd.css';
// import B from "./component/decorator/B";
// 首先我们需要导入一些组件...
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom'
import store from "./store";
import { Provider } from "react-redux";

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

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    {/* <div><Link to="/home">Home</Link></div>
    <div><Link to="/about">About</Link></div>
    <div><Link to="/account">Account</Link></div> */}
    {/* 高阶组件 */}
    {/* <B/> */}
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/account" component={Account} />
  </HashRouter>
  </Provider>
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

