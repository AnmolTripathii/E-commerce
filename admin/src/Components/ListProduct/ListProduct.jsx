import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import { RiCloseLine } from 'react-icons/ri';

function ListProduct() {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch(`https://backend-bice-five-39.vercel.app/allproducts`).then((res) => res.json()).then((data) => { setAllProducts(data) })
  }
  useEffect(() => {
    fetchInfo();
  }, [])
  const remove_product = async(id)=>{
    await fetch(`https://backend-bice-five-39.vercel.app/removeproduct`,{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  return (
    <div className='listproduct'>
      <h1>Product List</h1>
      <div className='listproduct-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Cateory</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className='allproduct'>
        <hr />
        {allproducts.map((product, index) => {
          return <div>
            <div key={index} className="listproduct-main  listproduct-format">
            <img src={product.image} className='product-img' alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <RiCloseLine className='cart_remove' color="#332927" size={30} onClick={()=>{remove_product(product.id)}}/>
            
          </div>
          <hr />
          </div>
          
        })}
      </div>
    </div>
  )
}

export default ListProduct
