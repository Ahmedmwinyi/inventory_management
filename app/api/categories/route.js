import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    const category = await db.category.create({
      data: { 
        title,
        description
      },
    });
    console.log(category);
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create category",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request){
   try {
      const category = await db.category.findMany({
         orderBy: {
            createdAt: "desc",
         }
      })
      return NextResponse.json(category);
   } catch (error) {
      return NextResponse.json({
        error,
        message: "Failed to fetch the Warehouse"
      },{
         status: 500,
      })
   }
}

export async function DELETE(request, { searchParams}){
   try {
      const id = request.nextUrl.searchParams.get ("id");
      const deleteCategory = await db.category.delete({
        where:{
          id
        }
      })
      console.log(deleteCategory)
      return NextResponse.json (deleteCategory);
   } catch (error) {
      console.log(error)

      return NextResponse.json({
        error,
        message: "Failed to delete the Category"
      },{
         status: 500,
      })
   }
}