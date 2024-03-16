import { ACTION_TYPES } from "../ACTIONS/actionTypes"

const initialState = {
     products:[],
} 

const productReducer = (state = initialState,{type,payload}) => {
  
  switch(type){
    case ACTION_TYPES.SET_PRODUCTS :
      return {...state,products:payload}
    case ACTION_TYPES.CONCURRENT_FETCH:
      return {...state,products:payload}
    case ACTION_TYPES.REMOVE_SELECTED_PRODUCT :
        return {}
    default:
      return state
  }
} 

export default productReducer