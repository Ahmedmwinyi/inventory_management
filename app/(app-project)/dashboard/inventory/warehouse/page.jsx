import DataTable from '@/components/dashboard/dataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Warehouse() {
  const warehouse = await getData('warehouse');

  const columns = ["title", "location",];
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Warehouses" newLink="/dashboard/inventory/warehouse/new" />

      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={warehouse} columns={columns} />
      </div>
      
    </div>
  )
}
