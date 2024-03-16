import React from 'react'

const Button = ({name,onClick,...props}) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button