import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../REDUX/ACTIONS/actionCreaters'
import './ProductList.css'

const ProductList = () => {
 
  const {products} = useSelector(state => state.products) 
  const {cart} = useSelector(state => state.cart) 
  const {sort,searchFilter} = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const filterProducts = () => {
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a,b) =>
          (sort === "Ascending" ? a.price-b.price : b.price-a.price) 
      )}

    if(searchFilter)
    {
      sortedProducts = sortedProducts.filter(item => 
                                 item.title.toLowerCase().includes(searchFilter.toLowerCase()))
    }
   return sortedProducts
  }

  return (
    <div className='allProducts-container'>
      {
        products && filterProducts()?.map(item => {
          const {id,thumbnail,image,title,price,rating,category,body} = item
           if(rating) var {rate} = rating
         
         return <React.Fragment key={id}>
                 {
                   !body ? 
                   (<div className='allProducts-card'> 
                         <div><img src={image || thumbnail} alt='ProductImage' /></div>
                         <div>{title}</div>
                         <div>
                             <div>Price:{price}&#x20B9;</div>
                             <div>Rating:{rate? rate : rating}</div>
                         </div>
                        <div>{category}</div>
                        <div>
                          {
                             (cart.some(cartData =>cartData.title === item.title)) ?
                              <button onClick={() => {
                                                     dispatch(removeFromCart(item))
                                                    }}>Remove from Cart</button>
                            : <button onClick={() => {
                                                    dispatch(addToCart(item))
                                                   }}>ADD TO CART</button>
                          }
                           
                        </div>
                   </div>)
                 :
                  <div className='allProducts-card'>
                    <div>{title} <hr/></div>
                    <div>{body}</div>
                  </div>
                 }
                </React.Fragment>
        })
      }
    </div>
  )
}

export default ProductList