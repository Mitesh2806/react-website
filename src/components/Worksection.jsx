import React from 'react'

const Worksection = () => {
  return (
    <div>
        <section className='py-10'>
      <h1 className="max-w-2xl text-[2.9rem] leading-none text-gray-800 font-extrabold font-serif  ml-12 text-center lg:text-5xl lg:text-left lg:leading-tight mb-5"> WORK SHOWCASE.</h1>
        <div>
        <ul className='md:flex md:items-center md:pb-0 lg:pb-8   bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9'>
                <li className='md:ml-8 mr-8 text-xl px-2 md:my-0 my-7 hover:bg-yellow-300 rounded-lg py-2 gap-2 mb-8'>Home</li>
                <li className='md:ml-8 mr-8 text-xl px-2 md:my-0 my-7 hover:bg-yellow-300 rounded-lg py-2 gap-2 mb-8 '>About</li>
                <li className='md:ml-8 mr-10 text-xl px-2 md:my-0 my-7 hover:bg-yellow-300 rounded-lg py-2 gap-2 mb-8'>Blog</li>
            </ul> 
       </div>     
<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div class="grid gap-2  ml-10">
        <div class="h-[190px]">
            <img class=" h-auto max-w-full rounded-lg" src="./src/assets/short.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/long.jpg" alt=""/>
        </div>
        
    </div>
    <div class="grid gap-2  ">
        <div >
            <img class=" max-w-full items-center rounded-lg" src="./src/assets/long.jpg" alt=""/>
        </div>
        <div >
            <img class=" max-w-full items-center rounded-lg" src="./src/assets/short.jpg" alt=""/>
        </div>
        
    </div>
    <div class="grid gap-2 mr-10 ">
        <div class="h-[190px]">
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/short.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="./src/assets/long.jpg" alt=""/>
        </div>
       
    </div>
    
    
</div>

      </section>
      <button type="button"className='flex items-center justify-center m-auto text-gray-800 bg-yellow-300 font-medium rounded-lg px-5 py-3  text-center hover:bg-yellow-400 hover:drop-shadow-md duration-300 ease-in-out'>Dikh nhi rha</button>
    </div>
    
    
  )
}

export default Worksection
