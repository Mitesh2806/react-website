import React, { useState } from 'react'

const Navbar = () => {
let [open,setOpen]=useState(false);
  return (
    <div className=' w-full fixed top-0 left-0'>
        <div className="md:flex bg-white py-2 justify-between">
            <div className="font-bold text-1xl cursor-pointer flex items-center font-serif text-gray-600 md:ml-8">
            <span className="text-3xl text-black mr-1 pt-2">
                <img src="./src/assets/icon.png" alt="icon" className='md:ml-8 '/>
            </span >
            Creative Agency
            </div>
            <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                <img src="" alt="menu"/>
            </div>
            <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9'>
            <li className='md:ml-8 mr-8 text-xl px-2 md:my-0 my-7 hover:bg-yellow-300 rounded-lg py-2 gap-2 mb-8'>Home</li>
                <li className='md:ml-8 mr-8 text-xl px-2 md:my-0 my-7 hover:bg-yellow-300 rounded-lg py-2 gap-2 mb-8 '>About</li>
                <li className='md:ml-8 mr-10 text-xl px-2 md:my-0 my-7 hover:bg-yellow-300 rounded-lg py-2 gap-2 mb-8'>Blog</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar

