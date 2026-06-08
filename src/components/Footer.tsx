import Link from 'next/link';
import { Snowflake, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t mt-20">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-10 w-10" />
            <span className="font-headline font-bold text-xl">Satish Refrigeration</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Professional refrigeration and cooling solutions in Kanchipuram. We provide expert repairs for AC, Fridge, Washing Machines, and specialized PCB services.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20}/>
            </Link>
            <a 
              href="https://www.facebook.com/people/Sathish-Refrigeration/100071274000129/#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors" 
              aria-label="Facebook"
            >
              <Facebook size={20}/>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-headline font-bold mb-6 text-foreground">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services#air-conditioning" className="hover:text-primary">AC Sales & Service</Link></li>
            <li><Link href="/services#refrigeration" className="hover:text-primary">Refrigeration Repair</Link></li>
            <li><Link href="/pcb-repair" className="hover:text-primary">PCB Service</Link></li>
            <li><Link href="/services#washing-machines" className="hover:text-primary">Washing Machines</Link></li>
            <li><Link href="/services#ro-systems" className="hover:text-primary">RO Water Systems</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline font-bold mb-6 text-foreground">Reach Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-primary h-5 w-5 shrink-0" />
              <span>No. 29B, North Street,<br />Shelkpet, Kanchipuram - 631501</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-primary h-5 w-5 shrink-0" />
              <div className="flex flex-col">
                <span>+91 98849 61178</span>
                <span>+91 99405 14062</span>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="text-primary h-5 w-5 shrink-0" />
              <span>support@satishrefrigeration.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline font-bold mb-6 text-foreground">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="/enquiry" className="hover:text-primary">Request Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-8 text-center text-xs text-muted-foreground">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Satish Refrigeration. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
