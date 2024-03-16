import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductList from '../ProductList/ProductList'
import { removeProducts, setProducts } from '../REDUX/ACTIONS/actionCreaters'

const Dummy = () => {
  
  const dispatch = useDispatch()

 useEffect(() => {
       dispatch(setProducts('dummy'))
       return () => dispatch(removeProducts())
 })

  return <ProductList/>
}

export default Dummy