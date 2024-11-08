import { supabase } from "@/lib/supabase/client";
import { ProductGrid } from "@/components/product-grid";
import { ProductsEmpty } from "@/components/products-empty";

interface ProductListProps {
  searchParams?: {
    category?: string;
    sort?: string;
    price_range?: string;
  };
}

export async function ProductList({ searchParams }: ProductListProps) {
  let query = supabase.from("products").select("*");

  // Apply filters
  if (searchParams?.category) {
    query = query.eq("category_id", searchParams.category);
  }

  if (searchParams?.price_range) {
    const [min, max] = searchParams.price_range.split("-");
    if (min) query = query.gte("price", min);
    if (max) query = query.lte("price", max);
  }

  // Apply sorting
  if (searchParams?.sort) {
    const [column, order] = searchParams.sort.split("-");
    query = query.order(column, { ascending: order === "asc" });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  const { data: products, error } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    return <div>Error loading products</div>;
  }

  if (!products?.length) {
    return <ProductsEmpty />;
  }

  return <ProductGrid products={products} />;
}