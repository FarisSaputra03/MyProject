import React from 'react'

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Subscribe Our Newslatter</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        It is a long established fact that a reader will be disttracted by the readable content of
        a page when looking at its layout. The point of using Lorem Ipsum.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex  justify-center flex-wrap -m-2">
        <div className="p-2 ">
        </div>
        <div className="p-2 ">
          <div className="relative">
            <label className="leading-7 items-center  text-sm text-gray-600 font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Subscribe</button>
        </div>
        
        </div>
      </div>
    </div>
</section>
  )
}

export default Contact