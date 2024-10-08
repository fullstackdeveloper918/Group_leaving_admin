import React from "react";
import Image from 'next/image'
import {transaction_data} from '@/lib/data'

 

const Transactions = () => {
  return (
    <>
      <div className="bg-[#182237] p-5 rounded-lg text-white">
      <h2 className="mb-5 font-extralight">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-5">Name</td>
            <td className="p-5">Status</td>
            <td className="p-5">Date</td>
            <td className="p-5">Amount</td>
          </tr>
        </thead>
        <tbody>
          {
            transaction_data.map((item) => (
              <>
                <tr>
            <td className="p-5">
              <div className="flex gap-2 items-center">
                <Image
                  src="/Images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-5">
              <span className={`rounded-lg cursor-pointer p-[6px] text-sm ${item?.Status === "Pending" ? "bg-red-600" : "bg-lime-600"}`}>
                {item?.Status}
              </span>
            </td>
            <td className="p-5">{item?.Date}</td>
            <td className="p-5">{item?.Amount}</td>
          </tr>
              </>
            ))
          }
          
        </tbody>
      </table>
      </div>
    </>
  )
};

export default Transactions;
