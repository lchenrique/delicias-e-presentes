"use client";

import Link from "next/link";
import { Cake, Heart, Gift, Wine, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = [
  {
    name: "Aniversário",
    icon: Cake,
    href: "/categories/aniversario",
  },
  {
    name: "Casamento",
    icon: Heart,
    href: "/categories/casamento",
  },
  {
    name: "Noivado",
    icon: Gift,
    href: "/categories/noivado",
  },
  {
    name: "Vinhos & Bebidas",
    icon: Wine,
    href: "/categories/vinhos-bebidas",
  },
  {
    name: "Café & Chá",
    icon: Coffee,
    href: "/categories/cafe-cha",
  },
];

export function Categories() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold tracking-tight mb-8">
        Presentes Para Todas as Ocasiões
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <category.icon className="h-8 w-8 mb-2 text-pink-600" />
                <span className="font-medium text-center">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}