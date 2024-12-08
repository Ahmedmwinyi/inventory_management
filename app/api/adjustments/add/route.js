import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const {addStocksQty, receivingWarehouseId, notes} = await request.json();

      const adjustments = {addStocksQty, receivingWarehouseId, notes};
      console.log(adjustments)
      return NextResponse.json(adjustments);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to Add a Adjustments"
      },{
         status: 500,
      })
   }
}