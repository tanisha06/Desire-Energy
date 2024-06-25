import React from 'react'
import Image from 'next/image'
import Service from '@/public/Services.jpeg'

const Services = () => {
  return (
    <div className='w-full h-fit flex justify-center items-center'>
        <div className='h-fit w-full '>
            {/* left */}
            <div className='w-[47.25rem] h-[54.68rem]'>
                   <div>
                    <Image src={Service} alt='dp' className='h-full w-full object-fill'/>
                 </div>
                {/* right */}
            </div>
           
        </div>
    </div>
  )
}

export default Services