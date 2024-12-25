import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title } = await request.json();

    const brand = await db.brand.create({
      data: {
        title,
      },
    });
    console.log(brand);
    return NextResponse.json(brand);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Brand",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request){
   try {
      const brand = await db.brand.findMany({
         orderBy: {
            createdAt: "desc",
         }
      })
      return NextResponse.json(brand);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the Brands"
      },{
         status: 500,
      })
   }
}
