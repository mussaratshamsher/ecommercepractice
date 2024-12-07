import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='w-full h-auto'>
<div className='md:mt-10 mt-5 ml-10 text-gray-400 md:ml-40'><Link href='/'>Home / </Link>
<Link href='./../contact' className='text-black'> Contact</Link></div>

{/* form layout */}
<div className='grid md:grid-cols-3 col-span-1 md:p-16 md:gap-10 md:ml-20 md:mr-20 '>

{/* box 1 */}
  <div className='rounded p-5 mt-5' id='shadow'>

<h1 className='font-bold'><i className='bx bxs-phone bg-red-500 rounded-full p-2 text-white'></i> Call to Us</h1>
  <p className='mt-3'>Available 24/7,7 days a week</p>
  <p className='mt-3'>Phone: +989073948601</p>
  <hr className='w-40 border-slate-500 mt-3 mb-3'/>

  <h1 className='font-bold'><i className='bx bxs-phone bg-red-500 rounded-full p-2 text-white'></i>Write to Us</h1>
  <p className='mt-3'>fill out our form & we'll <br /> contact you within 24 hours.</p>
  <p className='mt-3'>Email Us:customer@exclusive.com </p>
  <p className='mt-3'>Email Us:exclusive.com </p>

  </div>

{/* box 2 */}
  <div className=' grid md:col-span-2 rounded mt-3' id='shadow'>

   <div className='flex flex-col md:flex-row gap-6 md:mt-10 justify-center items-center'>
    <input type="text" placeholder='Your Name*' className='mt-5 md:ml-5 p-2 w-44 h-12 rounded-md hover:border-gray-400' id='sale'/>
    <input type="email" placeholder='Your Email*' className='p-2 w-44 h-12 rounded-md' id='sale'/>
    <input type="number" placeholder='Your phone*' className='p-2 w-44 h-12 rounded-md' id='sale'/>
   </div>
   <input type="text" placeholder='Your Message' className='p-2 md:ml-5 md:w-[580px] md:h-[110px] w-[250px] h-[100px] ml-9 mt-5 rounded-md ' id='sale'/>
   <Button variant={'destructive'} className='w-40 md:ml-[440px] ml-16 mb-10 mt-3'>Send Message</Button>

  </div>

</div>








    </div>
  )
}
