import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const {receivingBranchId, transferStocksQty, notes} = await request.json();

      const adjustments = {receivingBranchId, transferStocksQty, notes};
      console.log(adjustments)
      return NextResponse.json(adjustments);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to create a Adjustments"
      },{
         status: 500,
      })
   }
}