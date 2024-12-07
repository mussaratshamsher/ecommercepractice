import React from 'react'
import { Button } from '../ui/button'
import { Eye, Heart } from 'lucide-react'
import Image from 'next/image'

import coat from "../../../public/images/coat.png"
import bag from "../../../public/images/bag.png"
import table from "../../../public/images/table.png"
import cooler from "../../../public/images/cooler.png"


export default function SellingProducts() {
  return (
    <div> 

    <div className='bg-red-500 w-5 h-10 rounded md:ml-32 ml-5 mb-3'> 
    <h1 className='md:ml-10 ml-7 text-red-500 mt-7'> This Month </h1>
  </div>
 <div className='grid grid-cols-1 md:grid-cols-2'>
 <h1 className='md:text-3xl text-2xl font-bold md:mt-8 md:ml-32 ml-5'>Best Selling Products</h1>
<Button variant={'ghost'}>View All</Button>
</div>

<div className='flex md:flex-row flex-col md:ml-20 m-auto mt-5'>
        <div className='w-[220px] h-[300px] md:mt-10 ml-10'>

        <div className='w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-40%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={coat} alt='' width={100} height={100} className='w-24 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>
        </div>
        <h1 className='bold mt-5'>The north coat</h1>
        <h1 className='text-red-600 flex'>$260  <span className='text-gray-400 line-through ml-2'>$360</span></h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i>  
        <span className='text-gray-400'>(88)</span></h1>
            </div>

            <div className='w-[220px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-35%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={bag} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Gucci duffle bag</h1>
        <h1 className='text-red-600 flex'>$960 <span className='text-gray-400 line-through ml-2'>$1160</span></h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star-half'></i>    
        <span className='text-gray-400'>(65)</span></h1>
            </div>

            <div className='w-[220px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-35%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={cooler} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>RGB CPU Cooler</h1>
        <h1 className='text-red-600 flex'>$960 <span className='text-gray-400 line-through ml-2'>$1160</span></h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star-half'></i>  
        <span className='text-gray-400'>(65)</span></h1>
            </div>

            <div className='w-[220px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-35%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={table} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Small BookShelf</h1>
        <h1 className='text-red-600'>$360 </h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i>  
        <span className='text-gray-400'>(65)</span></h1>
            </div>

</div>


    </div>
  )
}
