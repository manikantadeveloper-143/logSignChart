import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import RegisterForm from './Components/RegisterForm/RegisterForm'
import Content from './Components/Content/Content'
import Products from './Components/Products/Products'
import Dummy from './Components/Dummy/Dummy'
import Placeholder from './Components/Placeholder/Placeholder'
import NotFound from './Components/NotFound/NotFound'
import { useSelector } from 'react-redux'
import Cart from './Components/Cart/Cart'
import BarChart from './Components/Chart/BarChart/BarChart'
import LineChart from './Components/Chart/LineChart/LineChart'
import PieChart from './Components/Chart/PieChart/PieChart'
import './Components/Chart/style.css'
import DoughnutChart from './Components/Chart/DoughnutChart/DoughnutChart'
import Concurrent from './Components/Concurrent/Concurrent'

const App = () => {
   
  const {user} = useSelector(state => state.user)
  return (
    <div>
      <Header/>
      <Routes>
          <Route path = '/register-form' element={<RegisterForm/>} />
          <Route path='*' element={<NotFound/>} />
        {
          !user ? <Route path='/' element={<Login/>}/> 
                 : <Route path='/' element={<Content/>} >
                       <Route index element={<Products/>}/>
                       <Route path='dummy-json' element={<Dummy/>} />
                       <Route path='json-placeholder' element={<Placeholder/>}/>
                       <Route path='bar-chart' element={<BarChart/>} />
                       <Route path='line-chart' element={<LineChart/>} />
                       <Route path='pie-chart' element={<PieChart/>} />
                       <Route path='doughnut-chart' element={<DoughnutChart/>} />
                       <Route path='concurrent' element={<Concurrent/>}/>
                   </Route>
        }
         <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App