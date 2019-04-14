// action 必选的type参数和可选的payload
export const ADD_TO_CART = 'ADD_TO_CART';

export function addCount(count) {
  // console.log('action:', count)
  return {
    type: ADD_TO_CART,
    payload: { count }
  }
}