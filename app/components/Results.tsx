import React from 'react'
import Image from 'next/image'
import Droplet from "@/public/Droplet.png"

const Results = () => {
  return (
    <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center w-[80%] bg-[#085C2C] h-fit relative'>
            {/* top */}
            <div className='flex flex-col justify-center items-center text-center gap-7 py-[4rem]'>
            <p className='text-[#FFFFFF] text-[min(5vh,5vw)]  pt-[2rem] text-center'> Wondering How we are able to Achieve these  <span className='text-[#D5F590]'>Results ?</span> </p>
            <p className='w-[70%] text-[#FFFFFF] font-light py-9 text-[min(2.75vh,2.75vw)] tracking-wide '>We are engaged in ESCO projects, Solar Pumps, Solar Roof-Top projects, Remote Monitoring Systems, SCADA and Automation, Water Infra Turn-Key projects, Community based reverse osmosis plants, de-fluoridation projects etc</p>
            </div>
    
            <Image src={Droplet} alt='' className='absolute bottom-[3rem] right-[3rem] h-17 w-15 '/>

          
           {/* <div className="relative  h-32 w-32">
            <Image src={Droplet} alt='' className='absolute bottom-0 right-0 h-17 w-15 '/>
           </div>
         */}

           {/* <div className='relative  h-32 w-32 '>
           <div className="absolute bottom-0 right-0 h-16 w-16 ">
            <Image src={Droplet} alt='' className='absolute bottom-0 right-0 h-17 w-15 '/>
           </div>
           </div> */}
        </div>
    </div>
  )
}

export default Results