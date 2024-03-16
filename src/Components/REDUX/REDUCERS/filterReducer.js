import { ACTION_TYPES } from "../ACTIONS/actionTypes"

 const initialState = {
  sort:false,
  searchFilter:""
}

export const filterReducer = (state=initialState,{type,payload}) => {
    
  switch(type)
  {
    case ACTION_TYPES.SORT_BY_PRICE:
       return {...state,sort:payload}

    case ACTION_TYPES.SEARCH_FILTER:
       return {...state,searchFilter:payload}
 
    default:
      return state
  }

}