import DataTable from '@/components/dashboard/dataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Supplier() {
  const supplier = await getData('supplier');
  const data = supplier.map((obj) => {
    return {
      title: obj.title,
      phone: obj.phone,
      email: obj.email,
    };
  });
  const columns = ["title", "phone", "email",];
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Suppliers" newLink="/dashboard/inventory/supplier/new" />

      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={supplier} columns={columns} resourceTitle="supplier" />
      </div>
      
    </div>
  )
}
