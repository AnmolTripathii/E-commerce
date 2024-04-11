import React, { useEffect, useState } from 'react'
import './New_Collections.css'

import Item from '../Item/Item'
function New_Collections() {

  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
      fetch('http://localhost:4000/newcollections')
          .then((response) => response.json())
          .then((data) => setNew_collection(data))
          .catch((error) => console.error('Error fetching new collections:', error));
  }, []);
  
  return (
    <div className='New_Collections'>
      <div className='nc_heading'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <h2>"Elevate Your Wardrobe: Explore Our Stunning New Collection!"</h2>
      </div>
      <div className='collections'>
      {
            new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default New_Collections
