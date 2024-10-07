import Card from "@/components/admin/Card";
import Chart from "@/components/admin/Chart";
import RightBar from "@/components/admin/RightBar";
import Transactions from "@/components/admin/Transactions";
import { cards } from "@/lib/data";
import React from "react";

const dashboard = () => {
  return (
    <>
      <div className="flex gap-5 mt-5">
        <div className="flex-[3] flex flex-col gap-5">
          <div className="flex justify-between gap-5">
            {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className="flex-1">
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default dashboard;
