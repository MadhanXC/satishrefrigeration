"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Phone, MapPin, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address"),
  category: z.string().min(1, "Please select a category"),
  product: z.string().min(1, "Please select a product"),
  message: z.string().optional().or(z.literal('')),
  website: z.string().optional(), // Honeypot field
});

export default function EnquiryPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      category: "",
      product: "",
      message: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Honeypot spam protection
    if (values.website) {
      console.warn("Bot submission detected");
      return;
    }

    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Firestore is not initialized. Please check your credentials.",
      });
      return;
    }

    setIsSubmitting(true);
    const enquiriesRef = collection(firestore, 'enquiries');
    
    // Remove the honeypot field and any other unnecessary data
    const { website, ...dataToSubmit } = values;
    
    const enquiryData = {
      ...dataToSubmit,
      createdAt: serverTimestamp(),
    };

    addDoc(enquiriesRef, enquiryData)
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        toast({
          title: "Enquiry Sent",
          description: "We've received your request and will call you shortly.",
        });
      })
      .catch(async (error) => {
        setIsSubmitting(false);
        const permissionError = new FirestorePermissionError({
          path: enquiriesRef.path,
          operation: 'create',
          requestResourceData: enquiryData,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in-up">
        <div className="bg-primary/20 p-8 rounded-full shadow-lg shadow-primary/10">
          <CheckCircle2 className="text-primary h-20 w-20" />
        </div>
        <h1 className="text-5xl font-headline font-bold text-foreground">Thank You, <span className="text-primary">{form.getValues('name')}</span>!</h1>
        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
          Your enquiry for <strong>{form.getValues('category')}</strong> has been registered. Our technician will contact you shortly.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full px-12 h-14 text-lg font-bold" onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}>Send Another Enquiry</Button>
          <Button variant="outline" size="lg" className="rounded-full px-12 h-14 text-lg font-bold" asChild>
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container mx-auto px-4">
        {!firestore && (
          <div className="max-w-4xl mx-auto mb-10">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Firebase Not Connected</AlertTitle>
              <AlertDescription>
                Establishing connection to the database. If this persists, please verify your credentials.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-card">
              <CardHeader className="bg-foreground text-white p-10 space-y-4 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <CardTitle className="text-4xl font-headline font-bold">Service & Product <span className="text-primary">Enquiry</span></CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Fill out the form below and our cooling experts will get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-background/50 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 00000 00000" className="h-12 bg-background/50 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="h-12 bg-background/50 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">What do you need?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-background/50 rounded-xl">
                                  <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="repair">Repair Service</SelectItem>
                                <SelectItem value="sales">New Product Purchase</SelectItem>
                                <SelectItem value="spares">Spare Parts</SelectItem>
                                <SelectItem value="pcb">PCB Service Specialist</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="product"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-bold">Appliance Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-background/50 rounded-xl">
                                  <SelectValue placeholder="Select Appliance" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ac">Air Conditioner (AC)</SelectItem>
                                <SelectItem value="fridge">Refrigerator</SelectItem>
                                <SelectItem value="washing">Washing Machine</SelectItem>
                                <SelectItem value="ro">RO System</SelectItem>
                                <SelectItem value="ups">UPS / Inverter</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-bold">Detailed Requirements (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the issue or parts you are looking for..." 
                              className="min-h-[150px] bg-background/50 rounded-2xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>Mention brand name and model if known.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting || !firestore}
                      className="w-full bg-primary text-primary-foreground text-xl h-16 font-bold rounded-2xl shadow-lg shadow-primary/20"
                    >
                      {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-10 rounded-[3rem] shadow-xl border border-border/50 space-y-8">
              <h3 className="text-3xl font-headline font-bold text-foreground">Why <span className="text-primary italic">Satish Refrigeration</span>?</h3>
              <ul className="space-y-6">
                {[
                  "Same Day Visit Guaranteed",
                  "Certified PCB Technicians",
                  "Genuine Brand Spares Only",
                  "Upfront Transparent Pricing",
                  "Service Warranty Provided"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle2 className="text-primary h-5 w-5" />
                    </div>
                    <span className="font-bold text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-foreground p-10 rounded-[3rem] text-white space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-50" />
              <h3 className="text-3xl font-headline font-bold relative z-10 text-white">Direct Contact</h3>
              <div className="space-y-6 relative z-10">
                <a href="tel:+919884961178" className="flex items-center gap-5 hover:text-primary transition-colors group text-white">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-all">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">Talk to an Expert</p>
                    <p className="text-xl font-black text-white">+91 98849 61178</p>
                  </div>
                </a>
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">Main Service Center</p>
                    <p className="text-lg font-bold leading-tight text-white">No. 29B, North Street,<br />Shelkpet, Kanchipuram - 631501</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}