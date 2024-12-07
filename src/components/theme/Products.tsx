import { ArrowLeft, ArrowRight, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import dogfeed from "../../../public/images/dogfeed.png"
import jacket from "../../../public/images/jacket.png"
import sneakers from "../../../public/images/sneakers.png"
import toygame from "../../../public/images/toygame.png"
import digital from "../../../public/images/digital.png"
import facewash from "../../../public/images/facewash.png"
import laptop from "../../../public/images/laptop.png"
import mercedes from "../../../public/images/mercedes.png"

import dot1 from "../../../public/images/dot1.png"
import dot2 from "../../../public/images/dot2.png"
import dot3 from "../../../public/images/dot3.png"
import { Button } from '../ui/button'



export default function Products() {
  return (
<div className='h-auto'> 
    <div className=' bg-red-500 w-5 h-10 rounded md:ml-32 ml-5 mb-3'> 
    <h1 className='md:ml-10 ml-7 text-red-500 mt-7'> Categories </h1>
  </div>
 <div className='grid grid-cols-1 md:grid-cols-2'>
 <h1 className='md:text-3xl text-2xl font-bold md:mt-8 md:ml-32 ml-5'>Browse By Category</h1>
 <h1 className='flex md:ml-[450px] ml-24 gap-3 mt-5 mb-10 '><ArrowLeft className='rounded-full w-10 h-10' id='sale'/> 
 <ArrowRight className='rounded-full w-10 h-10' id='sale'/></h1>
</div>


<div className='flex md:flex-row flex-col md:ml-20 m-auto mt-5'>

  {/* product 1 */}
        <div className='w-[230px] h-[300px] md:mt-10 ml-10'>
        <div className='w-[230px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            
            <Heart className='bg-white w-5 h-5 rounded-full ml-48 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={dogfeed} alt='' width={100} height={100} className='w-24 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>
        </div>
        <h1 className='bold mt-5'>Breed Dry Dog Feed</h1>
        
        <h1 className='text-yellow-500 flex'><p className='text-red-600 flex'>$260</p>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400'></i> <i className='bx bxs-star text-gray-400'></i>  
        <span className='text-gray-400'>(88)</span></h1>
            </div>
{/* product 2 */}
            <div className='w-[230px] h-auto md:mt-10 ml-10'>
        <div className=' w-[230px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
           
            <Heart className='bg-white w-5 h-5 rounded-full ml-48 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={digital} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>CANON EOS DSLR Camera</h1>
       
        <h1 className='text-yellow-500 flex'><p className='text-red-600 flex'>$960 </p><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star-half'></i>    
        <span className='text-gray-400'>(65)</span></h1>
            </div>
{/* product 3 */}
            <div className='w-[230px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
           
            <Heart className='bg-white w-5 h-5 rounded-full ml-48 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={laptop} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Gaming Laptop</h1>
        
        <h1 className='text-yellow-500 flex'><p className='text-red-600 flex'>$960</p><i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star-half'></i>  
        <span className='text-gray-400'>(65)</span></h1>
            </div>
{/* product 4 */}
            <div className='w-[230px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-35%</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={facewash} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Curology Product Set</h1>
        <h1 className='text-yellow-500 flex'>  <p className='text-red-600 '>$360 </p>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400'></i>  
        <span className='text-gray-400'>(65)</span></h1>
            </div>
</div>
            {/* 2nd row products */}
            <div className='flex md:flex-row flex-col md:ml-20 m-auto mt-5'>
            {/* product 5 */}
        <div className='w-[230px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-green-500 text-white rounded'>Now</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={mercedes} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Curology Product Set</h1>
        <h1 className='text-yellow-500 flex'>  <p className='text-red-600 '>$360 </p>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400'></i>  
        <span className='text-gray-400'>(65)</span></h1>
        <Image src={dot1} alt="" width={200} height={200} className='w-10 h-4 mt-2'/>
            </div>

            {/* product 6 */}
            <div className='w-[230px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>     
            <Heart className='bg-white w-5 h-5 rounded-full ml-48 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={sneakers} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Curology Product Set</h1>
        <h1 className='text-yellow-500 flex'>  <p className='text-red-600'>$360 </p>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400'></i>  
        <span className='text-gray-400'>(65)</span></h1>
        <Image src={dot2} alt="" width={200} height={200} className='w-10 h-4 mt-2'/>


            </div>

            {/* product 7 */}
        <div className='w-[230px] h-auto md:mt-10 ml-10'>
        <div className=' w-[220px] h-[200px] ' id='sale'>
            <div className='grid grid-cols-2'>
            <h1 className='w-10 h-6 ml-2 mt-3 bg-green-500 text-white rounded'>Now</h1>
            <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={toygame} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Curology Product Set</h1>
        <h1 className='text-yellow-500 flex'>  <p className='text-red-600'>$360 </p>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400'></i>  
        <span className='text-gray-400'>(65)</span></h1>
        <Image src={dot3} alt="" width={200} height={200} className='w-10 h-4 mt-2'/>

            </div>

            {/* product 8 */}
            <div className='w-[230px] h-auto md:mt-10 ml-10'>
            <div className=' w-[220px] h-[200px]' id='sale'>
            <div className='grid grid-cols-2'>
            <Heart className='bg-white w-5 h-5 rounded-full ml-48 mt-3 text-[20px]'/></div>
            <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>    
            <Image src={jacket} alt='' width={300} height={300} className='w-28 h-24 ml-14'/>
            <h1 className='text-center' id='cart'> Add to cart</h1>

        </div>
        <h1 className='bold mt-5'>Curology Product Set</h1>
        <h1 className='text-yellow-500 flex '>  <p className='text-red-600'>$360 </p>
        <i className='bx bxs-star'></i><i className='bx bxs-star'></i> 
        <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star text-gray-400'></i>  
        <span className='text-gray-400'>(65)</span></h1>
        <Image src={dot3} alt="" width={200} height={200} className='w-10 h-4 mt-2'/>

            </div>

</div>

<Button variant={'destructive'} className='md:ml-[550px] ml-24 mt-10 mb-5'>View All Products</Button>



    </div>
  )
}
