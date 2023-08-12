import React from 'react'
import { GiCupcake } from 'react-icons/gi';
import { LuSandwich} from 'react-icons/lu';
import { LiaCookieSolid} from 'react-icons/lia';
import {LiaBreadSliceSolid} from 'react-icons/lia';   
const Statistic = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="lg:container  px-5 py-24 lg:mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome To Our Store</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">It is a long established fact that a reader will be distracted by the readable content of
        a page when looking at its layout. The point using Lorem Ipsum. 
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="border-2 border-gray-200 px-5  py-6 rounded-lg">
             <GiCupcake color='orange' size='xs'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Cake</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <LuSandwich color='orange' size='xs'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Sandwich</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <LiaCookieSolid color='orange' size='xs'/>    
          <h2 className="title-font font-medium text-3xl text-gray-900">Cookies</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-5 py-6  rounded-lg">
            <LiaBreadSliceSolid color='orange' size='xs'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Bread</h2>
          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Statistic