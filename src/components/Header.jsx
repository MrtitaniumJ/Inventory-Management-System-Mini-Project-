import React from 'react'
import Logo from "./logo"
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {

  const navigate = useNavigate();
  return (
    <div className="top_section sticky top-0 z-50 text-white bg-gray-700 mt-2 mx-2 rounded p-3 flex justify-between text-2xl items-center">
          
          <Logo/>
          <div className="tabs flex flex-row gap-4 pr-8">
            <Link to="/login" className="link">Log In</Link>
            <button>b1</button>
            <button>b1</button>
          </div>
        </div>
  )
}

export default Header