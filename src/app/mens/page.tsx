

import React from 'react'
import ProductCard from '@/components/ProductCard'


const productsData = [
    {
        img:'/photo-1559038217-3fb2db6186f8.avif',
        title:"jacket",
        desc:"MEN YARN fleece full-zip jacket",
        rating:4,
        price:"50.00"
    },
    {
        img:'/istockphoto-1553638267-612x612.webp',
        title:"Polo Shirt",
        desc:"Polo Shirt",
        rating:5,
        price:"55.00"
    },
    {
        img:"/photo-1720514496414-e1bc4021b8fc.avif",
        title:'Polo shirt',
        desc:"Polo Shirt",
        rating:3,
        price:"35.00"
    }
    ,{

        img:"/istockphoto-172417586-612x612.jpg",
        title:"Shoes",
        desc:"Black Shoes",
        rating:4.5,
        price:"700"
    },
    
    
    {
        img:"/download__1_-removebg-preview (2).png",
        title:"Sports",
        desc:"Trekking & running shoes",
        rating:5,
        price:"5999",
    },{
        img:"/download__2_-removebg-preview (1).png",
        title:"Watches",
        desc:"Smart Watches",
        rating:2,
        price:"200",
    }
]



function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
<h2 className='font-medium text-2xl pb-4'>
New Products
</h2>

<div className=' grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3
 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>


    {productsData.map((item,index) =>( <ProductCard
    key={index}
    img={item.img}
    title={item.title}
    desc={item.desc}
    rating={item.rating}
    price={item.price} />
    ))}
 </div>


      </div>
    </div>
  )
}

export default NewProducts
