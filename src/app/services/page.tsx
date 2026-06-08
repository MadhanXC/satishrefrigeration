import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Snowflake, 
  ShieldCheck, 
  WashingMachine, 
  Droplets, 
  CheckCircle2 
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const detailedServices = [
  {
    id: "air-conditioning",
    imgId: "ac-service",
    title: "Air Conditioning",
    desc: "Complete cooling solutions for home and office.",
    longDesc: "From high-precision installation to emergency gas filling and deep chemical cleaning, we handle all aspects of AC maintenance. Our technicians are specialized in Inverter AC technologies from brands like Samsung, LG, and Daikin.",
    icon: Snowflake,
    features: ["Installation & Uninstallation", "Gas Filling (R32, R410A, R22)", "Deep Jet Cleaning", "AMC Maintenance", "Copper Piping Works"]
  },
  {
    id: "refrigeration",
    imgId: "refrigeration",
    title: "Refrigeration",
    desc: "Keeping your perishables fresh with expert repair.",
    longDesc: "Whether it's a single door, double door, or commercial deep freezer, we fix cooling coils, compressors, and thermostat issues using genuine spare parts.",
    icon: ShieldCheck,
    features: ["Compressor Replacement", "Gas Charging", "Defrost Timer Issues", "Door Gasket Replacement", "PCB Control Repair"]
  },
  {
    id: "washing-machines",
    imgId: "washing-machine",
    title: "Washing Machines",
    desc: "Precision repair for laundry systems.",
    longDesc: "Specialized service for Front Load, Top Load, and Semi-Automatic machines. We address drum issues, motor failures, and water inlet problems promptly.",
    icon: WashingMachine,
    features: ["Drum Bearing Repair", "Drain Pump Cleaning", "Motor Carbon Brush Change", "Digital Display Fixes", "Inlet Valve Service"]
  },
  {
    id: "ro-systems",
    imgId: "ro-system",
    title: "RO Water Systems",
    desc: "Pure drinking water for a healthy life.",
    longDesc: "Comprehensive RO servicing including filter changes, membrane cleaning, and TDS level adjustment for all major water purifier brands.",
    icon: Droplets,
    features: ["Sediment/Carbon Filter Change", "Membrane Replacement", "TDS Calibration", "Pump Repair", "UV/UF Lamp Inspection"]
  }
];

export default function ServicesPage() {
  const headerImg = PlaceHolderImages.find(img => img.id === 'services-header');

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-20">
          {headerImg?.imageUrl && (
            <Image src={headerImg.imageUrl} alt="Services Header" fill className="object-cover" priority />
          )}
        </div>
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-bold">
            <span className="text-white">Expert</span> <span className="text-primary italic">Cooling Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Professional maintenance and repair solutions for all your home appliances in Kanchipuram.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-20 md:space-y-32">
          {detailedServices.map((service, index) => {
            const serviceImg = PlaceHolderImages.find(img => img.id === service.imgId);
            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="text-primary h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">{service.title}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{service.longDesc}</p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 bg-card p-3 md:p-4 rounded-xl shadow-sm border border-border/50">
                        <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                        <span className="font-bold text-foreground text-xs md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center lg:text-left">
                    <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-12 h-14 text-lg font-bold shadow-lg shadow-primary/20">
                      <Link href="/enquiry">Book Service Now</Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-card bg-muted">
                    {serviceImg?.imageUrl && (
                      <Image src={serviceImg.imageUrl} alt={service.title} fill className="object-cover" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="bg-card rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-center space-y-6 md:space-y-8 border shadow-xl">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground italic">Need a Custom Maintenance Plan?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium">
            Contact us for Annual Maintenance Contracts (AMC) for your home or business.
          </p>
          <Button asChild size="lg" variant="outline" className="h-14 px-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold">
            <Link href="/contact">Speak with an Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
