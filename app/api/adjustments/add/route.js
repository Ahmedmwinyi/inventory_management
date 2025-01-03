import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      itemId,
      referenceNumber,
      addStockQty,
      receivingWarehouseId,
      notes,
    } = await request.json();


    //Get the Item
    const itemToUpdate = await db.item.findUnique({
      where: {
        id: itemId,
      }
    })

    //Current Item Quantity
    const currentItemQty = itemToUpdate.quantity;
    const newQty = parseInt(currentItemQty) + parseInt(addStockQty);

    // Modify the Item
    const updatedItem = await db.item.update({
      where: {
        id : itemId,
      },
      data: {
        quantity: newQty,
      },
    });
    console.log(updatedItem);

    // const adjustments = await db.addStockAdjustment.create({
    //   data: {
    //     transferStocksQty: parseInt(transferStocksQty),
    //     referenceNumber,
    //     receivingWarehouseId,
    //     itemId,
    //     addStockQty,
    //     notes,
    //   },
    // });

    //Affect Warehouse
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

export async function GET(request) {
  try {
    const adjustments = await db.addStockAdjustment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(adjustments);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch the stock adjustment",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request, { searchParams }) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedAdjustment = await db.addStockAdjustment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedAdjustment);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error,
        message: "Failed to delete the Adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
