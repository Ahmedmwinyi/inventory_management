import DataTable from '@/components/dashboard/dataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Adjustments({columns}) {
  const addAdjumentsData =  getData('adjustments/add');
  const transferAdjumentsData =  getData('adjustments/transfer');

  const [addAdjuments, transferAdjuments] = await Promise.all([addAdjumentsData, transferAdjumentsData])

  const addColumns = ["referenceNumber", "addStockQty",];
  const transferColumns = ["referenceNumber", "transferStocksQty",];
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Units" newLink="/dashboard/inventory/adjustments/new" />

      {/* Table */}
      <div className="my-4 p-8">
        <h2 className='py-4 text-xl font-semibold'>Stock Increment Adjustment</h2>
        <DataTable data={addAdjuments} columns={addColumns} />
      </div>

      <div className="my-4 p-8">
        <h2 className='py-4 text-xl font-semibold'>Stock Transfer Adjustment</h2>
        <DataTable data={transferAdjuments} columns={transferColumns} />
      </div>
      
    </div>
  )
}
