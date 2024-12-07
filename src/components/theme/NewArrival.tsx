import Image from 'next/image'
import React from 'react'

import arrival1 from '../../../public/images/arrival1.png'
import arrival2 from '../../../public/images/arrival2.png'
import arrival3 from '../../../public/images/arrival3.png'
import arrival4 from '../../../public/images/arrival4.png'

import services from '../../../public/images/services.png'
import services1 from '../../../public/images/services1.png'
import services2 from '../../../public/images/services2.png'
import { MoveUp } from 'lucide-react'


export default function NewArrival() {
  return (
    <div className='h-auto'>
 <div className=' bg-red-500 w-5 h-10 rounded md:ml-32 ml-5 mb-3'> 
    <h1 className='md:ml-10 ml-7 text-red-500 mt-7'> Featured </h1>
  </div>
 <h1 className='md:text-3xl text-2xl font-bold md:mt-8 md:ml-32 ml-5'>New Arrival</h1>

{/* pics layout */}
<div className='grid grid-cols-1 md:grid-cols-2 md:ml-20 mb-5'>

<Image src={arrival1} alt='' width={500} height={500} className='md:w-[500px] md:h-[480px] w-[300px] h-[250px] mt-5 ml-2'/>

<div className='grid grid-cols-1'>  
    <Image src={arrival2} alt='' width={500} height={500} className='md:w-[500px] w-[300px] h-[200px] col-span-1 mt-5 ml-2 ' />  
    <div className='grid grid-cols-2'>  
        <Image src={arrival3} alt='' width={250} height={250} className='md:w-[220px] md:h-[200px] w-[140px] md:mt-10 mt-3 ml-2' />  
        <div>
        <Image src={arrival4} alt='' width={250} height={250} className='md:w-[220px] md:h-[200px] w-[140px] md:mt-10 mt-3 ml-1 ' />  
   <h1 className='-mt-20 text-white text-xs ml-5'> <b>Perfume</b>
   <p className=' mt-2'>GUCCI intense odour</p>
   <p className='underline font-bold mt-2'>SHOP NOW </p></h1></div>
    </div>  
</div> 
</div>

{/* Services */}

<div className='grid grid-cols-1 md:grid-cols-3 p-28'>

<div className=' flex flex-col items-center'>
    <Image src={services} alt='' width={500} height={500} className='w-20 h-20'/>
    <h1 className='md:mt-5 mt-3 font-bold'>FREE AND FAST DELIVERY</h1>
    <p className='md:mt-3 mt-2'>For all orders over $140</p>
</div>

<div className=' flex flex-col items-center'>
    <Image src={services1} alt='' width={500} height={500} className='w-20 h-20'/>
    <h1 className='md:mt-5 mt-3 font-bold'>24/7 CUSTOMER SERVICES</h1>
    <p className='md:mt-3 mt-2'>Friendly 24/7 customer support </p>
</div>

<div className=' flex flex-col items-center'>
    <Image src={services2} alt='' width={500} height={500} className='w-20 h-20'/>
    <h1 className='md:mt-5 mt-3 font-bold'>MONEY BACK GUARANTEE</h1>
    <p className='md:mt-3 mt-2'>We return money within 30 days</p>
</div>
     <MoveUp className='rounded-full w-10 h-10 md:ml-[1050px] mt-5 md:mt-10' id='sale'/>
</div>
    </div>
  )
}
