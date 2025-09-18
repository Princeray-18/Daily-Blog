import React from 'react'

const Newssletter = () => {
  return (
    <div className='flex flex-col itmes-center justify-center text-center space-y-2
    my-32'>
        <h9 className='md:text-lg text-2x1 font-semibold'>Never Miss a Blog !</h9>
        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest
         blog, new tech,and exclusive news..</p>
        <form className='flex itmes-center justify-between max-w-2xl w-full md:h-13
         h-12'>
        <input className='border border-gray-300 rounded-md h-full border-r-0
        outline-none w-full rounded-r-none px-3 text-gray-500'type="text"
        placeholder='Enter your email id'required/>
        {/* <button type='submit'className='md:px-12 px-8 h-full text-white bg-primary/
        80 hover:bg-primary transition-all cursor-pointer rounded-md
        rounded-l-none'>Subscribe</button>  */}
        <button type="submit" class="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none">Subscribe</button>

        </form>
      
    </div>
  )
}

export default Newssletter
  

