import React from "react";
import { getData } from "@/lib/getData";
import NewItem from "@/components/dashboard/NewItem";


export default async function Page() {
  const data = {};
  console.log(data)
  return <NewItem initialData={data} isUpdate={false}/>;
}
