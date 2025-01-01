"use client";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CollapsibleLinks from "./CollapsibleLinks";
import { BaggageClaim, ChevronRight } from "lucide-react";

export default function SidebarDropDownLinks({
  title,
  items,
  icon: Icon,
  setShowSidebar,
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex justify-between items-center w-full">
        <div className="p-1 flex items-center space-x-2">
          <Icon className="w-4 h-4 items-center space-x-2" />
          <span>{title}</span>
        </div>
        <ChevronRight className="w-4 h-4 items-center space-x-2" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((item, i) => {
          return (
            <CollapsibleLinks
              setShowSidebar={setShowSidebar}
              key={i}
              href={item.href}
              title={item.title}
            />
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
