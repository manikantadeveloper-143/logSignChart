 import axios from "axios"
import { url } from "../APIs/apis"
import { ACTION_TYPES } from "./actionTypes"


export const setProducts = (api) => {
    
  return  (dispatch) => {

    fetch(url(api))
    .then(res => res.json())
    .then(data => {
       const {products} = data;

       products ? 
                dispatch({
                        type:ACTION_TYPES.SET_PRODUCTS,
                        payload:products
                    })
                : dispatch({
                        type:ACTION_TYPES.SET_PRODUCTS,
                        payload:data
                  })
    })

  }
}

export const concurrent = () => {
   const endPoints = [
    "https://fakestoreapi.com/products",
    "https://dummyjson.com/products",
    "https://jsonplaceholder.typicode.com/posts"
   ]
  return  (dispatch) => {

    axios.all(endPoints.map((endpoint) => axios.get(endpoint))).then(
      (data) => dispatch({
          type:ACTION_TYPES.CONCURRENT_FETCH,
          payload:data
      })
    );
  }
}

export const removeProducts = () => {
  return {
          type:ACTION_TYPES.REMOVE_SELECTED_PRODUCT
         }
}

export const userCheck = (user) => {
  return {
       type:ACTION_TYPES.CHECK_USER,
       payload:user
  }
}

export const addToCart = (product) => {
  
  return {
       type:ACTION_TYPES.ADD_TO_CART,
       payload:product
  }
}

export const removeFromCart = (product) => {
  
  return {
       type:ACTION_TYPES.REMOVE_FROM_CART,
       payload:product
  }
}

export const decreaseQty = (product) => {
  
  return {
       type:ACTION_TYPES.DECREASE_QTY,
       payload:product
  }
}

export const increaseQty = (product) => {
  
  return {
       type:ACTION_TYPES.INCREASE_QTY,
       payload:product
  }
}

export const sortByPrice = (order) => {
  
  return {
       type:ACTION_TYPES.SORT_BY_PRICE,
       payload:order
  }
}

export const searchFilter = (text) => {
 
  return {
       type:ACTION_TYPES.SEARCH_FILTER,
       payload:text
  }
}

