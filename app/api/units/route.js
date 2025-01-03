import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
      const {title, abbreviation} = await request.json();

      const unit = await db.unit.create({
      data: {
        title,
        abbreviation
      },
    });
      console.log(unit)
      return NextResponse.json(unit);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to create a Unit"
      },{
         status: 500,
      })
   }
}

export async function GET(request){
   try {
      const unit = await db.unit.findMany({
         orderBy: {
            createdAt: "desc",
         }
      })
      return NextResponse.json(unit);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the unit"
      },{
         status: 500,
      })
   }
}

export async function DELETE(request, { searchParams}){
   try {
      const id = request.nextUrl.searchParams.get ("id");
      const deletedUnit = await db.unit.delete({
        where:{
          id
        }
      })
      return NextResponse.json (deletedUnit);
   } catch (error) {
      console.log(error)

      return NextResponse.json({
        error,
        message: "Failed to delete the Unit",
      },{
         status: 500,
      })
   }
}