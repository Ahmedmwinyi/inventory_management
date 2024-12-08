"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { UploadButton } from "@/lib/uploadthing";
import { UploadDropzone } from "@uploadthing/react";
import { Pencil, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Value } from "sass";

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      label: "Electronic",
      Value: "maaaaaaaaawwwwwwwwin",
    },
    {
      label: "Clothes",
      Value: "mmmmmdisotrtidxi",
    },
  ];
  const units = [
    {
      label: "Kg",
      Value: "maaaaaaaaawwwwwwwwin",
    },
    {
      label: "Pcs",
      Value: "mmmmmdisotrtidxi",
    },
  ];
  const brands = [
    {
      label: "Hp",
      Value: "maaaaaaaaawwwwwwwwin",
    },
    {
      label: "Dell",
      Value: "mmmmmdisotrtidxi",
    },
  ];
  const warehouses = [
    {
      label: "Warehouse A",
      Value: "maaaaaaaaawwwwwwwwin",
    },
    {
      label: "Warehouse B",
      Value: "mmmmmdisotrtidxi",
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
    data.imageUrl = imageUrl;
    setLoading(true);
    console.log(data);
    const baseUrl = "http://localhost:3000";

    try {
      const response = await fetch(`${baseUrl}/api/items`, {
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
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInputs
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register}
            className="w-full"
            options={categories}
          />

          <TextInputs
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            isRequired={false}
            className="w-full"
          />

          <TextInputs
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Buying Price"
            name="buyingPrice"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Selling Price"
            name="sellingPrice"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Supplier Name"
            name="supplerId"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Re-Order Point"
            name="reOrderPoint"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="unitId"
            label="Select the Item Unit"
            register={register}
            className="w-full"
            options={units}
          />

          <SelectInput
            name="brandId"
            label="Select the Item Brand"
            register={register}
            className="w-full"
            options={brands}
          />

          <SelectInput
            label="Select the Item Warehouse"
            name="warehouseId"
            register={register}
            errors={errors}
            className="w-full"
            options={warehouses}
          />

          <TextInputs
            label="Item Weight in Kgs"
            name="weight"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Item Dimensions in cm (20 x 30 x 100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInputs
            label="Item Tax Rate in %"
            name="taxRate"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Item Notes..."
            name="notes"
            register={register}
            errors={errors}
          />

          <ImageInput
            label="Item Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
