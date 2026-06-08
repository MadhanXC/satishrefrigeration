import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cpu, Zap, Microscope, ShieldCheck, PenTool as Tool, CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PCBRepairPage() {
  const pcbImage = PlaceHolderImages.find(img => img.id === 'pcb-repair');
  const headerImg = PlaceHolderImages.find(img => img.id === 'pcb-header');

  return (
    <div className="w-full bg-background">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-20">
          {headerImg?.imageUrl && (
            <Image src={headerImg.imageUrl} alt="PCB Service Header" fill className="object-cover" priority />
          )}
        </div>
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-bold max-w-4xl mx-auto leading-tight text-white">
            Micro-Electronic <span className="text-primary italic">PCB Restoration</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Expert Inverter AC PCB repair and diagnostics. We fix what others can't, saving you thousands on replacement costs.
          </p>
        </div>
      </section>

      {/* Lab Features */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Microscope, title: "Advanced Diagnostics", desc: "We use high-precision multimeters and oscilloscopes to identify microscopic failures in inverter boards." },
              { icon: Tool, title: "SMD Component Care", desc: "Certified soldering for Surface Mount Devices (SMD), ensuring factory-level connectivity and reliability." },
              { icon: Zap, title: "Inverter Specialists", desc: "Deep expertise in Inverter AC logic boards, communication errors (E1, E6), and power delivery issues." }
            ].map((feature, i) => (
              <div key={i} className="space-y-4 p-6 md:p-8 bg-background rounded-[2rem] border border-border/50 hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 p-4 w-fit rounded-2xl">
                  <feature.icon className="text-primary h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed PCB Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
             <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50" />
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-card aspect-[4/3] bg-muted">
                  {pcbImage?.imageUrl && (
                    <Image
                      src={pcbImage.imageUrl}
                      alt="Advanced PCB Repair"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
             </div>
             <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
               <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-foreground text-center lg:text-left">Supported PCB <span className="text-primary italic">Logic Issues</span></h2>
               <div className="space-y-4 md:space-y-6">
                 {[
                   { title: "Communication Errors", desc: "Fixing signal loss between indoor and outdoor units common in Samsung/LG inverter ACs." },
                   { title: "Power Supply Failures", desc: "Repairing blown capacitors, MOSFETs, and power ICs caused by voltage fluctuations." },
                   { title: "Display & Sensor Faults", desc: "Solving frozen displays, erratic sensor readings, and unresponsive remote receivers." },
                   { title: "Fan Motor Control", desc: "Troubleshooting DC fan motor drive circuits on the main control board." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-5 md:p-6 bg-card rounded-2xl shadow-sm border border-border/50">
                     <CheckCircle className="text-primary h-5 w-5 md:h-6 md:w-6 shrink-0" />
                     <div>
                       <h4 className="font-bold text-base md:text-lg text-foreground">{item.title}</h4>
                       <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
               <div className="text-center lg:text-left">
                 <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-12 h-14 text-lg font-bold shadow-lg shadow-primary/20">
                   <Link href="/enquiry">Request PCB Inspection</Link>
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Brands and Pricing Info */}
      <section className="py-16 md:py-24 bg-card text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-10 md:mb-16 text-foreground px-4">Expertise Across All Modern <span className="text-primary">Brands</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {["Samsung Inverter", "LG Dual Inverter", "Hitachi", "Daikin", "Voltas", "Blue Star", "Carrier", "Whirlpool"].map((brand, i) => (
              <div key={i} className="bg-background p-4 md:p-8 rounded-xl md:rounded-2xl border border-border/50 shadow-sm flex items-center justify-center font-bold text-sm md:text-base text-foreground hover:border-primary hover:text-primary hover:shadow-md transition-all cursor-default">
                {brand}
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-20 p-8 md:p-10 bg-foreground text-white rounded-[2rem] md:rounded-[3rem] inline-block max-w-4xl relative overflow-hidden shadow-2xl mx-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <p className="text-lg md:text-2xl italic relative z-10 font-medium leading-relaxed">
              "A new Inverter PCB can cost up to <span className="text-primary">₹15,000</span>. Our expert repair services typically range from <span className="text-primary">₹1,500 to ₹3,500</span> with a 3-month peace-of-mind warranty."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
