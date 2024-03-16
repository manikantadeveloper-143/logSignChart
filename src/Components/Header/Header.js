import React from 'react'
import Input from '../miniComponents/Input'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilter, userCheck } from '../REDUX/ACTIONS/actionCreaters'
import { useState } from 'react'
import {BsEmojiFrown} from 'react-icons/bs'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import {BsCart4} from 'react-icons/bs'
import './Header.css'
import MiniCart from './miniCart/MiniCart'

const Header = () => {
 
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [showCart,setShowCart] = useState(false);
  let {cart} = useSelector(state => state.cart)

   const handleLogout = () => {
      setShowCart(false)
      dispatch(userCheck(false))
   }

  return (
    <div className='header'>
      <div>
         <Link to='/'><h1>Jeev.ai</h1> </Link>
      </div>
        {
         user ? <Input type={"text"} placeholder={"Search Items..."} onChange={(e) => {
            dispatch(searchFilter(e.target.value))
           }}/> : null
        }
      <div className='header-cart'>
         
         
      <div className='cart-wrapper'>
         <div className="cart-box" onClick={() => user ? setShowCart(!showCart) : setShowCart(showCart)}>
               <div><BsCart4 className='cart-icon' /></div>
                <div>
               {  
                  user ? cart.length ? 
                  <HiOutlineEmojiHappy size='1.5rem'/> :<BsEmojiFrown size='1.3rem'/>
                  : null
               }
                      <span>{cart.length && user ? cart.length : null}</span>
               </div>
         </div> 
           {showCart ? <MiniCart setShowCart={setShowCart} showCart={showCart}/> : null}         
      </div>


         <div>{!user ? <Link to="/" >Login</Link> :<Link to="/" onClick={handleLogout}>Logout</Link> }</div>
      </div>
    </div>
  )
}

export default Header