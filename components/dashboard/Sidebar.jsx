import { ChevronLeft, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-slate-800 text-slate-50 justify-between">
      {/* Top Part */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
          <ShoppingCart />
          <span className="font-bold text-xl">Inventory</span>
        </div>
        {/* Links */}
        <nav className="flex flex-col gap-4 p-3">
          <Link href="">
            <Home className="w-4 h-4 items-center space-x-2" />
            <span>Home</span>
          </Link>
          <Link href="">
            <Home className="w-4 h-4 items-center space-x-2" />
            <span>Inventory</span>
          </Link>
        </nav>
      </div>

      {/* Bottom */}
      <div className="flex flex-col justify-end">
        <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
          <ChevronLeft />
        </div>
      </div>
      {/* Subscription Card */}
      {/* Footer */}
    </div>
  );
}
