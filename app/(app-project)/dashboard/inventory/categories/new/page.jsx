"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewCategories({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const [loading, setLoading] = useState(false);
  function redirect() {
    router.replace("/dashboard/inventory/categories");
  }

  async function onSubmit(data) {
    setLoading(true);
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/categories/${initialData.id}`,
        data,
        "Categories",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/categories", data, "Category", reset);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate ? "Update Category" : "New Category"} href="/dashboard/inventory/categories" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInputs
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={loading} title={isUpdate ? "Updated Category" : "New Category"}  />
      </form>
    </div>
  );
}
