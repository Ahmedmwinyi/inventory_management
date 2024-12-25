"use client";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function TransferInventoryForm({items, warehouses}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    console.log(data);
     makePostRequest(
      setLoading,
      "api/adjustments/transfer",
      data,
      "Stock Adjustment",
      reset
    );
  }

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInputs
            label="Reference Number"
            name="referenceNumber"
            register={register}
            errors={errors}
          />

          <SelectInput
            name="itemId"
            label="Select the Item"
            register={register}
            className="w-full"
            options={items}
          />

          <TextInputs
            label="Enter Quantity of Stock to Transfer"
            name="transferStocksQty"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="givingWarehouseId"
            label="Select the Warehouse that will send the Stock"
            register={register}
            className="w-full"
            options={warehouses}
          />

          <SelectInput
            name="receivingWarehouseId"
            label="Select the Warehouse that will receive the Stock"
            register={register}
            className="w-full"
            options={warehouses}
          />

          <TextareaInput
            label="Adjustments Notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Adjustment" />
      </form>
    </div>
  );
}
