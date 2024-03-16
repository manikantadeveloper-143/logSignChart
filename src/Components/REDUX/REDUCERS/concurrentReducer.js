import { ACTION_TYPES } from "../ACTIONS/actionTypes"

const initialState = {
     products:[],
} 

const concurrentReducer = (state = initialState,{type,payload}) => {
   
  switch(type){
    case ACTION_TYPES.CONCURRENT_FETCH:
      return {...state,products:payload}
    default:
      return state
  }
} 

export default concurrentReducer