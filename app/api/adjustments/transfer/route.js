import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStocksQty,
      itemId,
      referenceNumber,
      givingWarehouseId,
      receivingWarehouseId,
      notes,
    } = await request.json();

    const adjustments = await db.transferStockAdjustment.create({
      data: {
        transferStocksQty : parseInt(transferStocksQty),
        referenceNumber,
        givingWarehouseId,
        receivingWarehouseId,
        itemId,
        notes,
      },
    });
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to transfer a Adjustments",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request){
   try {
      const adjustments = await db.transferStockAdjustment.findMany({
         orderBy: {
            createdAt: "desc",
         }
      })
      return NextResponse.json(adjustments);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the stock adjustment"
      },{
         status: 500,
      })
   }
}

export async function DELETE(request, { searchParams}){
   try {
      const id = request.nextUrl.searchParams.get ("id");
      const deletedAdjustment = await db.transferStockAdjustment.delete({
        where:{
          id
        }
      })
      return NextResponse.json (deletedAdjustment);
   } catch (error) {
      console.log(error)

      return NextResponse.json({
        error,
        message: "Failed to delete the Adjustment",
      },{
         status: 500,
      })
   }
}
