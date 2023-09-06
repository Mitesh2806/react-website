import React from 'react'

const Hero = () => {
  return (
    <div className='py-10'>
      <section id="hero" className='py-5'>
        <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
            <div className="mb-14 lg:mb-0 lg:w-1/2 ">
                <h1 className="max-w-2xl text-[2.9rem] leading-none text-gray-800 font-extrabold font-serif  ml-8 text-center lg:text-5xl lg:text-left lg:leading-tight mb-5"><span  className="max-w-2xl text-[2.9rem] leading-none text-gray-800 font-extrabold font-serif text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">Hello!!!</span> We are a creative Digital Agency.</h1>
                <p className="max-w-xl text-center text-gray-700 lg:text-left lg:max-w-md ml-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, nesciunt.</p>
                <div className="flex justify-center mt-14 lg:justify-start">
                    <button type="button"className='text-gray-800 bg-yellow-300 font-medium rounded-lg px-5 py-3   ml-8 text-center hover:bg-yellow-400 hover:drop-shadow-md duration-300 ease-in-out'>Dikh nhi rha</button>
                </div>
            </div>
            <div className="lg:w-1/2 ">
                <img  className="ml-auto rounded-xl"src="./src/assets/building.jpg" alt="image"/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
