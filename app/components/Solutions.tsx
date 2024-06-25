import React from 'react'
import Image from 'next/image'
import Solution1 from '@/public/Solution1.png'
import Solution2 from '@/public/Solution2.png'
import Solution3 from '@/public/Solution3.png'
import { ArrowUpRight } from 'lucide-react'

const Solutions = () => {
  return (
    <div className='bg-[#FAFAFA] flex justify-center items-center h-fit w-full '>
        <div className='flex flex-col justify-start items-start w-[90%] py-[3rem]'>
            {/* top */}
            <div className='flex  justify-center items-center gap-3 px-[5rem] py-[2rem]'>
             <h1 className='text-[min(4.2vw,4.2vh)] font-semibold '> Our <span className='text-[#085C2C]'>Solutions :</span> Efficiency. Innovation. Results.</h1>
             <hr className='border-[#085C2C] border-[0.10rem] w-[4rem] '/>
            </div>
            {/* bottom */}
            <div className='flex justify-center items-center gap-[3rem]'>
                {/* 1st */}
            <div className='w-[30%] p-6 flex flex-col gap-4'>
            <Image src={Solution1} alt='' className='h-auto w-[100%]'/>
            <h1>AquaLogix Automation Solution</h1>
            <p>AquaLogix is an IoT based web & mobile software which provides a solution for effective project management, through…</p>
            <div className='flex '>
                <button className='text-[#D5F590] bg-[#003300] px-4 py-2 flex gap-3'>
                    Know More <ArrowUpRight/>
                </button>
            </div>
            </div>

            {/* 2nd */}
            <div className='w-[30%] p-6 flex flex-col gap-4'>
            <Image src={Solution2} alt='' className='h-auto w-[100%]'/>
            <h1>AquaLogix Automation Solution</h1>
            <p>AquaLogix is an IoT based web & mobile software which provides a solution for effective project management, through…</p>
            <div className='flex '>
                <button className='text-[#D5F590] bg-[#003300] px-4 py-2 flex gap-3'>
                    Know More <ArrowUpRight/>
                </button>
            </div>
            </div>


            {/* 3rd */}
            <div className='w-[30%] p-6 flex flex-col gap-4'>
            <Image src={Solution3} alt='' className='h-auto w-[100%]'/>
            <h1>AquaLogix Automation Solution</h1>
            <p>AquaLogix is an IoT based web & mobile software which provides a solution for effective project management, through…</p>
            <div className='flex '>
                <button className='text-[#D5F590] bg-[#003300] px-4 py-2 flex gap-3'>
                    Know More <ArrowUpRight/>
                </button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions