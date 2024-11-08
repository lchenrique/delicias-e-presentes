"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="absolute inset-0 bg-grid-white/25 bg-grid-8 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Presentes Especiais
            <strong className="block font-extrabold text-white">
              Momentos Únicos
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Descubra nossa seleção exclusiva de presentes e delícias para todas as ocasiões especiais.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center sm:justify-start">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}