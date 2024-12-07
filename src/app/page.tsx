import Image from 'next/image'
import React from 'react'

import hero from '../../public/images/hero.png'
import heroicon from '../../public/images/heroicon.png'
import heroiconbar from '../../public/images/heroiconbar.png'


import {  ArrowLeft, ArrowRight, ChevronRight, MoveRight,  } from 'lucide-react'
import FlashSales from '@/components/theme/FlashSales'
import Category from '@/components/theme/Category'
import SellingProducts from '@/components/theme/SellingProducts'
import MusicCategory from '@/components/theme/MusicCategory'
import Products from '@/components/theme/Products'
import NewArrival from '@/components/theme/NewArrival'



export default function Home() {

  return (

<div className='w-full h-auto'>

    <div className='grid md:grid-cols-4 grid-cols-1 grid-rows-2 md:h-[400px] h-[450px] w-full md:mb-32'>
    
    <div className='grid md:grid-cols-1'>
  <div className=' md:p-10 md:pr-16 md:text-lg md:border-r-2 md:border-h  ml-10'> 
<div className='flex md:mt-2'>Men's Fashion <ChevronRight /></div>
<div className='flex md:mt-2 '>Woman's Fashion <ChevronRight /> </div>
<div className='md:mt-2'>Electronics</div>
<div  className='md:mt-2'>Home & lifestyle</div>
<div className='md:mt-2'>Medicine</div>
<div className='md:mt-2'>Sports & Outdoor</div>
<div className='md:mt-2'>Baby's & Toys</div>
<div className='md:mt-2'>Medicine</div>
<div className='md:mt-2'>Groceries & Pets</div>
<div className='md:mt-2'>Health & Beauty</div>
    </div>
</div>
<div className=' grid md:col-span-3  bg-black md:h-[370px] h-[250px] mt-5 md:ml-5 md:mr-10 '>

<div className='grid grid-cols-2'>

  <div className='text-white flex flex-col md:ml-14 ml-4'>
    <div className=' flex'>
  <Image src={heroicon} alt='mobileapp' width={2000} height={2000} className='w-14 mt-10 '/> 
<p className='md:mt-16 mt-5 ml-3'>iPhone 14 Series</p> </div>
<h1 className='font-bold md:text-5xl text-2xl md:mt-8 mt-4'>Upto 10% </h1>
<h1 className='font-bold md:text-5xl text-2xl md:mt-4 mt-2 '>off Voucher</h1>
<h2 className='underline flex flex-row text-lg md:mt-5 mt-2'>Shop Now <MoveRight className='ml-2 mt-1'/></h2>
  </div>
 <Image src={hero} alt='mobile' width={500} height={500} className='h-[250px]'/> 
<Image src={heroiconbar} alt='' width={100} height={100} className='md:ml-[350px] md:mt-10 -mt-5 ml-28'/>

</div>
</div>

    </div>



<div className='md:-mt-14 mt-14'>
  <div className='bg-red-500 w-5 h-10 rounded md:ml-32 ml-5 mb-3'> 
    <h1 className='md:ml-10 ml-7 text-red-500 mt-7'>Today's </h1>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-4'>
    <h1 className='text-3xl font-bold md:mt-8 md:ml-32 ml-5'>Flash Sales</h1>
    <div className='grid grid-cols-4 grid-rows-2 md:ml-10 ml-2'>
      <h1>Days</h1>
      <h1>Hours</h1>
       <h1>Minutes</h1>
       <h1>Seconds</h1>
       <h1 className='md:text-3xl text-2xl font-bold'>03 <span className='text-red-500'>:</span></h1>
       <h1 className='md:text-3xl text-2xl font-bold'>23 <span className='text-red-500'>:</span></h1>
       <h1 className='md:text-3xl text-2xl font-bold'>19 <span className='text-red-500'>:</span></h1>
       <h1 className='md:text-3xl text-2xl font-bold'>56 <span className='text-red-500'>:</span></h1>
       
    </div>
 <h1></h1>
    <h1 className='flex md:ml-20  ml-24 gap-3 mt-5 mb-10 '><ArrowLeft className='rounded-full w-10 h-10' id='sale'/> 
    <ArrowRight className='rounded-full w-10 h-10' id='sale'/></h1>
  </div>
  <FlashSales />

</div>
<Category />

<SellingProducts/>

<MusicCategory />

<Products/>

<NewArrival />

    </div>
  )
}
