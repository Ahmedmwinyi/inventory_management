"use client";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropDownLinks from "./SidebarDropDownLinks";

export default function Sidebar() {
  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory",
    },
    {
      title: "Units",
      href: "/dashboard/inventory",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory",
    },
    {
      title: "Inventory Adjustments", 
      href: "/dashboard/inventory",
    },
    {
      title: "Supplier", 
      href: "/dashboard/inventory",
    },
  ];

  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Order",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipts",
      href: "#",
    },
    {
      title: "Payments Received",
      href: "#",
    },
    {
      title: "Sales Return",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "#",
    },
  ];
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed">
      {/* Top Part */}
      <div className="flex flex-col">
        {/* Logo */}
        <Link
          href="#"
          className="bg-slate-950 flex space-x-2 items-center py-3 px-2"
        >
          <ShoppingCart />
          <span className="font-bold text-xl">Inventory</span>
        </Link>
        {/* Links */}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="#"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <SidebarDropDownLinks
            items={inventoryLinks}
            title="Inventory"
            icon={BaggageClaim}
          />

          <SidebarDropDownLinks
            items={salesLinks}
            title="Sales"
            icon={ShoppingBasket}
          />

          <button className="p-1 flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4 items-center space-x-2" />
            <span>Purchases</span>
          </button>
          <Link href="#" className="p-2 flex items-center space-x-2">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link href="#" className="p-1 flex items-center space-x-2">
            <BarChart4 className="w-4 h-4" />
            <span>Report</span>
          </Link>
          <Link href="#" className="p-1 flex items-center space-x-2">
            <Files className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>

        <SubscriptionCard />
      </div>

      {/* Bottom */}
      <div className="flex flex-col">
        <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
      {/* Subscription Card */}
      {/* Footer */}
    </div>
  );
}
