import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
  <div className='inline-flex itmes-center justfy-center gap-4 px-6 py-1.5 mb-4 border-primary/40 bg-primary/10 rounded-full 
  text-sm text-primary'>
    <p>new: Ai feature integrated</p>
    <img src={assets.star_icon} className='w-2.5' alt=""/>

  </div>
      </div>
      <img src ={assets.gradientBackground} alt="" className='w-full h-80 object-cover rounded-lg'/> 

    </div>
  )
}

export default Header
