import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, ShieldCheck, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const journeyImage = PlaceHolderImages.find(img => img.id === 'about-journey');

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0 opacity-10">
          {heroImage?.imageUrl && (
            <Image src={heroImage.imageUrl} alt="Background" fill className="object-cover" />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-headline font-bold text-white leading-tight">
            Kanchipuram's <br /><span className="text-primary italic">Cooling Legacy</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium">
            Providing expert refrigeration and micro-electronic solutions for over 15 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground">Our <span className="text-primary">Journey</span></h2>
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                Founded by expert technicians with a passion for cooling technology, Satish Refrigeration started as a small repair shop in the heart of Kanchipuram. 
              </p>
              <p>
                Today, we have evolved into a comprehensive service center and specialized PCB laboratory, serving thousands of homes and businesses across the district.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4 md:pt-8">
              <div>
                <p className="text-4xl md:text-5xl font-black text-primary mb-1 md:mb-2">15+</p>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-primary mb-1 md:mb-2">10k+</p>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-widest">Satisfied Clients</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-card bg-muted">
            {journeyImage?.imageUrl && (
              <Image 
                src={journeyImage.imageUrl} 
                fill 
                alt="Our Team" 
                className="object-cover" 
                data-ai-hint="service technician" 
              />
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-card border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-12 md:mb-20">Why Choose <span className="text-primary italic">Satish Refrigeration</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Users, title: "Customer Centric", desc: "We prioritize your comfort with same-day visits and transparent communication." },
              { icon: ShieldCheck, title: "Genuine Quality", desc: "Every part we replace comes with an official brand warranty and performance guarantee." },
              { icon: Trophy, title: "Expert Mastery", desc: "Our technicians are certified in the latest inverter technology and micro-soldering." }
            ].map((value, i) => (
              <div key={i} className="bg-background p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] space-y-4 md:space-y-6 border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <div className="h-14 w-14 md:h-16 md:w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <value.icon className="text-primary h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 container mx-auto px-4 text-center">
        <div className="bg-foreground rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-tight">Ready to Experience <br /><span className="text-primary italic">Professional Care</span>?</h2>
          <Button asChild size="lg" className="rounded-full px-12 md:px-16 h-14 md:h-16 text-lg md:text-xl font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform">
            <Link href="/enquiry">Book a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
