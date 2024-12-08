import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const {transferStocksQty, givingBranchId, receivingBranchId, notes} = await request.json();

      const adjustments = {transferStocksQty, givingBranchId, receivingBranchId, notes};
      console.log(adjustments)
      return NextResponse.json(adjustments);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to transfer a Adjustments"
      },{
         status: 500,
      })
   }
}