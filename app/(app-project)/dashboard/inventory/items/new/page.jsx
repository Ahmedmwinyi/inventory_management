import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

export default async function NewItem() {
  //Sequentially Fetching => Waterfall
  const categoriesData = getData("categories");
  const unitsData = getData("units");
  const brandsData = getData("brands");
  const warehousesData = getData("warehouse");
  const supplierData = getData("supplier");

  //Parallel Fetching
  const [categories, units, brands, warehouses, supplier] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    supplierData,
  ]);

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory/items" />
      {/* Form */}
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouse={warehouses}
        supplier={supplier}
      />
    </div>
  );
}
