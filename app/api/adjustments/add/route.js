import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStocksQty,
      itemId,
      referenceNumber,
      addStockQty,
      receivingWarehouseId,
      notes,
    } = await request.json();

    const adjustments = await db.addStockAdjustment.create({
      data: {
        transferStocksQty : parseInt(transferStocksQty),
        referenceNumber,
        givingWarehouseId,
        receivingWarehouseId,
        itemId,
        addStockQty,
        notes,
      },
    });
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Add Adjustments",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request){
   try {
      const adjustments = await db.addStockAdjustment.findMany({
         orderBy: {
            createdAt: "desc",
         }
      })
      return NextResponse.json(adjustments);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the stock adjustment",
      },{
         status: 500,
      })
   }
}
