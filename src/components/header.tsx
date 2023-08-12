import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
  return (
    <header className="text-black body-font font-bold">
    <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font items-center text-orange-500 font-bold mb-4 md:mb-0">
        <span className="ml-3 text-xl">Bakery.</span>
      </a>
      <a className="flex title-font items-center text-black font-bold mb-4 md:mb-0">
        <span className="text-xl">co</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex  items-center text-base justify-center">
        <a className="mr-8 hover:text-gray-900">Home</a>
        <a className="mr-8 hover:text-gray-900">About</a>
        <a className="mr-8 hover:text-gray-900">Menu</a>
        <a className="mr-8 hover:text-gray-900">Resurvation</a>
        <a className="mr-8 hover:text-gray-900">Order</a>
        <a className="mr-8 hover:text-gray-900">Contact</a>
      </nav>
      <div className='flex gap-4'>
      <h1 className=' flex items-center gap-1'><AiOutlineUser color='orange' size='2rem'/>My Account </h1>
      <h1 className='flex items-center gap-1 '><AiOutlineShoppingCart color='orange'  size='2rem'/>Cart </h1>
      </div>
      
    </div>
  </header>
  )
}

export default Header
