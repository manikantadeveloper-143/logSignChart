import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'
import Button from '../miniComponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeFromCart } from '../REDUX/ACTIONS/actionCreaters'
import './Cart.css'

const Cart = () => {
  let {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className='cart-page'>
      <div>
          {
            cart.map(item => {
              const {category,price,image,thumbnail,qty,id} = item
              
           return <div key={id}>
                    <div><img src={image ? image : thumbnail} alt={category}></img></div>
                    <div><h3>{category}</h3></div>
                    <div><h3> {price} &#8377;</h3></div>
                    <div className='cart-page-qty'>
                          <div>
                            <AiOutlineMinusCircle size='1.5rem'
                              onClick={() => dispatch(decreaseQty(item))}/>
                            </div>
                          <div>{qty}</div>
                          <div>
                            <AiOutlinePlusCircle size='1.5rem'
                               onClick={() => dispatch(increaseQty(item))}/>
                          </div>
                    </div>
                      <div>
                        <MdOutlineCancel size='1.7rem' color='red' 
                           onClick={() => dispatch(removeFromCart(item))}/>
                      </div>
                    </div>
            })
          }
      </div>
      <div>
          <div><h3>Total Items:{cart.length}</h3></div>
          <div>
          <h3>Total Price:
                          {
                            Math.ceil(
                              cart.reduce((acc,item) => {
                                const {price,qty} = item
                                return acc+price*qty
                             },0)
                            )
                          }
          </h3>
          </div>
             <Button name={"Proceed to Payment"}></Button>
      </div>
    </div>
  )
}

export default Cart