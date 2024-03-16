import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {concurrent,removeProducts} from '../REDUX/ACTIONS/actionCreaters'
import ConcurrentList from './ConcurrentList'


const Concurrent = () => {
 
  const dispatch = useDispatch()
  let {products} = useSelector(state => state.concurrent)
  let newArray = products.map(data =>{
                          if(Array.isArray(data.data)) return data.data
                          return data.data.products
  })


 useEffect(() => {
       dispatch(concurrent())
       return () => dispatch(removeProducts())
 })

  return (
    <div> 
        {
          newArray && newArray?.map(item => {
               return <ConcurrentList item={item}/>
          })
        }
    </div>
  )
}

export default Concurrent