import React from "react";
import { getData } from "@/lib/getData";
import NewCategories from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`category/${id}`);
  console.log(data)
  return <NewCategories initialData={data} isUpdate={true}/>;
}