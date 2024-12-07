"use client"

import Image from 'next/image'
import React from 'react'

import fsale1 from '../../../public/images/fsale1.png'
import fsale2 from '../../../public/images/fsale2.png'
import fsale3 from '../../../public/images/fsale3.png'
import fsale4 from '../../../public/images/fsale4.png'
import { Eye, Heart } from 'lucide-react'

import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '../ui/button'

export default function FlashSales() {

  return (
   <div>
    
    <div className='flex md:flex-row flex-col md:ml-20 m-auto'>
        
        <div className='w-[220px] h-auto md:mt-10 ml-10'>
        <div className='w-[220px] h-[200px] ' id='sale'>

            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-40%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={fsale1} alt='' width={100} height={100} className='w-24 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>
        </div>
        <h1 className='bold mt-5'>HAVIT HV-G92Gamepad</h1>
        <h1 className='text-red-600 flex'>$120  <span className='text-gray-400 line-through ml-2'>$160</span></h1>
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
            <Image src={fsale2} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>AK-900 Wired Keyboard</h1>
        <h1 className='text-red-600 flex'>$960 <span className='text-gray-400 line-through ml-2'>$1160</span></h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i>  
        <span className='text-gray-400'>(75)</span></h1>
            </div>
        
            <div className='w-[220px] h-[300px] md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-30%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={fsale3} alt='' width={500} height={500} className='w-32 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>ISP LCD Gaming Moniter</h1>
        <h1 className='text-red-600 flex'>$370  <span className='text-gray-400 line-through ml-2'>$400</span></h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-300'></i>  
        <span className='text-gray-400'>(99)</span></h1>
            </div>
        
            <div className='w-[220px] h-[300px] md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-25%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={fsale4} alt='' width={200} height={200} className='w-16 h-24 ml-16'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>S-Series Comfort Chair</h1>
        <h1 className='text-red-600 flex'>$375  <span className='text-gray-400 line-through ml-2'>$400</span></h1>
        <h1 className='text-yellow-500 flex'><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star-half'></i>  
        <span className='text-gray-400'>(99)</span></h1>
            </div>
            
 </div>
 <Button variant={'destructive'} className='md:ml-[550px] ml-24 mt-5 mb-5'>View All Products</Button>
 <hr className='w-90 border-1 border-gray-300 m-5 md:ml-20 md:mr-20'/>

 </div>
  )
}

