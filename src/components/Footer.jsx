import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-full h-auto bg-slate-200 py-8 mt-7'>
      <div className="flex-col lg:gird ">
        <div className="lg:pl-64 justify-items-center gap-5 self-center lg:inline-flex">
        <img className='mx-auto px-10' src="./assets/icon.png" alt="ebdh"/>
        <img  className='mx-auto px-8'src="./assets/icon-1.png" alt="ebdh"/>
        <img className='mx-auto px-8' src="./assets/icon-2.png" alt="ebdh"/>
        <img className='mx-auto px-8' src="./assets/icon-3.png" alt="ebdh"/>
        <img className='mx-auto px-10' src="./assets/icon.png" alt="ebdh"/>
        <img  className='mx-auto px-8'src="./assets/icon-1.png" alt="ebdh"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
