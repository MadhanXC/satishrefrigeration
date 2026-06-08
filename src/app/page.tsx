import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Snowflake, 
  WashingMachine, 
  Zap, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  Settings,
  Package,
  ShieldCheck,
  CircleCheck
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: "Air Conditioning",
    desc: "Expert installation, gas filling, and annual maintenance for all brands.",
    icon: Snowflake,
    id: "ac-service"
  },
  {
    title: "Refrigeration",
    desc: "Fast diagnostics and parts replacement for domestic and commercial fridges.",
    icon: ShieldCheck,
    id: "refrigeration"
  },
  {
    title: "Washing Machines",
    desc: "Professional repair for front-load, top-load, and semi-automatic units.",
    icon: WashingMachine,
    id: "washing-machine"
  },
  {
    title: "RO Systems",
    desc: "Pure water solutions with filter changes and TDS monitoring.",
    icon: Droplets,
    id: "ro-system"
  }
];

const brands = ["Samsung", "LG", "Whirlpool", "Hitachi", "Daikin", "Voltas", "Blue Star", "Godrej"];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const pcbImage = PlaceHolderImages.find(img => img.id === 'pcb-repair');
  const upsImage = PlaceHolderImages.find(img => img.id === 'ups-system');

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage?.imageUrl && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description || "Cooling"}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-8 md:space-y-10 animate-fade-in-up">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-headline font-bold leading-[1.1] tracking-tighter text-foreground">
                Expert Cooling by <br />
                <span className="text-primary italic">Satish Refrigeration</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                Premier destination for high-precision AC service, genuine brand components, and expert engineering for all your cooling systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg md:text-xl px-8 md:px-12 h-14 md:h-16 font-bold rounded-full shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                <Link href="/enquiry">Book a Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/20 text-foreground backdrop-blur-xl hover:bg-white hover:text-foreground text-lg md:text-xl px-8 md:px-12 h-14 md:h-16 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl border-2">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className="bg-card py-8 md:py-12 border-b relative z-10 shadow-sm overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] md:text-xs font-headline uppercase tracking-[0.4em] text-muted-foreground mb-6 md:mb-8 font-bold">Professional Support for Major Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {brands.map(brand => (
              <span key={brand} className="text-lg md:text-2xl font-headline font-bold text-foreground tracking-tight whitespace-nowrap">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Air Conditioner PCB Service Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-background bg-muted order-2 lg:order-1">
              {pcbImage?.imageUrl && (
                <Image
                  src={pcbImage.imageUrl}
                  alt="Air Conditioner PCB Service"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight text-foreground">Air Conditioner <span className="text-primary italic">PCB Service</span></h2>
                <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  Kanchipuram's leading specialist in AC PCB repairs, genuine brand spares, and expert restoration services.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Inverter PCB Replacement",
                  "Sensor Calibrations",
                  "Display Board Repairs",
                  "EEPROM Programming",
                  "Outdoor Unit Repair",
                  "Stabilizer Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-background p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CircleCheck className="text-primary h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center lg:text-left">
                <Button asChild size="lg" className="h-14 md:h-16 px-10 md:px-12 rounded-full text-lg md:text-xl font-bold shadow-2xl shadow-primary/20 bg-primary text-primary-foreground hover:scale-105 transition-transform">
                  <Link href="/pcb-repair">PCB Repair Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-7xl font-headline font-bold text-foreground">Service <span className="text-primary italic">Catalog</span></h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">Professional installation and lifetime maintenance for your home.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {services.map((service, i) => {
              const serviceImg = PlaceHolderImages.find(img => img.id === service.id);
              return (
                <Card key={i} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-700 rounded-[2.5rem] md:rounded-[3rem] bg-card">
                  <div className="relative h-56 md:h-64 overflow-hidden bg-muted">
                    {serviceImg?.imageUrl && (
                      <Image
                        src={serviceImg.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl group-hover:bg-primary transition-colors">
                      <service.icon className="text-primary h-6 w-6 md:h-8 md:w-8 group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <CardContent className="p-8 md:p-10 space-y-4 md:space-y-6">
                    <h3 className="font-headline font-bold text-2xl md:text-3xl text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.desc}</p>
                    <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center gap-3 text-primary font-bold text-base md:text-lg hover:gap-5 transition-all pt-2">
                      Service Details <ArrowRight size={20} />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spares and UPS Section */}
      <section className="py-20 md:py-32 bg-card border-y shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
              <h2 className="text-4xl md:text-7xl font-headline font-bold text-foreground">Original Spares & <br className="hidden md:block" /><span className="text-primary italic">UPS Systems</span></h2>
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
                We supply 100% genuine parts and heavy-duty power backups for seamless cooling during every summer.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:gap-4 bg-background px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[2rem] shadow-md border border-border/50">
                  <Package className="text-primary h-6 w-6 md:h-8 md:w-8" />
                  <span className="font-bold text-lg md:text-xl text-foreground">Genuine Spares</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-background px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[2rem] shadow-md border border-border/50">
                  <Settings className="text-primary h-6 w-6 md:h-8 md:w-8" />
                  <span className="font-bold text-lg md:text-xl text-foreground">1-Year Warranty</span>
                </div>
              </div>
              <Button asChild variant="outline" size="lg" className="h-14 md:h-16 px-10 md:px-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg md:text-xl shadow-lg hover:shadow-primary/30 transition-all">
                <Link href="/sales">Browse Spares</Link>
              </Button>
            </div>
            <div className="flex-1 w-full max-w-2xl">
               <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[10px] md:border-[20px] border-background rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[4/3] bg-muted">
                 {upsImage?.imageUrl && (
                   <Image
                     src={upsImage.imageUrl}
                     alt="UPS Systems"
                     fill
                     className="object-cover"
                   />
                 )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 container mx-auto px-4">
        <div className="bg-foreground rounded-[3rem] md:rounded-[5rem] p-10 md:p-32 text-center space-y-12 md:space-y-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[120px]" />
          
          <div className="space-y-4 md:space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-headline font-bold text-white leading-tight">Experience <br /><span className="text-primary italic">Professional</span> Comfort</h2>
            <p className="text-lg md:text-3xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Join 10k+ happy homes in Kanchipuram. Professional cooling care is just a click away.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center relative z-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground text-lg md:text-2xl px-10 md:px-16 h-14 md:h-20 font-bold rounded-full shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
              <Link href="/enquiry">Request a Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/20 text-white backdrop-blur-xl hover:bg-white hover:text-foreground text-lg md:text-2xl px-10 md:px-16 h-14 md:h-20 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl border-2">
              <Link href="/contact">View Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
