import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const {title, location, type, abbreviation} = await request.json();

      const warehouse = {title, location, type, abbreviation};
      console.log(warehouse)
      return NextResponse.json(warehouse);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to create a Warehouse"
      },{
         status: 500,
      })
   }
}