"use client";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddInventoryForm() {
  const branches = [
    {
      label: "Branch A",
      Value: "doj49069",
    },
    {
      label: "Branch B",
      Value: "gjkl489p8j",
    },
  ];
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
    const baseUrl = "http://localhost:3000";

    try {
      const response = await fetch(`${baseUrl}/api/adjustments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
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
            label="Enter Amount of Stock to Add"
            name="addStocksQty"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="receivingWarehouseId"
            label="Select the Warehouse that will receive the Stock"
            register={register}
            className="w-full"
            options={branches}
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
