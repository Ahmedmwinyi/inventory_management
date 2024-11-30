import { Building2 } from "lucide-react";
import React from "react";

export default function HomeNavBar() {
  return (
    <div>
      <div className="h-32 bg-green-300 p-5">
        <div className="flex space-x-3">
          <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
            <Building2 />
          </div>
          <div className="flex flex-col">
            <p>Hello, AHMED JANU</p>
            <span className="text-sm">Janu</span>
          </div>
        </div>

        
      </div>
    </div>
  );
}
