import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/New_Collections/New_Collections'
import NewsLetter from '../Components/News_Letter/News_Letter'

import './CSS/Shop.css'
function Shop() {
  return (
    <div className='shop'>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop
