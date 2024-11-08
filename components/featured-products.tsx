"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Cesta Café da Manhã Especial",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400",
  },
  {
    id: "2",
    name: "Kit Vinhos Premium",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400",
  },
  {
    id: "3",
    name: "Caixa de Chocolates Artesanais",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=400",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.id} className="group">
              <Link href={`/products/${product.id}`}>
                <CardHeader className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                  <p className="text-2xl font-bold mt-2">
                    R$ {product.price.toFixed(2)}
                  </p>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}