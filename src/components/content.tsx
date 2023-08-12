import Image from 'next/image'
import React from 'react'
const Content = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Feature Food</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"> It is long established fact that a reader will be distracted by the readable content of
      a page when looking at its layout. The point of using Lorem Ipsum.
       </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={400} src="/img/ultah.jpeg" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Birthday Cake
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={400} src="/img/muffin.jpeg" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Muffin
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={400} src="/img/cookies.png" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Biscuits & Cinnamon
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={401} src="/img/ultah2.png" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Birthday Cake
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={402} src="/img/slice.png" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Piece Cake
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={403} src="/img/rasbery.png" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Rasbery Cake
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={404} src="/img/coklat.png" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">Chocolate Cake
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={405} src="/img/bread.png" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">$15.00</h2>
          <p className="leading-relaxed text-base">White Bread
          </p>
        </div>
      </div>
      <div className="mx-auto ">
      <button className="ml-4 inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:text-white rounded text-lg">Previous</button>
        <button className="ml-4 inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:text-white rounded text-lg">Next</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Content