import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Categories() {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-semibold text-pink-600 text-center mb-12">Shop by Categories</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <div className="relative group overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <Link href='/mens'>
            <Image 
              src="/istockphoto-1428047537-612x612.jpg" 
              alt="Category 1" 
              width={400} 
              height={300} 
              className="w-full cursor-pointer h-full object-cover"
            />
            </Link>
          
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <Link href='/mens'>
              <h3 className="text-2xl font-semibold text-white cursor-pointer">Mens Fashion</h3>
              </Link>
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Image 
              src="/istockphoto-1657460312-612x612.jpg" 
              alt="Category 2" 
              width={400} 
              height={300} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <Link href='/womens'>     <h3 className="text-2xl font-semibold text-white">Womens Fashion</h3></Link> 
            </div>
          </div>

          {/* Category 3 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            
            <Image 
              src="/istockphoto-1372166653-612x612.jpg" 
              alt="Category 3" 
              width={400} 
              height={300} 
              className="w-full h-full object-cover"
            />
             
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
           <Link href='/jewellery'>  <h3 className="text-2xl font-semibold text-white">Jewellery</h3></Link> 
            </div>
          </div>

          {/* Category 4 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Image 
              src="/istockphoto-2148769570-612x612.jpg" 
              alt="Category 4" 
              width={400} 
              height={300} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white">Perfume</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Categories;
