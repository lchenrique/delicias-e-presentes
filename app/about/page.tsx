import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <PageHeader
        title="Sobre Nós"
        description="Conheça nossa história e missão"
      />
      <div className="grid gap-12 mt-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Delícias & Presentes: Momentos Especiais, Lembranças Únicas
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Fundada em 2024, a Delícias & Presentes nasceu da paixão por criar
              momentos memoráveis através de presentes cuidadosamente selecionados
              e delícias artesanais.
            </p>
            <p>
              Nossa missão é proporcionar experiências únicas, conectando pessoas
              através de presentes especiais que transmitem carinho e atenção aos
              detalhes.
            </p>
            <p>
              Trabalhamos com artesãos e produtores locais para oferecer produtos
              exclusivos, desde cestas personalizadas até presentes temáticos para
              todas as ocasiões.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-pink-50 dark:bg-pink-950 p-6 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                1000+
              </div>
              <div className="text-sm text-muted-foreground">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950 p-6 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Produtos Únicos
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1557318041-1ce374d55ebf?w=800&q=80"
            alt="Nossa loja"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}