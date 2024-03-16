import { ACTION_TYPES } from "../ACTIONS/actionTypes"

const initialState = {
     cart:[]
} 

const cartReducer = (state = initialState,{type,payload}) => {
  
  switch(type){

    case ACTION_TYPES.ADD_TO_CART :
      return {...state,cart:[...state.cart,{...payload,qty:1}]}

   case ACTION_TYPES.REMOVE_FROM_CART: 
      return {...state,
                 cart:state.cart.filter(item => item.title!== payload.title)
                 } 
    case ACTION_TYPES.INCREASE_QTY:
        return {...state,
                      cart:state.cart.map(item => {
                            return  (item.title === payload.title) 
                                      ? {...item,qty:item.qty+1}
                                      : item
                            })}
                            
    case ACTION_TYPES.DECREASE_QTY:
        return {...state,
                        cart:state.cart.map(item => {
                              return  (item.title === payload.title && item.qty>1) 
                                          ? {...item,qty:item.qty-1}
                                          : item
               })}

    default:
      return state
  }
} 

export default cartReducer