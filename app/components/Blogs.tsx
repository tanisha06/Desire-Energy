import React from 'react'
import blog1 from '@/public/blog1.png'
import blog2 from '@/public/blog 2.png'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const Blogs = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            {/* top */}
            
            <div className='flex justify-start items-center py-8 gap-3 '>
                <h1 className='font-semibold text-[min(4vh,4vw)] tracking-wide'>Exploring <span className='text-[#085C2C]'>Sustainability</span> Through <span className='text-[#085C2C]'>Our Featured Stories</span> </h1>
                <hr className='border-[#085C2C] border-2 w-[5rem] '/>
            </div>
        
           

            {/* bottom */}
            <div className='w-[80%] flex justify-center items-center p-3 gap-12 '>
                <div className='w-[45%] flex flex-col justify-center '>
                 <Image src={blog1} alt='' className='w-[34rem] h-auto'/>
                 <div className='flex justify-between py-3 font-light '>
                 <p>27 February 2023</p>
                 <p>Jaipur, Rajasthan</p>
                 </div>
                 <p className='py-1 font-semibold'>Desire Energy Case Jal Prabal 2022-2023</p>
                 <p className='py-4 font-light'>Project Jal Prabal, implemented by Desire Energy Pvt Ltd, is aimed at building smart, efficient and sustainable public water infrastructure...</p>
                 <p className='flex gap-2 text-[#085C2C] py-2'>Learn More <ArrowUpRight/></p>
                </div> 


                <div className='w-[45%] flex flex-col justify-center '>
                 <Image src={blog2} alt='' className='w-[34rem] h-[23.5rem]'/>
                 <div className='flex justify-between py-3 font-light '>
                 <p>27 February 2023</p>
                 <p>Jaipur, Rajasthan</p>
                 </div>
                 <p className='py-1 font-semibold'>Desire Energy Case Jal Prabal 2022-2023</p>
                 <p className='py-4 font-light'>Project Jal Prabal, implemented by Desire Energy Pvt Ltd, is aimed at building smart, efficient and sustainable public water infrastructure...</p>
                 <p className='flex gap-2 text-[#085C2C] py-2'>Learn More <ArrowUpRight/></p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Blogs