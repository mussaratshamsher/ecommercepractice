import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import aboutimg from '../../../public/images/aboutimg.png'
import aboutc1 from '../../../public/images/aboutc1.png'
import aboutc2 from '../../../public/images/aboutc2.png'
import aboutc3 from '../../../public/images/aboutc3.png'


export default function about() {
  return (
    <div className='w-full'>

<div className='md:mt-10 mt-5 ml-10 text-gray-400 md:ml-40'><Link href='/'>Home / </Link>
 <Link href='./../about' className='text-black'> About</Link></div>

<div className='grid md:grid-cols-2 grid-cols-1 md:mb-20'>

<div className='md:p-10 p-4 md:ml-5'>
    <h1 className='font-bold md:text-4xl text-2xl mb-4 md:mb-10'>Our Story</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        
<p className='md:mt-5 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
     make a type specimen book. It has survived not only five centuries.</p>
</div>

<div>
    <Image src={aboutimg} alt='' width={500} height={500} className='w-[500px] h-[400px] md:ml-[130px]'/>
</div>

</div>
{/* cards setion */}
 
<div className='grid grid-cols-1 gap-2 ml-5 mt-5 md:grid-cols-4 md:p-10'>
   {/* card 1 */} 
<div className='flex flex-col w-[250px] h-[200px] border border-gray-400 justify-center items-center
hover:bg-red-500 hover:text-white'>
<div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bx-store-alt ml-3 mt-3 text-white  bg-black p-3 rounded-full text-3xl '></i></div>

<h1 className='font-bold md:text-2xl text-1xl'>25K</h1>
<p className='font-thin'>sellers at our site</p>
    </div>
 
 {/* card 2 */}
<div className='flex flex-col w-[250px] h-[200px] border border-gray-400 justify-center items-center
hover:bg-red-500 hover:text-white'>
<div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bx-dollar-circle ml-3 mt-3 text-white bg-black p-3 rounded-full text-3xl '></i></div>

<h1 className='font-bold md:text-2xl text-1xl'>25K</h1>
<p className='font-thin'>sellers at our site</p>
    </div>

    {/* card 3 */} 
<div className='flex flex-col w-[250px] h-[200px] border border-gray-400 justify-center items-center
hover:bg-red-500 hover:text-white'>
<div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bx-shopping-bag ml-3 mt-3 text-white bg-black p-3 rounded-full text-3xl '></i></div>

<h1 className='font-bold md:text-2xl text-1xl'>25K</h1>
<p className='font-thin'>sellers at our site</p>
    </div>

    {/* card 4 */} 
<div className='flex flex-col w-[250px] h-[200px] border border-gray-400 justify-center items-center
hover:bg-red-500 hover:text-white'>
<div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bx-wallet ml-3 mt-3 text-white bg-black p-3 rounded-full text-3xl '></i></div>

<h1 className='font-bold md:text-2xl text-1xl'>25K</h1>
<p className='font-thin'>sellers at our site</p>
    </div>

</div>

{/* members section */}
<div className='grid grid-cols-1 md:grid-cols-3 mt-5 md:p-20 md:ml-20 ml-10 gap-3'>

<Image src={aboutc1} alt='' width={1000} height={1000} className='md:w-[250px] md:h-[400px] w-[200px] h-[300px] mr-5'/>

<Image src={aboutc2} alt='' width={1000} height={1000} className='md:w-[250px] md:h-[400px] w-[200px] h-[300px] mr-5'/>

<Image src={aboutc3} alt='' width={1000} height={1000} className='md:w-[250px] md:h-[400px] w-[200px] h-[300px]'/>

</div>
 
<div  className='grid grid-cols-1 md:grid-cols-3 md:pl-20 md:pr-20 md:pb-10 md:ml-20 mt-5

ml-7 gap-3 mb-5'>
{/* 1 */}
  <div >
  <div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bxs-truck ml-3 mt-3 text-white bg-black p-3 rounded-full text-3xl '></i></div>
<h1 className='font-bold  text-1xl md:-ml-10'>FREE & FAST DELIVERY</h1>
<p className='font-thin md:-ml-8'>delivery all over at $140</p>
  </div>
{/* 2 */}
  <div>
  <div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bx-headphone ml-3 mt-3 text-white bg-black p-3 rounded-full text-3xl '></i></div>
<h1 className='font-bold text-1xl md:-ml-5'>24/7 SERVICE</h1>
<p className='font-thin md:-ml-7'>available at everytime</p>
  </div>
 {/* 3 */}
  <div>
  <div className='relative w-20 h-20 rounded-full' id='sale1'>
<i className='bx bxs-badge-check ml-3 mt-3 text-white bg-black p-3 rounded-full text-3xl '></i></div>
<h1 className='font-bold text-1xl md:-ml-10'>MONEY BACK GUARANTEE</h1>
<p className='font-thin md:-ml-11'>We return money within 30 days</p>
  </div>

</div>


    </div>
  )
}
