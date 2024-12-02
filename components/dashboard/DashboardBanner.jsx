"use client";
import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "grid grid-cols-12  items-center py-3 px-16 bg-white gap-4 relative"
      }`}
    >
      {/* Icon */}
      <div className="col-span-2">
        <CreditCard className="w-16 h-16 text-slate-500" />
      </div>
      {/* Text */}
      <div className="col-span-6">
        <h2 className="font-bold text-2xl">
          Starting accepting online payments
        </h2>
        <p>
          Business are moving towards online payments as they're easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      {/* Button */}
      <div className="col-span-3">
        <button className="py-2 px-8 uppercase bg-blue-700 text-white text-sm rounded-lg">
          Enable
        </button>
      </div>
      {/* Close Button */}
      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-16"
      >
        <X />
      </button>
    </div>
  );
}
