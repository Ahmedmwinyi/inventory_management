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
