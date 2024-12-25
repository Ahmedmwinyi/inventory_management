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
