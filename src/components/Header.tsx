"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'PCB Service', href: '/pcb-repair' },
  { name: 'Sales & Spares', href: '/sales' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Logo className="w-8 h-8 md:w-12 md:h-12" />
          <span className="font-headline font-bold text-lg sm:text-xl md:text-2xl tracking-tighter whitespace-nowrap">
            Satish <span className="text-primary">Refrigeration</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold text-xs lg:text-sm text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold px-5 lg:px-6 ml-2 lg:ml-4 shadow-lg shadow-primary/20 h-10 lg:h-11">
            <Link href="/enquiry" className="gap-2 text-xs lg:text-sm">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
              Book Service
            </Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isMounted && isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMounted && (
        <div className={cn(
          "md:hidden absolute top-16 left-0 w-full bg-background border-b transition-all duration-300 ease-in-out z-50 overflow-hidden shadow-2xl",
          isOpen ? "max-h-screen py-8 opacity-100" : "max-h-0 py-0 opacity-0"
        )}>
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-bold text-lg text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-[80%] rounded-full font-bold shadow-lg shadow-primary/20 h-12 text-lg">
              <Link href="/enquiry" onClick={() => setIsOpen(false)}>
                Book Service
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
