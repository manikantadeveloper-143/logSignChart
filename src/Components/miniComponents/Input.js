import React from 'react'

const Input = ({type,placeholder,name,value,onChange,...rest}) => {
  return (
    <div>
       <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input