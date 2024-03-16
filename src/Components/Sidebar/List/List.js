import React from 'react'
import { NavLink } from 'react-router-dom'

const List = ({item}) => {
  return (
            <NavLink to ={(item==='FakeStoreAPI') ? '/' : `${item.toLowerCase()}`}>
               <li>{item}</li>
            </NavLink>
  )
}

export default List