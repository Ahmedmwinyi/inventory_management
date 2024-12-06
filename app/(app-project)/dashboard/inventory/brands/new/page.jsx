"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewBrands() {
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
    const baseUrl = "http://localhost:3000"

    try {
      const response = await fetch(`${baseUrl}/api/brands`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        console.log(response)
        setLoading(false)
        reset();  
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Brands" href="/dashboard/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInputs
            label="Brand Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />          
        </div>
        <SubmitButton isLoading={loading} title="Brand" />
      </form>
    </div>
  );
}
