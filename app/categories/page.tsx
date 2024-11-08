import { Categories } from "@/components/categories";
import { PageHeader } from "@/components/page-header";

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <PageHeader
        title="Categorias"
        description="Explore nossa seleção de presentes por categoria"
      />
      <Categories />
    </div>
  );
}