import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
function Popular() {

  const [popularProduct ,setPopularProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
        .then((response) => response.json())
        .then((data) => setPopularProduct(data))
        .catch((error) => console.error('Error fetching popular products for women:', error));
}, []);

  return (
    <div className='popular'>
      <div className='heading'>
      <h1>Women's Favorites:</h1>
      <h2>"Trends That Rule the Scene"</h2>
      </div>
      <div className='popular-item'>
        {
            popularProduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular
