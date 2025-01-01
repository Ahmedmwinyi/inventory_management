import React from "react";
import NewBrands from "../../new/page";
import { getData } from "@/lib/getData";

export default async function Update({ params: { id } }) {
  const data = await getData(`brands/${id}`);
  console.log(data)
  return <NewBrands initialData={data} isUpdate={true}/>;
}
