import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import Button from '../miniComponents/Button'
import Input from '../miniComponents/Input'
import { userCheck } from '../REDUX/ACTIONS/actionCreaters'
import './Login.css'

const Login = () => {
  
  const dispatch = useDispatch()
  const initialValue = {
     email:"",
     password:""
  }
  const [loginUser,setLoginUser] = useState(initialValue)

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    dispatch(userCheck(checkUser(userData))) 
  }

  const checkUser = (userData) => {
    const {email,password} = loginUser
      const len = userData.length
      for(let i=0;i<len;i++)
       {
         if(userData[i].email === email )
           {
            if(userData[i].password === password)
               return true
           }
       }
       alert("Enter a Valid Email ID and Password")
       return false

  }

  const handleData = (event) => {
    let {name,value} = event.target
    setLoginUser({...loginUser,
                   [name] : value})
}
  return (
    <div className='login-container'>
      <div className='login-card'>
      <div><h2>LOGIN PAGE</h2> <hr/></div>
      <div>
       <form className='login-card-form' onSubmit={handleSubmit}>
         <Input type={'email'} placeholder={'Enter Email ID'} name={'email'} value={loginUser.email} 
          onChange={handleData}/>
         <Input type={'password'} placeholder={'Enter Password'} name={'password'} value={loginUser.password} 
          onChange={handleData}/>
         <Button name = {"Submit"} type = {"submit"}/>
         
         <div className='nav-btn'>
          <span>Don't have account</span>
          <Link to='register-form'>Register...</Link>
         </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login