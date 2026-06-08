
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Zap, Snowflake, ShoppingCart, Settings } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const products = {
  applianceSpares: [
    { name: "Inverter Compressor", desc: "Energy efficient smart inverter compressor for fridges." },
    { name: "Washing Machine Motor", desc: "High torque motor for front and top load machines." },
    { name: "Drain Pump Assembly", desc: "Heavy duty drain pump for automatic washing machines." },
    { name: "Thermostat Control", desc: "Precision temperature controller for domestic fridges." }
  ],
  ups: [
    { name: "1100VA Pure Sine Wave", desc: "Perfect for home backups and sensitive electronics." },
    { name: "200Ah Tall Tubular Battery", desc: "Long-lasting heavy duty power storage." }
  ],
  acSpares: [
    { name: "Inverter AC PCB Board", desc: "Expertly restored logic board with 3-month warranty." },
    { name: "R32 Refrigerant Cylinder", desc: "Environment friendly cooling gas for modern ACs." },
    { name: "RO Filter Combo Set", desc: "Sediment + Pre-Carbon + Membrane set." },
    { name: "AC Copper Pipe (10ft)", desc: "High-grade copper piping for AC installation." }
  ]
};

export default function SalesPage() {
  const upsImage = PlaceHolderImages.find(img => img.id === 'ups-system');
  const headerImg = PlaceHolderImages.find(img => img.id === 'sales-header');

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="relative py-32 overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-20">
          {headerImg?.imageUrl && (
            <Image src={headerImg.imageUrl} alt="Sales Header" fill className="object-cover" priority />
          )}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 text-white">Original <span className="text-primary italic">Spares & Systems</span></h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">We provide 100% original brand components and premium power solutions with professional support.</p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-24 container mx-auto px-4">
        <Tabs defaultValue="applianceSpares" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-card h-16 p-2 rounded-full border shadow-sm">
              <TabsTrigger value="applianceSpares" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Appliance Spares</TabsTrigger>
              <TabsTrigger value="acSpares" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">AC & RO Spares</TabsTrigger>
              <TabsTrigger value="ups" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">UPS & Batteries</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="applianceSpares" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.applianceSpares.map((p, i) => (
              <ProductCard key={i} {...p} icon={Settings} />
            ))}
          </TabsContent>
          
          <TabsContent value="acSpares" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.acSpares.map((p, i) => (
              <ProductCard key={i} {...p} icon={Package} />
            ))}
          </TabsContent>

          <TabsContent value="ups" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.ups.map((p, i) => (
              <ProductCard key={i} {...p} icon={Zap} />
            ))}
          </TabsContent>
        </Tabs>
      </section>

      {/* Note about Sales Focus */}
      <section className="py-12 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-card p-10 rounded-[3rem] border border-dashed border-primary/30">
          <p className="text-muted-foreground font-medium italic">
            *Please note: Satish Refrigeration specializes in expert repair services and the supply of 100% genuine spare parts. We do not sell complete appliance units to focus on providing the highest quality restoration and component support.
          </p>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-24 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-muted">
               {upsImage?.imageUrl ? (
                 <Image src={upsImage.imageUrl} alt="UPS System" fill className="object-cover" />
               ) : null}
             </div>
             <div className="lg:w-1/2 space-y-8">
               <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase">Expert Combo</div>
               <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Premium UPS + <span className="text-primary italic">Expert Installation</span></h2>
               <p className="text-xl text-muted-foreground font-medium">Get a special discount on professional stabilizer and UPS integration for your home. Protect your appliances from voltage fluctuations today.</p>
               <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-lg shadow-primary/20">
                 <Link href="/enquiry">Request Quote</Link>
               </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ name, desc, icon: Icon }: any) {
  return (
    <Card className="border-none shadow-xl rounded-[2.5rem] bg-card overflow-hidden hover:shadow-2xl transition-all group">
      <CardHeader className="p-8 pb-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-xl font-headline font-bold text-foreground leading-tight">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0 space-y-6">
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">{desc}</p>
        <Button asChild className="w-full rounded-2xl h-12 font-bold shadow-sm">
          <Link href="/enquiry" className="gap-2">
            <ShoppingCart size={18} /> Enquire Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
