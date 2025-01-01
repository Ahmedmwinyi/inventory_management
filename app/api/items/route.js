import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const itemData = await request.json();
      const item = await db.item.create({
         data: {
            title: itemData.title,
            categoryId: itemData.categoryId,
            sku: itemData.sku,
            barcode: itemData.barcode,
            quantity: parseInt(itemData.qty),
            buyingPrice: parseFloat(itemData.buyingPrice),
            sellingPrice: parseFloat(itemData.sellingPrice),
            supplierId: itemData.supplierId,
            reOrderPoint: parseFloat(itemData.reOrderPoint),
            unitId: itemData.unitId,
            brandId: itemData.brandId,
            warehouseId: itemData.warehouseId,
            weight: parseFloat(itemData.weight),
            dimensions: itemData.dimensions,
            taxRate: parseFloat(itemData.taxRate),
            description: itemData.description,
            notes: itemData.notes,
            imageUrl: itemData.imageUrl
         }
      })
      console.log(item);
      return NextResponse.json(item);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to create a Item"
      },{
         status: 500,
      })
   }
}

export async function GET(request){
   try {
      const item = await db.item.findMany({
         orderBy: {
            createdAt: "desc",
         },
         include: {
            category: true
         }
      })
      return NextResponse.json(item);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the Items"
      },{
         status: 500,
      })
   }
}