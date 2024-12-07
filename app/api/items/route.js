import { NextResponse } from "next/server";

export async function POST(request) {
  try {
   //  const {
   //    title,
   //    categoryId,
   //    sku,
   //    barcode,
   //    qty,
   //    buyingPrice,
   //    sellingPrice,
   //    reOrderPoint,
   //    unitId,
   //    brandId,
   //    warehouseId,
   //    weight,
   //    dimensions,
   //    taxRate,
   //    description,
   //    supplierId,
   //    notes,
   //    imageUrl,
   //  } = await request.json();

   //  const item = {
   //    title,
   //    categoryId,
   //    sku,
   //    barcode,
   //    qty,
   //    buyingPrice,
   //    sellingPrice,
   //    reOrderPoint,
   //    unitId,
   //    brandId,
   //    warehouseId,
   //    weight,
   //    dimensions,
   //    taxRate,
   //    description,
   //    supplierId,
   //    notes,
   //    imageUrl,
   //  };
    const data = await request.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Item",
      },
      {
        status: 500,
      }
    );
  }
}
