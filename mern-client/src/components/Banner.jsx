import React from 'react'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* {left side} */}
        <div>
            <h2 className='text-5xl font-bold leading-snuig text-black'>Buy and Sell Your Books</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quod est iusto! Voluptatibus eum molestias ipsum commodi sequi vero ipsam accusamus. Odio molestiae veritatis optio veniam necessitatibus eligendi repellendus dignissimos.</p>
            <div>
                <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-blue-700 text-white py-2 px-6 font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

         {/* {right side} */}
         <div>right side</div>

        </div>
    </div>
  )
}

export default Banner