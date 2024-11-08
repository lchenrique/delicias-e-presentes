import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-pink-50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
              Find The{' '}
              <span className="text-pink-600">Perfect Gift</span>
              <br />
              For Every Occasion!
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our curated collection of unique gifts and delightful treats that make every moment special.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80"
            alt="Gift Box"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
    </section>
  );
}