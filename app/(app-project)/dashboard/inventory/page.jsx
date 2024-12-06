"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, Plus, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Items",
      enabled: true,
      icon: Shirt
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
      icon: Component,
    },
    {
      title: "Warehouse",
      description: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: ScrollText,
    },
    {
      title: "Units",
      description: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: ScrollText,
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
