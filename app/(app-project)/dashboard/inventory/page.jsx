"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Diff, Factory, LayoutPanelTop, Scale, Slack, Warehouse } from 'lucide-react'
import React from 'react'

export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Items",
      enabled: true,
      icon: LayoutPanelTop
    },
    {
      title: "Categories",
      description: "Create multiple variants of the same item using Item Groups",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Brands",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: Slack,
    },
    {
      title: "Warehouse",
      description: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units",
      description: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Scale,
    },
    {
      title: "Suppliers",
      description: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/supplier/new",
      linkTitle: "New Supplier",
      enabled: true,
      icon: Factory,
    },
    {
      title: "Stock Adjustments",
      description: "Transfer stock from Main Warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustment",
      enabled: true,
      icon: Diff,
    },
  ];

  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-3 m-4 py-8 px-16 gap-6 rounded">
        {
          optionCards.map((card, i) => {
            return (
              <OptionCard optionData={card} key={i} />
            )
          })
        }
      </div>
    </div>
  )
}
