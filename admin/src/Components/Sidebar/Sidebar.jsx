import React,{useState} from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { TiThListOutline } from "react-icons/ti";
function Sidebar() {
    const [style,SetStyle]=useState("");

  return (
    <div className='sidebar'>
      <ul>
        <li>
            <Link to={'./addproduct'} onClick={()=>{SetStyle("add")}} className={style==="add"?"choice1":"choice"}><FaCartPlus/><span>Add Product</span></Link>
        </li>
        <li>
            <Link to={'./listproduct'} onClick={()=>{SetStyle("list")}} className={style==="list"?"choice1":"choice"}><TiThListOutline /><span>Product List</span></Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
