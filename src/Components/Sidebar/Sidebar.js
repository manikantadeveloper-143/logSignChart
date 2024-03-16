import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortByPrice } from '../REDUX/ACTIONS/actionCreaters'
import List from './List/List'
import './Sidebar.css'

const Sidebar = () => {

  const products = ['FakeStoreAPI' , 'Dummy-JSON' , 'JSON-Placeholder']
  const chart = ['Bar-Chart', 'Line-Chart' ,'Pie-Chart','Doughnut-Chart']
  const dispatch = useDispatch()

  return (
    <div className='sidebar-container'>
      <div>
         <div><h3>PRODUCTS LIST</h3> <hr/></div>
         <ul className='sidebar-lists'>
           {products.map((item,index) => {
               return <List item={item} key={index}/>
           })}
         </ul>
      </div>
      <div className='sidebar-filter'>
         <div><h3>Filter Products</h3> <hr/></div>
         <div>
           <div>
            <input type="radio" name="sort" id="asc" value="Ascending" 
                            onChange={(e) => dispatch(sortByPrice(e.target.value)) }/>
            <label htmlFor="asc">Ascending</label>
           </div>
           <div>
            <input type="radio" name="sort" id='des' value="Descending"
                            onChange={(e) => dispatch(sortByPrice(e.target.value)) }/>
            <label htmlFor="des">Descending</label>
            </div>
         </div>
      </div>
      <div>
      <div><h3>Charts</h3> <hr/></div>
         <ul className='sidebar-lists'>
           {chart.map((item,index) => {
               return <List item={item} key={index}/>
           })}
         </ul>
      <div className='concurrent'><Link to='concurrent'>CONCURRENT CALL</Link></div>
      </div>
    </div>
  )
}

export default Sidebar