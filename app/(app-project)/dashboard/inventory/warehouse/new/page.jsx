"use client";
import CreateWarehouseForm from "@/components/dashboard/CreateWarehouseForm";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewWarehouse({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
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
  } = useForm({ defaultValues: initialData });

  const [loading, setLoading] = useState(false);
  function redirect() {
    router.replace("/dashboard/inventory/warehouse");
  }


  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/warehouse/${initialData.id}`,
        data,
        "Warehouse",
        redirect,
        reset
      );
    } else {
      makePostRequest(
      setLoading,
      "api/warehouse",
      data,
      "Warehouse",
      reset
    );
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate ? "Update Warehouse" : "New Warehouse"} href="/dashboard/inventory/warehouse" />
      {/* Form */}
      <CreateWarehouseForm initialData={initialData} isUpdate={isUpdate} />
    </div>
  );
}
