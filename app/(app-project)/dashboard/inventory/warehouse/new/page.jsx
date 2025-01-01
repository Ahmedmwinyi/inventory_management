"use client";
import CreateWarehouseForm from "@/components/dashboard/CreateWarehouseForm";
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
      title: "Main",
      Value: "main",
    },
    {
      title: "Branch",
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
      <FormHeader title="New Warehouse" href="/dashboard/inventory/warehouse" />
      {/* Form */}
      <CreateWarehouseForm />
    </div>
  );
}
