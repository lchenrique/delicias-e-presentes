import Image from "next/image";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { AddToCart } from "@/components/add-to-cart";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: product } = await supabase
    .from("products")
    .select(`*, categories(name)`)
    .eq("slug", params.slug)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, i) => (
                <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${product.name} ${i + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="space-y-4">
            <AddToCart product={product} />
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}