import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground">Get in <span className="text-primary italic">Touch</span></h1>
          <p className="text-xl text-muted-foreground font-medium">Need professional cooling support or a spares query? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <ContactCard 
              icon={Phone} 
              title="Talk to an Expert" 
              value="+91 98849 61178" 
              href="tel:+919884961178" 
              subtitle="Alt: +91 99405 14062"
            />
            <ContactCard 
              icon={Mail} 
              title="Email Us" 
              value="support@satishrefrigeration.com" 
              href="mailto:support@satishrefrigeration.com" 
              subtitle="Response within 24 hours"
            />
            <ContactCard 
              icon={Clock} 
              title="Working Hours" 
              value="Mon - Sat: 9:00 AM - 8:00 PM" 
              subtitle="Sunday: Priority Support Only"
            />
          </div>

          {/* Location Info */}
          <div className="lg:col-span-2">
            <Card className="rounded-[3rem] border-none shadow-xl bg-card overflow-hidden h-full">
              <div className="p-10 md:p-16 h-full flex flex-col justify-between space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-primary h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-headline font-bold text-foreground">Main Service Center</h3>
                      <p className="text-xl text-muted-foreground font-medium">No. 29B, North Street, Shelkpet, Kanchipuram - 631501</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Visit our primary service center in Shelkpet for expert restoration. Our facility is equipped with a specialized PCB restoration lab and a comprehensive inventory of genuine spare parts for all major brands.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-2xl border border-border/50">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Area</p>
                        <p className="font-bold text-foreground">Shelkpet, Kanchipuram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full rounded-2xl h-16 text-xl font-bold shadow-lg shadow-primary/20">
                  <Link href="/enquiry" className="gap-3">
                    <MessageSquare size={24} /> Send Message for Inquiry
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, subtitle, href }: any) {
  const content = (
    <div className="flex items-start gap-6">
      <div className="h-14 w-14 bg-card rounded-2xl flex items-center justify-center shadow-md border border-border/50">
        <Icon className="text-primary h-7 w-7" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-xl font-headline font-bold text-foreground mb-1">{value}</p>
        <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <Card className="rounded-[2.5rem] border-none shadow-md bg-white/50 backdrop-blur-sm p-8 hover:shadow-lg transition-all">
      {href ? <a href={href}>{content}</a> : content}
    </Card>
  );
}
