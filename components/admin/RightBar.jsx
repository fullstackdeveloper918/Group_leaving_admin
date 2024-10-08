import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";
import { rightbarData } from "@/lib/data";
import React from "react";

const RightBar = () => {
  return (
    <div className="fixed">
    {rightbarData.map((item) => (
      <React.Fragment key={item?.id}>
        <div className="bg-gradient-to-t from-[#182237] to-[#253352] py-5 px-6 rounded-lg mb-5 relative">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image className="contain opacity-20" src={item?.img} alt="" fill />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-bold">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="font-medium text-xs text-[#b7bac1]">Takes 4 minutes to learn</span>
          <p className="text-[#b7bac1] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-3 flex items-center gap-3 w-max bg-[#5d57c9] text-white border-none rounded cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      </React.Fragment>
    ))  
  
      }
    </div>
  );
};

export default RightBar;