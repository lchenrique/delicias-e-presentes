import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartSheet } from "@/components/cart-sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold">
            Delicias e Presentes
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/produtos" className="text-sm hover:text-pink-600 transition-colors">
              Produtos
            </Link>
            <Link href="/categorias" className="text-sm hover:text-pink-600 transition-colors">
              Categorias
            </Link>
            <Link href="/sobre" className="text-sm hover:text-pink-600 transition-colors">
              Sobre
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <CartSheet />
          <ThemeToggle />
          <Button className="hidden md:flex bg-pink-600 hover:bg-pink-700">
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
}