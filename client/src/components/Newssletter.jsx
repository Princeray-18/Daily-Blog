import React from 'react'
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32">
      <h2 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h2>
      <p className="md:text-lg text-gray-500/70 pb-6">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      {/* Left-aligned form */}
      <form className="flex items-center justify-start max-w-2xl w-full md:h-13 h-12">
        <input
          type="email"
          placeholder="Enter your email id"
          required
          className="border border-gray-300 rounded-md h-full border-r-0 
                     outline-none w-full rounded-r-none px-3 text-gray-500"
        />

        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary/80 
                     hover:bg-primary transition-all cursor-pointer 
                     rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter