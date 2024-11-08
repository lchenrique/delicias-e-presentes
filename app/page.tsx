import { HeroSection } from '@/components/sections/hero-section';
import { Categories } from '@/components/sections/categories';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { Testimonials } from '@/components/testimonials';
import { ContactForm } from '@/components/contact-form';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <ContactForm />
    </div>
  );
}