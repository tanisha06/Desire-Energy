import React from "react";
import Marquee from "react-fast-marquee";
import Marquee1 from "@/public/Marquee1.png";
import Marquee2 from "@/public/Marquee2.png";
import Marquee3 from "@/public/Marquee3.png";
import Marquee4 from "@/public/Marquee4.png";
import Marquee5 from "@/public/Marquee5.png";
import Marquee6 from "@/public/Marquee6.png";
import Marquee7 from "@/public/Marquee7.png";
import Marquee8 from "@/public/Marquee8.png";
import Marquee9 from "@/public/Marquee9.png";
import Image from "next/image";

const Marque = () => {
  return (
    <div className="w-full h-fit">
      <div>
        {/* top */}
        <div className="flex justify-center items-center flex-col gap-4 pt-[8rem] pb-[5rem]">
          <h1 className="text-[min(4.5vh,4.5vw)] font-semibold">
            {" "}
            Pioneering <span className="text-[#085C2C]">Sustainability</span> in
            Every Project
          </h1>
          <hr className="border-[#085C2C] border-[0.10rem] w-[28rem] " />
        </div>

        {/* bottom */}
        <div className="">
          <Marquee pauseOnHover>
            <div className="flex justify-center items-center gap-[6rem] space-x-5 p-4">
              <div>
                <Image src={Marquee1} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee2} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee3} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee4} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee5} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee6} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee7} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee8} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee9} alt="" className="h-auto w-[9rem]" />
              </div>
            </div>
          </Marquee>

          <Marquee pauseOnHover direction="right">
            <div className="flex justify-center items-center gap-[6rem] space-x-5 p-4">
              <div>
                <Image src={Marquee1} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee2} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee3} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee4} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee5} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee6} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee7} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee8} alt="" className="h-auto w-[9rem]" />
              </div>

              <div>
                <Image src={Marquee9} alt="" className="h-auto w-[9rem]" />
              </div>
            </div>
          </Marquee>
        </div>

        {/* <Marquee autoFill pauseOnClick>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className='m-1 rounded-xl flex font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
        </Marquee> */}
        {/* <Marquee autoFill pauseOnClick direction="right">
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
        </Marquee> */}
      </div>
    </div>
  );
};

export default Marque;
