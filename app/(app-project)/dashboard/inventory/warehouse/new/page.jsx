"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewWarehouse() {
  const selectOptions = [
    {
      label: "Main",
      Value: "main",
    },
    {
      label: "Branch",
      Value: "branch",
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
    console.log(data);
    makePostRequest(
      setLoading,
      "api/warehouse",
      data,
      "Warehouse",
      reset
    );
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Warehouse" href="/dashboard/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            name="type"
            label="Select the Warehouse Type"
            register={register}
            className="w-full"
            options={selectOptions}
          />
          <TextInputs
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Location"
            name="location"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title="Category" />
      </form>
    </div>
  );
}
