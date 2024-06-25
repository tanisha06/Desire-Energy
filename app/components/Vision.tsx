import React from 'react'

const Vision = () => {
  return (
    <div className='bg-[#FAFAFA] h-auto w-screen flex justify-center items-center my-7'>
      <div className='w-[90%] flex justify-center items-center'>
        <div className='flex w-[98%] justify-center items-center gap-[5rem] '>
            {/* 1st */}
            <div className='w-[60%]  p-7'>
             <div className='flex gap-2 items-center'>
                <p className='p-2'>Our Mission</p>
                <hr className='border-[#085C2C] border-[0.10rem] w-[4rem] '/>
             </div>
             <div><p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptate! Delectus earum architecto excepturi doloribus consequatur quam tempore ipsa optio.</p></div>
            </div>

            {/* 2nd */}
            <div className='w-[60%]  p-7'>
             <div className='flex gap-2 items-center'>
                <p className='p-2'>Our Vision</p>
                <hr className='border-[#085C2C] border-[0.10rem] w-[4rem] '/>
             </div>
             <div><p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptate! Delectus earum architecto excepturi doloribus consequatur quam tempore ipsa optio.</p></div>
            </div>

            {/* 3rd */}
            <div className='w-[60%] p-7'>
             <div className='flex gap-2 items-center'>
                <p className='p-2'>Core Values</p>
                <hr className='border-[#085C2C] border-[0.10rem] w-[4rem] '/>
             </div>
             <div><p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptate! Delectus earum architecto excepturi doloribus consequatur quam tempore ipsa optio.</p></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Vision