import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Youtube = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex  justify-center items-center bg-[#085C2C] w-[80%] mt-7'>
         {/* left */}
         <div className='flex justify-center items-start flex-col gap-4 p-6 '>
            <h1 className='text-[#FFFFFF] text-[min(4vh,4vw)] px-5'>"Leading the Way in Water</h1>
            <h1 className='text-[#FFFFFF] text-[min(4vh,4vw)] px-5'>Sustainability: Efficient</h1>
            <h1 className='text-[#D5F590] text-[min(4vh,4vw)] px-5'>Tech-Driven Solutions."</h1>
            <p className='text-[#FFFFFF] text-[min(1.9vh,1.9vw)] px-5'>Water Efficiency Across 100,000+ Villages and 14+ Cities.</p>

            <div className='flex px-5 py-7 '>
                <button className='text-[#D5F590] bg-[#003300] px-4 py-2 flex gap-3'>
                    Know More <ArrowUpRight/>
                </button>
            </div>
         </div>

         {/* right */}
         <div className='w-[60%]'>
         <iframe
    className="w-full aspect-video self-stretch md:min-h-96 py-7 px-4"
    src="https://www.youtube.com/embed/1FLYZdxsteo"
    frameBorder="0"
    title="Product Overview Video"
    aria-hidden="true"
/>
         </div>
        </div>
    </div>
  )
}

export default Youtube