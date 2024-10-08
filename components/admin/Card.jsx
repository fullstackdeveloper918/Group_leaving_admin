import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <>
      <div className="p-5 rounded-lg flex gap-5 cursor-pointer w-full text-white bg-[#182237] hover:bg-[#2e374a]">
        <MdSupervisedUserCircle size={24} />
        <div className="flex flex-col gap-5">
          <span className="text-2xl">{item.title}</span>
          <span className="text-2xl font-medium">{item.number}</span>
          <span className="font-light text-sm">
            <span
              className={`${
                item.change > 0 ? "text-lime-600" : "text-red-600"
              }`}
            >
              {item.change}%
            </span>{" "}
            {item.change > 0 ? "more" : "less"} than previous week
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
