import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../miniComponents/Button'
import Input from '../miniComponents/Input'
import { validation } from './Validation'

const initialValues = {
  name:"",
  email:"",
  mobileNumber:"",
  password:"",
  confirmPassword:""
  }

const RegisterForm = () => { 

  const [data,setData] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false)
  const [error,setError] = useState({})


 const handleData = (event) => {
     let {name,value} = event.target
     setData({...data,
                    [name] : value})
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(data)
    setError(preError => err)
    setIsSubmit(true)
 }

 useEffect( () => {
      if(Object.keys(error).length === 0 && isSubmit)
      {
        let userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')): [];
            userData = [...userData,data]
            localStorage.setItem('userData',JSON.stringify(userData));
            alert("User Registered")
        setData(initialValues)
      }
 },[error])

 

  return (
    <div className='login-container'>
      <div className='login-card'>  
      <div>
         <h2>Register Form</h2> <hr/>
      </div>
      <div>
      <form onSubmit={handleSubmit} className='login-card-form'>
         <Input type = {"text"} placeholder = {"Enter your Name"} name = {"name"} value = {data.name} onChange = {handleData}/>
         <h6>{error.name}</h6>

         <Input type = {"text"} placeholder = {"Enter your Email"} name = {"email"} value = {data.email}
         onChange = {handleData}/>
         <h6>{error.email}</h6>

         <Input type = {"text"} placeholder = {"Enter your Mobile Number"} name = {"mobileNumber"} value = {data.mobileNumber} onChange = {handleData}/>
         <h6>{error.mobileNumber}</h6>

         <Input type = {"password"} placeholder = {"Enter password"} name = {"password"} value = {data.password} onChange = {handleData}/>
         <h6>{error.password}</h6>

         <Input type = {"password"} placeholder = {"Confirm Password"} name = {"confirmPassword"} value = {data.confirmPassword} onChange = {handleData}/>
         <h6>{error.confirmPassword}</h6>
         
         <Button name = {"Submit"} type = {"submit"}/>
      </form>
      </div>
      
       <div>
         <h5 className='login'>Already have account<Link to="/">Login...</Link></h5>
       </div>
      </div>
    </div>
  )
}

export default RegisterForm