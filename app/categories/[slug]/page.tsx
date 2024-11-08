import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { PageHeader } from "@/components/page-header";
import { getProductsByCategory } from "@/lib/products";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const products = await getProductsByCategory(params.slug);
  
  if (!products) {
    notFound();
  }

  const categoryName = {
    'presentes': 'Presentes',
    'vinhos': 'Vinhos',
    'cafe-da-manha': 'Café da Manhã',
    'romanticos': 'Românticos',
    'aniversario': 'Aniversário',
  }[params.slug];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <PageHeader 
        title={categoryName || 'Categoria'}
        description="Explore nossa seleção de produtos desta categoria"
      />
      <ProductGrid products={products} />
    </div>
  );
}