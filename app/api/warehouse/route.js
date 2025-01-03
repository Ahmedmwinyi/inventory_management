import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const {title, location, type, description} = await request.json();

      const warehouse = await db.warehouse.create({
      data: { 
        title,
        location,
        warehouseType: type,
        description
      },
    });
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

export async function GET(request){
   try {
      const warehouse = await db.warehouse.findMany({
         orderBy: {
            createdAt: "desc",
         }
      })
      return NextResponse.json(warehouse);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the Warehouse"
      },{
         status: 500,
      })
   }
}

export async function DELETE(request, { searchParams}){
   try {
      const id = request.nextUrl.searchParams.get ("id");
      const deletedWarehouse = await db.warehouse.delete({
        where:{
          id
        }
      })
      return NextResponse.json (deletedWarehouse);
   } catch (error) {
      console.log(error)

      return NextResponse.json({
        error,
        message: "Failed to delete the Warehouse",
      },{
         status: 500,
      })
   }
}