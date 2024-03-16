import React from 'react'
import './miniCart.css'
import {MdOutlineCancel} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../REDUX/ACTIONS/actionCreaters'

const MiniCart = ({setShowCart,showCart}) => {
  let {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch()


  return (
      
    <div className='cart-container'>
      {  
         cart.length ?
         cart.map((item,index) => {
          const {category,image,thumbnail} = item
          return <div key={index} className="items">
                     <div>
                     <img src={image ? image : thumbnail} alt={category}/>
                     </div>
                     <div>{category}</div>
                     <div>
                      <MdOutlineCancel size='1.2rem' color='red'
                            onClick={() => dispatch(removeFromCart(item))}/>
                      </div>               
                 </div>            
       })
       : <div className='empty'>I am Empty</div>
      }   
      <Link to='cart'><button onClick={() => setShowCart(!showCart)}>Cart Page</button></Link>     
    </div>
  )
}

export default MiniCart