import { ACTION_TYPES } from "../ACTIONS/actionTypes"

const initialState = {
     user:false
} 

const userReducer = (state = initialState,{type,payload}) => {
  
  switch(type){
    case ACTION_TYPES.CHECK_USER:
       return {...state,user:payload}
    default:
      return state
  }
} 

export default userReducer