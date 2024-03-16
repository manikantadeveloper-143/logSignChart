import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductList from '../ProductList/ProductList'
import { removeProducts, setProducts } from '../REDUX/ACTIONS/actionCreaters'

const Products = () => {
  
  const dispatch = useDispatch()

 useEffect(() => {
       dispatch(setProducts('fake'))
       return () => dispatch(removeProducts())
 })

  return <ProductList/>
}

export default Products