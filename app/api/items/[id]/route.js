import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}){
   try {
      const item = await db.item.findUnique({
         where: {
            id
         }
      })
      return NextResponse.json(item);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the Item",
      },{
         status: 500,
      })
   }
}

export async function PUT(request, {params:{id}}){
   try {
      const {title} = await request.json();
      const brand = await db.brand.update({
         where: {
          id
         },
         data: {
          title 
         }
      })
      console.log(brand)
      return NextResponse.json(brand);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to Update the Brand"
      },{
         status: 500,
      })
   }
}
