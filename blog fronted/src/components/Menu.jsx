import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {

  return (
    <>
    <header className="bg-gray-800 p-4">
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">MyBlog</Link>
      </div>
      <ul className="hidden md:flex space-x-8 text-white">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition" >Blog</Link>
        </li>
        <li>
          <Link to="/NewBlog" className="hover:text-yellow-400 transition" >New Blog</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-yellow-400 transition">SignUp</Link>
        </li>
      </ul>
    </nav>
  
  </header>
  </>
  
  )
}

export default Menu