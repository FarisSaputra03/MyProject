import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image width={720} height={600} src="/img/kue.jpeg" alt="" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About 
        <br className="hidden lg:inline-block"/> Bakery.co
      </h1>
      <p className="mb-8 leading-relaxed">It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.
      It has a more-or-less normal distribution of letters, as opposed to using Content here, content here
      </p>
      <div className="flex justify-center">
      <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg- rounded text-lg">Read More</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero