
import React from 'react'
import ProductCard from '@/components/ProductCard'


const productsData = [
    {
        img:'/istockphoto-1354219328-612x612.jpg',
        title:"Anklet",
        desc:"Anklet",
        rating:4,
        price:"50.00"
    },
    {
        img:'/istockphoto-2169700794-612x612.jpg',
        title:"Chain Locket",
        desc:"Chain locket",
        rating:5,
        price:"55.00"
    },
    {
        img:"/istockphoto-1944923205-612x612.jpg",
        title:'Ring',
        desc:"diamond Ring",
        rating:3,
        price:"35.00"
    }
    ,{

        img:"/istockphoto-1611670229-612x612.jpg",
        title:"Ring",
        desc:"ring",
        rating:4.5,
        price:"700"
    },
    
    
    {
        img:"/istockphoto-2167055372-612x612.jpg",
        title:"Bracelet",
        desc:"Bracelet",
        rating:5,
        price:"5999",
    },{
        img:"/istockphoto-1407530895-612x612.jpg",
        title:"Chain",
        desc:"Chain",
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
