import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import { IoMdArrowDropdown } from "react-icons/io";
function ShopCategory(props) {
  const {all_product}= useContext(ShopContext);
  return (
    <div className='ShopCategory'>
      <div className='banner'>
        <img src={props.banner} alt="" />
      </div>
      <div className="Shopcategory-indexSort">
        <div className='category_text'>
        <h1>Showing 1-12::</h1> 
        <h2>Out of 36 products</h2>
        </div>
        <div className='filter'>
          <button>Sort By<IoMdArrowDropdown/></button>
        </div>
      </div>
      
        
      <div className='pduct'>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null; 
          }
        })}
      </div>
      </div>
      <div className='filter space'>
          <button>Explore more</button>
        </div>
    </div>
  )
}

export default ShopCategory
