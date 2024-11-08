import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Gift, Wine, Coffee, Heart, Cake } from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Birthday',
    icon: Cake,
    href: '/categories/birthday',
    color: 'text-pink-500',
  },
  {
    name: 'Anniversary',
    icon: Heart,
    href: '/categories/anniversary',
    color: 'text-pink-500',
  },
  {
    name: 'Engagement',
    icon: Gift,
    href: '/categories/engagement',
    color: 'text-pink-500',
  },
  {
    name: 'Wine & Spirits',
    icon: Wine,
    href: '/categories/wine-spirits',
    color: 'text-pink-500',
  },
  {
    name: 'Coffee & Tea',
    icon: Coffee,
    href: '/categories/coffee-tea',
    color: 'text-pink-500',
  },
];

export function Categories() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Gifts For Every Occasion
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <span className="font-medium text-center">{category.name}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}