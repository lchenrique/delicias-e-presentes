import { Suspense } from "react";
import { ProductList } from "@/components/product-list";
import { ProductFilters } from "@/components/product-filters";
import { ProductsLoading } from "@/components/products-loading";
import { PageHeader } from "@/components/page-header";

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <PageHeader
        title="Produtos"
        description="Descubra nossa coleção única de presentes para todas as ocasiões"
      />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <ProductFilters />
        <div>
          <Suspense fallback={<ProductsLoading />}>
            <ProductList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}