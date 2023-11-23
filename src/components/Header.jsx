import React from 'react'
import Logo from "./logo"
const Header = () => {
  return (
    <div className="top_section text-white bg-gray-700 mt-2 mx-2 rounded p-2 flex justify-between items-center">
          
          <Logo/>
          <div className="tabs">
            <button>b1</button>
            <button>b1</button>
            <button>b1</button>
          </div>
        </div>
  )
}

export default Header