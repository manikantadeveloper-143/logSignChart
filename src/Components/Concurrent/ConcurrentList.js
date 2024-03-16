import React from 'react'
import '../ProductList/ProductList.css'

const ConcurrentList = ({item}) => {
  
  return (
    <div className='allProducts-container'>
      {
        item.map(item => {
          const {id,thumbnail,image,title,price,rating,category,body} = item
           if(rating) var {rate} = rating
         
         return <React.Fragment key={id}>
                 {
                   !body ? 
                   (<div className='allProducts-card'> 
                         <div><img src={image || thumbnail} alt='ProductImage' /></div>
                         <div>{title}</div>
                         <div>
                             <div>Price:{price}&#x20B9;</div>
                             <div>Rating:{rate? rate : rating}</div>
                         </div>
                        <div>{category}</div>
                   </div>)
                 :
                  <div className='allProducts-card'>
                    <div>{title} <hr/></div>
                    <div>{body}</div>
                  </div>
                 }
                </React.Fragment>
        })
      }
    </div>
  )
}

export default ConcurrentList