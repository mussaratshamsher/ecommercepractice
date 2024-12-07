
import { Facebook, Instagram, Linkedin, Play, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import footericon from '../../../public/images/footericon.png'


export default function Footer() {
  return (
    <div className='bg-black p-16 '>
    <div className='grid md:grid-cols-5 grid-cols-1 text-white '>

<div>
  <h1 className='text-1xl font-bold md:mt-2 mt-5'>Exclusive</h1>
  <h2 className='mt-2'>Subscribe</h2>
  <p className='font-thin mt-2'>Get 10% off your first order</p>
<p className='flex mt-2'><input type="text" placeholder='Enter Your Email' 
className='p-2 bg-black border border-gray-100 rounded-sm' /><Play className='-ml-7 mt-2'/></p>
</div>

<div className='text-gray-200 mt-5'>
  <h2 className='font-bold text-white'>Support</h2>
  <p className='font-thin mt-2'>111 fkajkl Dhaka <br /> owuioyi Bangladesh</p>
  <p className='font-thin mt-2'> exclusive@gmail.com</p>
  <p className='font-thin mt-2'>+9839709180</p>
</div>

<div>
  <h2 className='font-bold mt-5'>Account</h2>
  <p className='font-thin mt-2'>My Account</p>
  <p className='font-thin mt-2'> login/Register</p>
  <p className='font-thin mt-2'>Cart</p>
  <p className='font-thin mt-2'>Wishlist</p>
  <p className='font-thin mt-2'>Shop</p>

</div>

<div>
  <h2 className='font-bold mt-5'>Quick link</h2>
  <p className='font-thin mt-2'>Privacy Policy</p>
  <p className='font-thin mt-2'>Terms Of Use</p>
  <p className='font-thin mt-2'>FAQ</p>
  <p className='font-thin mt-2'>Contact</p>
</div>

<div>
  <h2 className='font-bold mb-3 mt-5'>Download App</h2>
<Image src={footericon} alt='' width={500} height={500}/>
<p className='flex mt-4 '><Facebook className='mr-4'/><Twitter className='mr-4'/><Instagram className='mr-4'/>
<Linkedin/></p>

</div>
</div>


<p className=' text-center font-thin mt-16 text-gray-500'>@copyright reserved 2022 All Rights Reserved</p>

    
    </div>
  )
}
