"use client";

import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateItemForm({
  categories,
  units,
  brands,
  warehouse,
  supplier,
}) {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  // async function onSubmit(data) {
  //   data.imageUrl = imageUrl;
  //   console.log(data);
  //   makePostRequest(setLoading, "api/items", data, "Item", reset);
  // }

  async function onSubmit(data) {
    setLoading(true);
    console.log(data);
     makePostRequest(
      setLoading,
      "api/items",
      data,
      "Items",
      reset
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInputs
            label="Item Title"
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

          <SelectInput
            name="supplierId"
            label="Select the Supplier Name"
            register={register}
            className="w-full"
            options={supplier}
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
            options={warehouse}
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
