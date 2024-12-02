import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped",
      number: 7,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered",
      number: 15,
      unit: "Pks",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be Invoiced",
      number: 5,
      unit: "Qty",
      href: "#",
      color: "text-yellow-300",
    },
  ];

  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number: 10,
    },
    {
      title: "Quantity to be Received",
      number: 0,
    },
  ];
  return (
    <div className="bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4 ">
      {/* SALES ACTIVITY */}
      <div className="col-span-8 p-8 border-r border-slate-300">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="pr-8 grid grid-cols-4 gap-4">
          {/* Cards */}
          {salesActivity.map((item, i) => {
            return (
              <SalesActivityCard item={item} key={i} />
            );
          })}
        </div>
      </div>
      {/* INVENTORY SUMMARY */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="">
          {inventorySummary.map((item, i) => {
            return (
              <InventorySummaryCard item={item} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
