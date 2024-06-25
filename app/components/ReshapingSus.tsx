import React from "react";
import Image from "next/image";
import Reshaping from "@/public/Reshaping.jpeg";
import { ArrowUpRight } from "lucide-react";

const ReshapingSus = () => {
  return (
    <div className="w-full h-fit flex my-[4rem]">
      <div className="flex w-[100%] justify-center items-center h-fit gap-[4rem]">
        {/* left */}
        <div className="w-[50%] h-fit ml-2 ">
          <Image src={Reshaping} alt="" className="h-auto w-full" />
        </div>
        {/* right */}
        <div className="w-[40%] flex flex-col gap-3">
          <div>
            <h1 className="text-[#085C2C] text-[min(4.5vh,4.5vw)] font-semibold">Reshaping Water</h1>
          </div>
          <div>
            <h1 className="text-[#085C2C] text-[min(4.5vh,4.5vw)] font-semibold">Sustainability for the future.</h1>
          </div>
          <div className="w-[80%]">
            <p className="font-light py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nihil, ipsa optio quam ratione quod iusto expedita
            adipisicing elit. Quos nam nihil, ipsa optio quam ratione quod iusto expedita
             accusamus dignissimos fugit, ea et cum maxime ut. Quos iure eos corporis!</p>
          </div>
          <div className="w-[80%]">
            <p className="font-light py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nihil, ipsa  accusamus dignissimos fugit, ea et cum maxime ut.
            elit.  fugit, ea et cum maxime ut. 
            Quos iure eos corporis!</p>
          </div>
          <div className="flex pt-4">
            <button className="flex  gap-3 bg-[#003300] text-[#D5F590] px-4 py-2 ">
                Know More <ArrowUpRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReshapingSus;
