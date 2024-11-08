import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Luxury Gift Hamper',
    price: 149.99,
    description: 'A curated selection of premium treats and gifts',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
  },
  {
    id: '2',
    name: 'Premium Wine Set',
    price: 199.99,
    description: 'Collection of fine wines from around the world',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
  },
  {
    id: '3',
    name: 'Artisan Chocolate Box',
    price: 79.99,
    description: 'Handcrafted chocolates in a luxury gift box',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}