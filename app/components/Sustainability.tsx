import React from 'react'
import Image from 'next/image'
import Vector from '@/public/Vector.png'
import Blog1 from '@/public/blog1.png'
import { ArrowUpRight } from 'lucide-react'

const Sustainability = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='h-fit w-full flex justify-center items-center gap-5 py-[7rem]'>
            {/* left */}
            <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden  bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
                <Image src={Blog1} alt='dp' className='h-full w-full object-cover object-center' width={400} height={500}/>
                </div>

                <div className='overflow-hidden  bg-gray-100 shadow-lg'>
                <Image src={Blog1} alt='dp' className='h-full w-full object-cover object-center' width={300} height={500}/>
                </div>
           
            </div>




            {/* right */}
            <div className='w-[40%] flex flex-col gap-4 p-12'>
                <div className='flex gap-3 items-center'>
                    <p>Our Way</p>
                    <hr className='border-[#D5F590] border-[0.10rem] w-[4rem] '/>
                </div>
                <div className='flex gap-3'>
                    <h1>Sustainability</h1>
                    <Image src={Vector} alt='dp' className='h-auto w-[1.5rem]'/>
                </div>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo expedita vero et corporis libero praesentium rem fugit ex 
                    illo expedita vero et corporis libero praesentium rem fugit ex 
                    illo expedita vero et corporis libero praesentium rem fugit ex quia nostrum dolore ad, unde, vel earum ullam mollitia deleniti beatae.</h1>
                </div>
               <div>
                    <button className='bg-[#003300] text-[#D5F590] px-9 py-2 flex '>
                        Know More
                        <ArrowUpRight/>
                    </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Sustainability