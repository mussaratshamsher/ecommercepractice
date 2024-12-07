import Image from 'next/image'
import React from 'react'



interface Category{
    image: string,
    title: string
}
export default function CategoryCard(props: Category) {
    const{image, title} =props
  return (
    
    <div className='md:h-36 md:w-40 w-32 h-32 border border-gray-400 rounded-lg md:ml-10 ml-1 md:mb-10 
    md:pt-5 mb-2 hover:bg-red-500 hover:text-white'>
        <Image src={image} alt="" width={500} height={500} className='w-10 h-14 md:ml-14 ml-10 mt-2 mb-1 md:mb-3'/>
    <p className='text-center'>{title}</p>

    </div>
  )
}
