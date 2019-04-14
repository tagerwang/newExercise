import redux,{ createStore } from 'redux'
// import { addCount } from "./actions";
const reducer = function(state = {count: 0}, actions) {
  switch (actions.type) {
    case 'ADD_TO_CART' : return {
      count: actions.payload.count
    };
    default: return state;
  }
    
  }
let store = createStore(reducer)
// console.log("initial state: ", store.getState());
console.log(redux)
export default store