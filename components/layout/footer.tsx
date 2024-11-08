import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-semibold mb-4 block">
              Delicias e Presentes
            </Link>
            <p className="text-sm text-muted-foreground">
              Encontre o presente perfeito para cada ocasião. Fazemos da arte de presentear algo memorável e significativo.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/envio" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                  Envio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-pink-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pink-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Delicias e Presentes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}