import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStocksQty, receivingWarehouseId, referenceNumber, ItemId, notes } =
      await request.json();

    const adjustments = await db.addStockAdjustment.create({
      data: {
        addStocksQty,
        referenceNumber,
        receivingWarehouseId,
        ItemId,
        notes,
      },
    });
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to Add a Adjustments",
      },
      {
        status: 500,
      }
    );
  }
}
